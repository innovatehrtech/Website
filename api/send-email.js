import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Helper to ensure .env.local / .env variables are loaded in development or serverless environments
function loadLocalEnv() {
    const envFiles = ['.env.local', '.env'];
    for (const file of envFiles) {
        try {
            const filePath = path.resolve(process.cwd(), file);
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');
                content.split(/\r?\n/).forEach(line => {
                    const trimmed = line.trim();
                    if (!trimmed || trimmed.startsWith('#')) return;
                    const eqIndex = trimmed.indexOf('=');
                    if (eqIndex !== -1) {
                        const key = trimmed.slice(0, eqIndex).trim();
                        let val = trimmed.slice(eqIndex + 1).trim();
                        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                            val = val.slice(1, -1);
                        }
                        if (!process.env[key]) {
                            process.env[key] = val;
                        }
                    }
                });
            }
        } catch {
            // Ignore if file cannot be read
        }
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Only POST allowed' });
    }

    loadLocalEnv();

    const user = (process.env.MY_GMAIL || '').trim();
    const pass = (process.env.GMAIL_PASS || '').trim();

    if (!user || !pass) {
        console.error('ENV VARIABLES MISSING! MY_GMAIL is set:', !!user, 'GMAIL_PASS is set:', !!pass);
        return res.status(500).json({
            success: false,
            message: 'Server configuration error: Email credentials missing. Please set MY_GMAIL and GMAIL_PASS environment variables in Vercel.'
        });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { formType, ...data } = body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user,
            pass,
        },
    });

    let adminSubject = '';
    let adminText = '';
    let clientSubject = '';
    let clientText = '';
    const clientEmail = data.email;
    const clientName = data.name || data.contactPerson || 'Client';

    if (formType === 'quote') {
        adminSubject = `[Quote Request] ${data.companyName || 'New Company'} - ${data.service}`;
        adminText = `
New Quote Request Received:
----------------------------------
Company Name: ${data.companyName}
Contact Person: ${data.contactPerson}
Phone: ${data.phone}
Email: ${data.email}
Selected Service: ${data.service}
Active Headcount: ${data.headcount}
Estimated Monthly Retainer: ₹${data.monthlyEstimate?.toLocaleString('en-IN')}
Requirements: ${data.requirements || 'N/A'}
    `;

        clientSubject = `We have received your Quote Request - InnovateHR Tech`;
        clientText = `
Hi ${clientName},

Thank you for requesting an estimate from InnovateHR Tech!

Here is a summary of your inquiry:
- Service: ${data.service}
- Estimated Headcount: ${data.headcount}
- Estimated Retainer: ₹${data.monthlyEstimate?.toLocaleString('en-IN')}

Our compliance specialist will review your details and reach out to you within 24 hours.

Best regards,
InnovateHR Tech Team
Phone: +91 8879280798
Email: innovatehrtech@gmail.com
    `;
    } else {

        adminSubject = `[Contact Query] ${data.companyName ? data.companyName + ' - ' : ''}${data.name}`;
        adminText = `
New Contact Form Submission:
----------------------------------
Company: ${data.companyName || 'N/A'}
Contact Name: ${data.name}
Phone: ${data.phone || 'N/A'}
Email: ${data.email}
Service: ${data.service || 'General'}
Message: ${data.message}
    `;

        clientSubject = `Thank you for contacting InnovateHR Tech!`;
        clientText = `
Hi ${clientName},

Thank you for reaching out to us regarding "${data.service || 'Compliance Queries'}".

We have received your message and our team will get back to you shortly.

Best regards,
InnovateHR Tech Team
Office: Vikhroli (W), Mumbai - 400079
Phone: +91 8879280798
    `;
    }

    try {
        const adminMail = transporter.sendMail({
            from: `"${clientName}" <${user}>`,
            to: user,
            replyTo: clientEmail,
            subject: adminSubject,
            text: adminText,
        });

        const clientMail = transporter.sendMail({
            from: `"InnovateHR Tech" <${user}>`,
            to: clientEmail,
            subject: clientSubject,
            text: clientText,
        });

        await Promise.all([adminMail, clientMail]);
        return res.status(200).json({ success: true, message: 'Emails delivered successfully!' });
    } catch (error) {
        console.error('Nodemailer error:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
    }
}
import React, { useState } from 'react';
import { Gift, PhoneCall, Mail, MapPin, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import '../css/ContactUs.css';

export default function ContactUs({ onSendMessage }) {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...formData })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({ type: 'success', text: 'Message sent successfully! Check your email for confirmation.' });
        if (onSendMessage) {
          onSendMessage(`Thank you ${formData.name || 'User'}, your message has been sent!`);
        }
        setFormData({ companyName: '', name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatusMessage({
          type: 'error',
          text: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatusMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="page-section bg-alt contactus-section">
      <div className="section-header">
        <span className="section-tag">GET IN TOUCH WITH EXPERTS</span>
        <h2>Contact Us</h2>
        <p>Have compliance queries or need statutory assistance? Send us a message today.</p>
      </div>

      <div className="contact-offer-banner">
        <div className="contact-offer-badge">
          <Gift size={15} />
          <span>COMPLIMENTARY OFFER</span>
        </div>
        <p className="contact-offer-text">
          <strong>SPECIAL BONUS:</strong> Avail any compliance service & get <strong>100% FREE Website Creation</strong> or <strong>UI Modernization & Blog Revamp!</strong>
        </p>
      </div>

      <div className="contactus-wrapper">
        <div className="contactus-info-side">
          <div className="info-card">
            <div className="info-icon">
              <PhoneCall size={24} />
            </div>
            <div className="info-text">
              <h4>Phone Consultation</h4>
              <p>+91 8879280798</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <div className="info-text">
              <h4>Email Advisory</h4>
              <p>innovatehrtech@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <MapPin size={24} />
            </div>
            <div className="info-text">
              <h4> Office</h4>
              <p>Office no. 77, Sector B, Varsha Nagar, Park Site, Vikhroli (W), Mumbai - 400079</p>
            </div>
          </div>
        </div>

        <form className="contactus-form-card" onSubmit={handleSubmit}>
          <div className="form-grid-2">
            <div className="form-field">
              <label> Company Name</label>
              <input
                type="text"
                placeholder="Enter your Company Name"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label> Contact Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-field">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-field">
              <label>Required Service</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select Service</option>
                <option value="Payroll & ESIC">Payroll & Statutory Compliance</option>
                <option value="Labour Acts">Labour Acts & Employee Benefits</option>
                <option value="Establishment Registration">Establishment & Audit Services</option>
                <option value="Legal Notices">Legal Notices & Dispute Response</option>
                <option value="HR Policies">HR Policies & Handbook Drafting</option>
                <option value="General Query">General Legal Consultation</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-field">
              <label>Your Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your organization and compliance requirements..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
          </div>

          {statusMessage && (
            <div className={`form-status-alert ${statusMessage.type === 'success' ? 'status-success' : 'status-info'}`}>
              {statusMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <button type="submit" className="submit-btn-pink" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
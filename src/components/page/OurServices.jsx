import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
    Search,
    X,
    DollarSign,
    ShieldCheck,
    Building2,
    Check,
    Clock,
    ArrowRight,
    ArrowLeft,
    SearchX,
    Gift,
    Rocket,
    Zap,
    LayoutGrid,
    Layers
} from 'lucide-react';
import '../css/OurServices.css';

// 17 Comprehensive Real Compliance Services categorized into 3 core pillars
export const servicesData = [
    // CATEGORY 1: PAYROLL & STATUTORY COMPLIANCE
    {
        id: "payroll-outsourcing",
        category: "PAYROLL & STATUTORY COMPLIANCE",
        categoryKey: "payroll",
        title: "Payroll Outsourcing Services",
        actRef: "Income Tax Act, 1961 & Payment of Wages Act",
        iconColor: "#e11d48",
        iconBg: "#fdf2f8",
        badgeColor: "#e11d48",
        image: "/innovate/gallery_payroll.jpg",
        shortDesc: "End-to-end statutory payroll processing, employee salary break-ups, automated tax deductions, direct bank transfer sheets, and annual Form 16 issuance.",
        features: [
            "CTC breakup optimization & allowance structuring",
            "Direct bank salary upload files (CMS / NEFT format)",
            "Automated TDS, PF, ESIC & PT deduction calculations",
            "Digital password-protected monthly payslips"
        ],
        fullScope: "Our end-to-end payroll outsourcing service eliminates processing errors and guarantees 100% compliance with Indian Labour and tax laws. We manage the entire lifecycle from attendance data ingest and leave calculations to CTC structuring, reimbursement processing, bonus/gratuity accounting, direct bank disbursements, and digital payslip delivery.",
        deliverables: [
            "Monthly Payroll Summary Register & Variance Report",
            "Bank Transfer Upload Files (HDFC, ICICI, SBI, Axis)",
            "Statutory Contribution Sheets (PF, ESIC, PT, LWF)",
            "Annual Form 16 (Part A & B) Generation for Employees",
            "Full & Final (F&F) Settlement Calculation Worksheets"
        ],
        frequency: "Monthly / Annual",
        targetAudience: "Startups, SMEs & Enterprise Corporations with 10 to 5000+ employees"
    },
    {
        id: "esic-consulting",
        category: "PAYROLL & STATUTORY COMPLIANCE",
        categoryKey: "payroll",
        title: "ESIC Consulting & Registration",
        actRef: "Employees' State Insurance Act, 1948",
        iconColor: "#db2777",
        iconBg: "#fdf2f8",
        badgeColor: "#db2777",
        image: "/innovate/calender images/ESIC.png",
        shortDesc: "Complete ESI registration, sub-code generation, monthly contribution filings, employee Pehchan card generation, and benefit claims handling.",
        features: [
            "New establishment sub-code & main code registration",
            "Monthly online filing & portal challan generation",
            "Insured Person (IP) mapping & Pehchan TIC cards",
            "Maternity, sickness & injury claims coordination"
        ],
        fullScope: "The ESI scheme provides comprehensive social security and medical protection to workers drawing wages up to ₹21,000/month. We handle employer code registration, online sub-code allotments for multi-state branch locations, monthly contribution calculation (Employer: 3.25%, Employee: 0.75%), employee IP registrations, and representation during ESIC department audits.",
        deliverables: [
            "ESIC Main Code & Sub-Code Registration Certificates",
            "Monthly ESI Contribution Statements & Paid Challans",
            "Form 11 (Accident Register) & Form 12 Inspections",
            "Employee Temporary Identification Cards (TIC)",
            "Half-Yearly ESIC Return Filings & Reconciliation"
        ],
        frequency: "Monthly (Filing by 15th) & Half-Yearly",
        targetAudience: "Factories, Shops, Restaurants & Establishments with 10+ employees"
    },
    {
        id: "pf-consultant",
        category: "PAYROLL & STATUTORY COMPLIANCE",
        categoryKey: "payroll",
        title: "PF Consultant & Registration",
        actRef: "Employees' Provident Fund & MP Act, 1952",
        iconColor: "#059669",
        iconBg: "#ecfdf5",
        badgeColor: "#059669",
        image: "/innovate/calender images/PF consulting.webp",
        shortDesc: "EPFO establishment code allotment, UAN activation, monthly Electronic Challan-cum-Return (ECR) generation, and PF transfer/withdrawal processing.",
        features: [
            "EPFO establishment registration & code allocation",
            "Monthly ECR file generation & online portal submission",
            "UAN generation, KYC seeding & bank verification",
            "EDLI & Pension Scheme (EPS) compliance auditing"
        ],
        fullScope: "We provide hassle-free Provident Fund compliance management for organizations mandatory for 20+ employees or voluntarily for smaller teams. From initial establishment registration on the Shram Suvidha portal to monthly ECR generation (12% EPF + 12% Employer split across EPF, EPS, EDLI, Admin fees), UAN helpdesk support, and handling EPFO 7A/7B inquiry proceedings.",
        deliverables: [
            "EPFO Code Allotment Letter & Digital Signature Setup",
            "Monthly ECR Return Receipts & Paid Bank Challans",
            "PF Form 5A, DSC & E Sign Process",
            "UAN Activation & Aadhaar/PAN KYC Verification",
            "PF Transfer & Final Settlement Helpdesk Support"
        ],
        frequency: "Monthly (Filing by 15th)",
        targetAudience: "All establishments with 20 or more employees (or voluntary)"
    },
    {
        id: "pt-consulting",
        category: "PAYROLL & STATUTORY COMPLIANCE",
        categoryKey: "payroll",
        title: "PT Consulting & Registration",
        actRef: "State Tax on Professions, Trades & Employments Act",
        iconColor: "#7c3aed",
        iconBg: "#f3e8ff",
        badgeColor: "#7c3aed",
        image: "/innovate/calender images/PT Consulting & Registration.png",
        shortDesc: "PTEC and PTRC registration certificates, monthly/annual Professional Tax returns, slab deduction schedules, and assessment support.",
        features: [
            "PTEC (Business Entity) & PTRC (Employer) registration",
            "Monthly/Quarterly PT return filing as per State Slabs",
            "Payment voucher & electronic challan generation",
            "Annual PT assessment & compliance certificates"
        ],
        fullScope: "Professional Tax is governed by state-specific legislation (e.g. Maharashtra PT Act, Karnataka PT Act). Employers require two registrations: PTEC (for company tax liability) and PTRC (to deduct tax from salaries). We manage state-wise slab calculations, timely return submissions, payment challan generation, and annual assessment compliance.",
        deliverables: [
            "PTEC & PTRC Registration Certificates",
            "Monthly / Monthly-Quarterly PT Filing Receipts",
            "Annual Form III-B Professional Tax Returns",
            "State-wise Salary Deduction Slab Registers",
            "PT Dept Assessment & Certificate of Clearance"
        ],
        frequency: "Monthly / Quarterly / Annual (State Dependent)",
        targetAudience: "All businesses, sole proprietors, LLPs & Companies operating in India"
    },
    {
        id: "mlwf-registration",
        category: "PAYROLL & STATUTORY COMPLIANCE",
        categoryKey: "payroll",
        title: "MLWF Registration & Filing",
        actRef: "Labour Welfare Fund Act (State Specific)",
        iconColor: "#d97706",
        iconBg: "#fef3c7",
        badgeColor: "#d97706",
        image: "/innovate/calender images/MLWF Registration & Filing.jpg",
        shortDesc: "Labour Welfare Fund registration, semi-annual contribution filings (June & Dec), Form A/B maintenance, and Welfare Board compliance.",
        features: [
            "Labour Welfare Board employer portal registration",
            "Semi-annual contribution filings (June & December)",
            "Form A & Form B statutory register maintenance",
            "Welfare Board inspection representation"
        ],
        fullScope: "The Labour Welfare Fund Act mandates statutory contributions from both employees and employers twice a year (in June and December) to finance medical, education, and social welfare schemes for workers. We handle registration with the state Labour Welfare Board, calculate exact contribution amounts, upload returns online, and archive proof of compliance.",
        deliverables: [
            "LWF Online Employer Registration Number",
            "Semi-Annual Form A / Form B Submissions",
            "Statutory LWF Contribution Receipts & Payment Vouchers",
            "Labour Board Compliance Status Reports"
        ],
        frequency: "Semi-Annual (June & December Filings)",
        targetAudience: "Commercial establishments & factories employing 5+ workers"
    },
    {
        id: "payment-of-bonus",
        category: "PAYROLL & STATUTORY COMPLIANCE",
        categoryKey: "payroll",
        title: "Payment of Bonus Act, 1965",
        actRef: "Payment of Bonus Act, 1965 (Amended 2015)",
        iconColor: "#e11d48",
        iconBg: "#ffe4e6",
        badgeColor: "#e11d48",
        image: "/innovate/calender images/bonus.png",
        shortDesc: "Allocable surplus calculations, statutory bonus computations (8.33% - 20%), Form A, B, C registers, and Form D annual filings.",
        features: [
            "Mapping bonus-eligible employees (salary <= ₹21,000)",
            "Computation of Allocable Surplus & Available Surplus",
            "Statutory Register maintenance (Form A, Form B, Form C)",
            "Annual Form D filing with Labour Inspectorate"
        ],
        fullScope: "Applicable to establishments employing 20 or more persons, the Payment of Bonus Act mandates an annual bonus ranging between 8.33% (minimum statutory) and 20% (maximum) of earned wages. We perform rigorous financial calculations of allocable surplus, audit eligibility rules, draft mandatory registers (Form A, B, C), and submit Form D returns.",
        deliverables: [
            "Bonus Computation Sheet & Set-On / Set-Off Matrix",
            "Form A (Computation of Allocable Surplus)",
            "Form B (Set-On and Set-Off of Allocable Surplus)",
            "Form C (Register of Bonus Paid to Employees)",
            "Form D Annual Bonus Return Submission Receipt"
        ],
        frequency: "Annual (Within 8 months of financial year close)",
        targetAudience: "Factories & establishments with 20+ employees operating for 5+ years"
    },

    // CATEGORY 2: Labour ACTS & EMPLOYEE BENEFITS
    {
        id: "payment-of-gratuity",
        category: "Labour ACTS & EMPLOYEE BENEFITS",
        categoryKey: "Labour",
        title: "Payment of Gratuity Act, 1972",
        actRef: "Payment of Gratuity Act, 1972",
        iconColor: "#2563eb",
        iconBg: "#eff6ff",
        badgeColor: "#2563eb",
        image: "/innovate/calender images/Gratuity.jpg",
        shortDesc: "Statutory gratuity computation (15 days salary per completed year), Form A/B submissions, Form F nomination records, and trust advisory.",
        features: [
            "Gratuity eligibility verification (5+ years service)",
            "Form A (Notice of Opening) & Form B (Notice of Change)",
            "Employee nomination Form F maintenance & digital archiving",
            "Group Gratuity Scheme setup & actuarial valuation advisory"
        ],
        fullScope: "Gratuity is a statutory retirement benefit payable to employees who complete 5 or more years of continuous service. We ensure your organization satisfies all procedural norms, including submitting Notice of Opening (Form A) to the Controlling Authority, collecting and indexing Form F nominations, auditing formula calculations , and advisory on Group Gratuity Insurance Trusts.",
        deliverables: [
            "Notice of Opening (Form A) Filing Confirmation",
            "Form F Employee Nomination Archive & Register",
            "Gratuity Valuation & Liability Statement",
            "Notice of Termination / Disincentive Compliance Records"
        ],
        frequency: "One-time Setup / Event-Driven Disbursement Audit",
        targetAudience: "Every , mine, oilfield, plantation, port, shop, or establishment with 10+ employees"
    },
    {
        id: "posh-policy",
        category: "Labour ACTS & EMPLOYEE BENEFITS",
        categoryKey: "Labour",
        title: "POSH Policy Implementation",
        actRef: "POSH Act, 2013 (Prevention of Sexual Harassment)",
        iconColor: "#e11d48",
        iconBg: "#fdf2f8",
        badgeColor: "#e11d48",
        image: "/innovate/calender images/POSH Policy Implementation.jpg",
        shortDesc: "End-to-end POSH compliance: policy drafting, Internal Complaints Committee (ICC) setup with external certified members, employee training, and annual reports.",
        features: [
            "Customized POSH policy drafting & company handbook integration",
            "ICC constitution with certified external neutral legal expert",
            "Mandatory annual interactive employee awareness sessions",
            "Annual ICC Report compilation & filing with District Officer"
        ],
        fullScope: "The POSH Act 2013 makes it legally mandatory for every employer with 10 or more employees to maintain a safe working environment for women. Non-compliance carries severe fines up to ₹50,000 and cancellation of business licenses. We provide end-to-end POSH governance: policy formulation, ICC setup with accredited external panel members, training workshops, inquiry handling SOPs, and annual District Officer filings.",
        deliverables: [
            "Customized POSH Legal Policy Document",
            "ICC Formation Order & External Member Agreement",
            "Employee Training Certificates & Attendance Logs",
            "Annual ICC Report Copy filed with District Officer"
        ],
        frequency: "Annual Governance & Quarterly ICC Reviews",
        targetAudience: "All  offices, tech startups, factories, retail & commercial workplaces"
    },
    {
        id: "payment-of-wages",
        category: "Labour ACTS & EMPLOYEE BENEFITS",
        categoryKey: "Labour",
        title: "Payment of Wages Act, 1936",
        actRef: "Payment of Wages Act, 1936",
        iconColor: "#0891b2",
        iconBg: "#cffaff",
        badgeColor: "#0891b2",
        image: "/innovate/calender images/Payment of Wages Act.png",
        shortDesc: "Standardizing salary payment timelines (before 7th/10th), authorized deduction audits (capped at 50%), wage register maintenance, and notice displays.",
        features: [
            "Auditing wage payment dates against statutory deadlines",
            "Deduction compliance (capping authorized deductions to 50%)",
            "Register of Wages, Register of Deductions & Fines maintenance",
            "Display of mandatory notice boards in regional languages"
        ],
        fullScope: "This Act regulates the timely disbursement of wages without unauthorized deductions for employees earning below specified wage thresholds. We audit your monthly payroll schedule to ensure payment by the 7th of the month (for establishments <1000 workers) or 10th of the month, verify that deductions (PF, ESIC, PT, loan recovery) never exceed 50%, and maintain mandatory statutory registers.",
        deliverables: [
            "Statutory Register of Deductions & Fines",
            "Register of Advances & Overtime Worked",
            "Bilingual Mandatory Wage Notice Display Templates",
            "Payroll Disbursement Audit Verification Certificates"
        ],
        frequency: "Monthly Ongoing Audit",
        targetAudience: "Factories, industrial plants, transport services, and commercial establishments"
    },
    {
        id: "maternity-benefit",
        category: "Labour ACTS & EMPLOYEE BENEFITS",
        categoryKey: "Labour",
        title: "Maternity Benefit Act, 1961",
        actRef: "Maternity Benefit Act, 1961 (Amended 2017)",
        iconColor: "#db2777",
        iconBg: "#fdf2f8",
        badgeColor: "#db2777",
        image: "/innovate/calender images/Maternity Benefit Act.jpg",
        shortDesc: "Structuring 26 weeks paid maternity leave policies, crèche facility compliance advisory (50+ staff), Form K/L/M registers, and WFH policy integration.",
        features: [
            "26-week paid maternity leave policy audit & structuring",
            "Crèche facility setup advisory for establishments with 50+ staff",
            "Form K (Register of Maternity Benefit) maintenance",
            "Nursing breaks & work-from-home policy documentation"
        ],
        fullScope: "The Maternity Benefit (Amendment) Act 2017 increased paid maternity leave from 12 weeks to 26 weeks for female employees. It also mandates crèche facilities within prescribed distances for establishments with 50 or more employees. We assist HR teams in drafting compliant leave rules, auditing benefit calculations, maintaining Form K/L/M registers, and structuring work-from-home options.",
        deliverables: [
            "Form K (Register of Women Employees & Leave Granted)",
            "Maternity Leave Entitlement Audit Sheets",
            "Crèche Facility SOP & Compliance Declaration",
            "Mandatory Notice on Maternity Benefits for Onboarding"
        ],
        frequency: "Event-Driven & Annual Audit",
        targetAudience: "Shops,  offices, factories & IT organizations with female employees"
    },
    {
        id: "factories-act",
        category: "Labour ACTS & EMPLOYEE BENEFITS",
        categoryKey: "Labour",
        title: "Factories Act, 1948",
        actRef: "Factories Act, 1948 & State  Rules",
        iconColor: "#dc2626",
        iconBg: "#fee2e2",
        badgeColor: "#dc2626",
        image: "/innovate/calender images/Factories Act,.jpg",
        shortDesc: " plan approvals, license renewals, safety officer appointments, pressure vessel testing registers, and annual health & safety Form 21/22 returns.",
        features: [
            " building plan approval & license renewal filings",
            "Occupational health inspection & safety officer compliance",
            "Machinery safety testing logs (boilers, hoists, pressure vessels)",
            "Filing annual returns (Form 21 / Form 22) with  Inspector"
        ],
        fullScope: "For manufacturing plants and industrial units, compliance with the Factories Act is paramount to avoid operational shutdown. We manage  plan approvals with the Chief Inspector of Factories, license renewals, environmental & safety officer appointments, canteen/rest room mandates, machinery inspection logs, and mandatory annual return submissions.",
        deliverables: [
            " Building Plan & License Approval Documents",
            "Form 21 / Form 22 Annual  Returns",
            "Register of Adult Workers (Form 12) & Overtime Logs",
            "Boiler & Pressure Vessel Statutory Safety Certificates"
        ],
        frequency: "Annual / Biennial Renewals & Monthly Logs",
        targetAudience: "Manufacturing units, processing plants & factories using power (10+ workers) or without power (20+ workers)"
    },
    {
        id: "hr-policies",
        category: "Labour ACTS & EMPLOYEE BENEFITS",
        categoryKey: "Labour",
        title: "HR Policies & Handbook Drafting",
        actRef: "Industrial Employment (Standing Orders) Act, 1946",
        iconColor: "#e11d48",
        iconBg: "#fdf2f8",
        badgeColor: "#e11d48",
        image: "/innovate/hr_hero1.jpg",
        shortDesc: "Drafting tailored  HR manuals, employment contracts (NDA, IP, Non-Compete), leave policies, code of conduct, and disciplinary frameworks.",
        features: [
            "Comprehensive Employee Handbook customized to company culture",
            "Robust employment agreements (NDA, IP Assignment, Non-Compete)",
            "Attendance, remote work, leave & travel policy drafting",
            "Disciplinary action SOPs & legal termination protocols"
        ],
        fullScope: "Well-crafted HR policies protect your business from employment litigation and establish clear operational expectations. We draft comprehensive, state-compliant employee handbooks, appointment letters, non-disclosure agreements (NDAs), intellectual property assignment clauses, code of conduct frameworks, performance improvement plans (PIPs), and legal exit protocols.",
        deliverables: [
            "Customized  Employee Handbook (PDF & Edit Copy)",
            "Standard Appointment Letter & Offer Letter Templates",
            "Non-Disclosure & Non-Compete Agreement Contracts",
            "Disciplinary Inquiry SOP & Warning Letter Formats"
        ],
        frequency: "Annual Policy Review & Revision",
        targetAudience: "Startups, IT firms,  enterprises, and expanding organizations"
    },

    // CATEGORY 3: ESTABLISHMENT & AUDIT SERVICES
    {
        id: "shop-establishment",
        category: "ESTABLISHMENT & AUDIT SERVICES",
        categoryKey: "establishment",
        title: "Shop & Establishment Registration",
        actRef: "State Shops & Establishments Act (e.g., Gumasta Act)",
        iconColor: "#059669",
        iconBg: "#ecfdf5",
        badgeColor: "#059669",
        image: "/innovate/gallery_licensing.jpg",
        shortDesc: "Obtaining and renewing Shop & Establishment Licenses (Gumasta), bilingual display boards, working hour regulations, and leave registers.",
        features: [
            "New Shop & Establishment registration / Intimation receipt",
            "Annual license renewals & amendment filings (address/directors)",
            "Mandatory bilingual name board layout compliance",
            "Maintenance of attendance, leave & wage registers"
        ],
        fullScope: "Every commercial office, shop, warehouse, or service establishment must obtain a Shop & Establishment License (commonly known as Gumasta License in Maharashtra) within 30 days of commencing operations. We handle online application submissions, document verification, amendment updates (change of address, addition of partners), renewal filings, and display board compliance.",
        deliverables: [
            "Shop & Establishment Registration Certificate / Intimation Receipt",
            "Form A / Form B Registration Application Archives",
            "Statutory Leave Book (Form H / Form I)",
            "Regional Language Nameboard Compliance Proof"
        ],
        frequency: "Initial Registration + Renewal (As per state law)",
        targetAudience: "All shops, IT offices, commercial establishments, clinics & service firms"
    },
    {
        id: "contract-labour-act",
        category: "ESTABLISHMENT & AUDIT SERVICES",
        categoryKey: "establishment",
        title: "Contract Labour Act, 1970 (CLRA)",
        actRef: "Contract Labour (Regulation & Abolition) Act, 1970",
        iconColor: "#ea580c",
        iconBg: "#ffedd5",
        badgeColor: "#ea580c",
        image: "/innovate/gallery_factory.jpg",
        shortDesc: "Principal Employer Registration (RC), Contractor Labour License acquisition, Form V issuance, vendor audit scorecards, and Form XXIV returns.",
        features: [
            "Principal Employer Registration Certificate (RC) for 20+ contract staff",
            "Assisting manpower contractors in obtaining Labour Licenses",
            "Issuance of Form V to contractors & vendor compliance auditing",
            "Filing half-yearly Form XXIV returns with the Labour Commissioner"
        ],
        fullScope: "Engaging contract Labour without proper registration exposes Principal Employers to severe legal liability, including automatic absorption of contract workers. We obtain Principal Employer Registration Certificates (RC), verify contractor Labour licenses, audit contractor PF/ESIC monthly paid receipts before bill clearance, maintain Form XII/XIII/XIV/XIX registers, and file half-yearly Form XXIV returns.",
        deliverables: [
            "Principal Employer Registration Certificate (RC)",
            "Form V (Certificate of Allocation to Contractor)",
            "Vendor Compliance Audit Scorecards & Audit Certificates",
            "Form XXIV Half-Yearly Return Filing Confirmation"
        ],
        frequency: "Half-Yearly Filings & Monthly Vendor Audits",
        targetAudience: "Organizations employing 20+ contract workers through manpower agencies"
    },
    {
        id: "minimum-wages-act",
        category: "ESTABLISHMENT & AUDIT SERVICES",
        categoryKey: "establishment",
        title: "Minimum Wages Act, 1948",
        actRef: "Minimum Wages Act, 1948 & State VDA Notifications",
        iconColor: "#0284c7",
        iconBg: "#e0f2fe",
        badgeColor: "#0284c7",
        image: "/innovate/calender images/Payment of Wages Act.png",
        shortDesc: "Categorizing job roles (Unskilled to Highly Skilled), tracking biannual VDA revisions, wage slip distribution, and Form I, II, IV, V registers.",
        features: [
            "Mapping employee roles into statutory wage categories",
            "Tracking biannual Variable Dearness Allowance (VDA) revisions",
            "Auditing salary payouts against latest state wage notifications",
            "Form I (Fines), Form II (Deductions), Form IV (Overtime) maintenance"
        ],
        fullScope: "Failure to pay minimum wages as notified by state governments is a cognizable offense resulting in heavy penalties and imprisonment. We audit your pay structures against the latest Variable Dearness Allowance (VDA) notifications released every April and October, categorize staff into Unskilled, Semi-Skilled, Skilled, and Highly-Skilled brackets, and maintain statutory muster rolls.",
        deliverables: [
            "Job Role & Statutory Minimum Wage Mapping Matrix",
            "Biannual State VDA Wage Revision Compliance Alerts",
            "Form I, Form II, Form IV, and Form V Statutory Registers",
            "Minimum Wage Inspector Inspection Audit Sheet"
        ],
        frequency: "Biannual VDA Tracking & Monthly Audit",
        targetAudience: "Factories, hotels, construction, security agencies & commercial establishments"
    },
    {
        id: "legal-compliance-audit",
        category: "ESTABLISHMENT & AUDIT SERVICES",
        categoryKey: "establishment",
        title: "Legal Compliance & Monthly Audit",
        actRef: "Multi-Act Statutory Legal Audit Framework",
        iconColor: "#e11d48",
        iconBg: "#ffe4e6",
        badgeColor: "#e11d48",
        image: "/innovate/about_audit.jpg",
        shortDesc: "360-degree legal health check, monthly multi-act compliance audits, vendor risk scorecards, register verification, and executive gap reports.",
        features: [
            "Comprehensive monthly audit across 15+ central & state Labour acts",
            "Vendor & contractor compliance risk verification & scorecards",
            "Statutory register physical/digital audit & gap analysis",
            "Executive Dashboard & Legal Risk Mitigation Scorecard"
        ],
        fullScope: "Our flagship Legal Compliance & Monthly Audit service acts as a proactive shield against government inspections, Labour court notices, and reputational loss. Our team of senior Labour law consultants conducts thorough monthly audits of your internal registers, PF/ESIC returns, contractor files, safety records, and wage calculations, providing an executive scorecard with remediation steps.",
        deliverables: [
            "Monthly Legal Compliance Certificate & Audit Report",
            "Detailed GAP Analysis Report with Red/Yellow/Green Risk Severity",
            "Vendor Statutory Compliance Scorecard & Sign-off",
            "Quarterly Board-level Statutory Compliance Summary"
        ],
        frequency: "Monthly Ongoing Audit",
        targetAudience: " Enterprises, Multi-location Companies & High-growth Startups"
    },
    {
        id: "legal-notices",
        category: "ESTABLISHMENT & AUDIT SERVICES",
        categoryKey: "establishment",
        title: "Legal Notices & Representation",
        actRef: "Industrial Disputes Act & Labour Department Procedures",
        iconColor: "#e11d48",
        iconBg: "#fdf2f8",
        badgeColor: "#e11d48",
        image: "/innovate/gallery_audit.jpg",
        shortDesc: "Expert legal representation during Labour Inspector visits, ESIC/PF audit proceedings, show-cause notices, conciliation, and dispute defense.",
        features: [
            "Drafting legal responses to Labour Department show-cause notices",
            "Representation before Assistant Labour Commissioners (ALC)",
            "EPFO 7Q 14B inquiry representation & ESIC audit defense",
            "On-site support during inspector visits & statutory audits"
        ],
        fullScope: "When statutory authorities issue notices or conduct surprise inspections, expert legal representation is critical to avoid harsh financial penalties or prosecution. Our team of experienced Labour law advocates and compliance specialists draft formal legal replies, represent your company before Labour Commissioners and EPFO/ESIC tribunals, and resolve disputes efficiently.",
        deliverables: [
            "Formal Written Legal Replies to Show-Cause Notices",
            "In-person Representation at Labour Department Hearings",
            "Inspection Defense & Audit Settlement Filings",
            "Legal Case Briefs & Advisory Opinions"
        ],
        frequency: "On-Demand / Urgent Representation",
        targetAudience: "Businesses facing Labour Department inquiries, PF/ESI audits, or legal notices"
    }
];

export default function OurServices({ onSelectService, onQuoteClick, selectedServiceRequest }) {
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const [activeModalService, setActiveModalService] = useState(null);
    const [viewMode, setViewMode] = useState('marquee'); // 'marquee' (single row marquee) or 'grid'
    const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

    const marqueeTrackRef = useRef(null);

    // Open detail modal when selected from Navbar sub-navigation
    React.useEffect(() => {
        if (selectedServiceRequest && selectedServiceRequest.title) {
            const reqTitle = selectedServiceRequest.title.toLowerCase();
            const found = servicesData.find(
                (s) => s.title.toLowerCase().includes(reqTitle) || reqTitle.includes(s.title.toLowerCase())
            );
            if (found) {
                setActiveModalService(found);
            }
        }
    }, [selectedServiceRequest]);

    // Lock body scroll when popup modal is active to prevent page sliding
    React.useEffect(() => {
        if (activeModalService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [activeModalService]);

    // Filter logic based on Category pill and Search query
    const filteredServices = useMemo(() => {
        return servicesData.filter((service) => {
            const matchesCategory =
                selectedCategory === "ALL" ||
                (selectedCategory === "payroll" && service.categoryKey === "payroll") ||
                (selectedCategory === "Labour" && service.categoryKey === "Labour") ||
                (selectedCategory === "establishment" && service.categoryKey === "establishment");

            const matchesSearch =
                service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.actRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Duplicated services array for infinite smooth Marquee scrolling
    const marqueeServices = useMemo(() => {
        if (filteredServices.length === 0) return [];
        return [...filteredServices, ...filteredServices];
    }, [filteredServices]);

    // Auto-scroll Marquee Effect (Left to Right movement)
    useEffect(() => {
        if (viewMode !== 'marquee') return;

        const scrollContainer = marqueeTrackRef.current;
        if (!scrollContainer) return;

        // Initialize scroll position to middle if at 0 so left-to-right scrolling has room
        if (scrollContainer.scrollLeft <= 0 && scrollContainer.scrollWidth > 0) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }

        let animationFrameId;
        const speed = 0.7; // Smooth marquee speed

        const animate = () => {
            if (!isMarqueeHovered && scrollContainer) {
                // Decrementing scrollLeft moves content from left to right visually
                scrollContainer.scrollLeft -= speed;
                if (scrollContainer.scrollLeft <= 0) {
                    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [viewMode, isMarqueeHovered, filteredServices]);

    const handleMarqueePrev = () => {
        if (marqueeTrackRef.current) {
            marqueeTrackRef.current.scrollBy({ left: -360, behavior: 'smooth' });
        }
    };

    const handleMarqueeNext = () => {
        if (marqueeTrackRef.current) {
            marqueeTrackRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
    };

    const handleOpenDetailModal = (service) => {
        setActiveModalService(service);
        if (onSelectService) {
            onSelectService(service.title);
        }
    };

    const handleCloseModal = () => {
        setActiveModalService(null);
    };

    const handleRequestQuote = (serviceTitle) => {
        handleCloseModal();
        if (onQuoteClick) {
            onQuoteClick(serviceTitle);
        }
    };

    return (
        <section id="services" className="services-main-section">
            <div className="services-container">

                {/* Section Header */}
                <div className="services-section-header">
                    <span className="services-tag-badge">
                        <span className="tag-dot"></span>
                        100% STATUTORY & LEGAL COMPLIANCE
                    </span>
                    <h2 className="services-main-title">
                        Our Statutory &  <br className="title-br" />
                        <span className="title-gradient">Compliance Services</span>
                    </h2>
                    <p className="services-main-subtitle">
                        Explore our specialized end-to-end legal compliance solutions designed to protect your organization, streamline payroll, and guarantee 100% adherence to Indian Labour Laws.
                    </p>
                </div>

                {/* Stats Highlight Bar */}
                <div className="services-stats-bar">
                    <div className="stat-item">
                        <span className="stat-val">17+</span>
                        <span className="stat-lbl">Central & State Acts</span>
                    </div>
                    <div className="stat-divider-v"></div>
                    <div className="stat-item">
                        <span className="stat-val">100%</span>
                        <span className="stat-lbl">Audit Accuracy</span>
                    </div>
                    <div className="stat-divider-v"></div>
                    <div className="stat-item">
                        <span className="stat-val">0</span>
                        <span className="stat-lbl">Penalty Track Record</span>
                    </div>
                    <div className="stat-divider-v"></div>
                    <div className="stat-item">
                        <span className="stat-val">24/7</span>
                        <span className="stat-lbl">Legal Counsel Support</span>
                    </div>
                </div>

                {/* Search & Category Filter Toolbar */}
                <div className="services-filter-toolbar">
                    <div className="services-search-wrapper">
                        <Search className="search-icon" size={18} />
                        <input
                            type="text"
                            placeholder="Search service name, law, or statutory act (e.g., ESIC, POSH, PF, Bonus)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="services-search-input"
                        />
                        {searchQuery && (
                            <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                                <X size={16} />
                            </button>
                        )}
                    </div>

                    <div className="services-pills-row">
                        <button
                            className={`filter-pill-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('ALL')}
                        >
                            All Services ({servicesData.length})
                        </button>
                        <button
                            className={`filter-pill-btn ${selectedCategory === 'payroll' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('payroll')}
                        >
                            Payroll & Statutory (6)
                        </button>
                        <button
                            className={`filter-pill-btn ${selectedCategory === 'Labour' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('Labour')}
                        >
                            Labour Acts & Benefits (6)
                        </button>
                        <button
                            className={`filter-pill-btn ${selectedCategory === 'establishment' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('establishment')}
                        >
                            Establishment & Audits (5)
                        </button>
                    </div>

                    {/* View Mode Toggle Switch */}
                    <div className="view-mode-toggle">
                        <button
                            className={`view-toggle-btn ${viewMode === 'marquee' ? 'active' : ''}`}
                            onClick={() => setViewMode('marquee')}
                            title="Single Row Marquee View"
                        >
                            <Layers size={15} />
                            <span>Marquee</span>
                        </button>
                        <button
                            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                            title="Grid View"
                        >
                            <LayoutGrid size={15} />
                            <span>Grid</span>
                        </button>
                    </div>
                </div>

                {/* Results Counter */}
                <div className="results-count-bar">
                    <span>Showing <strong>{filteredServices.length}</strong> statutory services</span>
                    {searchQuery && (
                        <span className="search-query-tag">Matching: "{searchQuery}"</span>
                    )}
                </div>

                {/* Services Cards Rendering (Single Row Marquee OR Grid) */}
                {filteredServices.length > 0 ? (
                    viewMode === 'marquee' ? (
                        <div className="marquee-section-wrapper">
                            <div
                                className="marquee-track-container"
                                ref={marqueeTrackRef}
                                onMouseEnter={() => setIsMarqueeHovered(true)}
                                onMouseLeave={() => setIsMarqueeHovered(false)}
                            >
                                <div className="marquee-single-row">
                                    {marqueeServices.map((service, index) => (
                                        <div key={`${service.id}-marquee-${index}`} className="service-card-item marquee-card-item">
                                            <div className="card-top-header">
                                                <div
                                                    className="card-icon-badge"
                                                    style={{ backgroundColor: service.iconBg, color: service.iconColor }}
                                                >
                                                    {service.image ? (
                                                        <img src={service.image} alt={service.title} className="card-badge-img" />
                                                    ) : (
                                                        <>
                                                            {service.categoryKey === 'payroll' && <DollarSign size={24} />}
                                                            {service.categoryKey === 'Labour' && <ShieldCheck size={24} />}
                                                            {service.categoryKey === 'establishment' && <Building2 size={24} />}
                                                        </>
                                                    )}
                                                </div>
                                                <span className="act-ref-pill" style={{ borderColor: service.badgeColor + '40', color: service.iconColor }}>
                                                    {service.actRef}
                                                </span>
                                            </div>

                                            <h3 className="card-title-text">{service.title}</h3>
                                            <p className="card-short-desc">{service.shortDesc}</p>

                                            <div className="card-bottom-actions">
                                                <span className="frequency-tag">
                                                    <Clock size={14} />
                                                    {service.frequency}
                                                </span>
                                                <button
                                                    className="btn-view-details"
                                                    onClick={() => handleOpenDetailModal(service)}
                                                >
                                                    <span>View Full Scope</span>
                                                    <ArrowRight size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Controls Bar: Back in Left Corner, Next in Right Corner */}
                            {/* <div className="marquee-bottom-nav-bar">
                                <button
                                    className="marquee-nav-btn btn-back"
                                    onClick={handleMarqueePrev}
                                    aria-label="Previous service card"
                                >
                                    <ArrowLeft size={18} />
                                    <span>Back</span>
                                </button>

                                <div className="marquee-status-indicator">
                                    <span className="marquee-dot"></span>
                                    <span>Single Row Marquee (Moving Left to Right)</span>
                                </div>

                                <button
                                    className="marquee-nav-btn btn-next"
                                    onClick={handleMarqueeNext}
                                    aria-label="Next service card"
                                >
                                    <span>Next</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div> */}
                        </div>
                    ) : (
                        <div className="services-cards-grid">
                            {filteredServices.map((service) => (
                                <div key={service.id} className="service-card-item">
                                    <div className="card-top-header">
                                        <div
                                            className="card-icon-badge"
                                            style={{ backgroundColor: service.iconBg, color: service.iconColor }}
                                        >
                                            {service.image ? (
                                                <img src={service.image} alt={service.title} className="card-badge-img" />
                                            ) : (
                                                <>
                                                    {service.categoryKey === 'payroll' && <DollarSign size={24} />}
                                                    {service.categoryKey === 'Labour' && <ShieldCheck size={24} />}
                                                    {service.categoryKey === 'establishment' && <Building2 size={24} />}
                                                </>
                                            )}
                                        </div>
                                        <span className="act-ref-pill" style={{ borderColor: service.badgeColor + '40', color: service.iconColor }}>
                                            {service.actRef}
                                        </span>
                                    </div>

                                    <h3 className="card-title-text">{service.title}</h3>
                                    <p className="card-short-desc">{service.shortDesc}</p>

                                    <div className="card-bottom-actions">
                                        <span className="frequency-tag">
                                            <Clock size={14} />
                                            {service.frequency}
                                        </span>
                                        <button
                                            className="btn-view-details"
                                            onClick={() => handleOpenDetailModal(service)}
                                        >
                                            <span>View Full Scope</span>
                                            <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                ) : (
                    <div className="no-services-found">
                        <div className="no-found-icon"><SearchX size={36} /></div>
                        <h3>No matching services found</h3>
                        <p>We couldn't find any compliance service matching "{searchQuery}". Try clearing your search filter or selecting another category.</p>
                        <button className="reset-filter-btn" onClick={() => { setSearchQuery(""); setSelectedCategory("ALL"); }}>
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* Process Flow Banner */}
                <div className="services-workflow-container">
                    <div className="workflow-header">
                        <span className="workflow-subtag">OUR EXCELLENCE METHODOLOGY</span>
                        <h3>How We Manage Your Compliance</h3>
                        <p>A systematic, 4-step framework ensuring zero risk, accurate filings, and continuous audit readiness.</p>
                    </div>

                    <div className="workflow-steps-grid">
                        <div className="workflow-step-card">
                            <div className="step-num-badge">01</div>
                            <h4>Diagnostic GAP Audit</h4>
                            <p>We analyze your existing payroll registers, statutory codes, and Labour licenses to identify missing filings and penalty risks.</p>
                        </div>

                        <div className="workflow-step-card">
                            <div className="step-num-badge">02</div>
                            <h4>System & Portal Setup</h4>
                            <p>Registration with statutory portals (EPFO, ESIC, PT, LWF, Labour Dept) and mapping employee data into structured templates.</p>
                        </div>

                        <div className="workflow-step-card">
                            <div className="step-num-badge">03</div>
                            <h4>Monthly Filing & Register Maintenance</h4>
                            <p>On-time monthly ECR generation, contribution payments, statutory register updates, and payslip distribution.</p>
                        </div>

                        <div className="workflow-step-card">
                            <div className="step-num-badge">04</div>
                            <h4>Inspection & Legal Defense</h4>
                            <p>Continuous readiness for government inspections, audit defense, and handling legal notices with dedicated legal counsel.</p>
                        </div>
                    </div>
                </div>

                {/* Complimentary Special Offer Section */}
                <div className="special-offer-card-section">
                    <div className="offer-header">
                        <span className="offer-tag-badge">
                            <Gift size={16} className="offer-svg-badge-icon" />
                            COMPLIMENTARY VALUE-ADD BONUS
                        </span>
                        <h3 className="offer-main-title">
                            Avail Any Compliance Service & Get a <span className="offer-gradient-text">Free Website or UI Revamp!</span>
                        </h3>
                        <p className="offer-main-subtitle">
                            We empower your organization both legally and digitally. When you partner with INNOVATEHR Tech for any statutory compliance or payroll service, we upgrade your online presence at zero cost.
                        </p>
                    </div>

                    <div className="offer-boxes-grid">
                        <div className="offer-box-item">
                            <div className="offer-box-badge">FOR NEW BUSINESSES</div>
                            <div className="offer-box-icon-wrapper rose">
                                <Rocket size={26} />
                            </div>
                            <h4>100% Free Website Creation</h4>
                            <p>Don't have a website yet? We will design, develop, and launch a complete modern, responsive website for your company at zero cost.</p>
                            <ul className="offer-bullet-list">
                                <li><Check size={14} className="check-bullet-icon" /> Custom Responsive Web Design</li>
                                <li><Check size={14} className="check-bullet-icon" /> Fast Performance & Mobile Optimization</li>
                                <li><Check size={14} className="check-bullet-icon" /> 100% Free Setup with Any Service Agreement</li>
                            </ul>
                        </div>

                        <div className="offer-box-item">
                            <div className="offer-box-badge">FOR EXISTING WEBSITES</div>
                            <div className="offer-box-icon-wrapper amber">
                                <Zap size={26} />
                            </div>
                            <h4>Free UI Modernization & Blog Upgrade</h4>
                            <p>Already have an existing website? We will refresh your UI/UX design, modernize your visual branding, and update your company blog—at no extra charge.</p>
                            <ul className="offer-bullet-list">
                                <li><Check size={14} className="check-bullet-icon" /> Sleek Modern UI/UX Redesign</li>
                                <li><Check size={14} className="check-bullet-icon" /> Blog Content & Layout Refresh</li>
                                <li><Check size={14} className="check-bullet-icon" /> No Hidden Costs or Tech Fees</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Call to Action Banner */}
                <div className="services-cta-banner">
                    <div className="cta-banner-content">
                        <h3>Ready to Eliminate Compliance Risk & Penalty Exposure?</h3>
                        <p>Connect with our experts for tailored solutions and get a quote for your specific compliance needs.</p>
                    </div>
                    <div className="cta-banner-actions">
                        <button
                            className="cta-btn-primary"
                            onClick={() => onQuoteClick ? onQuoteClick("Comprehensive Compliance Audit") : null}
                        >
                            <span>Get a Quote</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

            </div>

            {/* ================= DETAILED SERVICE MODAL POPUP ================= */}
            {activeModalService && (
                <div className="service-modal-overlay" onClick={handleCloseModal}>
                    <div className="service-modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="service-modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
                            <X size={20} />
                        </button>

                        <div className="modal-top-meta">
                            <span
                                className="modal-act-badge"
                                style={{ backgroundColor: activeModalService.iconBg, color: activeModalService.iconColor }}
                            >
                                {activeModalService.actRef}
                            </span>
                            <span className="modal-cat-tag">{activeModalService.category}</span>
                        </div>

                        <h2 className="modal-service-title">{activeModalService.title}</h2>

                        <div className="modal-body-content">

                            <div className="modal-section-block">
                                <h4>Overview & Statutory Scope</h4>
                                <p>{activeModalService.fullScope}</p>
                            </div>

                            <div className="modal-two-col-grid">
                                <div className="modal-section-block">
                                    <h4>Key Deliverables & Documentation</h4>
                                    <ul className="modal-deliverables-list">
                                        {activeModalService.deliverables.map((del, dIdx) => (
                                            <li key={dIdx}>
                                                <Check size={16} color="#e11d48" strokeWidth={3} />
                                                <span>{del}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-section-block">
                                    <h4>Compliance Specifications</h4>
                                    <div className="specs-info-box">
                                        <div className="spec-item">
                                            <span className="spec-label">Filing Frequency:</span>
                                            <span className="spec-val">{activeModalService.frequency}</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Applicable To:</span>
                                            <span className="spec-val">{activeModalService.targetAudience}</span>
                                        </div>
                                        <div className="spec-item">
                                            <span className="spec-label">Governance Act:</span>
                                            <span className="spec-val">{activeModalService.actRef}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="modal-footer-actions">
                            <button className="modal-secondary-btn" onClick={handleCloseModal}>
                                Close Overview
                            </button>
                            <button
                                className="modal-primary-btn"
                                onClick={() => handleRequestQuote(activeModalService.title)}
                            >
                                <span>Request Proposal for this Service</span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}

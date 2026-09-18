import React from 'react';
import {
  ShieldCheck,
  Users,
  FileCheck,
  Clock,
  BarChart3,
  CheckCircle2,
  Award,
  Building2,
  FileText
} from 'lucide-react';
import '../css/AboutUs.css';

const teamMembers = [
  {
    name: "Shivani Gupta",
    role: "Director & Head of HR",
    initials: "SG",
    color: "#e11d48",
    bg: "#fdf2f8",
    bio: "Leading statutory compliance strategy, HR policies, executive client partnerships, and Labour law advisory."
  },
  {
    name: "Parvati Manoj Yadav",
    role: "MIS Executive",
    initials: "PY",
    color: "#059669",
    bg: "#ecfdf5",
    bio: "Managing statutory register data, daily MIS reports, monthly compliance audits, and regulatory portal tracking."
  },
  {
    name: "Shivam Gupta",
    role: "IT Support Specialist",
    initials: "SG",
    color: "#2563eb",
    bg: "#eff6ff",
    bio: "Ensuring smooth IT infrastructure, data security, digital compliance portal integrations, and technical operations."
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="page-section bg-alt aboutus-section">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">WHO WE ARE</span>
        <h2>About Us</h2>
        <p>Pioneering 100% legal & statutory Labour compliance, payroll outsourcing, and HR advisory across India.</p>
      </div>

      <div className="aboutus-container">

        {/* Company Overview Story Section with Authentic Image */}
        <div className="aboutus-story-block">
          <div className="story-content">
            <span className="story-subtag">
              <Building2 size={15} />
              TRUSTED STATUTORY COMPLIANCE PARTNER
            </span>
            <h3 className="story-title">
              Eliminating Regulatory Risk & Empowering  Scale
            </h3>
            <p className="story-desc">
              At <strong className="highlight-dark">INNOVATEHR Tech</strong>, we specialize in simplifying payroll outsourcing, statutory registrations (ESIC, PF, PT, MLWF), Labour acts governance, and monthly legal audits for high-growth organizations.
            </p>
            <p className="story-desc">
              Our mission is to safeguard your business against compliance defaults, heavy penalty exposure, and Labour inspectorate notices—allowing your executive leadership team to focus entirely on scaling core operations.
            </p>

            <ul className="story-bullets-list">
              <li>
                <CheckCircle2 size={18} className="bullet-icon-pink" />
                <span><strong>100% Adherence</strong> to Central & State Labour Acts</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-icon-pink" />
                <span><strong>Zero Penalty Record</strong> on monthly filings</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="bullet-icon-pink" />
                <span><strong>Dedicated Account Manager</strong> & Legal Counsel Support</span>
              </li>
            </ul>
          </div>

          <div className="story-image-wrapper">
            <div className="image-frame-container">
              <img
                src="/innovate/about_office.jpg"
                alt="INNOVATEHR Tech  Office & Team"
                className="story-featured-img"
              />
              <div className="story-floating-badge">
                <div className="badge-icon-bg">
                  <Award size={22} />
                </div>
                <div className="badge-text-group">
                  <span className="badge-val">100% Compliant</span>
                  <span className="badge-lbl">Audit Accuracy Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit & Legal Operations Section with Second Authentic Image */}
        <div className="aboutus-audit-block">
          <div className="story-image-wrapper">
            <div className="image-frame-container">
              <img
                src="/innovate/about_audit.jpg"
                alt="INNOVATEHR Tech Statutory Compliance Audit"
                className="story-featured-img"
              />
              <div className="story-floating-badge audit-badge">
                <div className="badge-icon-bg green">
                  <FileText size={22} />
                </div>
                <div className="badge-text-group">
                  <span className="badge-val">17+ Statutory Acts</span>
                  <span className="badge-lbl">Monthly Register Audits</span>
                </div>
              </div>
            </div>
          </div>

          <div className="story-content">
            <span className="story-subtag ">
              <ShieldCheck size={15} />
              PROACTIVE RISK MITIGATION
            </span>
            <h3 className="story-title">
              Monthly Legal Audits & Statutory Register Governance
            </h3>
            <p className="story-desc">
              Failure to comply with state Labour mandates can lead to severe financial penalties and license revocations. Our team conducts 360-degree monthly legal audits across all your establishment branches.
            </p>
            <p className="story-desc">
              We maintain statutory muster rolls, wage registers, Form 24Q TDS files, POSH annual reports, and Factory Act compliance logs—ensuring total audit readiness during government inspections.
            </p>

            <div className="audit-metrics-row">
              <div className="metric-chip">
                <span className="metric-num">100%</span>
                <span className="metric-text">Legal Clearance</span>
              </div>
              <div className="metric-chip">
                <span className="metric-num">24/7</span>
                <span className="metric-text">Advisory Support</span>
              </div>
              <div className="metric-chip">
                <span className="metric-num">0%</span>
                <span className="metric-text">Default Risk</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OUR VISION, MISSION & GOAL ================= */}
        <div className="vmg-section-wrapper">
          <div className="team-header">
            <span className="team-subtag">OUR GUIDING PRINCIPLES</span>
            <h3>Our Vision, Mission & Goals</h3>
            <p>The foundational pillars steering our commitment to statutory & regulatory compliance excellence.</p>
          </div>

          <div className="vmg-grid">
            {/* Vision Card */}
            <div className="vmg-card vision-card">
              <div className="vmg-card-badge pink">
                <Award size={26} />
              </div>
              <span className="vmg-card-tag pink">OUR VISION</span>
              <h3 className="vmg-card-title">Pioneering Compliance Excellence</h3>
              <p className="vmg-card-desc">
                To be India's most trusted and innovative statutory compliance & payroll advisory partner, creating a seamless regulatory ecosystem where businesses operate with total confidence and zero compliance risk.
              </p>
              <ul className="vmg-points">
                <li><CheckCircle2 size={16} className="vmg-check pink" /> Industry-Leading Accuracy</li>
                <li><CheckCircle2 size={16} className="vmg-check pink" /> Complete Regulatory Peace</li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="vmg-card mission-card">
              <div className="vmg-card-badge blue">
                <ShieldCheck size={26} />
              </div>
              <span className="vmg-card-tag blue">OUR MISSION</span>
              <h3 className="vmg-card-title">Empowering Growth & Security</h3>
              <p className="vmg-card-desc">
                To deliver 100% accurate, hassle-free, and timely Labour law advisory, statutory filings, and monthly legal audits—protecting clients from regulatory penalties while empowering leadership to scale operations.
              </p>
              <ul className="vmg-points">
                <li><CheckCircle2 size={16} className="vmg-check blue" /> Proactive Audit Preparedness</li>
                <li><CheckCircle2 size={16} className="vmg-check blue" /> Zero Penalty Risk Record</li>
              </ul>
            </div>

            {/* Goal Card */}
            <div className="vmg-card goal-card">
              <div className="vmg-card-badge green">
                <BarChart3 size={26} />
              </div>
              <span className="vmg-card-tag green">OUR GOAL</span>
              <h3 className="vmg-card-title">100% Audit Readiness Across India</h3>
              <p className="vmg-card-desc">
                To achieve 100% compliance accuracy for over 1,000+ client establishments across India, reducing compliance management complexity by 90% through dedicated experts and monthly register audits.
              </p>
              <ul className="vmg-points">
                <li><CheckCircle2 size={16} className="vmg-check green" /> 1,000+ Empowered Enterprises</li>
                <li><CheckCircle2 size={16} className="vmg-check green" /> 90% Complexity Reduction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Pillars Cards Grid */}
        <div className="pillars-section-wrapper">
          <div className="team-header">
            <span className="team-subtag">OUR CORE PILLARS</span>
            <h3>Why Leading Businesses Choose Us</h3>
            <p>Comprehensive legal frameworks designed for complete organizational safety.</p>
          </div>

          <div className="aboutus-cards-grid">
            <div className="aboutus-card">
              <div className="aboutus-card-icon">
                <ShieldCheck size={26} />
              </div>
              <h3>Statutory Mastery</h3>
              <p>100% adherence to ESIC, PF, PT, MLWF, Factory Acts, and Gratuity regulations with zero penalty records.</p>
            </div>

            <div className="aboutus-card">
              <div className="aboutus-card-icon">
                <Users size={26} />
              </div>
              <h3>Dedicated Advisory</h3>
              <p>Personalized compliance account manager and instant legal consultation for HR and Legal heads.</p>
            </div>

            <div className="aboutus-card">
              <div className="aboutus-card-icon">
                <FileCheck size={26} />
              </div>
              <h3>Monthly Legal Audits</h3>
              <p>Proactive compliance audits and register maintenance ensuring peace of mind during government inspections.</p>
            </div>

            <div className="aboutus-card">
              <div className="aboutus-card-icon">
                <Clock size={26} />
              </div>
              <h3>Weekly Updates</h3>
              <p>Get timely updates and reports on compliance status and regulatory changes.</p>
            </div>

            <div className="aboutus-card">
              <div className="aboutus-card-icon">
                <BarChart3 size={26} />
              </div>
              <h3>MIS Reports</h3>
              <p>Daily status updates and comprehensive MIS reports on statutory compliance.</p>
            </div>
          </div>
        </div>

        {/* Core Team & Leadership Section */}
        <div className="team-section-wrapper">
          <div className="team-header">
            <span className="team-subtag">OUR CORE TEAM</span>
            <h3>Leadership & Key Personnel</h3>
            <p>The dedicated professionals driving excellence in statutory compliance and support.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div
                  className="team-avatar"
                  style={{ backgroundColor: member.bg, color: member.color, borderColor: member.color + '40' }}
                >
                  {member.initials}
                </div>
                <h4 className="team-member-name">{member.name}</h4>
                <span className="team-member-role" style={{ color: member.color }}>{member.role}</span>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

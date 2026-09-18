import React from 'react';
import { Gift, PhoneCall, Mail, MapPin, ArrowUp, Globe, Share2, MessageSquare } from 'lucide-react';
import '../css/Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="app-footer-wrapper">
      <div className="footer-main-container">

        {/* One-Line Bold Highlight Offer Banner in Footer */}
        <div className="footer-offer-banner">
          <div className="footer-offer-badge">
            <Gift size={15} />
            <span>EXCLUSIVE BONUS</span>
          </div>
          <p className="footer-offer-text">
            <strong>COMPLIMENTARY OFFER:</strong> Partner with us for any service & get <strong>FREE Website Creation</strong> or <strong>UI & Blog Modernization</strong> at zero cost!
          </p>
        </div>

        {/* Top 4-Column Grid */}
        <div className="footer-top-grid">

          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo-link">
              <img src="/innovate/logo.jpg" alt="INNOVATEHR Tech Logo" className="footer-logo-img" />
              <div className="logo-text-wrapper">
                <span className="footer-brand-name">INNOVATEHR Tech</span>
                <span className="footer-brand-subtext">Comprehensive HR Solutions</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Simplifying  payroll outsourcing, Labour acts management, ESIC & PF statutory compliance, and legal monthly audits for companies across India.
            </p>
            <div className="footer-social-row">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
                <Globe size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Twitter / X">
                <Share2 size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Facebook">
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#home">Home</a></li>
              <li className="footer-link-item"><a href="#about">About Us</a></li>
              <li className="footer-link-item"><a href="#services">Our Services</a></li>
              <li className="footer-link-item"><a href="#gallery">Gallery</a></li>
              <li className="footer-link-item"><a href="#clients">Our Clients</a></li>
              <li className="footer-link-item"><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Compliance Services */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#services">Payroll Outsourcing</a></li>
              <li className="footer-link-item"><a href="#services">ESIC Consulting & Filing</a></li>
              <li className="footer-link-item"><a href="#services">PF Consultant & Filing</a></li>
              <li className="footer-link-item"><a href="#services">Labour Acts & Gratuity</a></li>
              <li className="footer-link-item"><a href="#services">Establishment Registration</a></li>
              <li className="footer-link-item"><a href="#services">Monthly Legal Audits</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <PhoneCall size={18} />
                <span>+91 8879280798</span>
              </li>
              <li className="contact-item">
                <Mail size={18} />
                <span>innovatehrtech@gmail.com</span>
              </li>
              <li className="contact-item">
                <MapPin size={18} />
                <span>Office no. 77, Sector B, Varsha Nagar, Park Site, Vikhroli (W), Mumbai - 400079</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 INNOVATEHR Tech. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#compliance">Legal Disclaimer</a>
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} title="Back to top">
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}

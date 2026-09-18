import React from 'react';
import { Gift, Globe, Zap, ShieldCheck, ArrowRight, X } from 'lucide-react';
import '../css/OfferModal.css';

export default function OfferModal({ isOpen, onClose, onClaimOffer }) {
  if (!isOpen) return null;

  return (
    <div className="offer-modal-overlay" onClick={onClose}>
      <div className="offer-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="offer-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="offer-modal-header">
          <div className="offer-gift-badge">
            <Gift size={18} className="text-rose-600" />
            <span>EXCLUSIVE COMPLIMENTARY BONUS</span>
          </div>

          <h3 className="offer-modal-title">
            Get <span className="offer-highlight">FREE Website Creation</span> or <span className="offer-highlight">UI & Blog Modernization</span>
          </h3>
          <p className="offer-modal-subtitle">
            Partner with INNOVATEHR Tech for any statutory compliance, payroll, or Labour law service and receive a complete digital upgrade at zero cost!
          </p>
        </div>

        <div className="offer-benefits-grid">
          <div className="offer-benefit-card">
            <div className="benefit-icon-box bg-blue-50 text-blue-600">
              <Globe size={22} />
            </div>
            <div className="benefit-info">
              <h4>100% Free Website Creation</h4>
              <p>Custom modern website designed for your business to establish a high-end  online presence.</p>
            </div>
          </div>

          <div className="offer-benefit-card">
            <div className="benefit-icon-box bg-amber-50 text-amber-600">
              <Zap size={22} />
            </div>
            <div className="benefit-info">
              <h4>UI & Blog Revamp</h4>
              <p>Already have a website? We will modernize your UI design, optimize your blog, and boost SEO speed.</p>
            </div>
          </div>

          <div className="offer-benefit-card">
            <div className="benefit-icon-box bg-emerald-50 text-emerald-600">
              <ShieldCheck size={22} />
            </div>
            <div className="benefit-info">
              <h4>Zero Hidden Charges</h4>
              <p>Included complimentary with any payroll outsourcing, ESIC, PF, PT, or statutory compliance contract.</p>
            </div>
          </div>
        </div>

        <div className="offer-modal-footer">
          <button
            className="offer-claim-btn"
            onClick={() => {
              onClose();
              if (onClaimOffer) onClaimOffer();
            }}
          >
            <span>Claim Offer Now</span>
            <ArrowRight size={18} />
          </button>
          <button className="offer-cancel-btn" onClick={onClose}>
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}

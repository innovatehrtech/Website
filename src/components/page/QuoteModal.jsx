import React, { useState, useEffect } from 'react';
import {
  X as XIcon,
  Calculator as CalculatorIcon,
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
  Building2 as BuildingIcon,
  User as UserIcon,
  PhoneCall as PhoneIcon,
  Mail as MailIcon,
  Sparkles as SparklesIcon,
  Gift,
  Loader2
} from 'lucide-react';
import '../css/QuoteModal.css';

const services = [
  {
    id: 'payroll',
    name: 'Payroll & Statutory Outsourcing',
    basePrice: 45
  },
  {
    id: 'shops',
    name: 'Shops & Establishment Compliance',
    basePrice: 60
  },
  {
    id: 'audit',
    name: 'Full Compliance Risk Audit',
    basePrice: 75
  },
  {
    id: 'registers',
    name: 'Statutory Registers Maintenance',
    basePrice: 50
  },
  {
    id: 'legal-notices',
    name: 'Legal Notices & Statutory Representation',
    basePrice: 55
  },
  {
    id: 'hr-policies',
    name: 'HR Policies & Handbook Drafting',
    basePrice: 40
  }
];

export default function QuoteModal({ isOpen, onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('payroll');
  const [headcount, setHeadcount] = useState(200);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    requirements: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeServiceObj = services.find((s) => s.id === selectedService) || services[0];
  const calculatedMonthlyEstimate = activeServiceObj.basePrice * headcount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required';
    if (!formData.phone.trim()) newErrors.phone = 'Mobile phone is required';
    if (!formData.email.trim()) newErrors.email = ' email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const payload = {
      formType: 'quote',
      service: activeServiceObj.name,
      headcount,
      monthlyEstimate: calculatedMonthlyEstimate,
      ...formData
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (onSubmit) {
        onSubmit({
          ...payload,
          emailSent: result.success
        });
      }

      setStep(1);
      setFormData({ companyName: '', contactPerson: '', phone: '', email: '', requirements: '' });
      onClose();
    } catch (err) {
      console.error('Quote submission error:', err);
      alert('Unable to submit quote request at the moment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="quote-modal-close"
          aria-label="Close modal"
        >
          <XIcon className="w-5 h-5" />
        </button>
        <div className="quote-modal-header">
          <div className="quote-modal-icon-badge">
            <CalculatorIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="quote-modal-tag">Interactive Proposal Estimator</span>
            <h3 className="quote-modal-title">Request Compliance Audit</h3>
          </div>
        </div>

        <div className="quote-step-bar">
          <div className="quote-step-item">
            <span className={`quote-step-num ${step >= 1 ? 'active' : 'inactive'}`}>1</span>
            <span className="quote-step-label">Select Service</span>
          </div>
          <div className="quote-step-divider"></div>
          <div className="quote-step-item">
            <span className={`quote-step-num ${step >= 2 ? 'active' : 'inactive'}`}>2</span>
            <span className="quote-step-label">Headcount</span>
          </div>
          <div className="quote-step-divider"></div>
          <div className="quote-step-item">
            <span className={`quote-step-num ${step >= 3 ? 'active' : 'inactive'}`}>3</span>
            <span className="quote-step-label">Org Details</span>
          </div>
        </div>

        {/* STEP 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="quote-step-heading">Step 1: Choose Your Primary HR / Statutory Need</h4>

            <div className="quote-service-grid">
              {services.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`quote-service-card ${selectedService === srv.id ? 'selected' : ''}`}
                >
                  <div className="flex items-center space-x-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div className="quote-radio-dot">
                      {selectedService === srv.id && <div className="quote-radio-inner"></div>}
                    </div>
                    <span className="quote-service-name">{srv.name}</span>
                  </div>
                  <span className="quote-service-price">From ₹{srv.basePrice}/emp</span>
                </div>
              ))}
            </div>

            <div className="quote-actions-row" style={{ justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-modal-next"
              >
                <span>Next: Employee Headcount</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}


        {step === 2 && (
          <div className="space-y-6">
            <h4 className="quote-step-heading">Step 2: Total Employee Headcount</h4>

            <div className="quote-slider-box">
              <div className="quote-slider-row">
                <span className="text-xs text-slate-600 font-medium" style={{ fontSize: '0.8rem', color: '#475569', fontWeight: '600' }}>Total Active Employees</span>
                <span className="quote-staff-count">{headcount} Staff</span>
              </div>

              <input
                type="range"
                min="10"
                max="1500"
                step="10"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="quote-range-input"
              />

              <div className="quote-slider-ticks">
                <span>10 (Startup)</span>
                <span>200 (SME)</span>
                <span>500 (Mid-Enterprise)</span>
                <span>1500+ (Enterprise)</span>
              </div>
            </div>
            <div className="quote-estimate-card">
              <div>
                <p style={{ fontSize: '0.75rem', color: '#475569', fontWeight: '600' }}>Estimated Monthly Retainer</p>
                <p style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: '700' }}>{activeServiceObj.name} for {headcount} employees</p>
                <p style={{ fontSize: '0.75rem', color: '#e11d48', fontWeight: '700', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Gift size={14} />
                  <span>Includes 100% FREE Website Creation or UI Revamp!</span>
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className="quote-estimate-price">₹{calculatedMonthlyEstimate.toLocaleString('en-IN')}</p>
                <p style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: '500' }}>*Excluding statutory taxes</p>
              </div>
            </div>

            <div className="quote-actions-row">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-modal-back"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-modal-next"
              >
                <span>Next: Organization Info</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact Details Form */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h4 className="quote-step-heading">Step 3: Enter Official Contact Information</h4>

            <div className="quote-form-grid">
              <div className="quote-field-group">
                <label>Company Name *</label>
                <div className="quote-input-wrapper">
                  <BuildingIcon className="w-4 h-4" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. Acme Technologies Ltd."
                    className="quote-input-field"
                  />
                </div>
                {errors.companyName && <p className="quote-error-text">{errors.companyName}</p>}
              </div>

              <div className="quote-field-group">
                <label>Contact Person *</label>
                <div className="quote-input-wrapper">
                  <UserIcon className="w-4 h-4" />
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar (HR Head)"
                    className="quote-input-field"
                  />
                </div>
                {errors.contactPerson && <p className="quote-error-text">{errors.contactPerson}</p>}
              </div>

              <div className="quote-field-group">
                <label>Mobile Phone *</label>
                <div className="quote-input-wrapper">
                  <PhoneIcon className="w-4 h-4" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    className="quote-input-field"
                  />
                </div>
                {errors.phone && <p className="quote-error-text">{errors.phone}</p>}
              </div>

              <div className="quote-field-group">
                <label>Official  Email *</label>
                <div className="quote-input-wrapper">
                  <MailIcon className="w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="hr@company.com"
                    className="quote-input-field"
                  />
                </div>
                {errors.email && <p className="quote-error-text">{errors.email}</p>}
              </div>
            </div>

            <div className="quote-field-group">
              <label>Specific Audit / Statutory Requirements (Optional)</label>
              <textarea
                name="requirements"
                rows="2"
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="Mention any state locations,  licensing details, or register maintenance needs..."
                className="quote-textarea"
              ></textarea>
            </div>

            <div className="quote-actions-row">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-modal-back"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="btn-modal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting</span>
                  </>
                ) : (
                  <>
                    <span>Submit Audit Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}

export { QuoteModal };

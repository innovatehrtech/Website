import React, { useState, useEffect } from 'react';
import { ArrowRight, PhoneCall, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/Home.css';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/innovate/hr_slide1.jpg',
    title: 'INNOVATEHR Tech  Headquarters',
    sub: 'Executive Meeting & Strategy Room'
  },
  {
    id: 2,
    image: '/innovate/hr_slide2.jpg',
    title: 'Modern Reception & Welcome Desk',
    sub: 'State-of-the-Art HR Infrastructure'
  },
  {
    id: 3,
    image: '/innovate/hr_slide3.jpg',
    title: 'Statutory Compliance & Legal Dashboard',
    sub: 'Full Audit & Payroll Solutions'
  },
  {
    id: 4,
    image: '/innovate/hr_slide4.jpg',
    title: 'Executive Leadership & Partnerships',
    sub: 'Comprehensive  HR Management'
  }
];

export default function Home({ onExploreServices, onContactClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="home-hero-section">
      {/* Dynamic Sliding Carousel Track (Smooth 100% horizontal slide per image) */}
      <div className="hero-slider-window">
        <div
          className="hero-slider-track"
          style={{ transform: `translateX(-${currentSlide * 25}%)` }}
        >
          {HERO_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="hero-slide-card"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Branded Watermark Badge on top-right of image */}
              <div className="slide-brand-watermark">
                <img src="/innovate/logo.jpg" alt="INNOVATEHR Tech Logo" className="watermark-logo" />
                <div className="watermark-text-group">
                  <span className="watermark-brand">INNOVATEHR Tech</span>
                  <span className="watermark-subtext">Comprehensive HR Solutions</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rich Glass Overlay for Contrast & Photo Visibility */}
        <div className="hero-bg-overlay"></div>
      </div>

      {/* Hero Text Content */}
      <div className="home-hero-container">
        <h1 className="hero-main-title">
          Empowering Businesses with <br />
          <span className="hero-gradient-text">Complete 100% Labour Law & Statutory Compliance</span>
        </h1>

        <p className="hero-description">
          From Payroll Outsourcing, ESIC, PF, and PT Registration to Labour Acts & Monthly Legal Audits.
          We handle your  compliance end-to-end so you can focus on scale.
        </p>

        <div className="hero-cta-group">
          <a
            href="#services"
            className="btn-primary-glow"
            onClick={(e) => {
              e.preventDefault();
              if (onExploreServices) onExploreServices();
            }}
          >
            <span>Explore Our Services</span>
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="btn-secondary-outlined"
            onClick={onContactClick}
          >
            <span>Talk to an Expert</span>
            <PhoneCall size={18} />
          </a>
        </div>

        {/* Feature Highlights Pills */}
        <div className="hero-highlights-row">
          <div className="highlight-tag">
            <CheckCircle2 size={16} className="check-icon-svg" /> Payroll Outsourcing
          </div>
          <div className="highlight-tag">
            <CheckCircle2 size={16} className="check-icon-svg" /> ESIC & PF Registration
          </div>
          <div className="highlight-tag">
            <CheckCircle2 size={16} className="check-icon-svg" /> Labour Acts & Gratuity
          </div>
          {/* <div className="highlight-tag">
            <CheckCircle2 size={16} className="check-icon-svg" /> Factory & Shop Registration
          </div> */}
        </div>

        {/* Slide Indicator Dots & Prev/Next Controls */}
        <div className="hero-slider-controls">
          <button
            className="slider-nav-btn"
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="hero-slider-dots">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            className="slider-nav-btn"
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="hero-stats-banner">
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Audit Accuracy</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Legal Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Home as HOME };



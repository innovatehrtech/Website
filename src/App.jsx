import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import {
  Navbar,
  Home,
  AboutUs,
  OurServices,
  Gallery,
  Clients,
  ComplianceCalendar,
  ContactUs,
  QuoteModal,
  OfferModal,
  Footer
} from './components/page';
import './App.css';

function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [viewMode, setViewMode] = useState('full');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  const handleNavbarAction = (msg) => {
    if (msg.includes('Hey') || msg.includes('Quote')) {
      setIsQuoteModalOpen(true);
    } else {
      showToast(msg);
    }
  };

  const handleSubServiceSelect = (serviceTitle) => {
    setSelectedSubService({ title: serviceTitle, id: Date.now() });
  };

  const handleQuoteSubmit = (quoteData) => {
    showToast(`Audit request submitted for ${quoteData.companyName || 'your organization'}!`);
  };

  return (
    <div className={`app-root ${viewMode === 'mobile-sim' ? 'simulation-active' : ''}`}>
      <div className={viewMode === 'mobile-sim' ? 'mobile-simulator-frame' : 'full-viewport-wrapper'}>

        <Navbar
          onActionClick={handleNavbarAction}
          onOfferClick={() => setIsOfferModalOpen(true)}
          onServiceSelect={handleSubServiceSelect}
        />

        {toastMessage && (
          <div className="interactive-toast">
            <Sparkles size={16} color="#fbbf24" />
            <span>{toastMessage}</span>
          </div>
        )}

        <main className="main-content">
          <Home
            onExploreServices={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            onContactClick={() => setIsQuoteModalOpen(true)}
          />
          <AboutUs />
          <OurServices
            selectedServiceRequest={selectedSubService}
            onSelectService={(serviceName) => showToast(`Selected service: ${serviceName}`)}
            onQuoteClick={() => setIsQuoteModalOpen(true)}
          />
          <ComplianceCalendar />
          <Gallery />
          <Clients />
          <ContactUs onSendMessage={(msg) => showToast(msg)} />
        </main>

        {/* Interactive Proposal Estimator Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          onSubmit={handleQuoteSubmit}
        />

        {/* Special Complimentary Offer Popup Modal */}
        <OfferModal
          isOpen={isOfferModalOpen}
          onClose={() => setIsOfferModalOpen(false)}
          onClaimOffer={() => setIsQuoteModalOpen(true)}
        />

        <Footer />

      </div>
    </div>
  );
}

export default App;

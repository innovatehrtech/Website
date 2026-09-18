import React from 'react';
import '../css/Clients.css';

export default function Clients() {
  const clientsList = [
    {
      name: "Elastic Run",
      logo: "/clients/elasticrun/elasticrun-logo.svg",
      role: "Elastic Run"
    },
    {
      name: "Buzzworks",
      logo: "/clients/buzzwork/buzzworks.png",
      role: "Buzzworks"
    }
  ];

  return (
    <section id="clients" className="page-section clients-section">
      <div className="section-header">
        <span className="section-tag">TRUSTED BY INDUSTRY LEADERS</span>
        <h2>Our Clients</h2>
        <p>Partnering with visionary enterprises to deliver 100% legal & statutory Labour compliance.</p>
      </div>

      {/* Brand Logo Cards */}
      <div className="clients-grid">
        {clientsList.map((client, idx) => (
          <div key={idx} className="client-brand-card">
            <div className="client-logo-box">
              <img src={client.logo} alt={`${client.name} Logo`} className="client-brand-logo" />
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
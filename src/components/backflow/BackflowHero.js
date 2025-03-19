import React from 'react';
import Link from 'next/link';
import './BackflowHero.scss';

function BackflowHero({ title, description, features }) {
  return (
    <div className="backflow-hero-container">
      <div className="backflow-hero-content">
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        {features.length > 0 && (
          <div className="backflow-highlights">
            {features.map((feature, index) => (
              <div key={index} className="backflow-feature-highlight">
                <span className="backflow-highlight-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
        <Link href="/contact" className="backflow-cta-button">
          Schedule Now →
        </Link>
      </div>
    </div>
  );
}

export default BackflowHero;

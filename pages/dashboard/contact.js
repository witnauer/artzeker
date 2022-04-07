import React from 'react';
import DashboardLayout from '../../layout/dashboardLayout';
// import styles from '../../styles/Artworks.module.css';

export default function Contact() {
  return (
    <div className="dashboard-container">
      <h2>Contact</h2>
      <p>Link your social media accounts here:</p>
      <h4>Full Name</h4>
      <p>Cape Cod, Massachusetts, USA</p>
    </div>
  );
}

Contact.Layout = DashboardLayout;

import React from 'react';
import DashboardLayout from '../../layout/dashboardLayout';
// import styles from '../../styles/Artworks.module.css';

export default function Social() {
  return (
    <div className="dashboard-container">
      <h2>Social</h2>
      <p>Link your social media accounts here:</p>
      <h4>Facebook</h4>
      <input type="text" placeholder="https://facebook.com/644tttR$%$erdrEE" />
      <p>Lorem ipsum dolor sit amet.</p>
      <h4>Instagram</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <h4>Twitter</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <h4>WhatsApp</h4>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

Social.Layout = DashboardLayout;

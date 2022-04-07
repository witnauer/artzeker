import React from 'react';
import DashboardLayout from '../../layout/dashboardLayout';
// import styles from '../../styles/Artworks.module.css';

export default function Settings() {
  return (
    <div className="dashboard-container">
      <h2>Settings</h2>
      <p>Manage your subscription and Artzeker Profile.</p>
    </div>
  );
}

Settings.Layout = DashboardLayout;

import dynamic from 'next/dynamic';
const DashboardLayout = dynamic(() => import('../../layout/dashboardLayout'));
// import DashboardLayout from '../../layout/dashboardLayout';

export default function index() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Manage your website content through this Dashboard</p>
    </div>
  );
}

index.Layout = DashboardLayout;

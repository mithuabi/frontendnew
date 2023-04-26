import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import AddClientPage from "./pages/AddClientPage";
import AddRepairPage from "./pages/AddRepairPage";
import RepairManagementPage from './pages/RepairManagementPage';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {element: <Navigate to='/dashboard/repair-management' />, index: true},
        {path: 'repair-management', element: <RepairManagementPage />},
        {path: 'repair-management/add-repair', element: <AddRepairPage />},
        {path: 'repair-management/add-client', element: <AddClientPage />},
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}

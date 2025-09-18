import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/login";
import AdminLayout from "@/layout/AdminLayout";
import SuperAdminLayout from "@/layout/SuperAdminLayout";
import Dashboard from "@/pages/admin/dashboard";
import SuperDashboard from "@/pages/super-admin/Super-dashboard";
import SuperUser from "@/pages/super-admin/Super-user";


function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/auth/login" element={<Login />} />

        {/* Admin layout + dashboard */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          
        </Route>
        <Route path="/super-admin" element={<SuperAdminLayout/>}>
          <Route path="Super-dashboard" element={<SuperDashboard/>}/>
          <Route path="Super-user" element={<SuperUser/>}/>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

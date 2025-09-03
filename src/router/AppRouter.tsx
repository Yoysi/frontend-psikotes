import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Login from "@/pages/auth/login";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/auth/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter;
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/Landingpage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import AdminDashboard, { DashboardOverview } from './pages/AdminDashboard'
import Booking from './pages/Booking'
import Buses from './pages/Buses'
import RoutesPage from './pages/Routes'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Replace with actual auth logic
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

const Layout = () => {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <style>{`html, body { width: 100%; overflow-x: hidden; }`}</style>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardOverview />} />
          <Route path="bookings" element={<Booking />} />
          <Route path="buses" element={<Buses />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

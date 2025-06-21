
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import LandingPage from '../components/landing/LandingPage';
import LoginPage from '../components/auth/LoginPage';
import SignupPage from '../components/auth/SignupPage';
import Dashboard from '../components/dashboard/Dashboard';
import SalesModule from '../components/sales/SalesModule';
import ServiceModule from '../components/service/ServiceModule';
import CashbookModule from '../components/cashbook/CashbookModule';
import ProductsModule from '../components/products/ProductsModule';
import SettingsPage from '../components/settings/SettingsPage';
import ProfilePage from '../components/profile/ProfilePage';
import NotFoundPage from '../components/common/NotFoundPage';
import ProtectedRoute from '../components/auth/ProtectedRoute';

const Index = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/sales" element={
              <ProtectedRoute>
                <SalesModule />
              </ProtectedRoute>
            } />
            <Route path="/service" element={
              <ProtectedRoute>
                <ServiceModule />
              </ProtectedRoute>
            } />
            <Route path="/cashbook" element={
              <ProtectedRoute>
                <CashbookModule />
              </ProtectedRoute>
            } />
            <Route path="/products" element={
              <ProtectedRoute>
                <ProductsModule />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Index;

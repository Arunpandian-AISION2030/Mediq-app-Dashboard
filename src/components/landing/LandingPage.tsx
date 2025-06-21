
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  Wrench, 
  Calculator, 
  Package, 
  Settings,
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Stethoscope
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const LandingPage = () => {
  const { isDark, toggleTheme } = useTheme();

  const products = [
    {
      id: 'sales',
      title: 'Sales Management',
      description: 'Track and manage medical equipment sales with advanced analytics',
      icon: TrendingUp,
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      features: ['Lead Management', 'Sales Analytics', 'Quote Generation', 'Customer Tracking'],
      popular: true
    },
    {
      id: 'service',
      title: 'Service Management',
      description: 'Comprehensive service tracking for medical equipment maintenance',
      icon: Wrench,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      features: ['Service Scheduling', 'Technician Assignment', 'Parts Management', 'Service History'],
      popular: false
    },
    {
      id: 'cashbook',
      title: 'Financial Management',
      description: 'Complete financial tracking with automated reporting',
      icon: Calculator,
      color: 'bg-gradient-to-r from-purple-500 to-pink-600',
      features: ['Income Tracking', 'Expense Management', 'Financial Reports', 'Tax Integration'],
      popular: false
    },
    {
      id: 'products',
      title: 'Product Catalog',
      description: 'Manage your medical equipment inventory and specifications',
      icon: Package,
      color: 'bg-gradient-to-r from-orange-500 to-red-600',
      features: ['Inventory Management', 'Product Specifications', 'Price Management', 'Stock Alerts'],
      popular: false
    },
    {
      id: 'hr',
      title: 'HR Management',
      description: 'Employee management and performance tracking',
      icon: Users,
      color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      features: ['Employee Records', 'Attendance Tracking', 'Performance Reviews', 'Payroll Integration'],
      popular: false
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'Business intelligence and advanced reporting',
      icon: Activity,
      color: 'bg-gradient-to-r from-teal-500 to-green-600',
      features: ['Custom Reports', 'Data Visualization', 'Trend Analysis', 'Export Options'],
      popular: false
    }
  ];

  const stats = [
    { label: 'Active Users', value: '500+', icon: Users },
    { label: 'Sales Tracked', value: '₹50M+', icon: TrendingUp },
    { label: 'Service Calls', value: '10K+', icon: Wrench },
    { label: 'Happy Clients', value: '98%', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MediqSystem
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={toggleTheme}>
              {isDark ? '☀️' : '🌙'}
            </Button>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500">
            🚀 Trusted by 500+ Medical Equipment Professionals
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Complete Business Management for Medical Equipment Industry
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your sales, service, and operations with our comprehensive offline-first platform designed specifically for medical equipment businesses in Bangalore and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Zoho Style */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              All Products & Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to run your medical equipment business efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className="w-7 h-7 text-white" />
                    </div>
                    {product.popular && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Link to="/signup" className="flex-1">
                      <Button className="w-full group-hover:bg-blue-600">
                        Get Started
                      </Button>
                    </Link>
                    <Button variant="outline" className="px-3">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of medical equipment professionals who trust MediqSystem for their daily operations.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Free Trial Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">MediqSystem</span>
          </div>
          <p className="text-gray-400 mb-4">
            Professional Medical Equipment Sales & Service Management
          </p>
          <p className="text-sm text-gray-500">
            © 2024 MediqSystem.com. All rights reserved. | Bangalore, India
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

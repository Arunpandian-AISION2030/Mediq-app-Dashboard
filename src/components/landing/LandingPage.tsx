
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
  Stethoscope,
  Shield,
  Zap,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const LandingPage = () => {
  const { isDark, toggleTheme } = useTheme();

  const products = [
    {
      id: 'sales',
      title: 'Sales Management',
      description: 'Advanced CRM for medical equipment sales with lead tracking and analytics',
      icon: TrendingUp,
      color: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      features: ['Lead Management', 'Sales Analytics', 'Quote Generation', 'Customer Tracking'],
      popular: true,
      category: 'Core Business'
    },
    {
      id: 'service',
      title: 'Service Management',
      description: 'Complete service lifecycle management for critical care equipment',
      icon: Wrench,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      features: ['Service Scheduling', 'Technician Assignment', 'Parts Management', 'Service History'],
      popular: false,
      category: 'Operations'
    },
    {
      id: 'cashbook',
      title: 'Financial Management',
      description: 'Comprehensive financial tracking with automated reporting and compliance',
      icon: Calculator,
      color: 'bg-gradient-to-r from-purple-500 to-pink-600',
      features: ['Income Tracking', 'Expense Management', 'Financial Reports', 'Tax Integration'],
      popular: false,
      category: 'Finance'
    },
    {
      id: 'products',
      title: 'Product Catalog',
      description: 'Complete inventory management for ventilators, monitors, and critical care equipment',
      icon: Package,
      color: 'bg-gradient-to-r from-orange-500 to-red-600',
      features: ['Inventory Management', 'Product Specifications', 'Price Management', 'Stock Alerts'],
      popular: false,
      category: 'Inventory'
    },
    {
      id: 'hr',
      title: 'HR Management',
      description: 'Employee management and performance tracking for healthcare teams',
      icon: Users,
      color: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      features: ['Employee Records', 'Attendance Tracking', 'Performance Reviews', 'Payroll Integration'],
      popular: false,
      category: 'Human Resources'
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence and advanced reporting for critical insights',
      icon: Activity,
      color: 'bg-gradient-to-r from-teal-500 to-green-600',
      features: ['Custom Reports', 'Data Visualization', 'Trend Analysis', 'Export Options'],
      popular: false,
      category: 'Analytics'
    }
  ];

  const stats = [
    { label: 'Healthcare Professionals', value: '500+', icon: Users, color: 'text-blue-600' },
    { label: 'Equipment Sales Tracked', value: '₹50M+', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Service Calls Managed', value: '10K+', icon: Wrench, color: 'text-purple-600' },
    { label: 'Customer Satisfaction', value: '98%', icon: Heart, color: 'text-red-600' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security for sensitive medical data'
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description: 'Instant updates across all devices and team members'
    },
    {
      icon: Globe,
      title: 'Cloud & Offline',
      description: 'Work anywhere with seamless offline capabilities'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Trusted by leading medical equipment companies'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Header */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediqSystem
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">Critical Care Solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={toggleTheme} className="rounded-full">
              {isDark ? '☀️' : '🌙'}
            </Button>
            <Link to="/login">
              <Button variant="outline" className="hidden sm:flex">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        <div className="relative container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
            🚀 Revolutionizing Critical Care Management
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in leading-tight">
            Intelligent Business Solutions for Medical Equipment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Streamline your medical equipment business with our comprehensive platform. From ventilators to patient monitors, 
            manage sales, service, and operations with precision and reliability in critical care environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg shadow-2xl">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Healthcare Professionals Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Built specifically for critical care and medical equipment management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Complete Medical Equipment Management Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From ventilators to patient monitoring systems, manage every aspect of your medical equipment business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-3xl ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    {product.popular && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Link to="/signup" className="flex-1">
                      <Button className="w-full group-hover:bg-blue-600 transition-colors">
                        Get Started
                      </Button>
                    </Link>
                    <Button variant="outline" className="px-4">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Revolutionize Your Medical Equipment Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of healthcare professionals who trust MediqSystem for managing critical care equipment, 
            from ventilators to patient monitoring systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-2xl">
                Start Your Free Trial Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">MediqSystem</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional Medical Equipment Sales & Service Management Platform for Critical Care Solutions
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Sales Management</li>
                <li>Service Management</li>
                <li>Financial Tracking</li>
                <li>Product Catalog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@mediqsystem.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MediqSystem.com. All rights reserved. | Revolutionizing Critical Care Management
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

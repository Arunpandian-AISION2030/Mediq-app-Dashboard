
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Wrench, 
  Calculator, 
  Package, 
  Users, 
  Activity,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ProductsSection = () => {
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

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Complete Medical Equipment Management Suite
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From ventilators to patient monitoring systems, manage every aspect of your medical equipment business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-3xl ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <product.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
  );
};

export default ProductsSection;


import React from 'react';
import { Users, TrendingUp, Wrench, Heart } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { label: 'Healthcare Professionals', value: '500+', icon: Users, color: 'text-blue-600' },
    { label: 'Equipment Sales Tracked', value: '₹50M+', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Service Calls Managed', value: '10K+', icon: Wrench, color: 'text-purple-600' },
    { label: 'Customer Satisfaction', value: '98%', icon: Heart, color: 'text-red-600' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}>
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

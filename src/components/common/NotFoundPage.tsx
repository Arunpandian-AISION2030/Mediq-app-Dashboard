
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search, Stethoscope } from 'lucide-react';

const NotFoundPage = () => {
  const suggestions = [
    { title: 'Dashboard', path: '/dashboard', description: 'View your main dashboard' },
    { title: 'Sales Module', path: '/sales', description: 'Manage your sales entries' },
    { title: 'Service Module', path: '/service', description: 'Track service activities' },
    { title: 'Products', path: '/products', description: 'Browse product catalog' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text animate-pulse">
            404
          </div>
          <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
            Oops! Page Not Found
          </div>
        </div>

        {/* Friendly Message */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              This page seems to have taken a sick day!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The page you're looking for might have been moved, deleted, or doesn't exist. 
              Don't worry - let's get you back to where you need to be.
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Suggestions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {suggestions.map((suggestion, index) => (
            <Link key={index} to={suggestion.path}>
              <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0">
                <CardContent className="p-4 text-left">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {suggestion.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {suggestion.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          <Search className="w-4 h-4 inline mr-1" />
          Try searching for what you need in the main navigation
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Plus, Download, Filter } from 'lucide-react';
import LayoutWrapper from '../layout/LayoutWrapper';

const SalesModule = () => {
  return (
    <LayoutWrapper>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Sales Management</h1>
            <p className="text-gray-600 dark:text-gray-300">Track and manage your medical equipment sales</p>
          </div>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-600">
            <Plus className="w-4 h-4 mr-2" />
            New Sale
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Today's Sales</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">₹2,45,000</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          {/* More stat cards would go here */}
        </div>

        {/* Sales Table */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Sales</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-12 text-gray-500">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No sales entries yet. Create your first sale to get started!</p>
                <Button className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Add First Sale
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  );
};

export default SalesModule;

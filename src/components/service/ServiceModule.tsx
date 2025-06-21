
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Plus, Download, Filter } from 'lucide-react';
import LayoutWrapper from '../layout/LayoutWrapper';

const ServiceModule = () => {
  return (
    <LayoutWrapper>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Service Management</h1>
            <p className="text-gray-600 dark:text-gray-300">Track medical equipment service and maintenance</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-600">
            <Plus className="w-4 h-4 mr-2" />
            New Service
          </Button>
        </div>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Service Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-gray-500">
              <Wrench className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No service calls yet. Create your first service entry!</p>
              <Button className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-600">
                <Plus className="w-4 h-4 mr-2" />
                Add First Service
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  );
};

export default ServiceModule;

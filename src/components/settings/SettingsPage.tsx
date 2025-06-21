
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Download, Upload, Shield } from 'lucide-react';
import LayoutWrapper from '../layout/LayoutWrapper';

const SettingsPage = () => {
  return (
    <LayoutWrapper>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your account and application preferences</p>
        </div>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Backup Data</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Export all your data as backup</p>
              </div>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Backup
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Restore Data</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Import data from backup file</p>
              </div>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Restore
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  );
};

export default SettingsPage;

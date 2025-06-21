
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Plus, Download, Filter } from 'lucide-react';
import LayoutWrapper from '../layout/LayoutWrapper';

const CashbookModule = () => {
  return (
    <LayoutWrapper>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Financial Management</h1>
            <p className="text-gray-600 dark:text-gray-300">Track income, expenses and financial transactions</p>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-600">
            <Plus className="w-4 h-4 mr-2" />
            New Transaction
          </Button>
        </div>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Cashbook Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-gray-500">
              <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No transactions recorded yet. Add your first entry!</p>
              <Button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-600">
                <Plus className="w-4 h-4 mr-2" />
                Add First Transaction
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  );
};

export default CashbookModule;

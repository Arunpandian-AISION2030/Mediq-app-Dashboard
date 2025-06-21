
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Plus, Download, Filter } from 'lucide-react';
import LayoutWrapper from '../layout/LayoutWrapper';

const ProductsModule = () => {
  return (
    <LayoutWrapper>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Catalog</h1>
            <p className="text-gray-600 dark:text-gray-300">Manage your medical equipment inventory</p>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-red-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-gray-500">
              <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No products in catalog yet. Add your first product!</p>
              <Button className="mt-4 bg-gradient-to-r from-orange-500 to-red-600">
                <Plus className="w-4 h-4 mr-2" />
                Add First Product
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  );
};

export default ProductsModule;

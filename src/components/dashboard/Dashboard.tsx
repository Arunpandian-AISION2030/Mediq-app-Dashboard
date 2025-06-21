
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Wrench, 
  Calculator, 
  Package, 
  Users, 
  Activity,
  Plus,
  BarChart3,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import LayoutWrapper from '../layout/LayoutWrapper';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Sales',
      value: '₹12,45,000',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-100'
    },
    {
      title: 'Active Services',
      value: '23',
      change: '+3',
      trend: 'up',
      icon: Wrench,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      title: 'Pending Payments',
      value: '₹89,500',
      change: '-5.2%',
      trend: 'down',
      icon: Calculator,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      title: 'Products',
      value: '156',
      change: '+8',
      trend: 'up',
      icon: Package,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  const quickActions = [
    {
      title: 'New Sale',
      description: 'Record a new sale entry',
      icon: Plus,
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      path: '/sales'
    },
    {
      title: 'Service Call',
      description: 'Log a service request',
      icon: Wrench,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      path: '/service'
    },
    {
      title: 'Add Transaction',
      description: 'Record cashbook entry',
      icon: Calculator,
      color: 'bg-gradient-to-r from-purple-500 to-pink-600',
      path: '/cashbook'
    },
    {
      title: 'View Reports',
      description: 'Generate business reports',
      icon: BarChart3,
      color: 'bg-gradient-to-r from-orange-500 to-red-600',
      path: '/reports'
    }
  ];

  const recentActivities = [
    {
      type: 'sale',
      title: 'New sale recorded',
      description: 'Ultrasound Machine - ₹2,45,000',
      time: '2 hours ago',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      type: 'service',
      title: 'Service completed',
      description: 'X-Ray Machine maintenance',
      time: '4 hours ago',
      icon: Wrench,
      color: 'text-blue-600'
    },
    {
      type: 'payment',
      title: 'Payment received',
      description: 'Apollo Hospital - ₹1,20,000',
      time: '1 day ago',
      icon: Calculator,
      color: 'text-purple-600'
    }
  ];

  const upcomingTasks = [
    {
      title: 'Service Due: CT Scanner',
      location: 'Manipal Hospital',
      time: 'Tomorrow 10:00 AM',
      priority: 'high'
    },
    {
      title: 'Follow-up: MRI Machine Quote',
      location: 'Fortis Healthcare',
      time: 'Friday 2:00 PM',
      priority: 'medium'
    },
    {
      title: 'Installation: Ventilator',
      location: 'AIIMS Bangalore',
      time: 'Next Monday',
      priority: 'low'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600';
      case 'medium': return 'bg-yellow-100 text-yellow-600';
      case 'low': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <LayoutWrapper>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-blue-100">
            Here's what's happening with your medical equipment business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
              Quick Actions
            </CardTitle>
            <CardDescription>
              Frequently used features for faster workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.path}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {action.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Recent Activities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center ${activity.color}`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Upcoming Tasks</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900 dark:text-white">{task.title}</p>
                        <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{task.location}</p>
                      <p className="text-xs text-gray-500 mt-1">{task.time}</p>
                    </div>
                    <AlertCircle className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Dashboard;

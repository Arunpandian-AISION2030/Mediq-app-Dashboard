
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Home,
  TrendingUp,
  Wrench,
  Calculator,
  Package,
  Settings,
  Search,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  Stethoscope
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useIsMobile } from '../../hooks/use-mobile';
import { toast } from 'sonner';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Sales', href: '/sales', icon: TrendingUp },
    { name: 'Service', href: '/service', icon: Wrench },
    { name: 'Cashbook', href: '/cashbook', icon: Calculator },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Settings', href: '/settings', icon: Settings }
  ];

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const isActive = (href: string) => location.pathname === href;

  const NavigationContent = () => (
    <nav className="space-y-1 p-2">
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 w-full ${
            isActive(item.href)
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          <item.icon className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium">{item.name}</span>
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Mobile Menu Trigger & Logo */}
            <div className="flex items-center space-x-3">
              {isMobile ? (
                <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="lg:hidden p-2">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-72 p-0">
                    <div className="flex items-center space-x-2 p-4 border-b">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        MediqSystem
                      </span>
                    </div>
                    <NavigationContent />
                  </SheetContent>
                </Sheet>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              )}
              
              <Link to="/dashboard" className="flex items-center space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
                  MediqSystem
                </span>
              </Link>
            </div>

            {/* Search - Hidden on small mobile */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search sales, services, products..."
                  className="pl-10 bg-gray-50 dark:bg-gray-800 border-0 h-9"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile Search */}
              <Button variant="ghost" size="sm" className="md:hidden p-2">
                <Search className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
                {isDark ? '☀️' : '🌙'}
              </Button>
              
              <Button variant="ghost" size="sm" className="relative p-2">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                <Badge className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-xs bg-red-500 hover:bg-red-500 p-0 flex items-center justify-center">
                  3
                </Badge>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-7 w-7 sm:h-8 sm:w-8 rounded-full p-0">
                    <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm">
                        {user?.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex flex-col space-y-1 p-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                    <Badge variant="secondary" className="w-fit">
                      {user?.role}
                    </Badge>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown - Only for non-mobile devices */}
        {!isMobile && isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <div className="px-4 py-3">
              <NavigationContent />
            </div>
          </div>
        )}
      </header>

      <div className="flex min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)]">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-14 xl:pt-16">
          <div className="flex-1 flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-r">
            <div className="flex-1 px-4 py-6">
              <NavigationContent />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:pl-64">
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 pb-20 lg:pb-6">
            {children}
          </div>
        </main>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t z-50 safe-area-inset-bottom">
        <div className="grid grid-cols-5 gap-1 py-1">
          {navigationItems.slice(0, 5).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center py-2 px-1 transition-colors min-h-[60px] ${
                isActive(item.href)
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs leading-tight text-center">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;

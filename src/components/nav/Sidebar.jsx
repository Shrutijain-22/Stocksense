import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Box,
  ShoppingCart,
  FileText,
  BarChart3,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Package,
  TrendingUp,
  Bell,
  HelpCircle,
  Moon,
  Sun,
  Search,
  Zap,
  Crown,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

export default function Sidebar({ collapsed, onToggle }) {
  const { logout, user } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeHover, setActiveHover] = useState(null);

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: Home, badge: null },
    { to: "/products", label: "Products", icon: Package, badge: "12" },
    { to: "/sales", label: "Sales", icon: ShoppingCart, badge: "3" },
    { to: "/invoices", label: "Invoices", icon: FileText, badge: "5" },
    { to: "/reports", label: "Analytics", icon: BarChart3, badge: "New" },
    { to: "/profile", label: "Profile", icon: User, badge: null },
    { to: "/settings", label: "Settings", icon: Settings, badge: null },
  ];

  const quickActions = [
    { label: "New Product", icon: Plus, action: () => console.log("New product") },
    { label: "Quick Sale", icon: Zap, action: () => console.log("Quick sale") },
    { label: "Generate Report", icon: TrendingUp, action: () => console.log("Report") },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!collapsed && window.innerWidth < 1024 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.nav
        initial={false}
        animate={{ 
          width: collapsed ? 80 : 280,
          x: window.innerWidth < 1024 && collapsed ? -280 : 0
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={`fixed lg:relative flex-shrink-0 h-full z-50
          bg-gradient-to-b from-white to-gray-50/80 dark:from-gray-900 dark:to-gray-900/95
          border-r border-gray-200/60 dark:border-gray-800/60
          backdrop-blur-xl shadow-2xl shadow-gray-500/10 dark:shadow-black/20
          overflow-hidden`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-4 py-6 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800/50">
            <motion.div 
              className="flex items-center gap-3"
              animate={{ opacity: collapsed ? 0 : 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-teal-400 bg-clip-text text-transparent">
                  StockSense
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Pro Plan
                </div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggle}
              className="p-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-200 group"
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
              ) : (
                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors" />
              )}
            </motion.button>
          </div>

          {/* Search Bar - Only visible when expanded */}
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 py-3 border-b border-gray-200/50 dark:border-gray-800/50"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Actions - Only visible when expanded */}
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-4 py-4 border-b border-gray-200/50 dark:border-gray-800/50"
              >
                <div className="grid grid-cols-3 gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={action.action}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md hover:border-blue-500/30 transition-all group"
                    >
                      <action.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center leading-tight">
                        {action.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              
              return (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onHoverStart={() => setActiveHover(item.to)}
                  onHoverEnd={() => setActiveHover(null)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg shadow-blue-500/25"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-md"
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 1024) onToggle();
                    }}
                  >
                    {/* Animated background for hover state */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 ${
                        activeHover === item.to && !isActive ? "opacity-5" : "opacity-0"
                      }`}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <div className={`relative z-10 flex items-center gap-3 w-full ${
                      collapsed ? "justify-center" : ""
                    }`}>
                      <div className={`relative flex items-center justify-center w-6 h-6 ${
                        isActive ? "text-white" : "text-gray-400 group-hover:text-blue-500"
                      } transition-colors`}>
                        <Icon className="w-5 h-5" />
                        {item.badge && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
                              isActive 
                                ? "bg-white text-blue-600" 
                                : "bg-red-500 text-white"
                            }`}
                          >
                            {item.badge}
                          </motion.span>
                        )}
                      </div>
                      
                      {!collapsed && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex-1 truncate font-medium"
                        >
                          {item.label}
                        </motion.span>
                      )}
                      
                      {!collapsed && isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </div>
                  </NavLink>
                </motion.div>
              );
            })}
          </div>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-800/50">
            <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between gap-3"}`}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    {user?.name ? user.name[0].toUpperCase() : "U"}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
                
                <AnimatePresence>
                  {!collapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex flex-col"
                    >
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {user?.name ?? "Guest User"}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Online
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Actions */}
              <AnimatePresence>
                {!collapsed ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      title="Toggle theme"
                    >
                      {isDark ? (
                        <Sun className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      ) : (
                        <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      )}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                      title="Notifications"
                    >
                      <Bell className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={logout}
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all shadow-lg shadow-red-500/25"
                    >
                      <LogOut className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-1"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleTheme}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      title="Toggle theme"
                    >
                      {isDark ? (
                        <Sun className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      ) : (
                        <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      )}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={logout}
                      className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                      title="Logout"
                    >
                      <LogOut className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

// Add missing Plus icon component
const Plus = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);
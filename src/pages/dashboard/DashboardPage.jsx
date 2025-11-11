import { motion } from "framer-motion";
import { TrendingUp, Package, DollarSign, Users, MoreVertical, ArrowUp, ArrowDown, Calendar, Filter, Download } from "lucide-react";

const mockData = {
  sales: [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 5000 },
    { month: "Apr", value: 4500 },
    { month: "May", value: 6000 },
    { month: "Jun", value: 7500 },
  ],
};

const kpiCards = [
  {
    icon: TrendingUp,
    title: "Total Sales",
    value: "$54,239",
    trend: 12.5,
    description: "Monthly revenue",
  },
  {
    icon: Package,
    title: "Total Products",
    value: "1,432",
    trend: 8.2,
    description: "Active items",
  },
  {
    icon: DollarSign,
    title: "Revenue",
    value: "$12,439",
    trend: -2.4,
    description: "This month",
  },
  {
    icon: Users,
    title: "Active Users",
    value: "4,325",
    trend: 18.6,
    description: "Online now",
  },
];

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50/30 dark:bg-gray-900 p-6"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-teal-600 dark:from-white dark:to-teal-400 bg-clip-text text-transparent"
          >
            Dashboard Overview
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 mt-2"
          >
            Welcome back! Here's what's happening today.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mt-4 lg:mt-0"
        >
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
            <Calendar className="w-4 h-4" />
            This Month
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 text-white hover:bg-teal-600 transition-all duration-200 shadow-lg shadow-teal-500/25">
            <Download className="w-4 h-4" />
            Export
          </button>
        </motion.div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 shadow-lg">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <button className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                {card.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {card.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                {card.description}
              </p>
              
              <div className="flex items-center gap-1">
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  card.trend > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}>
                  {card.trend > 0 ? (
                    <ArrowUp className="w-3 h-3" />
                  ) : (
                    <ArrowDown className="w-3 h-3" />
                  )}
                  {Math.abs(card.trend)}%
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  vs last month
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Additional Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Sales Performance
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Monthly revenue metrics
                </p>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between h-48 gap-2 pt-8">
              {mockData.sales.map((item, index) => (
                <motion.div
                  key={item.month}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ${item.value}
                  </div>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 transition-all duration-300 cursor-pointer group relative"
                    style={{ height: `${(item.value / 8000) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg">
                      ${item.value}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.month}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            
            <div className="space-y-4">
              {[
                { action: "New order", user: "John Doe", time: "2 min ago", type: "order" },
                { action: "User registered", user: "Sarah Smith", time: "1 hour ago", type: "user" },
                { action: "Payment received", user: "Mike Johnson", time: "3 hours ago", type: "payment" },
                { action: "Product added", user: "Admin", time: "5 hours ago", type: "product" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'order' ? 'bg-blue-500' :
                    activity.type === 'user' ? 'bg-green-500' :
                    activity.type === 'payment' ? 'bg-teal-500' : 'bg-purple-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      by {activity.user}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {activity.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6"
      >
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Boost your productivity</h2>
              <p className="text-teal-100">
                Start analyzing your data like a pro with our advanced tools.
              </p>
            </div>
            <button className="mt-4 lg:mt-0 px-6 py-3 bg-white text-teal-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Upgrade Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
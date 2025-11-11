import { motion } from "framer-motion";
import { BarChart, LineChart, PieChart } from "recharts";
import { Calendar, Download, Filter } from "lucide-react";

export default function ReportsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Controls */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">
          Analytics & Reports
        </h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 rounded-lg bg-white dark:bg-gray-800">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 days
          </button>
          <button className="flex items-center px-4 py-2 rounded-lg bg-teal-500 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Revenue Overview
          </h3>
          {/* Add BarChart component */}
        </motion.div>

        {/* Other charts */}
      </div>
    </motion.div>
  );
}

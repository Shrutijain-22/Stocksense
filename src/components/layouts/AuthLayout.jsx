import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-600 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

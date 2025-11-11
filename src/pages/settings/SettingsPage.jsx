import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Bell, Shield, Trash2 } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export default function SettingsPage() {
  const { isDark, toggleTheme } = useTheme();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Theme Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Appearance
        </h2>
        <div className="flex items-center justify-between">
          <span className="dark:text-gray-300">Theme Mode</span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            {isDark ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Notifications
        </h2>
        {/* Notification toggles */}
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
          Danger Zone
        </h2>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          <Trash2 className="w-4 h-4 mr-2" /> Delete Account
        </button>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal &&
        // Modal component
        null}
    </motion.div>
  );
}

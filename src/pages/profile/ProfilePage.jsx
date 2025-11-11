import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Save } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Profile Header */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700">
            {/* Avatar image here */}
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-teal-500 rounded-full">
            <Camera className="w-4 h-4 text-white" />
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-white">{profile.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{profile.role}</p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg space-y-6">
        <h2 className="text-xl font-semibold dark:text-white">
          Personal Information
        </h2>
        <form className="space-y-4">
          {/* Form fields */}
          <button className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg">
            <Save className="w-4 h-4 mr-2" /> Save Changes
          </button>
        </form>
      </div>
    </motion.div>
  );
}

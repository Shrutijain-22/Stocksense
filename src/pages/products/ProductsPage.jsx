import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Filter } from "lucide-react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Products
        </h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg"
        >
          <Plus className="w-5 h-5 mr-2" /> Add Product
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 w-full p-3 rounded-lg border dark:bg-gray-800"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* Add filters */}
      </div>

      {/* Products Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Add table component */}
      </div>

      {/* Add Product Modal */}
      {showAddModal &&
        // Add modal component
        null}
    </motion.div>
  );
}

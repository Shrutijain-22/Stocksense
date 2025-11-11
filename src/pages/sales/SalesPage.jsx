import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, Calculator } from "lucide-react";

export default function SalesPage() {
  const [sale, setSale] = useState({
    product: "",
    quantity: 1,
    price: 0,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Sales Form */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 dark:text-white">New Sale</h2>
        <form className="space-y-4">
          {/* Form fields */}
          <button className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
            Complete Sale
          </button>
        </form>
      </motion.div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg h-fit"
      >
        <h3 className="text-xl font-bold mb-4 dark:text-white">Sale Summary</h3>
        {/* Summary details */}
      </motion.div>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

export default function InvoicesPage() {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Invoices</h1>
        <div className="flex gap-2">{/* Filter buttons */}</div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            {/* Table headers */}
          </thead>
          <tbody>{/* Table rows */}</tbody>
        </table>
      </div>

      {/* Invoice Preview Modal */}
      {selectedInvoice &&
        // Modal component
        null}
    </motion.div>
  );
}

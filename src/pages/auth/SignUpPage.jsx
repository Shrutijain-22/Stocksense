import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock signup
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Create Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="pl-10 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          {/* Email and Password fields similar to LoginPage */}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </motion.div>
  );
}

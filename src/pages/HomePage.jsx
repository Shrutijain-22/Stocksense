import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Box,
  Cpu,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Building,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-28 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Inventory Management
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Manage Your Inventory
            <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Smarter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Streamline your stock management with powerful analytics,
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              {" "}
              real-time insights
            </span>
            , and
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              {" "}
              AI-driven predictions
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/signup"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <Link
              to="/demo"
              className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <PlayCircle className="w-5 h-5 mr-3" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">
              Trusted by 10,000+ businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <Building className="w-8 h-8 text-gray-400" />
              <Users className="w-8 h-8 text-gray-400" />
              <TrendingUp className="w-8 h-8 text-gray-400" />
              <Shield className="w-8 h-8 text-gray-400" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Showcase Section */}
        <div className="mt-24 text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            Powerful Analytics
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Visualize, Analyze, and Grow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            From real-time sales dashboards to AI-powered forecasts, StockSense
            helps you make smarter business decisions with powerful visual
            analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-4xl blur-3xl -z-10"></div>
            <img
              src="/assets/dashboard-preview.png"
              alt="Dashboard Preview"
              className="mx-auto rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-4xl py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of companies revolutionizing their inventory
              management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-32 text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4" />
            Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Choose a plan that fits your business. Upgrade anytime as you grow.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className={`group relative p-8 rounded-3xl shadow-2xl border-2 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-blue-600 to-teal-600 text-white scale-105 border-transparent"
                    : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 hover:border-blue-500/50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-left"
                    >
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.highlight ? "text-white" : "text-green-500"
                        }`}
                      />
                      <span
                        className={
                          plan.highlight
                            ? "text-blue-50"
                            : "text-gray-600 dark:text-gray-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`block w-full py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 ${
                    plan.highlight
                      ? "bg-white text-blue-600 hover:bg-gray-100 hover:scale-105"
                      : "bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-xl hover:scale-105"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white rounded-4xl shadow-2xl overflow-hidden mb-20"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Ready to revolutionize your inventory?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
            >
              Join thousands of businesses already using StockSense to optimize
              their operations and boost profitability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/signup"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 text-white font-semibold border-2 border-white/30 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-blue-200 text-sm"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              StockSense
            </div>

            <div className="flex gap-6">
              {["Features", "Pricing", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} StockSense. All rights reserved. Made
            with ❤️ for inventory management
          </p>
        </footer>
      </div>
    </div>
  );
}

// Add the missing PlayCircle icon component
const PlayCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Get instant insights into your inventory performance and sales trends with beautiful, interactive dashboards.",
  },
  {
    icon: Box,
    title: "Smart Stock Management",
    description:
      "Automate your inventory tracking with intelligent alerts and never run out of stock again.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Predictions",
    description:
      "Leverage machine learning to forecast demand, optimize stock levels, and reduce costs automatically.",
  },
];

const testimonials = [
  {
    name: "Aarav Patel",
    company: "FreshMart Retail",
    quote:
      "StockSense transformed our inventory tracking — now we save 20% monthly on overstock costs while maintaining 99.8% availability!",
  },
  {
    name: "Neha Sharma",
    company: "TechHub Solutions",
    quote:
      "The dashboard analytics and AI insights are incredible. It's like having a data scientist and inventory manager in one tool.",
  },
  {
    name: "Rohit Mehta",
    company: "UrbanStyle Clothing",
    quote:
      "Finally, a tool that simplifies inventory management without the headache. The beautiful UI makes complex data easy to understand.",
  },
];

const pricingPlans = [
  {
    title: "Starter",
    price: "$19",
    features: [
      "Up to 500 Products",
      "Basic Analytics",
      "Email Support",
      "Real-time Tracking",
      "Mobile App Access",
    ],
    highlight: false,
  },
  {
    title: "Professional",
    price: "$49",
    features: [
      "Up to 5000 Products",
      "Advanced Analytics",
      "Priority Support",
      "AI Forecasting",
      "API Access",
      "Custom Reports",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$99",
    features: [
      "Unlimited Products",
      "AI-Powered Insights",
      "Dedicated Manager",
      "Custom Integrations",
      "SLA Guarantee",
      "Training Sessions",
    ],
    highlight: false,
  },
];

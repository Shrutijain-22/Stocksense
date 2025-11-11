import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Bell, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useAuth } from "../../hooks/useAuth";
import Sidebar from "../nav/Sidebar";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user } = useAuth();

  // collapse by default on small screens
  useEffect(() => {
    const onResize = () => {
      setCollapsed(window.innerWidth < 1024 ? true : false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex">
        <Sidebar
          collapsed={collapsed}
          onClose={() => setCollapsed((s) => !s)}
        />
      </div>

      {/* Mobile overlay sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full z-50">
            <Sidebar collapsed={false} onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) setMobileOpen(true);
                else setCollapsed((c) => !c);
              }}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="hidden md:flex items-center bg-white dark:bg-gray-800 rounded-xl px-3 py-1 border border-gray-100 dark:border-gray-700">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none text-sm w-48 dark:placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold">
                {user?.name ? user.name[0].toUpperCase() : "U"}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

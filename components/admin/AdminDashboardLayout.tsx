"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { BarChart3, Users, ShoppingBag, Settings, LogOut, Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
// import ThemeToggle from "@/components/theme-toggle"

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}

export default function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/addus")
  }

  const navItems = [
    { name: "Dashboard", icon: BarChart3, path: "/addus/dashboard" },
    { name: "Students", icon: Users, path: "/addus/dashboard" },
    { name: "Merchandise", icon: ShoppingBag, path: "/addus/merchandise" },
    { name: "Settings", icon: Settings, path: "/addus/settings" },
  ]

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <Link href="/addus/dashboard" className="flex items-center space-x-2">
                <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <span className="text-xl font-bold dark:text-white">LEVEL Admin</span>
              </Link>
              {isMobile && (
                <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              )}
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center px-4 py-3 text-sm rounded-lg ${
                    pathname === item.path
                      ? "bg-primary/10 text-primary dark:bg-primary/20"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t dark:border-gray-700">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-sm text-gray-600 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 mb-2"
              >
                <Home className="h-5 w-5 mr-3" />
                Back to Website
              </Link>
              <Button
                variant="ghost"
                className="flex items-center w-full px-4 py-3 text-sm text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className={`flex-1 ${isSidebarOpen ? "lg:ml-64" : ""} transition-all duration-300 ease-in-out`}>
          {/* Header */}
          <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex items-center justify-between p-4">
              {isMobile && (
                <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                  <Menu className="h-5 w-5" />
                </Button>
              )}
              <div className="flex-1 lg:ml-0"></div>
              <div className="flex items-center space-x-3">
                {/* <ThemeToggle /> */}
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}


"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AdminDashboardLayout from "@/components/admin/AdminDashboardLayout"
import StudentTable from "@/components/admin/StudentTable"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Loader2, Plus, Search } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { ApiStudentData } from "@/components/StudentProfile"
import AddStudentForm from "@/components/admin/AddStudentForm"

// Add toast import at the top
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

// API URL
const API_URL =
  "https://script.google.com/macros/s/AKfycbzRvyGcbQOAG32FmONd1dxmgWgy5ou8A2AkHn5vTJXyXygRiwlujME7ib0sFREz2G-7NQ/exec?sheet=studentData"

export default function AdminDashboardPage() {
  const [students, setStudents] = useState<ApiStudentData[]>([])
  const [filteredStudents, setFilteredStudents] = useState<ApiStudentData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const router = useRouter()

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuth") === "true"
    if (!isAuthenticated) {
      router.push("/addus")
    }
  }, [router])

  // Fetch student data
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error("Failed to fetch student data")
        }
        const data = await response.json()
        setStudents(data)
        setFilteredStudents(data)
      } catch (err) {
        console.error("Error fetching students:", err)
        setError("Failed to load student data. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchStudents()
  }, [])

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredStudents(students)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = students.filter(
        (student) =>
          student.studentID.toLowerCase().includes(query) ||
          student["full Name"].toLowerCase().includes(query) ||
          student["current level"].toLowerCase().includes(query),
      )
      setFilteredStudents(filtered)
    }
  }, [searchQuery, students])

  // Handle student update
  const handleUpdateStudent = async (updatedStudent: ApiStudentData) => {
    // The API call is now handled in the StudentTable component
    // We just need to update the local state
    setStudents((prevStudents) =>
      prevStudents.map((student) => (student.studentID === updatedStudent.studentID ? updatedStudent : student)),
    )
  }

  // Handle student add
  const handleAddStudent = async (newStudent: ApiStudentData) => {
    // The API call is now handled in the AddStudentForm component
    // We just need to update the local state
    setStudents((prevStudents) => [...prevStudents, newStudent])
    setShowAddForm(false)
  }

  // Handle student delete
  const { toast } = useToast()
  const handleDeleteStudent = (studentId: string) => {
    // Update the local state
    setStudents((prevStudents) => prevStudents.filter((student) => student.studentID !== studentId))

    toast({
      title: "Student Deleted",
      description: `Student ID: ${studentId} has been removed from the system.`,
      variant: "default",
    })
  }

  return (
    <AdminDashboardLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Student Management</h1>
            <p className="text-gray-500">Manage student data and points</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search students..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={() => setShowAddForm(!showAddForm)}>
              <Plus className="h-4 w-4 mr-2" />
              {showAddForm ? "Cancel" : "Add Student"}
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Students</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {showAddForm && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Add New Student</CardTitle>
                  <CardDescription>Enter the details for the new student</CardDescription>
                </CardHeader>
                <CardContent>
                  <AddStudentForm
                    onSubmit={(student) => {
                      if (student) {
                        handleAddStudent(student)
                      }
                    }}
                    onCancel={() => setShowAddForm(false)}
                  />
                </CardContent>
              </Card>
            )}

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2">Loading student data...</span>
              </div>
            ) : (
              <StudentTable
                students={filteredStudents}
                onUpdateStudent={handleUpdateStudent}
                onDeleteStudent={handleDeleteStudent}
              />
            )}
          </TabsContent>

          <TabsContent value="advanced">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <StudentTable
                students={filteredStudents.filter((s) => s["current level"].toLowerCase().includes("advanced"))}
                onUpdateStudent={handleUpdateStudent}
                onDeleteStudent={handleDeleteStudent}
              />
            )}
          </TabsContent>

          <TabsContent value="intermediate">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <StudentTable
                students={filteredStudents.filter(
                  (s) =>
                    s["current level"].toLowerCase().includes("intermediate") ||
                    s["current level"].toLowerCase().includes("pre-intermediate"),
                )}
                onUpdateStudent={handleUpdateStudent}
                onDeleteStudent={handleDeleteStudent}
              />
            )}
          </TabsContent>

          <TabsContent value="beginner">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <StudentTable
                students={filteredStudents.filter(
                  (s) =>
                    s["current level"].toLowerCase().includes("beginner") ||
                    s["current level"].toLowerCase().includes("elementary"),
                )}
                onUpdateStudent={handleUpdateStudent}
                onDeleteStudent={handleDeleteStudent}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </AdminDashboardLayout>
  )
}


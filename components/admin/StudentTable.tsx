"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit, Save, X, Loader2, Trash2 } from "lucide-react"
import type { ApiStudentData } from "@/components/StudentProfile"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// API URL
const API_URL =
  "https://script.google.com/macros/s/AKfycbzRvyGcbQOAG32FmONd1dxmgWgy5ou8A2AkHn5vTJXyXygRiwlujME7ib0sFREz2G-7NQ/exec?sheet=studentData"

interface StudentTableProps {
  students: ApiStudentData[]
  onUpdateStudent: (student: ApiStudentData) => void
  onDeleteStudent?: (studentId: string) => void
}

export default function StudentTable({ students, onUpdateStudent, onDeleteStudent }: StudentTableProps) {
  const [editingStudent, setEditingStudent] = useState<ApiStudentData | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [studentToDelete, setStudentToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()

  const handleEditClick = (student: ApiStudentData) => {
    setEditingStudent({ ...student })
    setIsDialogOpen(true)
  }

  const handleDeleteClick = (studentId: string) => {
    setStudentToDelete(studentId)
    setIsDeleteDialogOpen(true)
  }

  const handleInputChange = (field: string, value: string | number) => {
    if (!editingStudent) return

    setEditingStudent({
      ...editingStudent,
      [field]: value,
    })
  }

  const handleSave = async () => {
    if (editingStudent) {
      setIsSaving(true)

      try {
        // Format the data for the API
        const formData = new FormData()
        formData.append("action", "update")
        formData.append("studentID", editingStudent.studentID)

        // Add all student fields to the form data
        Object.entries(editingStudent).forEach(([key, value]) => {
          formData.append(key, String(value))
        })

        // Send the update request to the API
        const response = await fetch(API_URL, {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          console.log(response)
          throw new Error("Failed to update student data")
        }

        // Update local state and close dialog
        onUpdateStudent(editingStudent)
        setIsDialogOpen(false)
        setEditingStudent(null)

        // Show success message
        toast({
          title: "Success",
          description: `Student ${editingStudent.studentID} updated successfully!`,
          variant: "default",
        })
      } catch (error) {
        console.error("Error updating student:", error)
        toast({
          title: "Error",
          description: "Failed to update student. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSaving(false)
      }
    }
  }

  const handleDelete = async () => {
    if (studentToDelete && onDeleteStudent) {
      setIsDeleting(true);
  
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "delete",
            studentID: studentToDelete,
            sheet: "studentData", // Add the sheet name as expected by the server
          }),
        });
  
        const text = await response.text(); // Get raw text response
        console.log("Delete response:", text); // Debug log
  
        if (!response.ok || text !== "Deleted") {
          throw new Error("Failed to delete student: " + text);
        }
  
        onDeleteStudent(studentToDelete);
        setIsDeleteDialogOpen(false);
        setStudentToDelete(null);
  
        toast({
          title: "Success",
          description: "Student deleted successfully!",
          variant: "default",
        });
      } catch (error) {
        console.error("Error deleting student:", error);
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to delete student. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsDeleting(false);
      }
    }
  };

  // Get all course fields (excluding metadata fields)
  const getCourseFields = (student: ApiStudentData) => {
    const metadataFields = ["studentID", "full Name", "redemed", "points", "current level"]
    return Object.keys(student).filter((key) => !metadataFields.includes(key))
  }

  return (
    <>
      <div className="rounded-md border bg-white dark:bg-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-center">Points</TableHead>
                <TableHead className="text-center">Redeemed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No students found
                  </TableCell>
                </TableRow>
              ) : (
                students.map((student) => (
                  <TableRow key={student.studentID}>
                    <TableCell className="font-medium">{student.studentID}</TableCell>
                    <TableCell>{student["full Name"]}</TableCell>
                    <TableCell>{student["current level"]}</TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {student.points}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">{student.redemed}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditClick(student)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteClick(student.studentID)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Edit Student Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Student</DialogTitle>
            <DialogDescription>Update student information and course progress</DialogDescription>
          </DialogHeader>

          {editingStudent && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="studentID" className="text-right">
                  Student ID
                </Label>
                <Input id="studentID" value={editingStudent.studentID} className="col-span-3" readOnly />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullName" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={editingStudent["full Name"]}
                  className="col-span-3"
                  onChange={(e) => handleInputChange("full Name", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="level" className="text-right">
                  Level
                </Label>
                <Input
                  id="level"
                  value={editingStudent["current level"]}
                  className="col-span-3"
                  onChange={(e) => handleInputChange("current level", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="points" className="text-right">
                  Points
                </Label>
                <Input
                  id="points"
                  type="number"
                  value={editingStudent.points}
                  className="col-span-3"
                  onChange={(e) => handleInputChange("points", Number.parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="redeemed" className="text-right">
                  Redeemed
                </Label>
                <Input
                  id="redeemed"
                  type="number"
                  value={editingStudent.redemed}
                  className="col-span-3"
                  onChange={(e) => handleInputChange("redemed", Number.parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="border-t pt-4 mt-2">
                <h3 className="font-medium mb-3">Course Progress</h3>

                {getCourseFields(editingStudent).map((courseField) => (
                  <div key={courseField} className="grid grid-cols-4 items-center gap-4 mb-3">
                    <Label htmlFor={courseField} className="text-right">
                      {courseField}
                    </Label>
                    <Input
                      id={courseField}
                      value={editingStudent[courseField] as string}
                      className="col-span-3"
                      onChange={(e) => handleInputChange(courseField, e.target.value)}
                      placeholder="e.g. 0.75 or 50% or no"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isSaving}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the student record from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} disabled={isDeleting} className="bg-red-500 hover:bg-red-600">
              {isDeleting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}


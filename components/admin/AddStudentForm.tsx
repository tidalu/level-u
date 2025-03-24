"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ApiStudentData } from "@/components/StudentProfile"
import { Save, X, Loader2, Trash2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

// API URL
const API_URL = "https://script.google.com/macros/s/AKfycbzRvyGcbQOAG32FmONd1dxmgWgy5ou8A2AkHn5vTJXyXygRiwlujME7ib0sFREz2G-7NQ/exec?sheet=studentData"

interface AddStudentFormProps {
  onSubmit: (student: ApiStudentData | null) => void
  onCancel: () => void
  studentToEdit?: ApiStudentData
}

export default function AddStudentForm({ onSubmit, onCancel, studentToEdit }: AddStudentFormProps) {
  const [studentData, setStudentData] = useState<Partial<ApiStudentData>>({
    studentID: studentToEdit?.studentID || "",
    "full Name": studentToEdit?.["full Name"] || "",
    "current level": studentToEdit?.["current level"] || "Beginner",
    points: studentToEdit?.points || 0,
    redemed: studentToEdit?.redemed || 0,
    "General English": studentToEdit?.["General English"] || "no",
    IELTS: studentToEdit?.IELTS || "no",
    CEFR: studentToEdit?.CEFR || "no",
    TOEFL: studentToEdit?.TOEFL || "no",
    "Intensive course": studentToEdit?.["Intensive course"] || "no",
    "Individual class": studentToEdit?.["Individual class"] || "no",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string | number) => {
    setStudentData({
      ...studentData,
      [field]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!studentData.studentID || !studentData["full Name"]) {
      toast({
        title: "Validation Error",
        description: "Student ID and Full Name are required",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('action', studentToEdit ? 'update' : 'add')

      // Add all student fields to the form data
      Object.entries(studentData).forEach(([key, value]) => {
        formData.append(key, String(value))
      })

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to add/update student data')
      }

      // Update local state
      onSubmit(studentData as ApiStudentData)

      toast({
        title: "Success",
        description: `Student ${studentData.studentID} ${studentToEdit ? 'updated' : 'added'} successfully!`,
        variant: "default",
      })
    } catch (error) {
      console.error('Error adding/updating student:', error)
      toast({
        title: "Error",
        description: "Failed to add/update student. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!studentData.studentID) return

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('action', 'delete')
      formData.append('studentID', studentData.studentID)

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to delete student data')
      }

      // Update local state
      onSubmit(null) // Assuming you handle the UI to reflect this

      toast({
        title: "Success",
        description: `Student ${studentData.studentID} deleted successfully!`,
        variant: "default",
      })
    } catch (error) {
      console.error('Error deleting student:', error)
      toast({
        title: "Error",
        description: "Failed to delete student. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const levelOptions = ["Beginner", "Elementary", "Pre-intermediate", "Intermediate", "Upper-intermediate", "Advanced"]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="studentID">Student ID *</Label>
          <Input
            id="studentID"
            placeholder="e.g. 2025EN0027"
            value={studentData.studentID}
            onChange={(e) => handleInputChange("studentID", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="Student's full name"
            value={studentData["full Name"]}
            onChange={(e) => handleInputChange("full Name", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="level">Current Level</Label>
          <Select
            value={studentData["current level"] as string}
            onValueChange={(value) => handleInputChange("current level", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {levelOptions.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="points">Points</Label>
          <Input
            id="points"
            type="number"
            placeholder="0"
            value={studentData.points}
            onChange={(e) => handleInputChange("points", Number.parseInt(e.target.value) || 0)}
          />
        </div>
      </div>

      {/* Other form fields for course progress */}

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>

        {/* Add Update Button */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              {studentToEdit ? "Update" : "Add"} Student
            </>
          )}
        </Button>

        {/* Delete Button */}
        {studentToEdit && (
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isSubmitting}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Student
          </Button>
        )}
      </div>
    </form>
  )
}

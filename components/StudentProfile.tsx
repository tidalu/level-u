import { Award, BookOpen, GraduationCap, Users } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface Course {
  id: string
  name: string
  progress: number
}

interface StudentProfileProps {
  studentId: string
  name: string
  group: string
  points: number
  courses: Course[]
  avatarUrl?: string
}

const StudentProfile = ({
  studentId,
  name,
  group,
  points,
  courses,
  avatarUrl = "/placeholder.svg?height=100&width=100",
}: StudentProfileProps) => {
  return (
    <div className="w-full space-y-6">
      {/* Header with Avatar and Basic Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="relative">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-[#a9ff81]">
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={`${name}'s avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#26913d] text-white rounded-full h-8 w-8 flex items-center justify-center text-xs font-bold">
            {points}
          </div>
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-gray-500 mt-1">
            <div className="flex items-center justify-center sm:justify-start">
              <Users className="h-4 w-4 mr-1" />
              <span>{group}</span>
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="flex items-center justify-center sm:justify-start">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span>ID: {studentId}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center sm:justify-start">
            <div className="bg-[#a9ff81] text-[#26913d] px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Award className="h-4 w-4 mr-1" />
              <span>{points} Points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div>
        <h4 className="text-md font-semibold mb-3 flex items-center">
          <BookOpen className="h-4 w-4 mr-2 text-[#26913d]" />
          Enrolled Courses
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-l-4 border-l-[#26913d]">
              <CardContent className="p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium">{course.name}</h5>
                    <div className="text-xs text-gray-500 mt-1">Course ID: {course.id}</div>
                  </div>
                  <div className="bg-gray-100 rounded-full px-2 py-1 text-xs font-medium">
                    {course.progress}%
                  </div>
                </div>
                <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#a9ff81] to-[#26913d] rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-[#26913d]">{points}</div>
          <div className="text-xs text-gray-500 mt-1">Total Points</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-[#26913d]">{courses.length}</div>
          <div className="text-xs text-gray-500 mt-1">Courses</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-[#26913d]">
            {Math.round(courses.reduce((acc, course) => acc + course.progress, 0) / courses.length)}%
          </div>
          <div className="text-xs text-gray-500 mt-1">Avg. Progress</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-[#26913d]">3</div>
          <div className="text-xs text-gray-500 mt-1">Redeemed Items</div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile

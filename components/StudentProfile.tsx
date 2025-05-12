import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Define the API student data structure
export interface ApiStudentData {
  studentID: string;
  "full Name": string;
  "General English": number | string;
  IELTS: number | string;
  CEFR: string;
  TOEFL: string;
  "Intensive course": string;
  "Individual class": string;
  redemed: number;
  points: number;
  "current level": string;
  passing: number;
  homework: string;
  [key: string]: string | number; // Index signature for dynamic access
}

interface StudentProfileProps {
  studentData: ApiStudentData;
  avatarUrl?: string;
}

const StudentProfile = ({
  studentData,
  avatarUrl = "/placeholder.svg?height=100&width=100",
}: StudentProfileProps) => {
  // Extract courses from student data, filtering out "no" values
  let courses = Object.entries(studentData)
    .filter(([key, value]) => {
      // Only include course fields (not metadata fields) and exclude "no" values
      const metadataFields = [
        "studentID",
        "full Name",
        "redemed",
        "points",
        "current level",
        "passing",
        "homework",
      ];
      return !metadataFields.includes(key) && value !== "no";
    })
    .map(([name, progress]) => {
      // Convert progress to a number between 0-100
      let progressValue: number;

      if (typeof progress === "number") {
        // If it's already a number, scale it appropriately
        // Assuming values like 0.75 mean 75%
        progressValue = progress <= 1 ? progress * 100 : progress;
      } else if (typeof progress === "string" && progress.endsWith("%")) {
        // If it's a percentage string like "50%", convert to number
        progressValue = Number.parseFloat(progress);
      } else {
        // Default fallback
        progressValue = 0;
      }

      return {
        id: name.replace(/\s+/g, "-").toLowerCase(),
        name: name,
        progress: Math.min(100, Math.max(0, progressValue)), // Ensure between 0-100
      };
    });
  // cut the last item
  courses = courses.slice(0, -1);
  return (
    <div className="w-full space-y-6">
      {/* Header with Avatar and Basic Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="relative">
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-4 border-[#a9ff81]">
            <img
              src={`profile-${Math.round(Math.random() * 3) + 1}-pic.jpg`}
              alt={`${studentData["full Name"]}'s avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#26913d] text-white rounded-full h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center text-xs font-bold">
            {studentData.points}
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
          <h3 className="text-lg sm:text-xl font-bold">
            {studentData["full Name"]}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-gray-500 mt-1">
            <div className="flex items-center justify-center sm:justify-start">
              <Users className="h-4 w-4 mr-1" />
              <span>{studentData["current level"]}</span>
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="flex items-center justify-center sm:justify-start">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span>ID: {studentData.studentID}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center sm:justify-start">
            <div className="bg-[#a9ff81] text-[#26913d] px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Award className="h-4 w-4 mr-1" />
              <span>{studentData.points} Points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
      {courses.length > 0 && (
        <div>
          <h4 className="text-md font-semibold mb-3 flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-[#26913d]" />
            Enrolled Courses
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden border-l-4 border-l-[#26913d]"
              >
                <CardContent className="p-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                    <div>
                      <h5 className="font-medium">{course.name}</h5>
                      <div className="text-xs text-gray-500 mt-1">
                        Course ID: {course.id}
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-600 rounded-full px-2 py-1 text-xs font-medium self-start sm:self-auto">
                      {Math.round(course.progress)}%
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
      )}

      {/* Achievement Stats */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center ">
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center flex-1 min-w-[50%] sm:min-w-[25%]">
          <div className="text-xl sm:text-2xl font-bold text-[#26913d]">
            {studentData.passing}
          </div>
          <div className="text-xs text-gray-500 mt-1">Vocabulary passing percentage</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center flex-1 min-w-[50%] sm:min-w-[25%]">
          <div className="text-xl sm:text-2xl font-bold text-[#26913d]">
            {studentData.homework}
          </div>
          <div className="text-xs text-gray-500 mt-1">Homework compliment</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center flex-1 min-w-[50%] sm:min-w-[25%]">
          <div className="text-xl sm:text-2xl font-bold text-[#26913d]">
            {studentData.points}
          </div>
          <div className="text-xs text-gray-500 mt-1">Total Points</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center flex-1 min-w-[50%] sm:min-w-[25%]">
          <div className="text-xl sm:text-2xl font-bold text-[#26913d]">
            {courses.length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Courses</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center flex-1 min-w-[50%] sm:min-w-[25%]">
          <div className="text-xl sm:text-2xl font-bold text-[#26913d]">
            {courses.length > 0
              ? Math.round(
                  courses.reduce((acc, course) => acc + course.progress, 0) /
                    courses.length
                )
              : 0}
            %
          </div>
          <div className="text-xs text-gray-500 mt-1">Avg. Progress</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center">
          <div className="text-xl sm:text-2xl font-bold text-[#26913d]">
            {studentData.redemed}
          </div>
          <div className="text-xs text-gray-500 mt-1">Redeemed Items</div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

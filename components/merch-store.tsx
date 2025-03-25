"use client";
import type React from "react";

import { Award, CheckCircle, Gift, HelpCircle, Star, ShoppingBag, Frown, PartyPopper, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper";
import StudentProfile, { type ApiStudentData } from "@/components/StudentProfile";
import MerchandiseCard from "@/components/MerchandiseCard";
import { useLocalizedData } from "@/lib/useLocalizedData";

// API URL
const API_URL =
  "https://script.google.com/macros/s/AKfycbzRvyGcbQOAG32FmONd1dxmgWgy5ou8A2AkHn5vTJXyXygRiwlujME7ib0sFREz2G-7NQ/exec?sheet=studentData";

function MerchStore() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [isPointsModalOpen, setIsPointsModalOpen] = useState(false);
  const [isStudentIdModalOpen, setIsStudentIdModalOpen] = useState(false);
  const [pointsAnimated, setPointsAnimated] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [studentIdError, setStudentIdError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [allStudents, setAllStudents] = useState<ApiStudentData[]>([]);
  const [currentStudent, setCurrentStudent] = useState<ApiStudentData | null>(null);

  const pageData = useLocalizedData();
  const merchData = pageData?.merch;
  console.log(pageData);

  const merchandise = [
    { name: merchData?.redeem?.cap, points: 250, images: ["/cap-1.jpg"] },
    { name: merchData?.redeem?.tshirt, points: 400, images: ["/sweatshirt-1.jpg", "/sweatshirt-2.jpg", "/sweatshirt-3.webp"] },
    { name: merchData?.redeem?.hoodie, points: 500, images: ["/hoodie-1.jpg", "/hoodie-2.jpg"] },
  ];

  const affordableMerchandise = merchandise.filter(
    (item) => currentStudent && item.points <= currentStudent.points
  );
  const canAffordSomething = affordableMerchandise.length > 0;

  const handleRedeem = (itemName: string) => {
    setSelectedItem(itemName);
    setIsModalOpen(true);
  };

  const handleCheckPoints = () => {
    setIsStudentIdModalOpen(true);
    setStudentId("");
    setStudentIdError(false);
    setErrorMessage(merchData?.errors?.studentIdNotFound || "Student ID not found. Please try again or contact reception.");
  };

  const handleStudentIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Fetch student data only when the student ID is submitted
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(merchData?.errors?.fetchFailed || "Failed to fetch student data");
      const data = await response.json();
      setAllStudents(data);

      // Find the student with the matching ID
      const student = data.find((s: ApiStudentData) => s.studentID.toLowerCase() === studentId.trim().toLowerCase());
      if (student) {
        setCurrentStudent(student);
        setIsStudentIdModalOpen(false);
        setIsPointsModalOpen(true);
        setPointsAnimated(false);
      } else {
        setStudentIdError(true);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
      setStudentIdError(true);
      setErrorMessage(merchData?.errors?.serverError || "Error connecting to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isPointsModalOpen) {
      const timer = setTimeout(() => setPointsAnimated(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isPointsModalOpen]);

  // No loading state for the entire page since we fetch data only on submission
  return (
    <div className="flex min-h-screen flex-col bg-transparent dark:bg-transparent">
      <main className="flex-1 bg-white dark:bg-[#020817]">
        <ScrollAnimateWrapper>
          {/* Hero Section */}
          <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-green-50 to-white dark:from-[#020817] dark:to-[#131312]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
                    {merchData?.header?.title}
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                    {merchData?.header?.description}
                  </p>
                </div>
                <div className="space-x-2 sm:space-x-4">
                  <Button
                    size="sm"
                    className="text-xs sm:text-sm"
                    onClick={() => document.getElementById("merchandise-section")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    aria-label="Scroll to merchandise section"
                  >
                    {merchData?.header?.viewMerchButton}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white dark:bg-[#020817]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">
                    {merchData?.howItWorks?.title}
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                    {merchData?.howItWorks?.desc}
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8 mt-6 sm:mt-8">
                {merchData?.howItWorks?.details.map((detail: { key: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                  <Card key={detail?.key} className="flex flex-col items-center text-center bg-white dark:bg-gray-900">
                    <CardHeader className="flex justify-center items-center pb-2 sm:pb-4">
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#a9ff81] mb-3 sm:mb-4">
                        {detail?.key === "earnPoints" && <Star className="h-8 w-8 sm:h-10 sm:w-10 text-[#26913d]" />}
                        {detail?.key === "meritBasedSystem" && <Award className="h-8 w-8 sm:h-10 sm:w-10 text-[#26913d]" />}
                        {detail?.key === "redeemRewards" && <Gift className="h-8 w-8 sm:h-10 sm:w-10 text-[#26913d]" />}
                      </div>
                      <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white">{detail?.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">{detail?.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Point Calculator Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-[#020817]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    {merchData?.pointCalculator?.title}
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    {merchData?.pointCalculator?.description}
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-4xl">
                <Card className="overflow-hidden bg-white dark:bg-gray-900">
                  <CardHeader className="bg-[#a9ff81] text-[#26913d] text-center">
                    <CardTitle className="text-2xl">{merchData?.pointCalculator?.howto}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        {merchData?.pointCalculator?.rewards.slice(0, 2).map((reward: { key: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; points: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                          <div key={reward?.key} className="flex items-start">
                            <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                              {reward?.key === "highGrades" && <Star className="h-5 w-5" />}
                              {reward?.key === "perfectAttendance" && <CheckCircle className="h-5 w-5" />}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{reward?.title}</h3>
                              <p className="text-gray-500 dark:text-gray-300 mt-1">{reward?.description}</p>
                              <p className="font-medium mt-2 text-gray-700 dark:text-gray-200">{reward?.points}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        {merchData?.pointCalculator?.rewards.slice(2).map((reward: { key: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; points: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                          <div key={reward?.key} className="flex items-start">
                            <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                              {reward?.key === "participation" && <Gift className="h-5 w-5" />}
                              {reward?.key === "promoting" && <Award className="h-5 w-5" />}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{reward?.title}</h3>
                              <p className="text-gray-500 dark:text-gray-300 mt-1">{reward?.description}</p>
                              <p className="font-medium mt-2 text-gray-700 dark:text-gray-200">{reward?.points}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex justify-center mt-8">
                  <Button size="lg" className="px-8" onClick={handleCheckPoints}>
                    {merchData?.pointCalculator?.button}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Redeem Your Points Section */}
          <section id="merchandise-section" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-[#020817]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    {merchData?.redeem?.title}
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    {merchData?.redeem?.description}
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {merchandise.map((item, index) => (
                  <MerchandiseCard key={index} item={item} onRedeem={handleRedeem} />
                ))}
              </div>
            </div>
          </section>

          {/* How to Redeem Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-[#020817]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    {merchData?.howToRedeem?.title}
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    {merchData?.howToRedeem?.desc}
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl">
                <Card className="bg-white dark:bg-gray-900">
                  <CardContent className="pt-6">
                    <ol className="space-y-6">
                      {merchData?.howToRedeem?.steps?.map((step: { key: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: number) => (
                        <li key={step?.key} className="flex items-start">
                          <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{step?.title}</h3>
                            <p className="text-gray-500 dark:text-gray-300 mt-1">{step?.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose LEVEL Merch Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-[#020817]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    {merchData?.whyChooseMerch?.title}
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    {merchData?.whyChooseMerch?.description}
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
                {merchData?.whyChooseMerch?.features?.map((feature: { key: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => (
                  <Card key={feature?.key} className="bg-white dark:bg-gray-900">
                    <CardHeader>
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                        <CardTitle className="text-gray-900 dark:text-white">{feature?.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-300">{feature?.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-[#020817]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    {merchData?.faq?.title}
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    {merchData?.faq?.desc}
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl">
                {merchData?.faq?.questions.map((qa: { question: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; answer: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                  <Card key={index} className="mb-4 bg-white dark:bg-gray-900">
                    <CardHeader>
                      <div className="flex items-center">
                        <HelpCircle className="h-6 w-6 text-[#26913d] mr-2" />
                        <CardTitle className="text-gray-900 dark:text-white">{qa?.question}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-300">{qa?.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>
      </main>

      {/* Redemption Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95vw] max-w-md p-4 sm:p-6 bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">{merchData?.modals?.redemptionSuccess?.title || "Redemption Successful!"}</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-300">
              {merchData?.modals?.redemptionSuccess?.description.replace("{item}", selectedItem) || `You have successfully redeemed your points for the ${selectedItem}.`}
            </DialogDescription>
          </DialogHeader>
          <div className="p-3 sm:p-4 bg-[#a9ff81] rounded-md border border-blue-100 my-3 sm:my-4">
            <p className="text-[#207e2d] font-medium text-sm sm:text-base">
              {merchData?.modals?.redemptionSuccess?.collectMessage.replace("{item}", selectedItem) || `You may collect your ${selectedItem} at the reception.`}
            </p>
            <p className="text-[#26913d] text-xs sm:text-sm mt-1 sm:mt-2">
              {merchData?.modals?.redemptionSuccess?.idMessage || "Please bring your student ID for verification."}
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto">
              {merchData?.modals?.redemptionSuccess?.closeButton || "Close"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Student ID Modal */}
      <Dialog open={isStudentIdModalOpen} onOpenChange={setIsStudentIdModalOpen}>
        <DialogContent className="w-[95vw] max-w-md p-4 sm:p-6 bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">{merchData?.modals?.studentId?.title || "Enter Your Student ID"}</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-300">
              {merchData?.modals?.studentId?.description || "Please enter your student ID to check your points balance."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleStudentIdSubmit} className="py-3 sm:py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="student-id"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900 dark:text-white"
                >
                  {merchData?.modals?.studentId?.label || "Student ID"}
                </label>
                <input
                  id="student-id"
                  className={`flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${studentIdError ? "border-red-500" : ""}`}
                  placeholder={merchData?.modals?.studentId?.placeholder || "e.g., 2025EN0001"}
                  value={studentId}
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    if (studentIdError) setStudentIdError(false);
                  }}
                  disabled={isLoading}
                />
                {studentIdError && (
                  <div className="flex items-center mt-2 text-red-500 dark:text-red-400 text-xs sm:text-sm">
                    <Frown className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setIsStudentIdModalOpen(false)}
                  disabled={isLoading}
                  className="text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-10"
                >
                  {merchData?.modals?.studentId?.cancelButton || "Cancel"}
                </Button>
                <Button type="submit" disabled={isLoading} className="text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-10">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                      {merchData?.modals?.studentId?.checking || "Checking..."}
                    </>
                  ) : (
                    merchData?.modals?.studentId?.submitButton || "Check Points"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Points Check Modal */}
      <Dialog open={isPointsModalOpen} onOpenChange={setIsPointsModalOpen}>
        <DialogContent className="w-[95vw] max-w-xl p-4 sm:p-6 bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">{merchData?.modals?.pointsCheck?.title || "Student Profile & Points"}</DialogTitle>
          </DialogHeader>
          <div className="py-2 sm:py-4 max-h-[80vh] overflow-y-auto">
            {currentStudent && (
              <div className={`transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}>
                <StudentProfile studentData={currentStudent} />
              </div>
            )}
            {currentStudent && (
              <>
                {canAffordSomething ? (
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-md font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                      {merchData.modals?.pointsCheck?.availableTitle || "Available for Redemption"}
                    </h4>
                    <div className={`grid gap-3 transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}>
                      {affordableMerchandise.map((item, index) => (
                        <div key={index} className="flex items-center p-2 sm:p-3 border rounded-lg bg-gray-50 dark:bg-gray-800">
                          <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#a9ff81] mr-3 sm:mr-4 flex-shrink-0">
                            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-[#26913d]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-white truncate">{item.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 truncate">
                              {item?.points} {merchData?.redeem.points}
                            </p>
                          </div>
                          <PartyPopper className={`h-4 w-4 sm:h-5 sm:w-5 text-amber-500 transition-all duration-1000 ml-2 ${pointsAnimated ? "opacity-100 animate-bounce" : "opacity-0"}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-col items-center mt-4 sm:mt-6 transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}>
                    <Frown className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 dark:text-gray-500 animate-pulse" />
                    <p className="text-gray-500 dark:text-gray-300 mt-3 sm:mt-4 text-center text-sm sm:text-base">
                      {merchData?.modals?.pointsCheck?.notEnoughPoints.replace("{minPoints}", Math.min(...merchandise.map((item) => item.points)).toString()) ||
                        `You need at least ${Math.min(...merchandise.map((item) => item?.points))} points to redeem our lowest-priced item.`}
                    </p>
                  </div>
                )}
              </>
            )}
            <div className="flex justify-center mt-4 sm:mt-6">
              <Button onClick={() => setIsPointsModalOpen(false)}>
                {merchData?.modals?.pointsCheck?.closeButton || "Close"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MerchStore;
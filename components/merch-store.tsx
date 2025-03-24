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
  const [errorMessage, setErrorMessage] = useState("Student ID not found. Please try again or contact reception.");
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // State for student data
  const [allStudents, setAllStudents] = useState<ApiStudentData[]>([]);
  const [currentStudent, setCurrentStudent] = useState<ApiStudentData | null>(null);

  // Fetch student data on component mount
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }
        const data = await response.json();
        setAllStudents(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setFetchError("Failed to load student data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  // Available merchandise with their point costs and multiple images
  const merchandise = [
    {
      name: "LEVEL Cap",
      points: 250,
      images: ["/cap-1.jpg"],
    },
    {
      name: "LEVEL Sweatshirt",
      points: 400,
      images: ["/sweatshirt-1.jpg", "/sweatshirt-2.jpg", "/sweatshirt-3.png"],
    },
    {
      name: "LEVEL Hoodie",
      points: 500,
      images: ["/hoodie-1.jpg", "/hoodie-2.jpg"],
    },
  ];

  // Filter merchandise that user can afford
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
    setErrorMessage("Student ID not found. Please try again or contact reception.");
  };

  const handleStudentIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const student = allStudents.find(
        (s) => s.studentID.toLowerCase() === studentId.trim().toLowerCase()
      );

      if (student) {
        setCurrentStudent(student);
        setIsStudentIdModalOpen(false);
        setIsPointsModalOpen(true);
        setPointsAnimated(false);
      } else {
        setStudentIdError(true);
      }
    } catch (error) {
      console.error("Error validating student ID:", error);
      setStudentIdError(true);
      setErrorMessage("Error connecting to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger animation after modal opens
  useEffect(() => {
    if (isPointsModalOpen) {
      const timer = setTimeout(() => {
        setPointsAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isPointsModalOpen]);

  if (fetchError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#020817]">
        <p className="text-red-500 dark:text-red-400">{fetchError}</p>
      </div>
    );
  }

  if (isLoading && allStudents.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#020817]">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500 dark:text-gray-400" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-transparent dark:bg-transparent">
      <main className="flex-1 bg-white dark:bg-[#020817]">
        <ScrollAnimateWrapper>
          {/* Hero Section */}
          <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-green-50 to-white dark:from-[#020817] dark:to-[#131312]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
                    Welcome to LEVEL Learning Center Merch Store!
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                    Earn exclusive merchandise through your academic performance and achievements. Our merch isn't
                    for sale - it's earned through your hard work and dedication!
                  </p>
                </div>
                <div className="space-x-2 sm:space-x-4">
                  <Button
                    size="sm"
                    className="text-xs sm:text-sm"
                    onClick={() => {
                      document.getElementById("merchandise-section")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    aria-label="Scroll to merchandise section"
                  >
                    View Merchandise
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
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">
                    How It Works
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                    Our merit-based system rewards your academic achievements with points you can redeem for exclusive
                    merchandise.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 lg:gap-8 mt-6 sm:mt-8">
                <Card className="flex flex-col items-center text-center bg-white dark:bg-gray-900">
                  <CardHeader className="flex justify-center items-center pb-2 sm:pb-4">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#a9ff81] mb-3 sm:mb-4">
                      <Star className="h-8 w-8 sm:h-10 sm:w-10 text-[#26913d]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white">Earn Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">
                      Accumulate points through academic excellence, attendance, and participation in LEVEL programs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center bg-white dark:bg-gray-900">
                  <CardHeader className="flex justify-center items-center pb-2 sm:pb-4">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#a9ff81] mb-3 sm:mb-4">
                      <Award className="h-8 w-8 sm:h-10 sm:w-10 text-[#26913d]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white">Merit-Based System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">
                      Items can't be purchased with money - they must be earned through your performance and
                      dedication.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center bg-white dark:bg-gray-900">
                  <CardHeader className="flex justify-center items-center pb-2 sm:pb-4">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#a9ff81] mb-3 sm:mb-4">
                      <Gift className="h-8 w-8 sm:h-10 sm:w-10 text-[#26913d]" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white">Redeem Rewards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300 text-xs sm:text-sm">
                      Exchange your hard-earned points for exclusive LEVEL merchandise that showcases your achievements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Point Calculator Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-[#020817]">
          

            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    Point Calculator
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    Learn how to earn points through your academic achievements and participation.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-4xl">
                <Card className="overflow-hidden bg-white dark:bg-gray-900">
                  <CardHeader className="bg-[#a9ff81] text-[#26913d] text-center">
                    <CardTitle className="text-2xl">How to Earn Points</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        <div className="flex items-start">
                          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                            <Star className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">High Grades</h3>
                            <p className="text-gray-500 dark:text-gray-300 mt-1">For tests, exams, and quizzes:</p>
                            <p className="font-medium mt-2 text-gray-700 dark:text-gray-200">90-100% → 10 points</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Perfect Attendance</h3>
                            <p className="text-gray-500 dark:text-gray-300 mt-1">Attend all classes in a month:</p>
                            <p className="font-medium mt-2 text-gray-700 dark:text-gray-200">5 points</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        <div className="flex items-start">
                          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                            <Gift className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Participation in Center Events</h3>
                            <p className="text-gray-500 dark:text-gray-300 mt-1">Join and participate in LEVEL events:</p>
                            <p className="font-medium mt-2 text-gray-700 dark:text-gray-200">5-10 points</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                            <Award className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Promoting the Educational Center</h3>
                            <p className="text-gray-500 dark:text-gray-300 mt-1">Reviews, reposts on social media, etc.:</p>
                            <p className="font-medium mt-2 text-gray-700 dark:text-gray-200">5 points</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex justify-center mt-8">
                  <Button size="lg" className="px-8" onClick={handleCheckPoints}>
                    Check Your Points
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    Redeem Your Points
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    Check out the exclusive merchandise available for redemption with your earned points.
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    How to Redeem
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    Follow these simple steps to redeem your points for exclusive LEVEL merchandise.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl">
                <Card className="bg-white dark:bg-gray-900">
                  <CardContent className="pt-6">
                    <ol className="space-y-6">
                      <li className="flex items-start">
                        <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Check Your Points</h3>
                          <p className="text-gray-500 dark:text-gray-300 mt-1">
                            Log in to your LEVEL student portal to view your current point balance.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Browse Merchandise</h3>
                          <p className="text-gray-500 dark:text-gray-300 mt-1">
                            Explore the available merchandise and their point requirements.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Select Your Item</h3>
                          <p className="text-gray-500 dark:text-gray-300 mt-1">
                            Choose the item you want to redeem and click the "Redeem" button.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Confirm Redemption</h3>
                          <p className="text-gray-500 dark:text-gray-300 mt-1">Review your selection and confirm the redemption.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                          5
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Collect Your Merchandise</h3>
                          <p className="text-gray-500 dark:text-gray-300 mt-1">
                            Pick up your merchandise from the LEVEL Learning Center during designated distribution times.
                          </p>
                        </div>
                      </li>
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    Why Choose LEVEL Merch
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    Our merchandise represents more than just clothing - it's a symbol of your achievements.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
                <Card className="bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                      <CardTitle className="text-gray-900 dark:text-white">Quality Materials</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300">
                      All LEVEL merchandise is made with premium materials for comfort and durability.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                      <CardTitle className="text-gray-900 dark:text-white">Exclusive Designs</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300">
                      Our designs are exclusive to LEVEL students and cannot be purchased elsewhere.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                      <CardTitle className="text-gray-900 dark:text-white">Symbol of Achievement</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300">
                      Wearing LEVEL merchandise showcases your academic achievements and dedication.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                      <CardTitle className="text-gray-900 dark:text-white">Community Recognition</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300">
                      Be recognized as part of the LEVEL community of high-achieving students.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-[#020817]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-300 md:text-xl">
                    Find answers to common questions about the LEVEL Merch Store.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl">
                <Card className="mb-4 bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center">
                      <HelpCircle className="h-6 w-6 text-[#26913d] mr-2" />
                      <CardTitle className="text-gray-900 dark:text-white">How do I earn points?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300">
                      Points are earned through academic performance, attendance, participation in LEVEL programs, and
                      other achievements recognized by your instructors.
                    </p>
                  </CardContent>
                </Card>
                <Card className="mb-4 bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center">
                      <HelpCircle className="h-6 w-6 text-[#26913d] mr-2" />
                      <CardTitle className="text-gray-900 dark:text-white">Can I purchase merchandise with money?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300">
                      No, LEVEL merchandise is exclusively available through our points-based redemption system. It cannot
                      be purchased with money.
                    </p>
                  </CardContent>
                </Card>
                <Card className="mb-4 bg-white dark:bg-gray-900">
                  <CardHeader>
                    <div className="flex items-center">
                      <HelpCircle className="h-6 w-6 text-[#26913d] mr-2" />
                      <CardTitle className="text-gray-900 dark:text-white">How often are new items added?</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-300">
                      We regularly update our merchandise collection with new items each semester. Keep an eye on
                      announcements for new additions!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>
      </main>

      {/* Redemption Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95vw] max-w-md p-4 sm:p-6 bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">Redemption Successful!</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-300">
              You have successfully redeemed your points for the {selectedItem}.
            </DialogDescription>
          </DialogHeader>
          <div className="p-3 sm:p-4 bg-[#a9ff81] rounded-md border border-blue-100 my-3 sm:my-4">
            <p className="text-[#207e2d] font-medium text-sm sm:text-base">
              You may collect your {selectedItem} at the reception.
            </p>
            <p className="text-[#26913d] text-xs sm:text-sm mt-1 sm:mt-2">
              Please bring your student ID for verification.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Student ID Modal */}
      <Dialog open={isStudentIdModalOpen} onOpenChange={setIsStudentIdModalOpen}>
        <DialogContent className="w-[95vw] max-w-md p-4 sm:p-6 bg-white dark:bg-gray-900">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">Enter Your Student ID</DialogTitle>
            <DialogDescription className="text-gray-500 dark:text-gray-300">
              Please enter your student ID to check your points balance.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleStudentIdSubmit} className="py-3 sm:py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="student-id"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900 dark:text-white"
                >
                  Student ID
                </label>
                <input
                  id="student-id"
                  className={`flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${studentIdError ? "border-red-500" : ""}`}
                  placeholder="e.g., 2025EN0001"
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
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading} className="text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-10">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    "Check Points"
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
            <DialogTitle className="text-gray-900 dark:text-white">Student Profile & Points</DialogTitle>
          </DialogHeader>

          <div className="py-2 sm:py-4 max-h-[80vh] overflow-y-auto">
            {/* Student Profile Component */}
            {currentStudent && (
              <div className={`transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}>
                <StudentProfile studentData={currentStudent} />
              </div>
            )}

            {/* Available Merchandise Section */}
            {currentStudent && (
              <>
                {canAffordSomething ? (
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-md font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">Available for Redemption</h4>
                    <div
                      className={`grid gap-3 transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}
                    >
                      {affordableMerchandise.map((item, index) => (
                        <div key={index} className="flex items-center p-2 sm:p-3 border rounded-lg bg-gray-50 dark:bg-gray-800">
                          <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#a9ff81] mr-3 sm:mr-4 flex-shrink-0">
                            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-[#26913d]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-white truncate">{item.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 truncate">{item.points} points</p>
                          </div>
                          <PartyPopper
                            className={`h-4 w-4 sm:h-5 sm:w-5 text-amber-500 transition-all duration-1000 ml-2 ${pointsAnimated ? "opacity-100 animate-bounce" : "opacity-0"}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex flex-col items-center mt-4 sm:mt-6 transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}
                  >
                    <Frown className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 dark:text-gray-500 animate-pulse" />
                    <p className="text-gray-500 dark:text-gray-300 mt-3 sm:mt-4 text-center text-sm sm:text-base">
                      You need at least {Math.min(...merchandise.map((item) => item.points))} points to redeem our
                      lowest-priced item.
                    </p>
                  </div>
                )}
              </>
            )}

            <div className="flex justify-center mt-4 sm:mt-6">
              <Button onClick={() => setIsPointsModalOpen(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MerchStore;
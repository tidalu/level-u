"use client"
import Image from "next/image"
import type React from "react"

import { Award, CheckCircle, Gift, HelpCircle, Star, ShoppingBag, TrendingUp, Frown, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper"

function MerchStore() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")
  const [isPointsModalOpen, setIsPointsModalOpen] = useState(false)
  const [isStudentIdModalOpen, setIsStudentIdModalOpen] = useState(false)
  const [pointsAnimated, setPointsAnimated] = useState(false)
  const [studentId, setStudentId] = useState("")
  const [studentIdError, setStudentIdError] = useState(false)
  const [userPoints] = useState(200) // Mock user points

  // Available merchandise with their point costs
  const merchandise = [
    { name: "LEVEL Cap", points: 250, image: "/hoodie-1.jpg?height=300&width=300" },
    { name: "LEVEL Sweatshirt", points: 400, image: "/hoodie-1.jpg?height=300&width=300" },
    { name: "LEVEL Hoodie", points: 500, image: "/hoodie-1.jpg?height=300&width=300" },
  ]

  // Filter merchandise that user can afford
  const affordableMerchandise = merchandise.filter((item) => item.points <= userPoints)
  const canAffordSomething = affordableMerchandise.length > 0

  const handleRedeem = (itemName: string) => {
    setSelectedItem(itemName)
    setIsModalOpen(true)
  }

  const handleCheckPoints = () => {
    setIsStudentIdModalOpen(true)
    setStudentId("")
    setStudentIdError(false)
  }

  const handleStudentIdSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation - in a real app, this would check against a database
    // For demo purposes, we'll accept any ID that starts with "LEVEL" (case insensitive)
    if (studentId.trim().toUpperCase().startsWith("LEVEL")) {
      setIsStudentIdModalOpen(false)
      setIsPointsModalOpen(true)
      // Reset animation state when opening points modal
      setPointsAnimated(false)
    } else {
      setStudentIdError(true)
    }
  }

  // Trigger animation after modal opens
  useEffect(() => {
    if (isPointsModalOpen) {
      const timer = setTimeout(() => {
        setPointsAnimated(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isPointsModalOpen])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 ">
        <ScrollAnimateWrapper>
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Welcome to LEVEL Learning Center Merch Store!
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Earn exclusive merchandise through your academic performance and achievements. Our merch isn&apos;t
                    for sale - it&apos;s earned through your hard work and dedication!
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>View Merchandise</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Our merit-based system rewards your academic achievements with points you can redeem for exclusive
                    merchandise.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
                <Card className="flex flex-col items-center text-center">
                  <CardHeader className="flex justify-center items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#a9ff81]  mb-4">
                      <Star className="h-10 w-10 text-[#26913d] " />
                    </div>
                    <CardTitle>Earn Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Accumulate points through academic excellence, attendance, and participation in LEVEL programs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center">
                  <CardHeader className="flex justify-center items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#a9ff81] mb-4">
                      <Award className="h-10 w-10 text-[#26913d]" />
                    </div>
                    <CardTitle>Merit-Based System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Items can&apos;t be purchased with money - they must be earned through your performance and
                      dedication.
                    </p>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center">
                  <CardHeader className="flex justify-center items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#a9ff81] mb-4">
                      <Gift className="h-10 w-10 text-[#26913d]" />
                    </div>
                    <CardTitle>Redeem Rewards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Exchange your hard-earned points for exclusive LEVEL merchandise that showcases your achievements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          {/* Point Calculator Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Point Calculator</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                    Learn how to earn points through your academic achievements and participation.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-4xl">
                <Card className="overflow-hidden">
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
                            <h3 className="font-bold text-lg">High Grades</h3>
                            <p className="text-gray-500 mt-1">For tests, exams, and quizzes:</p>
                            <p className="font-medium mt-2">90-100% → 10 points</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Perfect Attendance</h3>
                            <p className="text-gray-500 mt-1">Attend all classes in a month:</p>
                            <p className="font-medium mt-2">5 points</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        <div className="flex items-start">
                          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                            <Gift className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Participation in Center Events</h3>
                            <p className="text-gray-500 mt-1">Join and participate in LEVEL events:</p>
                            <p className="font-medium mt-2">5-10 points</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d]">
                            <Award className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">Promoting the Educational Center</h3>
                            <p className="text-gray-500 mt-1">Reviews, reposts on social media, etc.:</p>
                            <p className="font-medium mt-2">5 points</p>
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
        </ScrollAnimateWrapper>

        {/* Redeem Your Points Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Redeem Your Points</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Check out the exclusive merchandise available for redemption with your earned points.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/hoodie-1.jpg?height=300&width=300"
                      alt="LEVEL Hoodie"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="text-xl">LEVEL Hoodie</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mt-2">500 points</CardDescription>
                  <div className="mt-4">
                    <Button className="w-full" onClick={() => handleRedeem("LEVEL Hoodie")}>
                      Redeem
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/hoodie-1.jpg?height=300&width=300"
                      alt="LEVEL Sweatshirt"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="text-xl">LEVEL Sweatshirt</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mt-2">400 points</CardDescription>
                  <div className="mt-4">
                    <Button className="w-full" onClick={() => handleRedeem("LEVEL Sweatshirt")}>
                      Redeem
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src="/hoodie-1.jpg?height=300&width=300"
                      alt="LEVEL Cap"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="text-xl">LEVEL Cap</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mt-2">250 points</CardDescription>
                  <div className="mt-4">
                    <Button className="w-full" onClick={() => handleRedeem("LEVEL Cap")}>
                      Redeem
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">View All Merchandise</Button>
            </div>
          </div>
        </section>

        {/* How to Redeem Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How to Redeem</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Follow these simple steps to redeem your points for exclusive LEVEL merchandise.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <Card>
                <CardContent className="pt-6">
                  <ol className="space-y-6">
                    <li className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Check Your Points</h3>
                        <p className="text-gray-500 mt-1">
                          Log in to your LEVEL student portal to view your current point balance.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Browse Merchandise</h3>
                        <p className="text-gray-500 mt-1">
                          Explore the available merchandise and their point requirements.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Select Your Item</h3>
                        <p className="text-gray-500 mt-1">
                          Choose the item you want to redeem and click the &quot;Redeem&quot; button.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Confirm Redemption</h3>
                        <p className="text-gray-500 mt-1">Review your selection and confirm the redemption.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#a9ff81] text-[#26913d] font-bold">
                        5
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Collect Your Merchandise</h3>
                        <p className="text-gray-500 mt-1">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose LEVEL Merch</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Our merchandise represents more than just clothing - it&apos;s a symbol of your achievements.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                    <CardTitle>Quality Materials</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    All LEVEL merchandise is made with premium materials for comfort and durability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                    <CardTitle>Exclusive Designs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our designs are exclusive to LEVEL students and cannot be purchased elsewhere.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                    <CardTitle>Symbol of Achievement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Wearing LEVEL merchandise showcases your academic achievements and dedication.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#26913d] mr-2" />
                    <CardTitle>Community Recognition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Be recognized as part of the LEVEL community of high-achieving students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Find answers to common questions about the LEVEL Merch Store.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex items-center">
                    <HelpCircle className="h-6 w-6 text-[#26913d] mr-2" />
                    <CardTitle>How do I earn points?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Points are earned through academic performance, attendance, participation in LEVEL programs, and
                    other achievements recognized by your instructors.
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex items-center">
                    <HelpCircle className="h-6 w-6 text-[#26913d] mr-2" />
                    <CardTitle>Can I purchase merchandise with money?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    No, LEVEL merchandise is exclusively available through our points-based redemption system. It cannot
                    be purchased with money.
                  </p>
                </CardContent>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex items-center">
                    <HelpCircle className="h-6 w-6 text-[#26913d] mr-2" />
                    <CardTitle>How often are new items added?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We regularly update our merchandise collection with new items each semester. Keep an eye on
                    announcements for new additions!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Redemption Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Redemption Successful!</DialogTitle>
            <DialogDescription>You have successfully redeemed your points for the {selectedItem}.</DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-[#a9ff81] rounded-md border border-blue-100 my-4">
            <p className="text-[#207e2d] font-medium">You may collect your {selectedItem} at the reception.</p>
            <p className="text-[#26913d] text-sm mt-2">Please bring your student ID for verification.</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Student ID Modal */}
      <Dialog open={isStudentIdModalOpen} onOpenChange={setIsStudentIdModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Your Student ID</DialogTitle>
            <DialogDescription>Please enter your student ID to check your points balance.</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleStudentIdSubmit} className="py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="student-id"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Student ID
                </label>
                <input
                  id="student-id"
                  className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${studentIdError ? "border-red-500" : ""}`}
                  placeholder="e.g., LEVEL12345"
                  value={studentId}
                  onChange={(e) => {
                    setStudentId(e.target.value)
                    if (studentIdError) setStudentIdError(false)
                  }}
                />
                {studentIdError && (
                  <div className="flex items-center mt-2 text-red-500 text-sm">
                    <Frown className="h-4 w-4 mr-1" />
                    <span>Student ID not found. Please try again or contact reception.</span>
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" type="button" onClick={() => setIsStudentIdModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Check Points</Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Points Check Modal */}
      <Dialog open={isPointsModalOpen} onOpenChange={setIsPointsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Current Points</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-6">
            {/* Animated Points Display */}
            <div
              className={`relative transition-all duration-1000 ${pointsAnimated ? "scale-100" : "scale-50 opacity-0"}`}
            >
              <div className="absolute -inset-4 rounded-full bg-[#a9ff81] opacity-20 blur-lg animate-pulse"></div>
              <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-[#a9ff81] mb-4">
                <TrendingUp
                  className={`absolute h-8 w-8 text-[#26913d] transition-all duration-700 ${pointsAnimated ? "opacity-100 top-2 right-2" : "opacity-0 top-16 right-16"}`}
                />
                <span className="text-5xl font-bold text-[#26913d]">{userPoints}</span>
              </div>
            </div>

            <p className="text-lg font-medium mt-4 text-center">
              {canAffordSomething
                ? "Congratulations! You have enough points to redeem:"
                : "Keep earning points to redeem merchandise!"}
            </p>

            {/* Conditional Content Based on Points */}
            {canAffordSomething ? (
              <div className="mt-6 w-full">
                <div
                  className={`grid gap-4 transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}
                >
                  {affordableMerchandise.map((item, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg bg-gray-50">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#a9ff81] mr-4">
                        <ShoppingBag className="h-6 w-6 text-[#26913d]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.points} points</p>
                      </div>
                      <PartyPopper
                        className={`h-5 w-5 text-amber-500 transition-all duration-1000 ${pointsAnimated ? "opacity-100 animate-bounce" : "opacity-0"}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button onClick={() => setIsPointsModalOpen(false)}>View Merchandise</Button>
                </div>
              </div>
            ) : (
              <div
                className={`flex flex-col items-center mt-6 transition-all duration-1000 ${pointsAnimated ? "opacity-100" : "opacity-0"}`}
              >
                <Frown className="h-16 w-16 text-gray-400 animate-pulse" />
                <p className="text-gray-500 mt-4 text-center">
                  You need at least {Math.min(...merchandise.map((item) => item.points))} points to redeem our
                  lowest-priced item.
                </p>
                <div className="mt-6">
                  <Button variant="outline" onClick={() => setIsPointsModalOpen(false)}>
                    Keep Earning
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default MerchStore


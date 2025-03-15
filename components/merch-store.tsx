'use client'
import Image from "next/image"
import { Award, CheckCircle, Gift, HelpCircle, Star } from "lucide-react"
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
  import { useState } from "react"
import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper"
function MerchStore() {
    const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState("")

  const handleRedeem = (itemName: string) => {
    setSelectedItem(itemName)
    setIsModalOpen(true)
  }
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
                  Earn exclusive merchandise through your academic performance and achievements. Our merch isn't for
                  sale - it's earned through your hard work and dedication!
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
                    Items can't be purchased with money - they must be earned through your performance and dedication.
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
                          Choose the item you want to redeem and click the "Redeem" button.
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
                  Our merchandise represents more than just clothing - it's a symbol of your achievements.
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
    </div>
  );
}

export default MerchStore;

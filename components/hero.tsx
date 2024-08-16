'use client';
import { useEffect, useState } from 'react';
import DockLive from './magicui/dock-live';
import { Button } from './ui/button';
import { grid } from 'ldrs';

const Hero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Register the grid only on the client side
    if (typeof window !== 'undefined') {
      grid.register();
    }
  }, []);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxoksVSHKG3rqk99o8gR6ISDneYkuPZ0KPPi3W4VR-mC9IFmMSn6qVHgEdvEft1CBjr/exec',
        {
          method: 'POST',
          body: JSON.stringify(userData),
        }
      );
      setIsSubmitted(true);
      setUserData({
        name: '',
        phone: '',
      });
    } catch (error) {
      alert('Error submitting form better to send an email');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setUserData({
      ...userData,
      phone: userData.phone.replace(/[^0-9]/g, ''),
    });
  }, [userData.phone]);

  return (
    <div className="relative flex h-full max-w-full items-center justify-center overflow-hidden rounded-lg bg-background p-5 sm:p-10 mt-5 sm:mt-20">
      <section className="flex flex-col items-center justify-center space-y-5 sm:space-y-10">
        <div className="w-full text-center px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
            Join Our Waitlist: Be Among the First to Explore the World!
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            Our study abroad programs are designed to offer you a unique
            educational experience that combines academic excellence with
            cultural immersion. Prepare to discover new cultures, meet diverse
            communities, and expand your global perspective while pursuing your
            studies. This landing page is specially crafted to{' '}
            <b>save you time</b> and help you find the{' '}
            <b>perfect international program</b> before you embark on this
            exciting journey. Join our waitlist today and be the first to
            receive updates on our upcoming programs, scholarships, and
            exclusive opportunities!
          </p>
          {!isSubmitted && !isLoading ? (
            <form
              className="mt-4 flex flex-col items-center justify-center gap-4 w-full mx-auto py-5 max-w-full "
              action="#"
              method="post"
              onSubmit={submitForm}
            >
              <div className=" relative mt-9   ">
                <label
                  className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]"
                  htmlFor="name"
                >
                  <span className=" text-red-400">*</span>Full Name
                </label>
                <input
                  type="text"
                  className=" w-full l lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px]  dark:bg-[#020817] outline-none text-sm border-2 border-[#dbdbdb] rounded-xl py-4 px-6"
                  placeholder="Your full name"
                  required
                  name="name"
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value.trim() })
                  }
                />
              </div>
              <div className=" relative mt-2   ">
                <label
                  className=" text-[10px] text-gray-500 p-1 absolute -top-3 left-6  bg-white dark:text-gray-400 dark:bg-[#020817]"
                  htmlFor="phone"
                >
                  <span className=" text-red-400">*</span>Telephone
                </label>
                <input
                  type="tel"
                  className=" w-full l lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px]  dark:bg-[#020817] outline-none text-sm border-2 border-[#dbdbdb] rounded-xl py-4 px-6"
                  placeholder="+998 99 999 99 99"
                  required
                  name="phone"
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value.trim() })
                  }
                />
              </div>

              <Button
                className="w-full lg:max-w-[400px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
                size="lg"
              >
                Submit
              </Button>
            </form>
          ) : isLoading && !isSubmitted ? (
            <div className="mt-4 flex flex-col items-center justify-center gap-4 w-full mx-auto py-5 max-w-full">
              <l-grid size={60} speed={1.5} color="rgba(23, 232, 124)"></l-grid>
            </div>
          ) : isSubmitted ? (
            <div className="w-full flex flex-col items-center justify-center p-5 rounded-lg bg-green-100 dark:bg-green-800 mt-5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 dark:text-green-200">
                Thank You for Joining!
              </h2>
              <p className="mt-2 text-lg text-green-700 dark:text-green-300">
                We appreciate your interest in our programs. You will be among
                the first to receive updates on our new study abroad
                opportunities.
              </p>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                Stay tuned for more information. Follow us on our social media
                channels for the latest news and updates.
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto py-2 max-w-full">
          <p className=" text-sm sm:text-lg text-neutral-600 dark:text-neutral-300">
            Check us out on social media ⚡️
          </p>
          <DockLive />
        </div>
      </section>
    </div>
  );
};

export default Hero;

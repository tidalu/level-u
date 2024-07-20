import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";


const LandingLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {

  return (
    <main >
      <div>
        <div className="mx-auto  h-full w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
}

export default LandingLayout;
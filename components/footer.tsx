import Link from "next/link"
import FooterLinks from "./footer-links"


const Footer = () => {

    return (
        <footer className=' bg-[#0d1c07] dark:bg-[#0d270273] rounded-t-3xl'>
            <div className='max-w-[1900px] mx-auto px-3 lg:px-12 py-10 text-white'>
                <div className=" flex md:justify-end ml-5 -mt-16 md:mr-64">
                    <img src="/footericon.webp" width={80} alt="footer" />
                </div>
                <FooterLinks />

                <div className="grid grid-cols-12 md:gap-20 text-sm text-gray-300 px-6 py-16 md:px-3">
                    <div className=" col-span-full md:col-span-4 ">
                        <h3 className=" text-white font-semibold">Benefit Systems SA,</h3>
                        <p className="mb-4">ul. Plac Europejski 2, 00-844 Warsaw</p>

                        <div className=" leading-6 break-words">District Court for the Capital City of Warsaw in Warsaw, 13th Commercial Division of the National Court Register, KRS: 0000370919, NIP: 8361676510, BDO: 000558784. Share capital PLN 2,958,292.00. </div>
                    </div>
                    <div className=" col-span-full md:col-span-4 mt-10 md:mt-0">
                        <div>Personal Data Protection Inspector
                            Kinga Bieniek-Zawadzka</div>
                        <Link className=" text-white underline font-bold" href="mailto:iod@benefitsystems.pl">iod@benefitsystems.pl</Link>
                    </div>
                </div>


                <div className=" flex flex-col gap-5 md:flex-row justify-between items-center px-6 md:px-3">
                    <div className=" text-sm text-gray-300">© Copyright 2024 Benefit Systems S.A.</div>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="border border-gray-600 rounded-full block">
                            <img src="/facebook.svg" width={20} alt="facebook" className="m-2" />
                        </Link>
                        <Link href="/" className="border border-gray-600 rounded-full block">
                            <img src="/instagram.svg" width={20} alt="instagram" className="m-2" />
                        </Link>
                        <Link href="/" className="border border-gray-600 rounded-full block">
                            <img src="/tiktok.svg" width={20} alt="tiktok" className="m-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
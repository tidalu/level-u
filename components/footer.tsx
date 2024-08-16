import Link from 'next/link';
import FooterLinks from './footer-links';
import { FaTelegram, FaInstagram, FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-[#0d1c07] dark:bg-[#0d270273] rounded-t-3xl">
      <div className="max-w-[1900px] mx-auto px-3 lg:px-12 py-10 text-white">
        <div className=" flex md:justify-end ml-5 -mt-16 md:mr-64">
          <img src="/footericon.webp" width={80} alt="footer" />
        </div>
        <FooterLinks />

        <div className="reveal flex flex-col gap-5  mt-6 md:flex-row justify-between items-center px-6 md:px-3">
          <div className=" text-sm text-gray-300">
            © Copyright 2024 Level learning center
          </div>
          <div className="flex items-center gap-6 ">
            <Link
              href="/"
              className="border border-gray-600 rounded-full block"
            >
              <FaTelegram size={20} className="m-2" />
            </Link>
            <Link
              href="/"
              className="border border-gray-600 rounded-full block"
            >
              <FaInstagram size={20} className="m-2" />
            </Link>
            <Link
              href="/"
              className="border border-gray-600 rounded-full block"
            >
              <FaLink size={20} className="m-2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

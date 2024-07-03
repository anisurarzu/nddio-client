import React from "react";
import {
  CiLocationArrow1,
  CiHeadphones,
  CiStopwatch,
  CiPhone,
} from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaPhoneVolume,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-4 md:px-8 lg:px-16 ml-20 mr-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-xs">
        {/* 1st Column */}
        <div className="col-span-1 text-left">
          <img
            src="https://s3-alpha-sig.figma.com/img/8516/840a/b3a5d9e8f526cda107fdd53201d44da8?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WGWaio9XxXjrxp1NQTINMdi71jc92t81jVL-GhBABRisOLoc4IES9ja7hxnaN8Mu--uVFyjMs6CtGIuiLbR-X8~Mhn20CW0iyyLhDfInDD4GgmLBrgu42ZS1pf91sMJ8M4VSa9Mwbt3nyG5YZRdf1aooUK6LhSW3H~6xL5eInO23vm94raEy2s~feX1FGbbuO94J5BTOcVVgl0gFcitlkKZjRb-C2gicX5pM4VywuGb0ay~-L11Eln18RXq~9r2kaZPHGpJFZ~RUj-xNROJyk6OlLzI84z7kHrp6PuqmKOKNKBet0pgtOmcv4bvs-8MTxSB7vU1Ka2UHH2c9eS8f0w__"
            alt="Company Logo"
            className="mb-4 h-8"
          />
          <p className="text-center mb-4">
            Awesome Online Products store for you
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CiLocationArrow1 className="text-blue-500" />
              <p>Address: 1234 Street Name, City, State, Country</p>
            </div>
            <div className="flex items-center space-x-2">
              <CiHeadphones className="text-blue-500" />
              <p>Call us: (123) 456-7890</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-blue-500" />
              <p>Email: support@example.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <CiStopwatch className="text-blue-500" />
              <p>Hours: Mon - Fri, 9am - 5pm</p>
            </div>
          </div>
        </div>

        {/* 2nd Column */}
        <div className="col-span-1">
          <h3 className="font-bold text-base mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
            <Link
                  href="/about"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </Link>
            </li>
            <li>
              <a href="#delivery" className="hover:underline">
                Delivery info
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
            <Link
                  href="/contact"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </Link>
              </li>
            <li><Link
              href="/blog"
              className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link></li>
            {/* h */}
            <li>
              <a href="#careers" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd Column */}
        <div className="col-span-1">
          <h3 className="font-bold text-base mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <a href="#signin" className="hover:underline">
                Sign in
              </a>
            </li>
            <li>
              <a href="#viewcart" className="hover:underline">
                View Cart
              </a>
            </li>
            <li>
              <a href="#wishlist" className="hover:underline">
                My Wishlist
              </a>
            </li>
            <li>
              <a href="#trackorder" className="hover:underline">
                Track My Order
              </a>
            </li>
            <li>
              <a href="#ticket" className="hover:underline">
                Help Ticket
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:underline">
                Shipping Details
              </a>
            </li>
            <li>
              <a href="#compare" className="hover:underline">
                Compare Products
              </a>
            </li>
          </ul>
        </div>

        {/* 4th Column */}
        <div className="col-span-1">
          <h3 className="font-bold text-base mb-4">Corporate</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                Become a Vendor
              </a>
            </li>
            <li>
              <a href="#delivery" className="hover:underline">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline">
                Farm Business
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:underline">
                Farm Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Our Suppliers
              </a>
            </li>
            <li>
              <a href="#support" className="hover:underline">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:underline">
                Promotions
              </a>
            </li>
          </ul>
        </div>

        {/* 5th Column */}
        <div className="col-span-1">
          <h3 className="font-bold text-base mb-4">Popular</h3>
          <ul className="space-y-2">
            <li>
              <a href="#signin" className="hover:underline">
                iPhone
              </a>
            </li>
            <li>
              <a href="#viewcart" className="hover:underline">
                Samsung
              </a>
            </li>
            <li>
              <a href="#wishlist" className="hover:underline">
                Oppo
              </a>
            </li>
            <li>
              <a href="#trackorder" className="hover:underline">
                Huawei
              </a>
            </li>
            <li>
              <a href="#ticket" className="hover:underline">
                OnePlus
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:underline">
                Tablets
              </a>
            </li>
            <li>
              <a href="#compare" className="hover:underline">
                Computers
              </a>
            </li>
          </ul>
        </div>

        {/* 6th Column */}
        <div className="col-span-1">
          <h3 className="font-bold text-base mb-4">Install App</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#appstore">
              <img
                src="https://s3-alpha-sig.figma.com/img/dc4b/2ffc/a1101b9deff29af3a785dfba02788877?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKgVBKeXQuoYGQUaZeZuIOo46z9~oPB7P3n8~1RqAVWSMV63vKrxwMywergXoN1Nb6shkwl01DSMZZUco2ZFiUkHFwqV5AqrBuWaX7tuC6EvlE2etpyjbIYWFmMN6hlkHe9YXz-DH~pv1UVg4dRw-ZDKvWSAEFdkls1tUjmYSrw1t7-bT1hjqfR6zVf02Rb9xWh6Q0NHhpnO1qsZKKBoNQk3M1vLN3bIyFQkDAHG7SuL0Ljzo6rvCiBHkzZD6HTPr325DzaBE~Hrgc41BDnrEgogmPfJs-p8HWJfeWLvE-HbceJ9bs-PmfxpyC3p40OQS33I1VEsEPaqZmKjPxUtug__"
                alt="App Store"
                className="h-8"
              />
            </a>
            <a href="#googleplay">
              <img
                src="https://s3-alpha-sig.figma.com/img/7844/144b/561e00edee01e736c431c7d8af4eb2f0?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxr4Vm4FDb503~ISjCa17-lCi34613g~QFuQ-bz96U0A2nv~CLVXv0m~Gk2cLiWzGBvt6MNZbdbuMCubLYvyRei3caUe5Jv0uGVYxu8NN03L48~w2j6K3wIeHUqKWbFECEEPmazDYIzVrTSGY8BfB9xsYD9P6xfBaW9JDzCNpXww5krZPZA4XcKOK0WRHPR5hSRZTIr~vK2kC5DS5L8~0gdXxbTWo9VD5V42K-alP7ysmFoNf1AvNjEEuIEmLZ8tZYZLX2lf~GcYpc5pG04TShoipb-mZTvebXqdMEvr~~g62IqflfJcqsoMHzF28yjOYAqZHWOCnBPf4-zuKqhVCQ__"
                alt="Google Play"
                className="h-8"
              />
            </a>
          </div>
          <h3 className="font-bold text-base mb-4">Secured Payment Gateways</h3>
          <p>We support all major credit cards and payment methods.</p>
        </div>
      </div>

      {/* Blue Line */}
      <hr className="border-t-1 border-blue-500 mt-6 mb-2" />

      {/* Copyright and Additional Information */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600  mt-4">
        <div className="text-left md:text-left mb-4 md:mb-0">
          <p>
            &copy; 2024 <span className="text-blue-500">Ndiio</span>
          </p>
          <p>All rights reserved</p>
        </div>

        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-start space-x-4">
            {/* Left Column */}
            <div className="flex items-center space-x-2">
              <FaPhoneVolume className="text-blue-500 h-6 w-6" />
              <div>
                <p className="text-xl font-semibold text-blue-500">1900-6666</p>
                <p className="text-xs">Working 8:00 - 22:00</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex items-center space-x-2">
              <FaPhoneVolume className="text-blue-500 h-6 w-6" />
              <div>
                <p className="text-xl font-semibold text-blue-500">1900-8888</p>
                <p className="text-xs">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mt-4">
          <div className="text-center md:text-left md:mr-4">
            <h3 className="font-bold text-base mb-2">Follow Us</h3>
          </div>
          <div className="flex mt-2 md:mt-0 space-x-1">
            <a
              href="#facebook"
              className="rounded-full bg-blue-500 text-white p-2">
              <FaFacebook />
            </a>
            <a
              href="#twitter"
              className="rounded-full bg-blue-500 text-white p-2">
              <FaTwitter />
            </a>
            <a
              href="#instagram"
              className="rounded-full bg-blue-500 text-white p-2">
              <FaInstagram />
            </a>
            <a
              href="#pinterest"
              className="rounded-full bg-blue-500 text-white p-2">
              <FaPinterest />
            </a>
            <a
              href="#youtube"
              className="rounded-full bg-blue-500 text-white p-2">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import Image from "next/babel/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import logo from "@/assets/good-logo.png";
import hero from "@/assets/hero-1.png";
import featureOne from "@/assets/feature-1.png";
import featureTwo from "@/assets/feature-2.png";
// import itek from "@/assets/itek-logo-removebg-preview (1).png";
import itek from "@/assets/itek-logo.jpeg";
import navBar from "@/assets/bar.png";
import navBar2 from "@/assets/bar2.png";
import coverImg from "@/assets/cover-img.jpg";
import coverImg2 from "@/assets/cover-img-2.jpg";
import pay1 from "@/assets/pay-1.jpg";
import pay2 from "@/assets/pay-2.jpg";
import pay3 from "@/assets/pay-3.jpg";
import pay4 from "@/assets/pay-4.jpg";
import pay5 from "@/assets/pay-5.jpg";
import { useRef } from "react"
import AutoWriteText from "./AutoWriteText";

// import aboutImg from "@/assets/about.jpg";
import aboutImg from "@/assets/about-removebg-preview.png";

import illustration from "@/assets/illus.jpeg";

// import banner from "@/assets/banner.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDog } from '@awesome.me/kit-KIT_CODE/icons/sharp-duotone/solid'



import Link from "next/link";


function Landing() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const router = useRouter();
  const navRef = useRef()
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav")
  }


  return (
    <React.Fragment>
      <header className="fixed w-full z-index">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <Link href="/" className="flex items-center md:px-4 px-2">
              <Image src={logo} width={40} className="mr-3" alt="Logo" />
              <span className="hidden md:flex self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Good Neighborhood
              </span>
            </Link>

            <div
              className="lg:flex items-center gap-1 nav-items   z-[-1] lg:z-auto lg:static absolute bg-white "
              ref={navRef}
            >
              <Link
                href="#about"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                About
              </Link>
              <Link
                href="#howitworks"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                How It Works
              </Link>
              <Link
                href="#donation"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Donation Pools
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Testimonials
              </Link>
              {/* <Link href="/auth/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Contact</Link> */}
            </div>

            <div className="flex items-center lg:order-2">
              <Link
                href="/auth/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link>
              <Link
                href="/auth/signup"
                className="text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-200 dark:hover:bg-blue-200 focus:outline-none dark:focus:ring-blue-200 hover:text-green-200"
              >
                Create Account
              </Link>

              <Link href="/" className="flex items-center px-5 lg:px-0 ">
                <span
                  className="lg:hidden flex self-center text-xl font-semibold whitespace-nowrap dark:text-white nav-btn nav-close-btn"
                  onClick={showNav}
                >
                  <Image src={navBar} width={20} alt="Logo" />
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* Start block */}
      <section className="bg-green-800 dark:bg-gray-900  gradiant-color">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white uppercase text-gray-200 ">
              <AutoWriteText />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A product of ITEK SERVICES, connecting like-minded individuals for
              a better tomorrow
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                href="https://bit.ly/3ZgQpKi"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 shadow-xl"
              >
                Join the Family
              </Link>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex ">
            <Link href="https://bit.ly/3Ta7MZy " target="_blank">
              <Image
                src={itek}
                alt="hero image"
                class="lg:rounded-full border rounded-none"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* End block */}

      {/* Start block */}
      <section className="bg-purple-50 dark:bg-gray-900" id="about">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white uppercase  text-green-700 dark:text-green-500 ">
              Our Story
            </h1>

            <p className="font-light text-gray-500 sm:text-xl xl:text-sm mb-2 dark:text-gray-400 ">
              <span className="font-bold"> Welcome to Good Neighborhood</span>,
              a revolutionary platform that connects people with shared
              interests to address immediate financial needs. Our platform
              leverages cutting-edge computer algorithms to facilitate a secure,
              automated, and decentralized money contribution system. Unlike
              traditional investment platforms, Good Neighborhood operates on a
              peer-to-peer basis, eliminating the need for intermediaries or
              central accounts.
            </p>
            <p className="font-light text-gray-500 sm:text-xl xl:text-sm mb-2 dark:text-gray-400">
              Good Neighborhoods is a product of ITEK SERVICES, a business
              dedicated to harnessing technology to improve lives.
            </p>
            <p className="font-light text-gray-500 sm:text-xl xl:text-sm mb-2 dark:text-gray-400">
              Our platform connects individuals and communities, providing
              tailored financial solutions through a secure and efficient
              peer-to-peer donation system.
            </p>
            <p className="font-light text-gray-500 sm:text-xl xl:text-sm mb-2 dark:text-gray-400 ">
              Good Neighborhood is more than just a platform,  it's a
              community-driven initiative that empowers individuals to take
              control of their financial well-being. Join us in revolutionizing
              the way we address immediate financial needs and build a stronger,
              more supportive neighborhood.
            </p>
            <p className="font-light text-gray-500 sm:text-xl xl:text-sm dark:text-gray-400 mb-7">
              Choose a donation pool ranging from ₦5,000 to ₦100,000 Donate and
              earn 70% of your contribution within 24-72 hours, based on your
              pool input Receive 10% referral rewards for each qualified payment
              or earnings To ensure a seamless experience, members will have
              access to physical coordination centers, training sessions, and
              leadership guidance in various states. We're also developing a
              digital assets payment gateway, enabling users to contribute and
              earn with USDT (Tether).
            </p>
            <Link
              href="/auth/signup"
              className="text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-10 mt-6 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-green-700"
            >
              Get Started
            </Link>
          </div>
          <div className="col-span-2 hidden lg:flex">
            <Image src={aboutImg} alt="" />
          </div>
          {/* <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Multiple Pools</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">User choose a pool and donate, and earned 40% of his/her donation within 24-72 hours based on his/her pool inputs.</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Reward System</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">10% referral rewards is scale àt the end of every qualified payment or earnings.</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Support System</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Members will be in physical places to coordinate each other to take a better advantage of the program.</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Tranings</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">They&apos;ll be training centers for digital economy and solutions with leaders in different states.</p>
                </div>

                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Digital Assets</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">We will later create a digital assets payment gateway to enable users contribute and earn with USDT too.</p>
                </div>
            </div> */}
        </div>
      </section>
      {/* End block */}

      {/* Start block */}
      <Image
        src={coverImg}
        alt="hero image"
        className=" border rounded-none  w-full h-1/4 bg-fixed 
 mix-blend-luminosity bg-white"
      />
      <section
        className="bg-green-700 gradiant-color2 pt-5  absolute z-50  ele-top rounded-lg"
        id="testimonials"
      >
        <h1 className="  text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white uppercase text-center text-white dark:white ">
          What Our Users Say
        </h1>

        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-green-500 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-white md:text-2xl dark:text-white">
                Good Neighborhood is a very good platform that has helped me
                raise cash to help my business when I was in great need.
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <Image className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" /> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-white dark:text-white">
                  Mfoniso Iquo
                </div>
                <div className="pl-3 text-md font-light text-gray-300 dark:text-gray-400">
                  Market Trader
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900" id="donation">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            {/* <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
             
            </h2> */}
            <h1 className="  text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-green-700 uppercase text-center text-green-700 dark:white ">
              Choose Your Donation Pool
            </h1>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Select from various donation pools, each with its own earning
              potential. Our platform features donation pools ranging from
              N5,000 to N100,000.
            </p>
          </div>
          <div className="space-y-8 lg:items-center lg:justify-center lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            <div className="flex flex-col max-w-lg  mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
              <Image
                src={pay1}
                alt=""
                className="rounded-xl mix-blend-luminosity"
              />
              <div class="xl:p-8 p-6">
                <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best option for personal use & for your next project.
                </p>
                <div className="flex flex-col items-center justify-center my-8">
                  <span className="mr-2 text-3xl font-extrabold">N5000</span>
                  <span className="text-gray-500 dark:text-gray-400">Earn</span>
                  <span className="mr-2 text-5xl font-extrabold">N7000</span>
                </div>
                <Link
                  href="/auth/login"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  Donate
                </Link>
              </div>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col max-w-lg  mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
              <Image
                src={pay2}
                alt=""
                className="rounded-xl mix-blend-luminosity"
              />
              <div className="xl:p-8 p-6">
                <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Relevant for multiple users, extended & premium support.
                </p>
                <div className="flex flex-col items-center justify-center my-8">
                  <span className="mr-2 text-3xl font-extrabold">N10,000</span>
                  <span className="text-gray-500 dark:text-gray-400">Earn</span>
                  <span className="mr-2 text-5xl font-extrabold">N14,000</span>
                </div>
                <Link
                  href="/auth/login"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  Donate
                </Link>
              </div>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col max-w-lg  mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
              <Image
                src={pay3}
                alt=""
                className="rounded-xl mix-blend-luminosity"
              />
              <div class="xl:p-8 p-6">
                <h3 className="mb-4 text-2xl font-semibold">Golden</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best for large scale uses and extended redistribution rights.
                </p>
                <div className="flex flex-col items-center justify-center my-8">
                  <span className="mr-2 text-3xl font-extrabold">N20,000</span>
                  <span className="text-gray-500 dark:text-gray-400">Earn</span>
                  <span className="mr-2 text-5xl font-extrabold">N28,000</span>
                </div>
                <Link
                  href="/auth/login"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  Donate
                </Link>
              </div>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col max-w-lg  mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
              <Image
                src={pay4}
                alt=""
                class="rounded-xl mix-blend-luminosity"
              />
              <div className="xl:p-8 p-6">
                <h3 className="mb-4 text-2xl font-semibold">Sapphire</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best for large scale uses and extended redistribution rights.
                </p>
                <div className="flex flex-col items-center justify-center my-8">
                  <span className="mr-2 text-3xl font-extrabold">N50,000</span>
                  <span className="text-gray-500 dark:text-gray-400">Earn</span>
                  <span className="mr-2 text-5xl font-extrabold">N70,000</span>
                </div>
                <Link
                  href="/auth/login"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  Donate
                </Link>
              </div>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col max-w-lg  mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600  dark:bg-gray-800 dark:text-white">
              <Image
                src={pay5}
                alt=""
                className="rounded-xl mix-blend-luminosity"
              />
              <div className="xl:p-8 p-6">
                <h3 className="mb-4 text-2xl font-semibold">Platinum</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best for large scale uses and extended redistribution rights.
                </p>
                <div className="flex flex-col items-center justify-center my-8">
                  <span className="mr-2 text-3xl font-extrabold">N100,000</span>
                  <span className="text-gray-500 dark:text-gray-400">Earn</span>
                  <span className="mr-2 text-5xl font-extrabold">N140,000</span>
                </div>
                <Link
                  href="/auth/login"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900" id="howitworks">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          {/* <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Multiple Pools</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">User choose a pool and donate, and earned 40% of his/her donation within 24-72 hours based on his/her pool inputs.</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Reward System</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">10% referral rewards is scale àt the end of every qualified payment or earnings.</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Support System</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Members will be in physical places to coordinate each other to take a better advantage of the program.</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Tranings</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">They&apos;ll be training centers for digital economy and solutions with leaders in different states.</p>
                </div>

                <div>
                    <svg className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">Digital Assets</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">We will later create a digital assets payment gateway to enable users contribute and earn with USDT too.</p>
                </div>
            </div> */}

          <div className="col-span-2 ">
            <Image src={illustration} alt="" className="rounded-xl" />
          </div>

          <div className="col-span-2 mb-8">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white uppercase  text-green-700 dark:text-green-700 ">
              HOW IT WORKS
            </h1>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Simple. Secure. Empowering
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              Good Neighborhoods utilizes an automatic computer algorithm to
              facilitate a secure and efficient peer-to-peer donation system.
              Our platform is not an investment platform, but rather an
              innovative solution for immediate financial needs.{" "}
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span class="font-bold">Financial Empowerment </span>
              Good Neighborhoods provides a platform to address immediate
              financial needs and earn rewards through a secure and automated
              system.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold">Community Building </span>
              Be part of a supportive community that promotes cooperation and
              mutual help.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold"> Leadership Opportunities </span>
              Develop leadership skills by becoming a Coordinator and guiding
              members in your state.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span class="font-bold">Networking </span>
              Connect with like-minded individuals and build a strong network.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold">Personal Growth </span>
              Contribute to a revolutionary platform that's making a positive
              impact and grow personally.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold"> Innovative Solution </span>
              Be part of a cutting-edge platform that's disrupting traditional
              contribution methods.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold">Flexibility </span>
              Choose from various donation pools and earn rewards at your own
              pace.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold"> Referral Rewards </span>
              Earn 10% referral rewards for each qualified payment or earnings.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold">Digital Economy Training </span>
              Access training sessions and workshops on digital economy and
              solutions.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold">No Third Party or Middle Man </span>
              Receive your rewards automatically to your choice bank with no
              stories that touches the hearts.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm mb-1">
              <span className="font-bold"> Be Part of Something Bigger </span>
              Join a movement that's changing lives and making a real
              difference.
            </p>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 sm:text-xl xl:text-sm  mb-1">
              By joining Good Neighborhoods, you'll be part of a vibrant
              community that's empowering
            </p>
          </div>
        </div>
      </section>
      {/* End block */}

      {/* Start block */}
      {/* End block
    Start block */}
      {/* End block */}

      {/* Start block */}
      <Image
        src={coverImg2}
        alt="hero image"
        className=" border rounded-none  w-full h-1/4 bg-fixed 
 mix-blend-luminosity bg-white"
      />

      <section className="bg-gray-50 dark:bg-gray-800 footerbg rounded-lg">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            {/* <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              
            </h2> */}
            <h1
              className="mb-9 text-4xl font-extrabold leading-none tracking-tight
            md:text-5xl xl:text-6xl dark:text-green-700 uppercase text-center
            text-green-700 dark:white "
            >
              Start donating today
            </h1>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Earn 70% return of your donation.
            </p>
            <Link
              href="/auth/login"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              Start Here
            </Link>
          </div>
        </div>
      </section>
      {/* End block */}
      <footer className="bg-gray-300 dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          {/* <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link href="#" className=" hover:underline">About</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Careers</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Brand Center</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Discord Server</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Twitter</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Facebook</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Privacy Policy</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Licensing</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Terms</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link href="#" className=" hover:underline">About</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Careers</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Brand Center</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">iOS</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Android</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">Windows</Link>
                        </li>
                        <li className="mb-4">
                            <Link href="#" className="hover:underline">MacOS</Link>
                        </li>
                    </ul>
                </div>
            </div> */}
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <Link
              href="/"
              className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image src={logo} width={40} className="mr-3" alt="Logo" />
              Good Neighborhood
            </Link>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              &copy; Good Neighborhoods is a product of ITEK SERVICES. All
              rights reserved.
            </span>
            <ul className="flex justify-center mt-5 space-x-5">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  {" "}
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Landing;
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <section className="bg-gradient-fuchsia background-animate overflow-hidden">
        <section>
          <div className="flex items-center justify-between px-8 py-5">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto mr-14">
                  <a href="#">
                    <img
                      src="gradia-assets/logos/gradia-name-white.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-10">
                <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                  <a href="#">Features</a>
                </li>
                <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                  <a href="#">Solutions</a>
                </li>
                <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                  <a href="#">Resources</a>
                </li>
                <li className="font-heading text-white hover:text-gray-200 text-lg">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto hidden lg:block">
                  <Link href="/signup">
                    <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10">
                      Start Free Trial
                    </button>
                  </Link>
                </div>
                <div className="w-auto lg:hidden">
                  <a href="#">
                    <svg
                      className="navbar-burger text-gray-800"
                      width="51"
                      height="51"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        width="56"
                        height="56"
                        rx="28"
                        fill="currentColor"></rect>
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
            <nav className="relative z-10 px-9 py-8 bg-white h-full">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <a className="inline-block" href="#">
                        <img
                          src="gradia-assets/logos/gradia-name-black.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a className="navbar-burger" href="#">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="#111827"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-8 w-full">
                  <ul>
                    <li className="mb-12">
                      <a
                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                        href="#">
                        Features
                      </a>
                    </li>
                    <li className="mb-12">
                      <a
                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                        href="#">
                        Solutions
                      </a>
                    </li>
                    <li className="mb-12">
                      <a
                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                        href="#">
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                        href="#">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                        <div className="py-2 px-5 rounded-10">
                          <p>Login</p>
                        </div>
                      </button>
                    </div>
                    <div className="w-full">
                      <Link href="/signin">
                        <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                          <div className="py-2 px-5 bg-white rounded-lg">
                            <p className="relative z-10">SignIn</p>
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <div className="relative container mx-auto px-4">
          <img
            className="hidden xl:block absolute bottom-64 left-56 transform -translate-y-4"
            src="gradia-assets/elements/hero/line2.svg"
            alt=""
          />
          <img
            className="hidden xl:block absolute bottom-64 right-56 transform -translate-y-28"
            src="gradia-assets/elements/hero/line3.svg"
            alt=""
          />
          <div className="relative z-10 flex flex-wrap justify-center items-center -m-6 lg:pt-32 pb-36">
            <div className="w-full lg:w-auto p-6 self-start">
              <img
                className="xl:relative xl:-top-20 mx-auto"
                src="gradia-assets/images/hero/avatar-message.png"
                alt=""
              />
            </div>
            <div className="flex-1 p-6">
              <div className="lg:max-w-2xl mx-auto">
                <div className="mb-6 font-heading flex items-center max-w-max mx-auto px-5 py-2.5 uppercase font-semibold text-xs tracking-px text-white bg-white bg-opacity-20 rounded-lg">
                  <svg
                    className="mr-2"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.33427 2.74895C6.54382 2.10403 7.45621 2.10403 7.66575 2.74895L8.41445 5.0532C8.50816 5.34162 8.77693 5.53689 9.08019 5.53689H11.503C12.1811 5.53689 12.4631 6.40462 11.9145 6.8032L9.95436 8.22731C9.70902 8.40556 9.60636 8.72152 9.70007 9.00994L10.4488 11.3142C10.6583 11.9591 9.92018 12.4954 9.37158 12.0968L7.41146 10.6727C7.16612 10.4945 6.8339 10.4945 6.58856 10.6727L4.62844 12.0968C4.07985 12.4954 3.34171 11.9591 3.55126 11.3142L4.29995 9.00994C4.39367 8.72152 4.29101 8.40556 4.04566 8.22731L2.08555 6.8032C1.53695 6.40462 1.81889 5.53689 2.497 5.53689H4.91984C5.22309 5.53689 5.49186 5.34162 5.58558 5.0532L6.33427 2.74895Z"
                      fill="white"></path>
                  </svg>
                  <p>Rated #2 on G2</p>
                </div>
                <h1 className="mb-6 font-heading text-center text-white text-7xl md:text-9xl xl:text-12xl font-bold">
                  Customer service that actually works
                </h1>
                <p className="mb-10 font-medium text-xl text-center text-white">
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat.
                </p>
                <button className="group mb-9 relative flex items-center justify-center font-heading px-24 py-5 mx-auto w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md">
                  <div className="absolute transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-fuchsia"></div>
                  <p className="relative z-10 mr-2">Get started now</p>
                  <svg
                    className="relative z-10"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.49999 16.2C13.4764 16.2 16.7 12.9764 16.7 8.99999C16.7 5.02354 13.4764 1.79999 9.49999 1.79999C5.52354 1.79999 2.29999 5.02354 2.29999 8.99999C2.29999 12.9764 5.52354 16.2 9.49999 16.2ZM12.8364 8.36359L10.1364 5.66359C9.78491 5.31212 9.21506 5.31212 8.86359 5.66359C8.51212 6.01506 8.51212 6.58491 8.86359 6.93638L10.0272 8.09999L6.79999 8.09999C6.30293 8.09999 5.89999 8.50293 5.89999 8.99999C5.89999 9.49704 6.30293 9.89999 6.79999 9.89999H10.0272L8.86359 11.0636C8.51212 11.4151 8.51212 11.9849 8.86359 12.3364C9.21506 12.6879 9.78491 12.6879 10.1364 12.3364L12.8364 9.63638C13.1879 9.28491 13.1879 8.71506 12.8364 8.36359Z"
                      fill="white"></path>
                  </svg>
                </button>
                <ul className="flex justify-center">
                  <li className="flex items-center mr-6">
                    <svg
                      className="mr-2"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.95831 10.2917L7.12498 13.4584L15.0416 5.54169"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    </svg>
                    <p className="font-heading text-white text-base">
                      No credit card required
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.95831 10.2917L7.12498 13.4584L15.0416 5.54169"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    </svg>
                    <p className="font-heading text-white text-base">
                      Cancel anytime
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-auto p-6 self-end">
              <img
                className="xl:relative xl:-bottom-10 mx-auto"
                src="gradia-assets/images/hero/avatar-message2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-44 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full lg:w-1/2 p-6">
              <div className="lg:max-w-lg">
                <h2 className="mb-6 font-heading font-bold text-7xl text-gray-900">
                  Get maximum results from all your projects.
                </h2>
                <p className="mb-20 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>
                <ul>
                  <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                    <img
                      className="mr-2"
                      src="gradia-assets/elements/hero/check.svg"
                      alt=""
                    />
                    <p>No hidden fees</p>
                  </li>
                  <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                    <img
                      className="mr-2"
                      src="gradia-assets/elements/hero/check.svg"
                      alt=""
                    />
                    <p>Start with a free account</p>
                  </li>
                  <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                    <img
                      className="mr-2"
                      src="gradia-assets/elements/hero/check.svg"
                      alt=""
                    />
                    <p>Edit online, no software needed</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <div className="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
                <img
                  className="relative top-10 mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                  src="gradia-assets/images/features/dropdown.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="p-16 bg-gradient-cyan2 rounded-10">
            <div className="flex flex-wrap items-center justify-between -m-6">
              <div className="w-full md:w-1/2 p-6">
                <div className="md:max-w-md">
                  <p className="mb-5 font-heading font-medium text-xl text-gray-900 text-opacity-60">
                    Start with a free account
                  </p>
                  <h2 className="font-heading font-bold text-5xl sm:text-6xl text-gray-900">
                    Ready to grow your online business?
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6">
                <div className="flex flex-wrap justify-end -m-2">
                  <div className="w-full xl:w-auto p-2">
                    <button className="font-heading py-5 px-10 block w-full uppercase text-xs tracking-px text-gray-900 font-bold bg-white hover:bg-gray-50 rounded-md">
                      Sign up now
                    </button>
                  </div>
                  <div className="w-full xl:w-auto p-2">
                    <button className="font-heading py-4 px-8 block w-full uppercase text-xs tracking-px text-white font-bold bg-transparent border hover:border-gray-200 border-white rounded-md">
                      <div className="flex items-center justify-center py-0.5">
                        <svg
                          className="mr-2.5"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                            stroke="#F9FAFB"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        </svg>
                        <p>How it works</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-36 bg-gradient-gray2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full md:w-1/2 p-6 md:pb-0">
              <div className="h-full md:max-w-md">
                <div className="flex flex-wrap h-full -m-6">
                  <div className="w-full p-6">
                    <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                      Got questions? We’re here to help!
                    </h2>
                    <p className="text-lg text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </p>
                  </div>
                  <div className="w-full self-end p-6 md:pb-0">
                    <a
                      className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                      href="#">
                      <p className="mb-1">
                        Didn’t find the answer? Contact us here
                      </p>
                      <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-gradient-cyan transition ease-in-out duration-500"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="flex flex-wrap justify-center md:max-w-lg md:mx-auto">
                <div className="w-full lg:w-auto">
                  <div className="pb-7">
                    <h3 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                      Is it really unlimited downloads?
                    </h3>
                    <p className="mb-7 text-black text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sagittis euismod ornare aenean ut justo elit amet. Gravida
                      pulvinar ac elementum praesent vel quis accumsan, proin
                      rhoncus.
                    </p>
                    <div className="h-0.5 bg-gradient-cyan"></div>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <div className="pb-7">
                    <h3 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                      Do you offer discounts on annual plans?
                    </h3>
                    <p className="mb-7 text-black text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sagittis euismod ornare aenean ut justo elit amet. Gravida
                      pulvinar ac elementum praesent vel quis accumsan, proin
                      rhoncus.
                    </p>
                    <div className="h-0.5 bg-gradient-cyan"></div>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <div>
                    <h3 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                      What kind of file do you offer with the packages?
                    </h3>
                    <p className="mb-7 text-black text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sagittis euismod ornare aenean ut justo elit amet. Gravida
                      pulvinar ac elementum praesent vel quis accumsan, proin
                      rhoncus.
                    </p>
                    <div className="h-0.5 bg-gradient-cyan"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

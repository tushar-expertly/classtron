import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
// import startupPng from "../../Assets/startup.png";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import { Link } from "react-router-dom";
// import abouut from "../../Assets/logo/abouut.jpg";
// const ButtonArrow = () => {
//   return (
//     <svg
//       className="size-5 rtl:rotate-180"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M17 8l4 4m0 0l-4 4m4-4H3"
//       />
//     </svg>
//   );
// };

function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-fuchsia-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">
              Swift. Targeted. Timeless. Begin Your Skill Enhancement Journey
              with Classtron.
            </h1>
            <p className="mt-4 text-xl">The Learning Landscape is Changing.</p>
            <Link
              to={"/training"}
              className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-300"
            >
              Begin Your Journey
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Purpose </h2>
            {/* <p className="mt-4 text-gray-600">
              We offer amazing features that will help you to build a great
              website.
            </p> */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  We design your path to skill mastery
                </h3>
                <p className="mt-4 text-gray-600">
                  Our team, made up of seasoned industry professionals and
                  learning specialists, has crafted a dynamic library of online
                  courses focused on efficiency and effectiveness. Knowing your
                  time is precious, we provide microlearning modules that enable
                  you to acquire sought-after skills wherever you are.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">
                  Memorable Learning Experiences.
                </h3>
                <p className="mt-4 text-gray-600">
                  Say goodbye to dull lectures and overwhelming information. Our
                  courses are designed to be interactive and engaging, using
                  advanced technologies such as simulations, gamification, and
                  AI-driven assessments to deliver a fully immersive learning
                  journey.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">Beyond Just Courses.</h3>
                <p className="mt-4 text-gray-600">
                  We’re committed to building a supportive learning community.
                  Engage with other learners in our lively online space, ask
                  questions directly to instructors, and gain meaningful
                  insights from industry professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;

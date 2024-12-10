import React from "react";
import Card from "../components/Card";

import { ArrowLeft } from "lucide-react";
import Eclipse from "../assets/Ellipse.png";
import Mask from "../assets/Mask.png";
import Mask1 from "../assets/Mask1.png";
import OtpForm from "../pages/OtpForm";
import { useNavigate } from "react-router-dom";
import Singapore from "../assets/Singapore.png";
import Hongkong from "../assets/HongKong.png";
import America from "../assets/America.webp";

const OTP = () => {
  const navigate = useNavigate();

  const CardData = [
    {
      image: Singapore,
      name: "Singapore",
      location: "Head Office",
      company: "XYZ Pvt. Ltd.",
      description: "Road to nowhere, 06-404, 500 Internal Error",
    },
    {
      image: Hongkong,
      name: "Hong Kong",
      location: "Regional Office",
      company: "XYZ Pvt. Ltd.",
      description: "Lost in translation, 42-420, Syntax Error",
    },
    {
      image: America,
      name: "United States",
      location: "Branch Office",
      company: "XYZ Pvt. Ltd.",
      description: "Middle of nowhere, 10-101, Connection Timeout",
    },
  ];
  return (
    <div className="bg-slate-600 h-screen w-full flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="relative w-full h-fit py-4 md:h-full md:w-1/2 bg-gray-600 flex flex-col items-center md:justify-center md:overflow-hidden">
        <img
          src={Eclipse}
          alt="Eclipse"
          className="absolute right-64 top-24 z-10  "
        />

        <img src={Mask} alt="Mask" className="absolute left-28 top-24 z-20  " />

        <img
          src={Mask1}
          alt="Mask1"
          className="absolute right-40 top-24 z-30  "
        />

        <div className="absolute top-4 left-4">
          <button
            className="flex items-center gap-x-1 text-white"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={20} color="white" /> Back
          </button>
        </div>

        <div className="md:absolute md:top-16 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-semibold my-7 md:mb-12">
            Layout Cards
          </h1>
        </div>

        <div className="lg:absolute top-36 z-50">
          <Card
            cardClass={
              "bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-lg my-4 w-80 h-48"
            }
          >
            <div className="w-56 mb-5">
              <img
                src={CardData[0].image}
                alt={CardData[0].name}
                className=" rounded-md w-14"
              />
              <h1 className="text-white font-semibold text-md">
                {CardData[0].name}
              </h1>
              <h2 className="text-gray-200 text-sm">{CardData[0].location}</h2>
            </div>
            <div className="w-72">
              <p className="text-gray-200 text-sm">{CardData[0].company}</p>
              <p className="text-gray-200 text-sm">{CardData[0].description}</p>
            </div>
          </Card>
        </div>

        <div className="lg:absolute bottom-20 left-8 z-50">
          <Card
            cardClass={
              "bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-lg my-4 w-80 h-48"
            }
          >
            <div className="w-56 mb-5">
              <img
                src={CardData[1].image}
                alt={CardData[1].name}
                className=" rounded-md w-14"
              />
              <h1 className="text-white font-semibold text-md">
                {CardData[1].name}
              </h1>
              <h2 className="text-gray-200 text-sm">{CardData[1].location}</h2>
            </div>
            <div className="w-72">
              <p className="text-gray-200 text-sm">{CardData[1].company}</p>
              <p className="text-gray-200 text-sm">{CardData[1].description}</p>
            </div>
          </Card>
        </div>

        <div className="lg:absolute bottom-20 right-8 z-50">
          <Card
            cardClass={
              "bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-lg my-4 w-80 h-48"
            }
          >
            <div className="w-56 mb-5">
              <img
                src={CardData[2].image}
                alt={CardData[2].name}
                className=" rounded-md w-14"
              />
              <h1 className="text-white font-semibold text-md">
                {CardData[2].name}
              </h1>
              <h2 className="text-gray-200 text-sm">{CardData[2].location}</h2>
            </div>
            <div className="w-72">
              <p className="text-gray-200 text-sm">{CardData[2].company}</p>
              <p className="text-gray-200 text-sm">{CardData[2].description}</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full h-fit md:h-full md:w-1/2 bg-white">
        <OtpForm />
      </div>
    </div>
  );
};

export default OTP;

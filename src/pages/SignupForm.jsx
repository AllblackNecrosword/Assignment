// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/Logo1.png";

// const SignupForm = () => {
//   const navigate = useNavigate();
//   const [input, setinput] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const otpHandler = (e) => {
//     setinput([...input, e.target.value]);
//   };

//   const submitHandler = () => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate("/form");
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Main Content */}
//       <div className="w-3/4 m-auto relative flex-grow top-[95px]">
//         <div className="flex items-center gap-x-2">
//           <img src={logo} alt="Logo" className="w-10 h-auto" />
//           <h1 className="text-3xl font-bold text-red-600 w-52">Logoipsum</h1>
//         </div>

//         <div className="w-full mt-20">
//           <h1 className="text-2xl font-bold">Verify your account</h1>
//           <p className="text-base text-gray-400">
//             Please enter the 6-digit code we just sent to s*********a@xyz.com
//           </p>
//           {/* OTP Input Section */}
//           <div className="mt-8 flex flex-col gap-y-3 w-full items-center md:flex-row md:gap-y-0 md:justify-between">
//             {/* First 3 Inputs */}
//             <div className="flex gap-4 w-full justify-between items-center md:gap-4">
//               <input
//                 type="text"
//                 maxLength="1"
//                 onChange={otpHandler}
//                 className="flex-1 w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 maxLength="1"
//                 onChange={otpHandler}
//                 className="flex-1 w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 maxLength="1"
//                 onChange={otpHandler}
//                 className="flex-1 w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <div className="mx-4 w-8 h-0.5 bg-gray-400"></div>
//               <input
//                 type="text"
//                 maxLength="1"
//                 onChange={otpHandler}
//                 className="flex-1 w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 maxLength="1"
//                 onChange={otpHandler}
//                 className="flex-1 w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 maxLength="1"
//                 onChange={otpHandler}
//                 className="flex-1 w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <button
//             className="bg-red-600 p-3.5 w-full mt-5 rounded-xl text-white text-base"
//             onClick={submitHandler}
//           >
//             Verify
//           </button>
//           {loading ? (
//             <p className="mt-2 text-gray-400">
//               Didn't receive a code?
//               <span className="text-blue-400">Resend Code</span>
//             </p>
//           ) : (
//             <p className="mt-2 text-gray-400">
//               Wait 1:39 seconds before requesting a new code.
//             </p>
//           )}
//         </div>
//       </div>
//       {/* Footer */}
//       <p className="text-center text-gray-400 mt-8 p-4 w-3/4 m-auto">
//         By continuing, you're agreeing to Nobody's{" "}
//         <span className="text-blue-500">
//           Terms of Service, Privacy Policy, and Cookie Policy
//         </span>
//         .
//       </p>
//     </div>
//   );
// };

// export default SignupForm;


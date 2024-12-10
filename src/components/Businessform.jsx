import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const Businessform = () => {
  const [certificate, setCertificate] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleCertificateDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.size > 50 * 1024 * 1024) {
      return alert("File size exceeds the maximum limit of 50MB. ");
    } else {
      setCertificate(file);
    }
  };

  const handleLogoDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.size > 50 * 1024 * 1024) {
      return alert("File size exceeds the maximum limit of 50MB. ");
    } else {
      setLogo(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior during dragging
    e.stopPropagation(); // Prevent propagation of the event
  };

  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">
          Tell us more about your business
        </h1>
        <p className="text-sm text-gray-400">
          Your info is like the Wi-Fi passoword-totally crutial for keeping
          things running,impressing the folks, and making sure you get top-notch
          service without any buffering!
        </p>
      </div>
      <div className="flex justify-between flex-wrap gap-5 mt-8">
        {/* Input fields */}
        <div >
          <label className="block text-sm mb-2 text-gray-600">Legal Name  <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4 "
            placeholder="Legal name"
          />
        </div>
        {/* Second */}
        <div >
          <label className="block text-sm mb-2 text-gray-600">Doing business as <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4"
            placeholder="Doing business as"
          />
        </div>

        <div >
          <label className="block text-sm mb-2 text-gray-600">Company Registration Number <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4"
            placeholder="Company Registration Number"
          />
        </div>

        <div >
          <label className="block text-sm mb-2 text-gray-600">Random Registration Number <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4"
            placeholder="Random Registration Number"
          />
        </div>

        <div >
          <label className="block text-sm mb-2 text-gray-600">Website URL <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4"
            placeholder="Website URL"
          />
        </div>
        {/* Dropdown */}
        <div >
          <label className="block text-sm mb-2 text-gray-600">
            Industry Name
            <span className="text-red-500">*</span>
          </label>
          <select className="w-96 h-11 rounded-md border text-gray-400 border-gray-300 pl-4">
            <option value="" disabled selected>
              Industry Name
            </option>
            <option value="google">Google</option>
            <option value="apple">Apple</option>
          </select>
        </div>

        <div >
          <label className="block text-sm mb-2 text-gray-600">
           One Random Dropdown?
           <span className="text-red-500">*</span>
          </label>
          <select className="w-96 h-11 rounded-md border text-gray-400 border-gray-300 pl-4">
            <option value="" disabled selected>
              Industry Name
            </option>
            <option value="google">Google</option>
            <option value="apple">Apple</option>
          </select>
        </div>

        <div >
          <label className="block text-sm mb-2 text-gray-600">
           Which Dropdown would you like to select?
           <span className="text-red-500">*</span>
          </label>
          <select className="w-96 h-11 rounded-md border text-gray-400 border-gray-300 pl-4">
            <option value="" disabled selected>
              Industry Name
            </option>
            <option value="google">Google</option>
            <option value="apple">Apple</option>
          </select>
        </div>

        <div >
          <label className="block text-sm mb-2 text-gray-600">
            Another Random Dropdown Appears?
            <span className="text-red-500">*</span>
          </label>
          <select className="w-96 h-11 rounded-md border text-gray-400 border-gray-300 pl-4">
            <option value="" disabled selected>
              Industry Name
            </option>
            <option value="google">Google</option>
            <option value="apple">Apple</option>
          </select>
        </div>

        <div >
          <label className="block text-sm mb-2 text-gray-600">
            Account usage Intent
            <span className="text-red-500">*</span>
          </label>
          <select className="w-96 h-11 rounded-md border text-gray-400 border-gray-300 pl-4">
            <option value="" disabled selected>
              Industry Name
            </option>
            <option value="google">Google</option>
            <option value="apple">Apple</option>
          </select>
        </div>
        {/*  */}
        <div >
          <label className="block text-sm mb-2 text-gray-600">Random count per month <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300"
            placeholder="  Random count per month"
          />
        </div>
        <div >
          <label className="block text-sm mb-2 text-gray-600">Expected total visit in this page <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4"
            placeholder="Expected total visit in this page"
          />
        </div>
        {/*  */}
        <div >
          <label className="block text-sm mb-2 text-gray-600">Purpose of using fake form <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-20 rounded-md border border-gray-300 pl-4"
            placeholder="Purpose of using fake form"
          />
        </div>
        <div >
          <label className="block text-sm mb-2 text-gray-600">Ek discription toh banta hai <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-20 rounded-md border border-gray-300 pl-4"
            placeholder="Ek discription toh banta hai"
          />
        </div>
        <div >
          <label className="block text-sm mb-2 text-gray-600">Contact <span className="text-red-500">*</span></label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4"
            placeholder="Contact"
          />
        </div>
      </div>
      {/* Drag and drop */}
      <div className="mt-8">
        <h2 className="font-semibold">Certification of Incorporation <span className="text-red-500">*</span></h2>
        <p className="text-sm text-gray-400 pt-1">
          Upload the incorporation certificate
        </p>
        <div
          className="border-2 border-dashed border-gray-300 rounded-md h-48 text-center mt-7"
          onDrop={handleCertificateDrop}
          onDragOver={handleDragOver}
        >
          <div className="flex justify-center items-center flex-col mt-16 text-sm">
            <div className="mb-4">
              <FileText className="w-7 h-7 rounded-full bg-slate-200" />
            </div>
            <div>
              {certificate ? (
                <>
                  <p className="mt-2 text-black">
                    <strong>Selected File:</strong> {certificate.name}
                  </p>
                  <button
                    className="outline mt-3 p-1 rounded-lg"
                    onClick={() => setCertificate(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-400">
                    <span className="underline text-gray-600">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-gray-400">Maximum file size 50 MB</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Drag and drop */}

      <div className="mt-8" >
        <h2 className="font-semibold">Company Logo</h2>
        <p className="text-sm text-gray-400 pt-1">Upload the Company Logo <span className="text-red-500">*</span></p>
        <div
          className="border-2 border-dashed border-gray-300 rounded-md h-48 text-center mt-7"
          onDrop={handleLogoDrop}
          onDragOver={handleDragOver}
        >
          <div className="flex justify-center  items-center flex-col mt-16 text-sm">
            <div className="mb-4">
              <FileText className="w-7 h-7 rounded-full bg-slate-200" />
            </div>
            <div>
              {logo ? (
                <>
                  <p className="mt-2 text-black">
                    <strong>Selected File:</strong> {logo.name}
                  </p>
                  <button
                    className="outline mt-3 p-1 rounded-lg"
                    onClick={() => setLogo(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-400">
                    <span className="underline text-gray-600">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-gray-400">Maximum file size 50 MB</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Last button */}
      <div className="flex justify-between mt-10">
        <Link to={"/otp"}>
          <button className="border outline p-2 rounded-xl text-black w-24 h-12">
            Previous
          </button>
        </Link>

        <button className="border bg-red-600 p-2 rounded-xl text-white w-24 h-12">
          Next
        </button>
      </div>
    </>
  );
};

export default Businessform;

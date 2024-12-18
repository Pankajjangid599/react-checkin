import React from "react";
import { IoMdCard } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiInfo } from "react-icons/pi";
import { RiMotorbikeLine } from "react-icons/ri";
import ScrollSpyWithBlur from "./AllMeals";

const Content = () => {
 

  return (
    <div className="w-full hide-scrollbar">
      <div className="flex flex-col min-h-screen ">
        <>
          <div className="flex justify-between items-center border-b headertop">
            <div className="flex justify-start items-start gap-3 p-2">
              <img
                src="\logo.jpg"
                alt="logo"
                className="w-12 h-12 md:w-16 md:h-16 rounded"
              />
              <div className="flex flex-col">
                <p className="font-semibold text-xs md:text-sm">CHECK IN</p>
                <div className="flex justify-start items-center gap-4 text-green-600 pt-2">
                  <IoMdCard className="text-green-600 text-xl" />
                  <span order={2}>
                    <svg
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 407.534 407.534"
                      xmlSpace="preserve"
                      fill="#37ad49"
                      style={{
                        color: "rgb(55, 173, 73)",
                        width: 20,
                        height: 20,
                      }}
                    >
                      <g>
                        <g>
                          <g>
                            <path d="M406.962,226.838c-0.001-0.002-0.001-0.003-0.002-0.005l-76.944-193.2c-1.633-4.105-6.286-6.109-10.391-4.476 c-0.003,0.001-0.006,0.002-0.009,0.004L7.464,153.457c-1.273,0.55-2.377,1.428-3.2,2.544C1.668,157.35,0.028,160.02,0,162.945 v208c0,4.418,3.582,8,8,8h336c4.418,0,8-3.582,8-8v-113.6l50.496-20.112C406.6,235.596,408.599,230.942,406.962,226.838z  M336,362.945H16v-192h320V362.945z M133.48,154.985l133.952-53.376c11.955,12.566,28.52,19.708,45.864,19.776l13.36,33.6H133.48 z M352,240.161v-77.216c0-4.418-3.582-8-8-8h-0.128l-16.952-42.576c-0.188-0.355-0.407-0.693-0.656-1.008 c-0.858-3.853-4.426-6.482-8.36-6.16c-16.138,1.471-31.925-5.327-41.944-18.064c-2.493-3.077-6.875-3.842-10.264-1.792 c-0.38,0.045-0.757,0.115-1.128,0.208l-163.536,65.12c-1.979,0.776-3.562,2.315-4.392,4.272H46.976l271.136-107.96l71.032,178.36 L352,240.161z" />
                            <path d="M37.712,308.937c15.532,4.591,27.686,16.73,32.296,32.256c1.011,3.389,4.128,5.711,7.664,5.712 c0.415-0.026,0.827-0.088,1.232-0.184c0.359,0.102,0.726,0.177,1.096,0.224h192c0.33-0.043,0.656-0.11,0.976-0.2 c3.997,0.972,8.025-1.479,8.998-5.476c0.003-0.015,0.007-0.029,0.01-0.044c4.598-15.542,16.754-27.698,32.296-32.296 c3.769-1.152,6.111-4.908,5.488-8.8c0.107-0.388,0.184-0.784,0.232-1.184v-64c-0.047-0.401-0.127-0.797-0.24-1.184 c0.627-3.893-1.716-7.651-5.488-8.8c-15.542-4.597-27.695-16.758-32.28-32.304c-1.158-3.795-4.951-6.143-8.864-5.488 c-0.37-0.103-0.747-0.178-1.128-0.224H80c-0.403,0.048-0.802,0.128-1.192,0.24c-3.891-0.62-7.645,1.721-8.8,5.488 c-4.601,15.539-16.756,27.691-32.296,32.288c-3.769,1.152-6.111,4.908-5.488,8.8c-0.104,0.389-0.179,0.784-0.224,1.184v64 c0.046,0.376,0.121,0.748,0.224,1.112C31.568,303.974,33.915,307.772,37.712,308.937z M48,238.193 c16.064-6.452,28.796-19.184,35.248-35.248h185.496c6.455,16.064,19.19,28.796,35.256,35.248v57.504 c-16.059,6.459-28.789,19.189-35.248,35.248H83.248C76.789,314.886,64.059,302.156,48,295.697V238.193z" />
                            <path d="M176,314.945c26.51,0,48-21.49,48-48c0-26.51-21.49-48-48-48c-26.51,0-48,21.49-48,48 C128.026,293.444,149.501,314.919,176,314.945z M176,234.945c17.673,0,32,14.327,32,32s-14.327,32-32,32s-32-14.327-32-32 S158.327,234.945,176,234.945z" />
                            <path d="M88,278.945c6.627,0,12-5.373,12-12c0-6.627-5.373-12-12-12s-12,5.373-12,12C76,273.573,81.373,278.945,88,278.945z  M88,262.945c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4c-2.209,0-4-1.791-4-4C84,264.736,85.791,262.945,88,262.945z" />
                            <path d="M264,278.945c6.627,0,12-5.373,12-12c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12 C252,273.573,257.373,278.945,264,278.945z M264,262.945c2.209,0,4,1.791,4,4c0,2.209-1.791,4-4,4c-2.209,0-4-1.791-4-4 C260,264.736,261.791,262.945,264,262.945z" />
                          </g>
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-2">
              <PiInfo className="text-xl text-gray-600 me-4" />
            </div>
          </div>
          <div className="flex justify-around place-items-center border-b w-full py-4">
            <button
              className="px-4 h-8 md:h-10 border border-black rounded text-sm"
              style={{
                color: "rgb(102, 102, 102)",
                border: "1px solid rgb(102, 102, 102)",
              }}
            >
              Delivery
            </button>
            <button
              className="px-4 h-8 md:h-10 border border-black rounded text-sm"
              style={{
                color: "rgb(102, 102, 102)",
                border: "1px solid rgb(102, 102, 102)",
              }}
            >
              Pickup
            </button>
          </div>
          <div className="delivery-container border-b border-gray-200 flex flex-col md:flex-row justify-between gap-4 p-6">
            <div className="delivery-item space-y-4">
              <div className="icon flex items-center gap-6">
                <RiMotorbikeLine className=" text-gray-400" />
                <span className="title text-sm">Deliver to</span>
              </div>
              <div className="icon flex items-center gap-6">
                <MdOutlineWatchLater className=" text-gray-400" />
                <span className="title text-sm ">Earliest arrival</span>
              </div>
            </div>
            <div className="text flex flex-col md:flex-row justify-start items-start gap-6">
              <span className="font-semibold text-sm">Choose location</span>
              <span className="text-gray-400 text-sm">Edit</span>
            </div>
          </div>
        </>

        <div className="sticky top-16 bg-white  z-10">
            <ScrollSpyWithBlur/>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <p className="mb-4">Here goes the content...</p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Meals</h2>
            <p>Meal item details...</p>
          </div>
        </div>

        <div className="sticky bottom-0  p-4 shadow-inner">
          <button className=" bg-[#9aa89e] w-full p-2 rounded py-3 ">
            Select your location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;

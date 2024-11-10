import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

export default function Home() {
  return (
    <MainLayouts>
      <div
        className="bg-cover bg-center w-[1920px] h-[1080px] mx-auto py-12 px-6"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/camera-mobile-globe-straw-hat-compass-wooden-plank_23-2147842641.jpg?t=st=1731111488~exp=1731115088~hmac=795503fd588a9e08a4b4f804054d609ef90e26c9405a4530c88b01b75454938e&w=996')`,
          maxWidth: "99vw",
          maxHeight: "79vh",
        }}
      ><section className="border-white bg-black p-4 rounded-lg shadow-md bg-opacity-90 text-center">
          <h1
            className="text-4xl font-bold mb-2 text-center text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Welcome to TRAVEL - Your Gateway to Unforgettable Adventures
          </h1>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center space-x-4 mt-8">
          <section className="border-white bg-black p-4 rounded-lg shadow-md bg-opacity-90 text-center">
            <h2 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: "Georgia, serif" }}>
              Popular Destinations
            </h2>
            <p className="text-sm text-gray-300">
              Discover top places to visit, from iconic spots to hidden gems worldwide.
            </p>
          </section>

          <section className="border-white bg-black p-4 rounded-lg shadow-md bg-opacity-90 text-center">
            <h2 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: "Georgia, serif" }}>
              Travel Tips
            </h2>
            <p className="text-sm text-gray-300">
              Get practical advice on packing, saving, and making the most of your trip.
            </p>
          </section>

          <section className="border-white bg-black p-4 rounded-lg shadow-md bg-opacity-90 text-center">
            <h2 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: "Georgia, serif" }}>
              Book Your Trip
            </h2>
            <p className="text-sm text-gray-300">
              Easily find and book flights, hotels, and experiences for a seamless adventure.
            </p>
          </section>
        </div>
      </div>
    </MainLayouts>
  );
}

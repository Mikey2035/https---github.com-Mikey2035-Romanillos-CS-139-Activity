import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const Page: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="py-12 px-6 overflow-y-auto"
        style={{
          maxWidth: "100vw",
          maxHeight: "79vh",
          margin: "0 auto",
          backgroundImage: `url('https://img.freepik.com/free-photo/camera-mobile-globe-straw-hat-compass-wooden-plank_23-2147842641.jpg?t=st=1731111488~exp=1731115088~hmac=795503fd588a9e08a4b4f804054d609ef90e26c9405a4530c88b01b75454938e&w=996')`,
          backgroundSize: "cover",
        }}
      ><section className="p-8 mb-8 rounded-lg border border-white bg-black bg-opacity-60">
          <h1 className="text-4xl font-bold mb-6 text-white">About TRAVEL</h1>
       </section> 
        <div className="p-8 mb-8 rounded-lg border border-white bg-black bg-opacity-60">
          <p className="text-lg mb-4 text-white">
            Welcome to <strong>TRAVEL</strong>, where we believe that every journey begins with 
            a spark of curiosity and a desire to see the world differently. We started Travel with one goal in mind: 
            to make travel more accessible, inspiring, and effortless for explorers everywhere. Our team of travel enthusiasts
            is dedicated to bringing you the best tips, insights, and guides to help you experience the world your way. 
          </p>
          <p className="text-lg mb-4 text-white">
            Whether you're an adventure seeker, a cultural enthusiast, or simply looking for a relaxing escape, 
            Travel is here to guide you every step of the way. We carefully craft each article, review, and recommendation 
            based on our own experiences and local expertise to ensure your trips are unforgettable. 
          </p>
          <p className="text-lg mb-4 text-white">
          Join us as we journey to new destinations, uncover hidden treasures, and connect with diverse cultures. At Travel, 
          we're more than just a website—we're your travel companion, dedicated to making your travel dreams a reality.
          </p>
        </div>


        <div className="p-8 mb-8 rounded-lg border border-white bg-black bg-opacity-60">
          <h2 className="text-3xl font-semibold mb-2 text-white">Our Services</h2>
          <ul className="list-disc list-inside text-lg mb-4 text-white">
            <li>Authenticity: Real experiences, honest advice.</li>
            <li>Inclusivity: Travel for everyone, everywhere.</li>
            <li>Inspiration: Helping you find your next adventure.</li>
          </ul>
        </div>

        <div className="p-8 rounded-lg border border-white bg-black bg-opacity-60">
          <h2 className="text-3xl font-semibold mb-2 text-white">Get in Touch</h2>
          <p className="text-lg mb-4 text-white">
            If you have any questions or need assistance with your devices, don’t hesitate to contact us. At TRAVEL, we are here to help you every step of the way!
          </p>
        </div>
      </div>
    </MainLayouts>
  );
};

export default Page;

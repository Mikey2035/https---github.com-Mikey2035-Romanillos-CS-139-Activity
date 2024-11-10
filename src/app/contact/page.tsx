import React from "react";
import MainLayouts from "@/components/layouts/MainLayouts";

const ContactPage: React.FC = () => {
  return (
    <MainLayouts>
      <div
        className="py-12 px-6 flex justify-center items-start overflow-y-auto" // Center content with vertical scroll if needed
        style={{
          maxWidth: "100vw",
          maxHeight: "85vh", // Increased height for more visible content
          margin: "0 auto",
          backgroundImage: "url('https://img.freepik.com/free-photo/camera-mobile-globe-straw-hat-compass-wooden-plank_23-2147842641.jpg?t=st=1731111488~exp=1731115088~hmac=795503fd588a9e08a4b4f804054d609ef90e26c9405a4530c88b01b75454938e&w=996')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white", // Set text color to white
        }}
      >
        <div style={{ maxWidth: "800px", textAlign: "center" }}>
          <div className="p-8 mb-8 rounded-lg shadow-lg border-white bg-black bg-opacity-70">
            <h1 className="text-4xl font-bold mb-6 font-georgia">Contact Us</h1>
            <p className="text-lg mb-4 font-georgia">
              We’d love to hear from you! At <strong>TRAVEL</strong>, your feedback is important to us. Whether you have questions, need assistance, or just want to connect, we’re here to help.
            </p>
          </div>

          <div className="p-8 mb-8 rounded-lg shadow-lg border-white bg-black bg-opacity-70">
            <h2 className="text-3xl font-semibold mb-4 font-georgia">How to Reach Us</h2>
            <ul className="list-disc ml-6 mb-4 font-georgia text-left">
              <li>
                Email:{" "}
                <a href="mailto:support@travel.com" className="text-blue-400 hover:underline">
                  support@TRAVEL.com
                </a>
              </li>
              <li>
                Phone: <strong>(928) 203-3928</strong> (Mon-Fri, 9 AM - 5 PM EST)
              </li>
              <li>
                Social Media:
                <ul className="list-inside list-disc ml-4">
                  <li>
                    <a href="https://www.facebook.com/earlmike.romanillos" className="text-blue-400 hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ekimilnu/" className="text-blue-400 hover:underline">
                      Instagram
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="p-8 mb-8 rounded-lg shadow-lg border-white bg-black bg-opacity-70">
            <h2 className="text-3xl font-semibold mb-4 font-georgia">Visit Us</h2>
            <p className="text-lg mb-4 font-georgia">
              If you’re nearby, come visit our store for personalized recommendations!
            </p>
            <p className="text-lg font-georgia">
              <strong>Address:</strong> 123 Repair Lane, Akron, Ohio, Cleveland
            </p>
          </div>

          <div className="p-8 rounded-lg shadow-lg border-white bg-black bg-opacity-70">
            <p className="text-lg font-georgia">
              Thank you for choosing <strong> TRAVEL </strong>! We look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default ContactPage;
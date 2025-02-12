import React from "react";
import Layout from "../layouts/Layout";
import { HistoryOutlined, AimOutlined, EyeOutlined } from "@ant-design/icons";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="mb-8">
        <img
          src="https://careerwise.co.za/wp-content/uploads/2021/03/University-Lecturre-Venue-scaled.jpg"
          alt="About Us"
          className="w-1/2 h-auto rounded-lg shadow-lg mx-auto mb-8"
        />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
            <HistoryOutlined
              style={{
                fontSize: "3rem",
                color: "#1890FF",
                marginBottom: "1rem",
              }}
            />
            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
            <p className="text-lg mb-8">
            In recent years, the surge in the number of Nepali students pursuing higher education abroad has been remarkable. However, this journey is often fraught with challenges, as many Nepali students struggle to access reliable and up-to-date information about study prospects in foreign countries, including crucial details about university applications and visa processes. Recognizing this pressing issue, Commence Your Study was born. Our project emerged from a passionate desire to provide a dedicated platform tailored to the unique needs of Nepali students seeking international education. We envisioned a comprehensive resource that empowers students with information, tools, and a supportive community to make informed decisions about their educational future.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
            <AimOutlined
              style={{
                fontSize: "3rem",
                color: "#52C41A",
                marginBottom: "1rem",
              }}
            />
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-lg mb-8">
            At Commence Your Study, our mission is crystal clear—to simplify and democratize the process of studying abroad for Nepali students. We are committed to breaking down the barriers that hinder access to vital information by offering a one-stop online destination for all things related to international education. Our aim is to provide Nepali students with a wealth of resources, from detailed university application and visa processing guidance to a sophisticated university recommendation system that helps students align their preferences with the best-suited institutions. Through our dedication, we aspire to enable students to embark on their academic journeys abroad with confidence and clarity, transforming their dreams into reality
            </p>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
            <EyeOutlined
              style={{
                fontSize: "3rem",
                color: "#722ED1",
                marginBottom: "1rem",
              }}
            />
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-lg">
            We envision Commence Your Study as the ultimate resource for Nepali students considering studying abroad. Our platform simplifies the complexities of international education, connecting students with answers to their questions and a supportive community. As the popularity of studying abroad among Nepali students grows, we see ourselves as the guiding light, ensuring every student's journey is marked by informed choices, personalized recommendations, and unwavering support. Our goal is to make studying abroad a seamless experience, bridging the gap between Nepali students' aspirations and accomplishments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutUs;

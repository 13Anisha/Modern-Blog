import React from "react";
export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Us
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            At BlogBuzz, we believe in the power of ideas to spark conversations, ignite imaginations, and drive change. Our platform is a dynamic hub where bloggers, creators, and readers come together to explore, engage, and amplify the voices that matter.
            </p>

            <p>
            With a diverse range of topics spanning from lifestyle and technology to culture and beyond, BlogBuzz is your go-to destination for fresh perspectives, insightful commentary, and captivating stories. Whether you're here to share your own thoughts, discover new voices, or simply get inspired, you'll find a vibrant community ready to welcome you with open arms.
            </p>

            <p>
            Join us as we buzz with excitement, buzz with creativity, and buzz with the collective energy of passionate individuals from all walks of life. Let's make some noise, spark some ideas, and create a buzz that resonates far and wide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
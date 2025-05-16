import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4 text-center">Feel free to reach out to us at one of the following email addresses:</p>
        <div className="space-y-4 text-center">
          <a
            href="mailto:vp0964489@gmail.com"
            className="block text-xl text-blue-600 hover:underline"
          >
            Email 1: vp0964489@gmail.com
          </a>
          <a
            href="mailto:amanverma037@gmail.com"
            className="block text-xl text-blue-600 hover:underline"
          >
            Email 2: amanverma037@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

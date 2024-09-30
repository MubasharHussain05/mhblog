"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ fname: '', lname: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can integrate API submission here
    console.log(formData);
  };

  return (
    <main className="container mx-auto p-8">
      <section className="flex flex-col items-center justify-center space-y-6">
        {/* Contact Form */}
        <div className="w-full md:w-7/12 p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300">
          <h3 className="text-xl mb-2">We'd be Happy to Hear from You</h3>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <hr className="mb-6" />
          <p className="mb-8">
            Contact us today to learn how your practice can benefit from our services.
          </p>
          {submitted ? (
            <div className="font-medium text-lg">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div>
                <label htmlFor="fname-field" className="block">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="fname-field"
                  name="fname"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="lname-field" className="block">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="lname-field"
                  name="lname"
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email-field" className="block">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  id="email-field"
                  name="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Phone */}
              <div>
                <label htmlFor="phone-field" className="block">
                  Phone <span>*</span>
                </label>
                <input
                  type="text"
                  id="phone-field"
                  name="phone"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message-field" className="block">
                  Message <span>*</span>
                </label>
                <textarea
                  id="message-field"
                  name="message"
                  rows="4"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div>
                <Button className="flex justify-center items-center" variant="outline" type="submit">Submit</Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;
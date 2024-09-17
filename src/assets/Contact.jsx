import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };
    try {
        await axios.post("https://getform.io/f/aqonzzra", userInfo);
        toast.success("Your message has been sent"); // Success notification
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong"); // Error notification
    }
  };
  
  return (
    <>
      <Toaster /> {/* Add Toaster here to render the notifications */}
      <div 
         name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form 
          onSubmit={handleSubmit(onSubmit)}
          
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })} 
                id="name"
                type="text"
                placeholder="Enter Your Full Name"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="block text-gray-700">Enter Your Email Address</label>
              <input
                {...register("email", { required: true })} 
                id="email"
                type="email"
                placeholder="Enter Your Email Address"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })} 
                id="message"
                placeholder="Enter Your Message"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button> 
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

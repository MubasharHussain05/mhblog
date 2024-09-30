"use client"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from 'next/image';
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const el=useRef()
  useEffect(()=>{
    const typed = new Typed(el.current, {
     strings: ["AI...", "Web development...", "Digital Marketing...", "Seo...","Enterprise...","Startups...","Growth...","Work...","Security...","Fintech..."],
      typeSpeed: 100
    });

    return ()=>{
      typed.destroy()
    }
  },[])
  
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company A",
      feedback: "This app has transformed the way we work. Highly recommend!",
      image: "https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
    },
    {
      name: "Jane Smith",
      role: "Product Manager, Company B",
      feedback: "An amazing experience! The features are top-notch.",
      image: "https://images.pexels.com/photos/5702406/pexels-photo-5702406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
    },
    {
      name: "Sam Wilson",
      role: "Designer, Company C",
      feedback: "Fantastic support and great functionality. A must-have tool.",
      image: "https://images.pexels.com/photos/3649240/pexels-photo-3649240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual image URL
    },
  ];


  const blogs = [
    {
      title: "Understanding React Hooks",
      excerpt: "A deep dive into the power of hooks in React.",
      image: "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1",
      link: "#",
    },
    {
      title: "CSS Grid vs Flexbox",
      excerpt: "When to use CSS Grid and when to use Flexbox.",
      image: "https://techcrunch.com/wp-content/uploads/2023/10/battlefield-biotics-ai.jpg?w=430&h=230&crop=1",
      link: "#",
    },
    {
      title: "Getting Started with Tailwind CSS",
      excerpt: "A comprehensive guide to building modern UIs with Tailwind.",
      image: "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1350618660.jpg?w=430&h=230&crop=1",
      link: "#",
    },
  ];


return (
    <main className="container mx-auto my-16 px-4">
  <div className="flex flex-col lg:flex-row items-center">
    {/* Content Section */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl font-bold mb-6">
        Top quality <span ref={el}></span> <br />
        <span className="text-primary">open-source Blog</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
      In my latest blog post, I dive into the importance of building scalable applications from the start. As user demands grow, having a system designed to scale efficiently becomes crucial for maintaining performance and user experience
      </p>
      
      <Button className="mx-1" variant='outline'>  Get started</Button>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <picture>
        <source srcSet="https://tecdn.b-cdn.net/img/homepage/main.webp" type="image/webp" />
        <Image
          src="https://tecdn.b-cdn.net/img/homepage/main.png"
          className="w-full max-w-md lg:max-w-full"
          alt="Main components preview"
          width={500}
          height={500}
        />
      </picture>
    </div>
  </div>
  <section className="py-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold ">Pricing Plans</h2>
      <p className="text-lg  mt-2">
        Choose the plan that fits your needs.
      </p>
    </div>

    {/* Pricing Grid */}
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Basic Plan */}
      <div className="group  p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-3 hover:scale-105">
        <h3 className="text-2xl font-bold  mb-4">Basic</h3>
        <p className=" mb-6">Perfect for individuals</p>
        <div className="text-4xl font-bold mb-6">
          $9<span className="text-xl font-normal">/month</span>
        </div>
        <ul className="mb-6 space-y-4 ">
          <li>✔ 1 Project</li>
          <li>✔ Basic Analytics</li>
          <li>✔ Email Support</li>
        </ul>
        
        <Button className="mx-1"  variant="outline">Choose Basic</Button>

        
      </div>

      {/* Pro Plan */}
      <div className="group  p-8 rounded-lg shadow-lg hover:shadow-xl border-2 border-primary transition-transform transform hover:-translate-y-3 hover:scale-105">
        <h3 className="text-2xl font-bold  mb-4">Pro</h3>
        <p className=" mb-6">Ideal for small teams</p>
        <div className="text-4xl font-bold mb-6">
          $29<span className="text-xl font-normal">/month</span>
        </div>
        <ul className="mb-6 space-y-4 ">
          <li>✔ 10 Projects</li>
          <li>✔ Advanced Analytics</li>
          <li>✔ Priority Support</li>
          <li>✔ Custom Reports</li>
        </ul>
        
        <Button className="mx-1"  variant="outline">Choose Pro</Button>
      </div>

      {/* Enterprise Plan */}
      <div className="group  p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-3 hover:scale-105">
        <h3 className="text-2xl font-bold  mb-4">Enterprise</h3>
        <p className=" mb-6">Best for large organizations</p>
        <div className="text-4xl font-bold mb-6">
          $99<span className="text-xl font-normal">/month</span>
        </div>
        <ul className="mb-6 space-y-4 ">
          <li>✔ Unlimited Projects</li>
          <li>✔ Full Analytics Suite</li>
          <li>✔ Dedicated Support</li>
          <li>✔ API Access</li>
        </ul>
        <Button className="mx-1"  variant="outline">Choose Enterprise</Button>
      </div>
    </div>
  </div>
</section>

<section className="py-12 ">
  <div className="container mx-auto px-4 text-center mb-8">
    <h2 className="text-4xl font-bold ">What Our Clients Say</h2>
    <p className="text-lg  mt-2">
      Hear from those who have experienced our app.
    </p>
  </div>

  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="group  p-8 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-3 hover:scale-105"
      >
        <Image
          src={testimonial.image}
          alt={`${testimonial.name}'s photo`}
          className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
          width={96}
          height={96}
        />
        <h3 className="text-xl font-semibold  mb-2">
          {testimonial.name}
        </h3>
        <p className=" mb-4">{testimonial.role}</p>
        <p >{`"${testimonial.feedback}"`}</p>
      </div>
    ))}
  </div>
</section>


<section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Top Blogs</h2>
          <p className="text-lg  mt-2">
            Insights and articles to elevate your skills.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-3 hover:scale-105"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-4"
                width={430}
                height={230}
              />
              <h3 className="text-xl font-bold  mb-2">
                {blog.title}
              </h3>
              <p className=" mb-4">{blog.excerpt}</p>
              <Link href={blog.link}> <Button className="mx-1"  variant="outline">Choose Enterprise</Button></Link>
            </div>
          ))}
        </div>
      </div>
    </section>

</main>

);
}
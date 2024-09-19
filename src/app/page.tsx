"use client";
import { useState, useEffect } from "react";
import searchIcon from './public/search.svg';
import Image from 'next/image';
import Vercel from './public/vercel.svg';
import NextUI from './public/nextui.svg';
import Github from './public/github.svg';
import Chatgpt from './public/chatgpt.svg';

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  const formatDate = (date: Date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-black-950 min-h-screen text-white">
      <h1 className="text-4xl md:text-6xl font-medium">{formatDate(time)}</h1>
      <h1 className="text-3xl md:text-5xl font-medium">{formatTime(time)}</h1>
      <h2 className="text-xl md:text-3xl my-4 font-thin">Hello user,</h2>
      <div className="flex flex-col md:flex-row mt-20">
        <form action="https://www.google.com/search" method="get" className="mx-4 mt-4 flex items-center space-x-4 bg-gradient-to-r from-red-100 to-yellow-50 px-4 py-2 rounded-full outlin">
          <input
            type="text"
            name="q"
            placeholder="Google search"
            className="w-full bg-transparent text-black outline-none"
          />
          <button type="submit" className="text-black">            
          <Image
              className={"h-8 w-8 brightness-0"}
              src={searchIcon}
              width={8}
              height={8}
              alt="Search Icon"
            />
          </button>
        </form>
        <form action="https://www.youtube.com/results?search_query=" method="get" className="mx-4 mt-4 flex items-center space-x-4 bg-white px-4 py-2 rounded-full outlin">
          <input
            type="text"
            name="q"
            placeholder="YouTube search"
            className="w-full bg-transparent text-black outline-none"
          />
          <button type="submit" className="text-black">            
          <Image
              className={"h-8 w-8 brightness-100 "}
              src={searchIcon}
              width={8}
              height={8}
              alt="Search Icon"
            />
          </button>      
        </form>
        <form action="https://www.perplexity.ai/search?focus=internet&q=%s" method="get" className="mx-4 mt-4 flex items-center space-x-4 bg-gradient-to-r from-blue-100 to-cyan-50 px-4 py-2 rounded-full outlin">
          <input
            type="text"
            name="q"
            placeholder="Perplexity search"
            className="w-full bg-transparent text-black outline-none"
          />
          <button type="submit" className="text-black">            
          <Image
              className={"h-8 w-8 brightness-0"}
              src={searchIcon}
              width={8}
              height={8}
              alt="Search Icon"
            />
          </button>      
        </form>
      </div>
      <div className="flex flex-row py-4 w-full justify-center mt-80">
        <a href="https://vercel.com/likegravitys-projects" className="flex flex-row justify-center items-center text-xl">            
          <Image
            className={"h-16 w-16 brightness-100"}
            src={Vercel}
            width={64}
            height={64}
            alt="Search Icon"
          />
          Vercel
        </a> 
        <a href="https://nextui.org/docs/guide/introduction" className="flex flex-row justify-center items-center text-xl px-4">            
          <Image
            className={"h-10 w-10 brightness-100 mx-4"}
            src={NextUI}
            width={64}
            height={64}
            alt="Search Icon"
          />
          NextUI
        </a> 
        <a href="https://github.com/" className="flex flex-row justify-center items-center text-xl px-4">            
          <Image
            className={"h-12 w-12 brightness-100 mx-2"}
            src={Github}
            width={64}
            height={64}
            alt="Search Icon"
          />
          Github
        </a> 
        <a href="https://chatgpt.com" className="flex flex-row justify-center items-center text-xl px-4">            
          <Image
            className={"h-10 w-10 brightness-100 mx-2"}
            src={Chatgpt}
            width={64}
            height={64}
            alt="Search Icon"
          />
          ChatGPT
        </a> 
      </div>
    </div>
  );
}
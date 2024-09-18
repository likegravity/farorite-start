"use client";
import { useState, useEffect } from "react";
import searchIcon from './public/search.svg'; // Add this line
import Image from 'next/image'; // Add this line

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
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "Sepember", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-black-950 min-h-screen text-white">
      <h1 className="text-6xl font-bold">{formatDate(time)}</h1>
      <h1 className="text-6xl font-bold">{formatTime(time)}</h1>
      <h2 className="text-3xl my-4 font-thin">Hello user,</h2>
      <div className="flex flex-row">
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
    </div>
  );
}
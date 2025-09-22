import React from "react";

export default function Navigation() {
  const now = new Date();

  return (
    <header className="p-4 border-b border-purple-500/20 mb-8 flex justify-between items-center">
      <div className="flex items-center text-teal-400">
        <a
          href="https://www.joytodev.com"
          target="_blank"
          className="flex items-center space-x-2"
        >
          <span
            className="font-extrabold text-4xl font-mono
                       bg-gradient-to-r from-sky-700 via-indigo-700 to-purple-800
                       text-transparent bg-clip-text dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-600 
                       transition-colors duration-500 cursor-pointer hover:scale-105 hidden sm:inline-block"
          >
            JoyToDev
          </span>
        </a>
      </div>
      <div className="flex items-center space-x-6 text-purple-400 font-mono">
        <div className="flex flex-col items-center sm:flex-row">
          <span className="mr-1 ml-1 text-2xl">DATE:</span>
          <span className="text-teal-400 ml-1 text-center text-2xl">
            {now.toDateString()}
          </span>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <span className="mr-1 ml-1 text-2xl">TIME: </span>
          <span className="text-pink-400 ml-1 text-center text-2xl">
            {now.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </header>
  );
}

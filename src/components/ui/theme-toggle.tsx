import React from "react";
import { ArrowUp } from "lucide-react";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ThemeToggle = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted border-gray-300">
        <button 
          type="button" 
          onClick={handleScrollTop} 
          className="hover:text-green-500 transition-colors text-gray-700 p-2"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">Back to Top</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
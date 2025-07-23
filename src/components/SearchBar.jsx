import React from "react";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 600);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-[-webkit-fill-available]">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Start typing to search for any Dataset"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1F5F8D] focus:border-[#1F5F8D] bg-white text-gray-900 placeholder-gray-500"
      />
    </div>
  );
}

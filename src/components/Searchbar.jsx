"use client";

import React, { useState } from "react";
import { IoArrowBack, IoSearch, IoClose } from "react-icons/io5";

const SearchBar = ({ isOpen, onClose, isDraculaTheme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Mock data - replace with your actual content
  const contentDatabase = [
    {
      title: "Research Paper 1",
      section: "Publications",
      content: "Security analysis of modern cryptographic systems...",
      link: "#publications",
    },
    {
      title: "Advanced Cybersecurity",
      section: "Courses Taught",
      content: "Graduate level course covering advanced security topics...",
      link: "#courses-taught",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();

    if (!trimmedSearchTerm || trimmedSearchTerm.length < 3) {
      setValidationError("Please enter at least 3 characters");
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    setValidationError("");
    setIsSearching(true);
    setHasSearched(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const results = contentDatabase.filter(
        (item) =>
          item.title.toLowerCase().includes(trimmedSearchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500); // Simulated delay
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setHasSearched(false);
    setValidationError("");
  };

  return (
    <div
      className={`fixed inset-0 bg-base-100 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="h-16 border-b bg-white shadow-md">
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full px-4 gap-4">
            <button
              onClick={onClose}
              className="p-2 hover:text-blue-500 transition-colors"
              aria-label="Back"
            >
              <IoArrowBack className="h-5 w-5" />
            </button>
            <form onSubmit={handleSearch} className="flex-1 relative">
              <div className="flex items-center">
                {isSearching ? (
                  <span className="loading loading-spinner loading-sm mr-3" />
                ) : (
                  <IoSearch className="h-5 w-5 text-gray-400 mr-3" />
                )}
                <input
                  type="text"
                  placeholder="Search the publications"
                  value={searchTerm}
                  onChange={(e) => {
                    const newTerm = e.target.value;
                    setSearchTerm(newTerm);
                    setValidationError("");
                    if (newTerm.trim() !== "") {
                      setHasSearched(false);
                      setSearchResults([]);
                    }
                  }}
                  className="w-full p-2 placeholder-gray-500 bg-transparent focus:outline-none text-base"
                  autoFocus
                />
              </div>
            </form>
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="p-2 hover:text-blue-500 transition-colors"
                aria-label="Clear search"
              >
                <IoClose className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {validationError && (
          <p className="text-sm mt-4 text-center text-red-500 font-semibold">
            {validationError}
          </p>
        )}
        {hasSearched && !isSearching && (
          <>
            {searchResults.length > 0 ? (
              <div className="space-y-6">
                <p className="text-sm text-gray-500 mb-2">
                  {searchResults.length} result(s) found for "{searchTerm.trim()}"
                </p>
                <p className="text-sm text-slate-900 mb-4">
                  Results from this site
                </p>
                <hr className="mb-2" />
                {searchResults.map((result, index) => (
                  <div key={index} className="border-b pb-4">
                    <a
                      href={result.link}
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.location.href = result.link;
                      }}
                      className="block hover:bg-blue-50 rounded-lg p-4 transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-1">
                        {result.title}
                      </h3>
                      <p className="text-sm text-blue-500 mb-2">
                        {result.section}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {result.content}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No results found</p>
                <p className="text-sm text-gray-400 mt-2">
                  Try different keywords or check the spelling
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;


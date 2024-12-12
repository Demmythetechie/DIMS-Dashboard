import React, { useState } from 'react';

const ResultTable = ({ semesters = [], results = [] , tableTitle ='' }) => {
  // Fallback to empty string if semesters array is empty
  const [selectedSemester, setSelectedSemester] = useState(semesters.length > 0 ? semesters[0] : '');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

    return (
      <div className='flex flex-col my-6'>
    
    <div className="flex flex-col justify-between p-4 mb-4 rounded-lg bg-[#FDF8FF] md:flex-row">
    {/* Dropdown for selecting semester */}
    <div className="flex items-center mb-4 md:mb-0 ">
      <label className="mr-2 text-base font-semibold text-black">Year & Semester:</label>
      <select
        className="px-8 py-0.5 border border-gray-300 rounded-md text-sm "
        value={selectedSemester}
        onChange={handleSemesterChange}
        disabled={semesters.length === 0}
      >
        {semesters.length > 0 ? (
          semesters.map((semester, index) => (
            <option key={index} value={semester}>
              {semester}
            </option>
          ))
        ) : (
          <option>No semesters available</option>
        )}
      </select>
    </div>

    {/* Search Field */}
    <div className="flex items-center">
      <label className="mr-2 text-base font-semibold text-black">Search:</label>
      <input
        type="text"
        className="px-4 py-2 text-sm border border-gray-300 rounded-md md:w-72"
        placeholder="Search by course title"
        value={searchTerm}
        onChange={handleSearchChange}
        disabled={results.length === 0}
      />
    </div>
  </div>
      <div className="p-4 bg-white border rounded-lg">
      {/* Header Section */}
     

      {/* Table Section */}
      <div className="flex items-center gap-4 my-4">
        <h1 className='text-lg font-medium text-black'>{tableTitle}</h1>
        <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-[#6941C6] bg-[#F9F5FF] rounded-full">
           {results.length} courses
        </span>
      </div>
          <table className="items-center justify-center w-full border-collapse table-auto">
        
        <thead>
            <tr className="text-sm text-left text-gray-600 bg-gray-100">
            <th className="p-2 border-b">Lecturer Info</th>
            <th className="p-2 border-b">Course Title</th>
            <th className="p-2 border-b">Course Code</th>
            <th className="p-2 border-b">Course Unit</th>
            <th className="p-2 border-b">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results
              .filter((result) => result.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((result, index) => (
                  <tr key={index} className="text-sm">
                      <td className="flex items-center p-2 space-x-4 border-b">
                <img 
                  src={result.profilePicture} 
                  alt={result.lecturer} 
                  className="object-cover w-12 h-12 rounded-full"
                />
                <span>{result.lecturer}</span>
              </td>
                      <td className="p-2 border-b">{result.title}</td>
                      <td className="p-2 border-b">{result.unit}</td>

                  <td className="p-2 border-b">{result.code}</td>
                  <td className="p-2 border-b">{result.score}</td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-center">
                No results available
              </td>
            </tr>
          )}
        </tbody>
      </table>
            </div>
            </div>
  );
};

export default ResultTable;

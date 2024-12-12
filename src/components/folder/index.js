import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';

const Folder = ({ courseTitle, courseName, documents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDownloadAll = () => {
    alert(`Downloading all files for ${courseTitle} - ${courseName}`);
  };

  return (
    <div className="p-8 border-b ">
      <div className="flex flex-row "
              onClick={toggleDropdown}
>
      <div 
        className="flex flex-row w-full space-x-3 cursor-pointer items-cwenter"
      >
        <img src="/images/icons/folder.svg" alt="Folder Icon" className="w-6 h-6" />
        <span className="text-lg font-semibold">
          {courseTitle} - {courseName}
        </span>
        
      </div>
      <button>
      <span className="">
          {isOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
        </span>
        </button>
        </div>


      {isOpen && (
        <div className="p-4 mt-4 border border-gray-900 rounded-md">
          <div className="flex justify-end mb-2">
            <button 
              className="flex items-center px-4 py-2 text-sm text-black bg-white border-gray-800 rounded hover:bg-blue-600"
              onClick={handleDownloadAll}
            >
              <AiOutlineDownload className="mr-2" /> Download All
            </button>
          </div>

          <table className="items-center justify-center w-full border-collapse table-auto">
  <thead>
    <tr className="text-sm text-left text-gray-600 bg-gray-100">
      <th className="p-2 border-b">File Name</th>
      <th className="p-2 border-b">File Size</th>
      <th className="p-2 border-b">Date Uploaded</th>
      <th className="p-2 border-b">Last Updated</th>
    </tr>
  </thead>
  <tbody>
    {documents.length > 0 ? (
      documents.map((doc, index) => (
        <tr key={index} className="text-sm">
          <td className="flex items-center p-2 space-x-4 border-b">
            <img 
              src="/images/icons/document.svg" // Replace with your file icon path
              alt={doc.fileName} 
              className="object-cover w-6 h-6"
            />
            <span>{doc.fileName}</span>
          </td>
          <td className="p-2 border-b">{doc.fileSize}</td>
          <td className="p-2 border-b">{doc.dateUploaded}</td>
          <td className="p-2 border-b">{doc.lastUpdated}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4" className="p-4 text-center">
          No documents available
        </td>
      </tr>
    )}
  </tbody>
</table>

        </div>
      )}
      </div>
  );
};

export default Folder;

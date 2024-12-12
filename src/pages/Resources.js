import React, { useState } from "react";
import Header from "components/common/header";
import Folder from "components/folder";

const ResourcesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      courseTitle: "Course 1",
      courseName: "Introduction to Programming",
      documents: [
        { fileName: "Lecture 1.pdf", fileSize: "2MB", dateUploaded: "2023-08-01", lastUpdated: "2023-08-15" },
        { fileName: "Lecture 2.pdf", fileSize: "1.5MB", dateUploaded: "2023-08-03", lastUpdated: "2023-08-16" }
      ]
    },
    {
      courseTitle: "Course 2",
      courseName: "Data Structures",
      documents: [
        { fileName: "Lecture 1.pdf", fileSize: "3MB", dateUploaded: "2023-07-20", lastUpdated: "2023-07-22" }
      ]
    },
  ];

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    const searchMatch = course.courseName.toLowerCase().includes(searchTerm.toLowerCase());
    if (!searchMatch) return false;

    switch (selectedFilter) {
      case "size":
        return course.documents.every((doc) => parseInt(doc.fileSize) > 0); // Adjust logic as needed
      case "date":
        return course.documents.every((doc) => new Date(doc.dateUploaded)); // Adjust logic as needed
      default:
        return true;
    }
  });

  return (
    <section className="p-2 md:p-10">
      <Header title={"Resources"} />

      {/* Filter and Search Bar */}
      <div className="flex flex-col justify-between p-4 my-4 rounded-lg bg-[#FDF8FF] md:flex-row">
        {/* Filter Dropdown */}
        <div className="flex items-center space-x-3">
          <label className="text-base font-semibold text-black">Filter by:</label>
          <select
            className="px-4 py-1 text-sm border border-gray-300 rounded-md"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="">None</option>
            <option value="size">File Size</option>
            <option value="date">Upload Date</option>
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
          />
        </div>
      </div>

      {/* Folder List */}
      <div className="p-0">
        {filteredCourses.map((course, index) => (
          <Folder 
            key={index} 
            courseTitle={course.courseTitle} 
            courseName={course.courseName} 
            documents={course.documents} 
          />
        ))}
      </div>
    </section>
  );
};

export default ResourcesPage;

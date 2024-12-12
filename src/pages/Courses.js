// src/pages/Course.js
import React from 'react';
import Card from 'components/common/card';
import CourseTable from 'components/common/course-table';


const Course = () =>
{
  const courses = [
    {
      lecturer: 'Dr. John Doe',
      profilePicture: 'https://api.startup.gov.ng/api/v1/files/4474675d-e00e-4526-9407-a3d5485fe638.png', // URL for profile picture
      status: 'Active', // Can also be 'Inactive'
      title: 'Computer Science 101',
      unit: '3',
      dayDate: 'Monday, 8:00 PM',
      code: 'CS101',
      venue: 'Room 5A',
    },
    {
      lecturer: 'Prof. Jane Smith', 
      profilePicture: 'https://api.startup.gov.ng/api/v1/files/4474675d-e00e-4526-9407-a3d5485fe638.png', // URL for profile picture
      status: 'Inactive',
      title: 'Mathematics 203',
      unit: '4',
      dayDate: 'Wednesday, 10:00 AM',
      code: 'MTH203',
      venue: 'Room 3B',
    },
  ];
  
  const cardDetails = [
    { title: 'Total number of courses', number: '40', color: '#0D659F' },
    { title: 'Current semester courses', number: '8', color: '#502369' },
    { title: 'Current Cgpa', number: '4.55', color: '#0D659F' },
    { title: 'Outstanding courses', number: '0', color: '#502369' },
  ];

  return (
    <section className="p-2 md:p-10">
      <Header title={"Courses"} />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cardDetails.map((card, index) => (
          <Card key={index} title={card.title} number={card.number} color={card.color} />
        ))}
      </div>
      <CourseTable courses={courses}/>
      
    </section>
  );
};

export default Course;


const Header = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#0B0B0B]">{title}</h1>
    </div>
  );
};
import React from 'react';
import CourseCard from '../course-card';

const ScheduleSection = () => {
  const courses = [
    {
      title: 'Introduction to Computer Science',
      code: 'CS101',
      dateTime: 'Monday, 8:00pm',
      venue: 'Room 101',
    },
    {
      title: 'Data Structures and Algorithms',
      code: 'CS201',
      dateTime: 'Wednesday, 10:00am',
      venue: 'Room 202',
    },{
        title: 'Introduction to Computer Science',
        code: 'CS101',
        dateTime: 'Monday, 8:00pm',
        venue: 'Room 101',
      },
      {
        title: 'Data Structures and Algorithms',
        code: 'CS201',
        dateTime: 'Wednesday, 10:00am',
        venue: 'Room 202',
      },{
        title: 'Introduction to Computer Science',
        code: 'CS101',
        dateTime: 'Monday, 8:00pm',
        venue: 'Room 101',
      },
      {
        title: 'Data Structures and Algorithms',
        code: 'CS201',
        dateTime: 'Wednesday, 10:00am',
        venue: 'Room 202',
      },{
        title: 'Introduction to Computer Science',
        code: 'CS101',
        dateTime: 'Monday, 8:00pm',
        venue: 'Room 101',
      },
      {
        title: 'Data Structures and Algorithms',
        code: 'CS201',
        dateTime: 'Wednesday, 10:00am',
        venue: 'Room 202',
      },{
        title: 'Introduction to Computer Science',
        code: 'CS101',
        dateTime: 'Monday, 8:00pm',
        venue: 'Room 101',
      },
      {
        title: 'Data Structures and Algorithms',
        code: 'CS201',
        dateTime: 'Wednesday, 10:00am',
        venue: 'Room 202',
      },{
        title: 'Introduction to Computer Science',
        code: 'CS101',
        dateTime: 'Monday, 8:00pm',
        venue: 'Room 101',
      },
      {
        title: 'Data Structures and Algorithms',
        code: 'CS201',
        dateTime: 'Wednesday, 10:00am',
        venue: 'Room 202',
      },
    // Add more courses as needed
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
      <CourseCard
        title="Course Schedule"
        courseCount={courses.length}
        courses={courses}
      />
      {/* Placeholder for the second card */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {/* Second card content */}
      </div>
    </div>
  );
};

export default ScheduleSection;

import React from 'react';
import ProgressCard from 'components/common/circular-progressbar';


const AcademicSemesterCards = () => {
  const academicProgress = [
    { label: 'Overall Semester Progress', value: 75 , description: '8 of 10 semesters' },
    { label: 'Days to Exams', value: 50 , description: '50 days' },
    { label: 'Year Progress', value: 85 , description: '4 of 5 Years'},
  ];

  const semesterActivity = [
    { label: 'Assignments Completed', value: 60 , description: '2 of 15 weeks ' },
    { label: 'Classes Attended', value: 90 , description: '50 days' },
    { label: 'Projects Submitted', value: 40 , description: '2 of 2 semesters'},
  ];

  return (
    <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
      <ProgressCard 
        title="Academic Progress" 
        progressData={academicProgress} 
      />
      <ProgressCard 
        title="Semester Activity" 
        progressData={semesterActivity} 
      />
    </div>
  );
};

export default AcademicSemesterCards;

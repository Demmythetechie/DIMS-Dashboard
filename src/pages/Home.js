import React from 'react';
import Card from 'components/common/card';
import AcademicSemesterCards from '../components/home/academic-semester';
// import { ScheduleSection } from '../components/home/ScheduleCard';

const Home = () => {
  const cardDetails = [
    { title: 'Your current level', number: '100', color: '#0D659F' },
    { title: 'Current semester', number: '2', color: '#502369' },
    { title: 'Current Cgpa', number: '4.55', color: '#0D659F' },
    { title: 'Outstanding courses', number: '0', color: '#502369' },
  ];

  return (
    <section className="p-2 md:p-10">
      <Header title={"Welcome Mr Ajayi"} />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cardDetails.map((card, index) => (
          <Card key={index} title={card.title} number={card.number} color={card.color} />
        ))}
      </div>
      <AcademicSemesterCards />
      {/* <ScheduleSection/> */}
    </section>
  );
};

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#0B0B0B]">{title}</h1>
    </div>
  );
};

export default Home;

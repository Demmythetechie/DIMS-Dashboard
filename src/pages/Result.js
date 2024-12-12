// src/pages/Course.js
import React from 'react';
import Card from 'components/common/card';
import ResultTable from 'components/result/result-table';
import { results, semesters } from '../config/config';
import ResultAnalysis from 'components/result/result-analysis';


const Result = () =>
{
 
  
  const cardDetails = [
      { title: 'Examination courses', number: '11', color: '#502369' },
      { title: 'Current Cgpa', number: '4.55', color: '#DFC7EC' , textColor : '[#502369]' },
    { title: 'Outstanding courses', number: '3', color: '#502369'  },
  ];

  return (
    <section className="p-2 md:p-10">
      <Header title={"Results"} />
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cardDetails.map((card, index) => (
          <Card key={index} title={card.title} number={card.number} color={card.color} textColor={card.textColor}  />
        ))}
      </div>
      <ResultTable tableTitle='400 level first semester result' semesters={semesters} results={results} />
      <ResultTable tableTitle='Outstanding courses' semesters={semesters} results={results} />
      <ResultAnalysis/>

      
    </section>
  );
};

export default Result;


const Header = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#0B0B0B]">{title}</h1>
    </div>
  );
};
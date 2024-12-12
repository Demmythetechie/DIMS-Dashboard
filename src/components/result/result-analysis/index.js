import React from 'react';

const Card = ({ title, data }) => {

    const getTcpColor = (tcp) =>
    {
        return tcp < 70 ? 'text-red-600' : 'text-green-600'
    };

  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">TLU</th>
            <th className="py-2">TCP</th>
            <th className="py-2">GPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">{data.tlu}</td>
            <td className={`py-2 ${getTcpColor(data.tcp)}`}>{data.tcp}</td>
            <td className="py-2">{data.gpa}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ResultAnalysis = () => {
  const presentData = { tlu: 24, tcp: 80, gpa: 3.33 };
  const previousData = { tlu: 18, tcp: 65, gpa: 3.61 };
  const cumulativeData = { tlu: 42, tcp: 145, gpa: 3.45 };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card title="Present TLU, TCP & GPA" data={presentData} />
      <Card title="Previous TLU, TCP & GPA" data={previousData} />
      <Card title="Cumulative TLU, TCP & GPA" data={cumulativeData} />
    </div>
  );
};

export default ResultAnalysis;

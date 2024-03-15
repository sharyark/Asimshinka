import React from 'react';

function Nutrition() {
 const nutritionFacts = [
    { label: 'Serving Size', value: '30g' },
    { label: 'Energy (kcal)', value: '333' },
    { label: 'Protein (g)', value: '12.3' },
    { label: 'Total Fat (g)', value: '2.2' },
    { label: 'of which Saturated Fat (g)', value: '0.47' },
    { label: 'of which Trans Fat (g)', value: '0' },
    { label: 'Cholesterol (mg)', value: '0' },
    { label: 'Total Carbohydrate (g)', value: '73.9' },
    { label: 'Total sugars (g)', value: '4.6' },
    { label: 'Added sugar (g)', value: '0' },
    { label: 'Dietary Fibre (g)', value: '10' },
    { label: 'Sodium (mg)', value: '5.0' },
 ];

 return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Nutrition Facts</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Nutrition Fact</th>
            <th className="border border-gray-300 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {nutritionFacts.map((fact, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border border-gray-300 px-4 py-2">{fact.label}</td>
              <td className="border border-gray-300 px-4 py-2">{fact.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default Nutrition;

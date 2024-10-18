import React from 'react';
import './Taxonomy.css';

const Taxonomy = () => {
  const data = [
    {
      citation: 'XXX',
      problemDomain: 'XXX',
      solutionApproach: 'XXX',
      webArchType: 'XXX',
      evaluationMethodology: 'XXX',
      appDomain: 'XXX',
      securityMechanism: 'XXX',
    },
    // We can add actual content into the tables for final deliverable
  ];

  return (
    <div id="taxonomy-section" className="taxonomy-table-container">
      <h2>Taxonomy Section</h2>
      <table className="taxonomy-table">
        <thead>
          <tr>
            <th>Paper Citation</th>
            <th>Problem Domain</th>
            <th>Solution Approach</th>
            <th>Web Arch. Type</th>
            <th>Evaluation Methodology</th>
            <th>App. Domain</th>
            <th>Security Mechanism</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.citation}</td>
              <td>{row.problemDomain}</td>
              <td>{row.solutionApproach}</td>
              <td>{row.webArchType}</td>
              <td>{row.evaluationMethodology}</td>
              <td>{row.appDomain}</td>
              <td>{row.securityMechanism}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Taxonomy;

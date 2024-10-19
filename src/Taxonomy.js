import React from 'react';
import './Taxonomy.css';

const Taxonomy = () => {
  const data = [
    {
      citation: 'W. Ma et al., "A Privacy-Preserving Content-Based Image Retrieval Method Based on Deep Learning in Cloud Computing," Expert Systems with Applications, vol. 203, 2022, doi:10.1016/j.eswa.2022.117508',
      problemDomain: 'Privacy-preserving content-based image retrieval (CBIR) in cloud computing',
      solutionApproach: 'Hybrid encryption technique, including ChannelEnc, SequenceEnc, and PositionEnc, combined with improved DenseNet model for feature extraction',
      webArchType: 'Cloud-based CBIR service',
      evaluationMethodology: 'Comparison using mAP, precision evaluation on two datasets (Corel 10k, Holidays)',
      appDomain: 'Cloud computing (multimedia retrieval, image storage, management)',
      securityMechanism: 'Hybrid encryption (ChannelEnc, SequenceEnc, PositionEnc) for image and feature protection; security against Ciphertext-only Attack (COA)',
    },
    {
      citation: 'Bashir, S. R., Raza, S., & Misic, V. B. (2024). arXiv preprint.',
      problemDomain: 'Privacy in mobile crowdsourcing and edge computing',
      solutionApproach: 'Cryptographic methods, federated learning, spatial cloaking',
      webArchType: 'Edge computing (user, edge, cloud layers)',
      evaluationMethodology: 'Narrative review of literature',
      appDomain: 'Mobile crowdsourcing, IoT, smart cities',
      securityMechanism: 'Encryption, anonymization, authentication protocols',
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

import React, { useState } from 'react';
import './Content.css';

const sections = [
  {
    id: 'problem_domains',
    title: 'Domain',
    content: `
      <h3>Cloud Computing and Data Sharing</h3>
      <p>Privacy-preserving techniques are essential in cloud computing, especially for content-based image retrieval (CBIR), data sharing, and machine learning services.</p>
      <ul>
        <li><strong>Zhou et al. (2022):</strong> Focused on privacy-preserving CBIR using hybrid encryption.</li>
        <li><strong>Gupta & Singh (2022):</strong> Introduced a DAMP model for secure data sharing using differential privacy and encryption.</li>
        <li><strong>R. Hari Kishore et al. (2023):</strong> Explored multi-key homomorphic encryption for secure image classification.</li>
      </ul>
      
      <h3>Federated Learning and Decentralized Systems</h3>
      <p>Federated learning allows privacy-preserving training across decentralized systems without sharing raw data, particularly useful in IoT, healthcare, and banking.</p>
      <ul>
        <li><strong>Monika Dhananjay Rokade et al. (2024):</strong> Reviewed privacy-preserving techniques for decentralized learning using federated learning.</li>
        <li><strong>Runhua Xu et al. (2021):</strong> Discussed privacy-preserving federated learning in healthcare and intelligent manufacturing.</li>
      </ul>
      
      <h3>Mobile Crowdsourcing and Edge Computing</h3>
      <p>Mobile crowdsourcing and edge computing deal with privacy concerns due to the distributed nature of data collection and processing at the edge.</p>
      <ul>
        <li><strong>Syed Raza Bashir et al. (2024):</strong> Addressed privacy concerns in mobile crowdsourcing and edge computing through encryption and federated learning.</li>
        <li><strong>U. Dasi et al. (2024):</strong> Focused on balancing data utility and protection in privacy-preserving machine learning for mobile and edge computing environments.</li>
      </ul>
    `
  },
  {
    id: 'solutions',
    title: 'Solutions',
    content: `
      <h3>Encryption-Based Solutions</h3>
      <p>Encryption techniques such as homomorphic encryption, secure multi-party computation (SMPC), and fully homomorphic encryption (FHE) are used to protect data during training and inference stages of machine learning.</p>
      <ul>
        <li><strong>Mohammad Al-Rubaie & Chang (2018):</strong> Homomorphic encryption and garbled circuits for secure machine learning.</li>
        <li><strong>Lee et al. (2022):</strong> Used fully homomorphic encryption for privacy-preserving deep learning models such as ResNet.</li>
        <li><strong>Hari Kishore et al. (2023):</strong> Explored multi-key FHE for secure image classification.</li>
      </ul>

      <h3>Differential Privacy and Noise Injection</h3>
      <p>Differential privacy adds noise to datasets to ensure that individual data points cannot be reverse-engineered, ensuring strong privacy guarantees.</p>
      <ul>
        <li><strong>U. Dasi et al. (2024):</strong> Assessed privacy-utility tradeoffs using differential privacy in federated learning.</li>
        <li><strong>Mercier et al. (2021):</strong> Utilized differential privacy for time series classification in critical infrastructures.</li>
      </ul>

      <h3>Secure Multi-party Computation (SMPC)</h3>
      <p>SMPC allows multiple parties to compute a function over their inputs while keeping those inputs private. This is often used in privacy-preserving machine learning and federated learning.</p>
      <ul>
        <li><strong>A. Kjamilji et al. (2021):</strong> Used secure multi-party computation for private model training.</li>
        <li><strong>Arpita Patra & Suresh (2020):</strong> Introduced the BLAZE framework, leveraging SMPC for efficient privacy-preserving machine learning.</li>
      </ul>
    `
  },
  {
    id: 'methodologies',
    title: 'Methodologies',
    content: `
      <h3>Benchmarking and Comparative Analysis</h3>
      <p>Many privacy-preserving techniques are evaluated using benchmark datasets to assess the tradeoffs between privacy, utility, and efficiency.</p>
      <ul>
        <li><strong>Wento et al. (2022):</strong> Used precision evaluation on Corel 10k and Holidays datasets to compare hybrid encryption models.</li>
        <li><strong>Mercier et al. (2021):</strong> Conducted hyperparameter evaluation and runtime analysis for privacy-preserving time series classification.</li>
      </ul>

      <h3>Theoretical and Experimental Evaluation</h3>
      <p>Theoretical and experimental evaluations often go hand in hand to prove the efficiency and security of privacy-preserving techniques.</p>
      <ul>
        <li><strong>R. Gupta & A. K. Singh (2022):</strong> Conducted both theoretical and experimental evaluations to analyze the efficiency of privacy solutions.</li>
        <li><strong>Nayil Arana et al. (2024):</strong> Theoretical analysis of federated learning combined with Social Linked Data (Solid) for secure data exchange in web applications.</li>
      </ul>

      <h3>Simulation and Performance Analysis</h3>
      <p>Simulations are used to test scalability, performance, and security strength of privacy-preserving techniques in environments such as cloud computing and IoT.</p>
      <ul>
        <li><strong>Sonkar et al. (2023):</strong> Simulated privacy-preserving techniques on blockchain architectures for performance evaluation in finance and healthcare.</li>
        <li><strong>Wang et al. (2020):</strong> Simulated differential privacy and homomorphic encryption in cloud-based MLaaS environments.</li>
      </ul>
    `
  },
  {
    id: 'findings',
    title: 'Findings',
    content: `
      <h3>Efficiency and Security</h3>
      <p>Privacy-preserving techniques are becoming more efficient, maintaining model accuracy while ensuring robust security, especially in fields like healthcare and finance.</p>
      <ul>
        <li><strong>Khan et al. (2023):</strong> Multi-key encryption provides strong privacy guarantees in supervised machine learning while maintaining accuracy.</li>
        <li><strong>Liu et al. (2021):</strong> Federated learning and differential privacy have become leading approaches in ensuring privacy in machine learning while keeping models efficient.</li>
      </ul>

      <h3>Applications in Specific Domains</h3>
      <p>Privacy-preserving techniques are widely used in domains such as healthcare, finance, IoT, and smart cities.</p>
      <ul>
        <li><strong>Xu et al. (2021):</strong> Highlighted the impact of federated learning on healthcare and intelligent manufacturing.</li>
        <li><strong>Byali et al. (2020):</strong> Applied privacy-preserving techniques in machine learning as a service (MLaaS) for secure server-aided prediction tasks.</li>
      </ul>

      <h3>Trade-offs Between Privacy and Utility</h3>
      <p>There are trade-offs between privacy and utility, but advances in differential privacy and federated learning have enabled a good balance between the two.</p>
      <ul>
        <li><strong>Dasi et al. (2024):</strong> Analyzed privacy-utility trade-offs in privacy-preserving machine learning, particularly in healthcare and IoT.</li>
        <li><strong>Xu et al. (2021):</strong> Demonstrated that federated learning maintains utility while ensuring privacy across various industrial applications.</li>
      </ul>
    `
  }
];

function Content() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="content-page">
      <nav className="content-navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`content-tab ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <div className="content-display">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`content-section ${activeSection === section.id ? 'visible' : ''}`}
          >
            <h2>{section.title}</h2>
            {/* Use dangerouslySetInnerHTML to render HTML content */}
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
import React from 'react';
import './Taxonomy.css';

const Taxonomy = () => {
  const data = [

    {
      citation: 'Wento Ma, Tongqing Zhou, Jiaohua Qin, Xuyu Xiang, Yun Tan, Zhiping Cai, 2022',
      problemDomain: 'Privacy-preserving content-based image retrieval (CBIR) in cloud computing',
      solutionApproach: 'Hybrid encryption technique, including ChannelEnc, SequenceEnc, and PositionEnc, combined with improved DenseNet model for feature extraction',
      webArchType: 'Cloud-based CBIR service',
      evaluationMethodology: 'Comparison using mAP, precision evaluation on two datasets (Corel 10k, Holidays)',
      appDomain: 'Cloud computing (multimedia retrieval, image storage, management)',
      securityMechanism: 'Hybrid encryption (ChannelEnc, SequenceEnc, PositionEnc) for image and feature protection; security against Ciphertext-only Attack (COA)',
    },
    {
      citation: 'Syed Raza Bashir, Shaina Raza, Raza, Vojislav Misic, 2024',
      problemDomain: 'Privacy in mobile crowdsourcing and edge computing',
      solutionApproach: 'Cryptographic methods, federated learning, spatial cloaking',
      webArchType: 'Edge computing (user, edge, cloud layers)',
      evaluationMethodology: 'Narrative review of literature',
      appDomain: 'Mobile crowdsourcing, IoT, smart cities',
      securityMechanism: 'Encryption, anonymization, authentication protocols',
    },
    {
      citation: 'Monika Dhananjay Rokade, Suruchi Deshmukh, Smita Gumaste, Rekha Maruti Shelake, Saba Afreen Ghayasuddin Inamdar, Pankaj Chandre, 2024',
      problemDomain: 'Privacy-preserving federated learning',
      solutionApproach: 'Review of privacy-preserving techniques (differential privacy, secure multi-party computation, homomorphic encryption, etc.)',
      webArchType: 'Decentralized (federated learning architecture)',
      evaluationMethodology: 'Analysis of evaluation metrics and benchmarks for privacy-preserving techniques',
      appDomain: 'Healthcare, banking, telecommunications, IoT and edge computing',
      securityMechanism: 'Differential privacy, secure multi-party computation, homomorphic encryption, federated learning with encrypted data, zero-knowledge proofs',
    },
    {
      citation: 'E. Ustundag Soykan, L. Karaçay, F. Karakoç, E. Tomur, 2022',
      problemDomain: 'Privacy issues in federated learning, decentralized learning, or split learning',
      solutionApproach: 'Federated Learning, SMPC, Homomorphic Encryption, Differential Privacy',
      webArchType: 'Federated Learning Architecture, Decentralized Learning, Split Learning',
      evaluationMethodology: 'Theoretical analysis, experimental validation, performance metrics',
      appDomain: 'Healthcare, Finance, IoT',
      securityMechanism: 'Homomorphic Encryption, Differential Privacy, Secure Multi-party Computation',
    },
    {
      citation: 'A. Kjamilji, E. Savaş, A. Levi, 2021',
      problemDomain: 'Privacy-preserving machine learning with multiple dataset owners',
      solutionApproach: 'Homomorphic encryption and secure building blocks (secSum, SRCPer, SCADS) for private model training and classification',
      webArchType: 'Cloud-based architecture for training and querying models securely',
      evaluationMethodology: 'Theoretical analysis and experimental results on efficiency and security',
      appDomain: 'Healthcare, cybersecurity, finance',
      securityMechanism: 'Homomorphic encryption, secure comparison, secure summation, secure permutation',
    },
    {
      citation: 'R. Gupta, A. K. Singh, 2022',
      problemDomain: 'Privacy and security in cloud data sharing',
      solutionApproach: 'DAMP model using encryption, differential privacy, and machine learning',
      webArchType: 'Cloud based with data owners, CSP, Data users, and data analysts',
      evaluationMethodology: 'Experiments on data sets with accuracy, precision, recall, and F1- score metrics',
      appDomain: 'Cloud computing, data security, and machine learning',
      securityMechanism: 'CP-ABE encryption, differential privacy, and proverif-based security validation',
    },
    {
      citation: 'Dr. Sukhvinder Singh Dari, Dharmesh Dhabliya, K Govindaraju, Anishkumar Dhablia, Prof. (Dr.) Parikshit N. Mahalle, 2024',
      problemDomain: 'Data privacy, preventing unauthorized access, breaches, and violations',
      solutionApproach: 'ML (SVM), data anonymization, homomorphic encryption, federated learning, MFA',
      webArchType: 'Distributed architecture with federated learning for decentralized data training',
      evaluationMethodology: 'Evaluation through machine learning metrics (accuracy, precision, recall)',
      appDomain: 'Healthcare, finance, personal data, IP protection',
      securityMechanism: 'MFA, SVMs for access classification, homomorphic encryption, federated learning, and anomaly detection',
    },
    {
      citation: 'P. Mohassel, Y. Zhang, 2017',
      problemDomain: 'Privacy preserving ML for linear regression, logistic regression, and neural networks',
      solutionApproach: 'Efficient MPC protocols for secure training using a two-server model',
      webArchType: 'Two-server architecture with non-colluding servers',
      evaluationMethodology: 'Benchmark datasets (MNIST, Arcene)',
      appDomain: 'Healthcare, finance, recommendation systems',
      securityMechanism: 'Secure MPC using secret sharing, garbled circuits, OT, LHE',
    },
    {
      citation: 'Gayatri Sravanthi Kuntla, Xin Tian, Zhigang Li, 2021',
      problemDomain: 'Machine Learning techniques (Supervised, Unsupervised, Reinforcement)',
      solutionApproach: 'Deep Learning, Gradient-based approaches, Deep generative models',
      webArchType: 'Cloud-based architectures, API-based services',
      evaluationMethodology: 'Experimental analysis of attack effectiveness, Performance comparisons of ML models, Analysis of privacy preservation techniques',
      appDomain: 'Cybersecurity, Network security, Intrusion detection, Malware detection, User/Process behavior analytics',
      securityMechanism: 'Collaborative Learning (e.g., Federated Learning), Homomorphic Encryption, Differential Privacy, Adaptive Laplace Mechanism, Minimax Defense techniques, Black-box defenses',
    },
    {
      citation: 'Xuefei Yin, Yanming Zhu, Jiankun Hu, 2021',
      problemDomain: 'Privacy-preserving federated learning',
      solutionApproach: 'Survey of various PPFL techniques categorized into: encryption-based, perturbation-based, anonymization-based, and hybrid approaches',
      webArchType: 'N/A',
      evaluationMethodology: 'N/A',
      appDomain: 'General machine learning, not specific to web applications',
      securityMechanism: 'Cryptographic techniques (homomorphic encryption, secure multi-party computation), perturbation techniques (differential privacy), and anonymization techniques',
    },
    {
      citation: 'S. Shaham, M. Ding, B. Liu, S. Dang, Z. Lin, J. Li',
      problemDomain: 'Privacy in location data anonymization',
      solutionApproach: 'k-Anonymity, K-means Clustering',
      webArchType: 'Web-based Location Services',
      evaluationMethodology: 'Tested on Geolife, T-Drive datasets',
      appDomain: 'IoT, Location-Based Services',
      securityMechanism: 'k-Anonymity, Cryptographic Methods',
    },
    {
      citation: 'U. Dasi, N. Singla, R. Balasubramanian, S. Benadikar, R. R. Shanbhag, 2024',
      problemDomain: 'Privacy preserving machine learning, balancing data utility and protection',
      solutionApproach: 'Differential privacy, federated learning, secure multiparty computation',
      webArchType: 'N/A',
      evaluationMethodology: 'Comparative analysis of privacy-preserving techniques, assessment of model performance and privacy trade-offs',
      appDomain: 'Healthcare, Banking, IoT, manufacturing',
      securityMechanism: 'Encryption, anonymization, noise injection',
    },
    {
      citation: 'D. Mercier, A. Lucieri, M. Munir, A. Dengel, S. Ahmed, 2021',
      problemDomain: 'Privacy preserving machine learning for time series classification in critical infrastructures',
      solutionApproach: 'Differential Privacy, Federated Learning, Secret Sharing, Homomorphic Encryption',
      webArchType: 'N/A',
      evaluationMethodology: 'Performance benchmarking, Hyperparameter evaluation, runtime analysis',
      appDomain: 'Energy, communications, manufacturing, Healthcare etc.',
      securityMechanism: 'DP, FL, Secret Sharing, HE',
    },
    {
      citation: 'Mohammad Al-Rubaie, J. Morris Chang, 2018',
      problemDomain: 'Privacy-Preserving ML',
      solutionApproach: 'Homomorphic encryption, garbled circuits, secret sharing, secure processor',
      webArchType: 'Client-side, server-side',
      evaluationMethodology: 'N/A',
      appDomain: 'Face recognition, recommender system, collaborative filtering, regression, classification, clustering',
      securityMechanism: 'Encryption, Noise addition, Data transformation, secure hardware',
    },
    {
      citation: 'R. Hari Kishore, A. Chandra Sekhar, Pramoda Patro, and Debabrata Swain (2023). "Privacy-preserving supervised machine learning in cloud computing."',
      problemDomain: 'Privacy-preserving supervised machine learning in cloud computing',
      solutionApproach: 'Multi-key Fully Homomorphic Encryption (MK-FHE) and Enhanced Support Vector Machine (ESVM)',
      webArchType: 'Cloud-based architecture',
      evaluationMethodology: 'Comparison of accuracy, security strength, and runtime against conventional approaches',
      appDomain: 'Image classification (MNIST dataset)',
      securityMechanism: 'Multi-key fully homomorphic encryption (MK-FHE)',
    },
    {
      citation: 'Nayil Arana, Mohamed Ragab, Thanassis Tiropanis (2024). "Privacy and data sovereignty concerns in web applications."',
      problemDomain: 'Privacy and data sovereignty concerns in web applications',
      solutionApproach: 'Integration of Federated Learning (FL) with Social Linked Data (Solid)',
      webArchType: 'Decentralized web architecture using Solid pods',
      evaluationMethodology: 'Theoretical analysis; suggests future empirical evaluations',
      appDomain: 'General web applications; potential for healthcare, banking, and IoT',
      securityMechanism: 'Federated learning, Solid Pods, WebID authentication',
    },
    {
      citation: 'Harry Chandra Tanuwidjaja, Rakyong Choi, Seunggeun Baek, and Kwanjgo Kim (2020). "Privacy-Preserving Deep Learning (PPDL) in Machine Learning as a Service (MLaaS), focusing on client and model privacy."',
      problemDomain: 'Privacy-Preserving Deep Learning (PPDL) in MLaaS',
      solutionApproach: 'Homomorphic Encryption (HE), Multi-Party Computation (MPC), and Differential Privacy (DP)',
      webArchType: 'Cloud-based architecture',
      evaluationMethodology: 'Combination of qualitative metrics (Privacy of Client, Privacy of Model, Privacy of Result) and quantitative metrics (accuracy, inference time)',
      appDomain: 'Applied in cloud-based MLaaS for tasks like prediction, classification, and decision-making using AI/ML techniques',
      securityMechanism: 'HE, MPC, Secure Enclaves, and Differential Privacy',
    },
    {
      citation: 'Runhua Xu, Nathalie Baracaldo, and James Joshi (2021). "Privacy-preserving machine learning (PPML) in systems, focusing on protecting sensitive data during model training and inference."',
      problemDomain: 'Privacy-preserving machine learning (PPML) in systems',
      solutionApproach: 'Federated learning, homomorphic encryption, differential privacy, and secure multi-party computation',
      webArchType: 'Federated Learning (FL), Knowledge Transfer, and Trusted Execution Environments (TEE)',
      evaluationMethodology: 'PGU triad (Phase, Guarantee, Utility) framework, focusing on phases of privacy',
      appDomain: 'Healthcare, intelligent manufacturing, vehicular networks',
      securityMechanism: 'Differential privacy, homomorphic encryption, trusted execution environments (TEE), secure multi-party computation, and federated learning',
    },
    {
      citation: 'Arpita Patra, Ajith Suresh (2020). "Privacy-preserving Machine Learning (PPML)."',
      problemDomain: 'Privacy-preserving Machine Learning (PPML)',
      solutionApproach: 'BLAZE framework (SOC) for efficient PPML in ML algorithms (Linear Regression, Logistic, NN)',
      webArchType: 'Three-server setting in SOC',
      evaluationMethodology: 'Benchmarking in WAN and LAN settings. Comparison with existing frameworks (ABY3, ASTRA)',
      appDomain: 'Healthcare, Finance',
      securityMechanism: 'Secure Multiparty Computation (MPC), Preprocessing and online phase distinction. Efficient dot product, truncation, activation functions',
    },
    {
      citation: 'Sijun Tan, Brian Knott, Yuan Tian, and David J. Wu (2021). "Privacy-preserving machine learning (ML) on GPUs."',
      problemDomain: 'Privacy-preserving machine learning (ML) on GPUs',
      solutionApproach: 'CRYPTGPU built on PyTorch and Crypten framework with a cryptographic backend',
      webArchType: 'Not specified',
      evaluationMethodology: 'Performance evaluation through benchmarks comparing CPU-based and GPU-based protocols',
      appDomain: 'Machine learning models, especially deep learning for tasks like image classification (e.g., ResNet-152 on ImageNet)',
      securityMechanism: 'Secure multiparty computation (MPC) with secret sharing, ensuring privacy of inputs and models using cryptographic protocols',
    },
    {
      citation: 'Megha Byali, Harsh Chaudhari, Arpita Patra, and Ajith Suresh (2020). "Privacy-preserving machine learning (PPML)."',
      problemDomain: 'Privacy-preserving machine learning (PPML)',
      solutionApproach: 'FLASH - A four-party MPC framework, ensuring robustness with Guaranteed Output Delivery (GOD)',
      webArchType: 'Server-aided architecture with four non-colluding servers (two evaluators and two verifiers)',
      evaluationMethodology: 'Comparison of throughput and latency against ABY3 framework across LAN and WAN settings using benchmarks',
      appDomain: 'Machine learning as a service (MLaaS), particularly in secure server-aided prediction for Linear Regression, Logistic Regression, DNNs, and BNNs',
      securityMechanism: 'Robust 4PC with one malicious corruption tolerance, secure dot product, truncation, MSB extraction, bit conversion, and insertion techniques',
    },
    {
      citation: 'Harsh Chaudhari, Rahul Rachuri, Ajith Suresh (2021). "Privacy-preserving machine learning (PPML) using secure multi-party computation (MPC) techniques."',
      problemDomain: 'Privacy-preserving machine learning (PPML) using secure multi-party computation (MPC) techniques',
      solutionApproach: 'Proposes a four-party computation (4PC) framework, called Trident',
      webArchType: 'Mixed protocol framework that operates across multiple computation domains',
      evaluationMethodology: 'Runtime and throughput across LAN and WAN for linear regression, logistic regression, NN, and CNN models',
      appDomain: 'Machine Learning as a Service (MLaaS), involving secure training and prediction tasks',
      securityMechanism: 'Active security with malicious adversary tolerance in a 4PC setting, leveraging cryptographic techniques like share truncation, secure comparison, and garbled circuits',
    },
    {
      citation: 'Wang et al. (2020). "Privacy-Preserving Deep Learning on MLaaS."',
      problemDomain: 'Privacy concerns in cloud-based ML',
      solutionApproach: 'Differential Privacy (DP), Homomorphic Encryption (HE), MPC',
      webArchType: 'Cloud-Based MLaaS',
      evaluationMethodology: 'Simulations, Performance Evaluation on Cloud-Based Services',
      appDomain: 'Personalized Content Delivery, Healthcare',
      securityMechanism: 'Differential Privacy, Homomorphic Encryption, MPC',
    },
    {
      citation: 'Gupta, R. & Singh, A.K. (2022). "A Differential Approach for Data and Classification Service-Based Privacy-Preserving Machine Learning Model in Cloud Environment."',
      problemDomain: 'Access Control in Cloud Computing',
      solutionApproach: 'Differential Privacy, Service-Based Access Control',
      webArchType: 'Cloud-Based Architecture',
      evaluationMethodology: 'Analytical Evaluation, Case Studies',
      appDomain: 'Cloud Computing, Data Security',
      securityMechanism: 'Differential Privacy, Access Control Mechanisms',
    },
    {
      citation: 'Sonkar et al. (2023). "An Efficient Privacy-Preserving Machine Learning for Blockchain Network."',
      problemDomain: 'Privacy in Blockchain-Based Machine Learning',
      solutionApproach: 'Integrates Homomorphic Encryption and Differential Privacy to secure data and model parameters during training and inference.',
      webArchType: 'Blockchain Architecture',
      evaluationMethodology: 'Simulations and Performance Analysis',
      appDomain: 'Finance, Supply Chain, Healthcare',
      securityMechanism: 'Homomorphic Encryption and Differential Privacy',
    },
    {
      citation: 'Khan et al. (2023). "Multi-Key Privacy-Preserving Training and Classification using Supervised Machine Learning Techniques in Cloud Computing."',
      problemDomain: 'Privacy concerns in supervised machine learning applications in cloud computing environments.',
      solutionApproach: 'Proposes a multi-key privacy-preserving method for training and classification of data while maintaining confidentiality.',
      webArchType: 'Cloud Computing Architecture',
      evaluationMethodology: 'Performance evaluation of the proposed method in terms of security and efficiency in handling sensitive data.',
      appDomain: 'Supervised machine learning in various sectors utilizing cloud computing, such as healthcare, finance, and security.',
      securityMechanism: 'Focuses on multi-key encryption techniques to ensure data privacy during machine learning processes.',
    },
    {
      citation: 'Liu et al. (2021). "When Machine Learning Meets Privacy: A Survey and Outlook."',
      problemDomain: 'Challenges and solutions related to privacy preservation in the context of machine learning and its applications across various industries.',
      solutionApproach: 'Surveys existing literature on privacy-preserving techniques, focusing on private machine learning, machine learning-aided privacy protection, and machine learning-based privacy attacks.',
      webArchType: 'Not explicitly mentioned, but relevant to architectures employing machine learning in privacy-sensitive applications.',
      evaluationMethodology: 'Comprehensive review and categorization of privacy issues and solutions in machine learning, identifying key challenges and future research directions.',
      appDomain: 'Smart healthcare, financial technology, surveillance systems, and other domains where machine learning is applied and privacy is a concern.',
      securityMechanism: 'Discusses various privacy-preserving methods, including differential privacy, federated learning, and other techniques relevant to machine learning frameworks.',
    },
    {
      citation: 'Lee et al. (2022). "Privacy-Preserving Machine Learning With Fully Homomorphic Encryption for Deep Neural Network."',
      problemDomain: 'Implementing privacy-preserving machine learning (PPML) models using fully homomorphic encryption (FHE) for deep learning applications.',
      solutionApproach: 'Utilizes the RNS-CKKS FHE scheme with bootstrapping to evaluate standard deep learning models, specifically ResNet-20, on encrypted data.',
      webArchType: 'Privacy-Preserving Machine Learning Framework',
      evaluationMethodology: 'Numerical verification of model performance against standard datasets (e.g., CIFAR-10) and comparison of accuracy with non-encrypted models.',
      appDomain: 'Privacy-preserving applications in machine learning, particularly in sensitive data environments like healthcare, finance, and personal data processing.',
      securityMechanism: 'Employs fully homomorphic encryption to ensure data privacy during model training and inference, allowing computations on encrypted data without decryption.',
    },
    {
      citation: 'Zapechnikov, S. (2019). Privacy-Preserving Machine Learning as a Tool for Secure Personalized Information Services.',
      problemDomain: 'Cryptographic protection of data processing techniques for personalized information services.',
      solutionApproach: 'Utilizes privacy-preserving machine learning techniques to protect personal data while delivering tailored services.',
      webArchType: 'Data Protection Frameworks,Interactive Proof Systems',
      evaluationMethodology: 'Analysis of differential privacy and its effectiveness in privacy-preserving machine learning.',
      appDomain: 'Personalized information services across various sectors, focusing on reducing unauthorized access to personal data.',
      securityMechanism: 'Emphasizes cryptographic techniques, including differential privacy and homomorphic encryption, for secure data processing.',
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

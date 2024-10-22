import React, { useState } from "react";
import "./homepage.css";

function Main() {
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(true);
  const [isChallengesOpen, setIsChallengesOpen] = useState(false);
  const [isTrendsOpen, setIsTrendsOpen] = useState(false);
  const [isFutureOpen, setIsFutureOpen] = useState(false);

  return (
    <main className="App-main">
      <section>
        <h4
          className="section-title"
          onClick={() => setIsIntroductionOpen(!isIntroductionOpen)}
        >
          <i
            className={`fas ${
              isIntroductionOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
          Introduction
        </h4>
        {isIntroductionOpen && (
          <div className="section-content">
            <p>
              Web applications have become essential in various sectors like
              e-commerce, healthcare, and social media. However, as these
              applications use machine learning models to process large amounts
              of personal data, privacy concerns have risen. Privacy-preserving
              machine learning (PPML) allows models to work without exposing
              sensitive information, complying with regulations like GDPR and
              CCPA. This paper reviews key PPML techniques such as cryptographic
              methods, differential privacy, and federated learning, which can
              be applied to protect data in web environments.
            </p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <h4
          className="section-title"
          onClick={() => setIsChallengesOpen(!isChallengesOpen)}
        >
          <i
            className={`fas ${
              isChallengesOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
          Challenges
        </h4>
        {isChallengesOpen && (
          <div className="section-content">
            <p>
              Implementing PPML faces several challenges:
              <ul>
                <li>
                  <strong>Computational Overhead:</strong> Cryptographic methods
                  such as Homomorphic Encryption and Secure Multi-Party
                  Computation are computationally expensive, making them
                  difficult to scale.
                </li>
                <li>
                  <strong>Privacy-Accuracy Trade-off:</strong> Differential
                  privacy adds noise to data to protect individual privacy, but
                  this can reduce model accuracy.
                </li>
                <li>
                  <strong>Scalability:</strong> Techniques like federated
                  learning struggle to scale efficiently, especially in
                  applications involving millions of users.
                </li>
                <li>
                  <strong>Data Heterogeneity:</strong> Data inconsistency across
                  devices in federated learning can lead to biased models.
                </li>
                <li>
                  <strong>Regulatory Compliance:</strong> Organizations need to
                  ensure PPML techniques comply with data protection regulations
                  such as GDPR.
                </li>
              </ul>
            </p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <h4
          className="section-title"
          onClick={() => setIsTrendsOpen(!isTrendsOpen)}
        >
          <i
            className={`fas ${
              isTrendsOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
          Trends
        </h4>
        {isTrendsOpen && (
          <div className="section-content">
            <p>
              Several trends are shaping PPML research:
              <ul>
                <li>
                  <strong>Efficiency Improvements:</strong> Efforts are underway
                  to make cryptographic methods more efficient, especially for
                  large-scale real-time applications.
                </li>
                <li>
                  <strong>Better Privacy-Utility Trade-offs:</strong>{" "}
                  Researchers are working on improving differential privacy by
                  dynamically adjusting noise levels to balance privacy and
                  model accuracy.
                </li>
                <li>
                  <strong>Federated Learning Scalability:</strong> Techniques
                  like model compression and selective gradient sharing are
                  helping to scale federated learning.
                </li>
              </ul>
            </p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <h4
          className="section-title"
          onClick={() => setIsFutureOpen(!isFutureOpen)}
        >
          <i
            className={`fas ${
              isFutureOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          />{" "}
            Future Research
        </h4>
        {isFutureOpen && (
          <div className="section-content">
            <p>
              Future research in PPML includes:
              <ul>
                <li>
                  <strong>Improving Cryptographic Methods:</strong> Research is
                  focusing on reducing computational overhead to make these
                  methods more feasible for large applications.
                </li>
                <li>
                  <strong>Enhancing Privacy-Utility Trade-offs:</strong>{" "}
                  Developing adaptive privacy mechanisms that can adjust the
                  amount of noise based on the data sensitivity.
                </li>
                <li>
                  <strong>Scalability in Federated Learning:</strong>{" "}
                  Researchers are addressing communication bottlenecks to
                  improve the scalability of federated learning.
                </li>
                <li>
                  <strong>Handling Data Heterogeneity:</strong> Personalized
                  federated learning models and meta-learning techniques are
                  being explored to address data inconsistencies across devices.
                </li>
                <li>
                  <strong>Regulatory Compliance:</strong> Integration of PPML
                  with compliance frameworks will be essential for real-world
                  adoption.
                </li>
              </ul>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Main;

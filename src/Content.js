import React, { useState } from 'react';
import './Content.css';

const sections = [
  { id: 'domain', title: 'Domain', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 'solutions', title: 'Solutions', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 'other1', title: 'Other 1', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 'other2', title: 'Other 2', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 'other3', title: 'Other 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.' }
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
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;

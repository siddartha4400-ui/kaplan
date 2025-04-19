import React, { useEffect, useState } from 'react';
import { images } from '../../../../img/assets';

// import './Sidebar.css'; // Make sure this file has the CSS below

const editors = [
  {
    name: 'Kakuro Amasaka',
    affiliation: 'Aoyama Gakuin University Japan',
    image: images.authorImage
  },
  {
    name: 'Emily Carter',
    affiliation: 'Harvard University, USA',
    image: images.authorImage1
  },
  {
    name: 'John Müller',
    affiliation: 'University of Berlin, Germany',
    image: images.authorImage2
  }
];

const EditorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % editors.length);
        setFade(true); // Trigger fade-in
      }, 300); // Match the fade-out duration
    }, 4000); // Change editor every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentEditor = editors[currentIndex];

  return (
    <div className="section auth">
      <h6 className="section-title">Our Editors</h6>
      <div className='auth'>
      <div className={`editor-box text-center ${fade ? 'fade-in' : 'fade-out'}`}>
        <img src={currentEditor.image} alt="Editor" className="editor-img mb-3" />
        <strong className="editor-name">{currentEditor.name}</strong>
        <p className="editor-affiliation">{currentEditor.affiliation}</p>
      </div>
      </div>
     
    </div>
  );
};

export default EditorSlider;

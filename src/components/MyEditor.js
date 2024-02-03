import React, { useState, useEffect } from 'react';

const MyEditor = () => {
  const [content, setContent] = useState('');
  const [isRedText, setIsRedText] = useState(false);
  const [isUnderlinedText, setIsUnderlinedText] = useState(false); // Add state for underlined text

  // Load content from localStorage on initial render
  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (event) => {
    const input = event.target.value;

    // Check if input ends with '** ' or if it's a bold line (starts and ends with '** ')
    setIsRedText(input.startsWith('** ') && input.endsWith(' '));

    // Check if input starts with '*** ' and ends with ' '
    setIsUnderlinedText(input.startsWith('*** ') && input.endsWith(' '));

    if (input.endsWith('# ') || input.endsWith('* ') || input.endsWith('** ') || input.endsWith('*** ')) {
      setContent(input.slice(2));
    } else if (input.startsWith('** ') && input.endsWith(' ')) {
      setContent(input.slice(3));
    } else if (input.startsWith('*** ') && input.endsWith(' ')) {
      setContent(input.slice(4));
    } else {
      setContent(input);
    }
  };

  const handleSave = () => {
    localStorage.setItem('editorContent', content);
    alert('Content saved successfully!');
  };

  return (
    <div className="editor-container">
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Type here..."
        style={{
          width: '100%',
          height: '100px',
          fontSize: '1.5rem', // Responsive font size
          fontWeight: 'bold',
          borderBottom: '2px solid black',
          marginBottom: '10px',
          color: isRedText ? 'red' : (isUnderlinedText ? 'blue' : 'black'),
          textDecoration: isUnderlinedText ? 'underline' : 'none',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: 'lightyellow',
          padding: '0.7px',
          borderRadius: '5px',
        }}
      />
      <button
        onClick={handleSave}
        style={{
          padding: '15px 30px',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: 'grey',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          display: 'block',
          margin: '0 auto',
          transition: 'background-color 0.3s',
          textTransform: 'uppercase',
          fontSize: '1.2rem', // Responsive font size
          fontWeight: 'bold',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'skyblue'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'lightblue'}
      >
        Save
      </button>
    </div>
  );
};

export default MyEditor;

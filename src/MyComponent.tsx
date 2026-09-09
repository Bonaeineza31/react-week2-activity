import React from 'react';
import './MyComponent.css';

// Define the MyComponent functional component
const MyComponent: React.FC = () => {
  return (
    // JSX structure for the component
    <div className="my-component">
      <h1>Hello from MyComponent!</h1>
      <p>This is a paragraph of text within my component.</p>
    </div>
  );
};

export default MyComponent;
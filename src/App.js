import React, { useState } from 'react';
import Login from './Login'; // Assuming your Login component is in the same directory
import Signup from './Signup'; // Assuming your Signup component is in the same directory

const App = () => {
  // This state determines which page is currently active, 'login' or 'signup'
  const [currentPage, setCurrentPage] = useState('login');

  // This function is used to change between pages
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'login' && <Login changePage={changePage} />}
      {currentPage === 'signup' && <Signup />}
    </div>
  );
};

export default App;




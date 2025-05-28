import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <ResumeProvider>
      <MainLayout />
    </ResumeProvider>
  );
}

export default App;
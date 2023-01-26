import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layouts/Layout';
import Home from './components/screens/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
);


import React from 'react';

import { Routes, Route } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <span>No note opened</span>,
  },
  {
    path: '/:id',
    element: <span>Some note opened</span>,
  },
];

const App = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;

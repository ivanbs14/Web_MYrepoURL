import { Routes, Route } from 'react-router-dom';

import { Sign } from '../pages/Sign';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
    </Routes>
  );
}
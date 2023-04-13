import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Faculty from '../components/Apps/pages/Faculty';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Faculty />} />
    </Routes>
  )
}

export default Routers
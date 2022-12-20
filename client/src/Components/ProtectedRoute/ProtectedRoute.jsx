import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAdmin }) {
  if (!isAdmin) {
    return <Navigate to="/tables" replace />;
  }
  return children;
}

export default ProtectedRoute;

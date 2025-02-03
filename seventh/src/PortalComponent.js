import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
  // Find the DOM node where you want to render the portal
  const portalRoot = document.getElementById('portal-root');

  // Use ReactDOM.createPortal to render children into the portalRoot
  return ReactDOM.createPortal(
    children,
    portalRoot
  );
};
export default PortalComponent
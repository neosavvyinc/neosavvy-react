import React from 'react';

import NavbarSignOut from '../containers/NavbarSignOut';

export default ({ children }) => (
  <div>
    <NavbarSignOut />
    {children}
  </div>
);


import React from 'react';
import { getAuthTokenCookie, getAuthUserCookie } from 'utils/cookies';

const MainCustomer = () => {
  console.log(getAuthUserCookie());
  return <div>Main Customer</div>;
};

export default MainCustomer;

import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Header from 'layouts/Header';
import { getAuthTokenCookie } from 'utils/cookies';
import routes from 'constants/routes';

interface IProps {
  children: any;
}

const ProtectedRoute = ({ children }: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAuthTokenCookie() === undefined) {
      navigate(routes.homePage, { replace: true });
    }
  }, [getAuthTokenCookie]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedRoute;

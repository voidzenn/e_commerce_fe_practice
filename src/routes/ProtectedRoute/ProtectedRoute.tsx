import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import Header from 'layouts/Header';
import {
  getAuthTokenCookie,
  getAuthUserCookie,
  removeAuthTokenCookie,
  removeAuthUserCookie,
} from 'utils/cookies';
import routes from 'constants/routes';

interface IProps {
  children: any;
}

const ProtectedRoute = ({ children }: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(getAuthUserCookie());
    console.log(getAuthTokenCookie());
    const isAuthenticated =
      getAuthTokenCookie() !== undefined &&
      getAuthUserCookie() !== undefined &&
      getAuthTokenCookie()?.token &&
      getAuthTokenCookie()?.exp &&
      getAuthUserCookie()?.user_id &&
      getAuthUserCookie()?.user_type;

    if (!isAuthenticated) {
      removeAuthTokenCookie();
      removeAuthUserCookie();
      navigate(routes.signin, { replace: true });
    }
  }, [getAuthTokenCookie, getAuthUserCookie]);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProtectedRoute;

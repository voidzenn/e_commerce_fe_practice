import routes from 'constants/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getAuthTokenCookie } from 'utils/cookies';

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

  return <>{children}</>;
};

export default ProtectedRoute;

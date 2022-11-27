import routes from 'constants/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getAuthTokenCookie, getAuthExpCookie } from 'utils/cookies';

interface IProps {
  children: any;
}

const ProtectedRoute = ({ children }: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      getAuthTokenCookie() === undefined ||
      getAuthExpCookie() === undefined
    ) {
      navigate(routes.homePage, { replace: true });
    }
  }, [getAuthTokenCookie, getAuthExpCookie]);

  return <>{children}</>;
};

export default ProtectedRoute;

import { signinApi } from 'services/signin.api';
import { signupApi } from 'services/signup.api';

import DefaultLayout from 'layouts/DefaultLayout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Signin from 'features/common/Signin';
import Signup from 'features/common/Signup';
import MainCustomer from 'features/customer/MainCustomer';

import routes from 'constants/routes';

const Routes = () => {
  return (
    <div>
      <DefaultLayout path={routes.homePage} element={<Signin />} />
      <DefaultLayout path={routes.signup} element={<Signup />} />
      <DefaultLayout
        path={routes.customer.main}
        element={
          <ProtectedRoute>
            <MainCustomer />
          </ProtectedRoute>
        }
      />
    </div>
  );
};

export default Routes;

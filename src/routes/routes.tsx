import DefaultLayout from 'layouts/DefaultLayout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Signin from 'features/common/Signin';
import Signup from 'features/common/Signup';
import HomeCustomer from 'features/customer/HomeCustomer';
import HomeSeller from 'features/seller/HomeSeller';

import routes from 'constants/routes';

const Routes = () => {
  return (
    <div>
      <DefaultLayout path={routes.homePage} element={<Signin />} />
      <DefaultLayout path={routes.signup} element={<Signup />} />
      <DefaultLayout
        path={routes.customer.home}
        element={
          <ProtectedRoute>
            <HomeCustomer />
          </ProtectedRoute>
        }
      />
      <DefaultLayout
        path={routes.seller.home}
        element={
          <ProtectedRoute>
            <HomeSeller />
          </ProtectedRoute>
        }
      />
    </div>
  );
};

export default Routes;

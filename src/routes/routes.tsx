import DefaultLayout from 'layouts/DefaultLayout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Signin from 'features/common/Signin';
import Signup from 'features/common/Signup';
import HomeCustomer from 'features/customer/HomeCustomer';
import HomeSeller from 'features/seller/HomeSeller';
import ItemSeller from 'features/seller/HomeSeller/ItemSeller/ItemSeller';
import ItemCustomer from 'features/customer/HomeCustomer/ItemCustomer/ItemCustomer';

import routes from 'constants/routes';

const Routes = () => {
  return (
    <div>
      <DefaultLayout path="/" element={<Signin />} />
      <DefaultLayout path={routes.signin} element={<Signin />} />
      <DefaultLayout path={routes.signup} element={<Signup />} />
      <DefaultLayout
        path={routes.customer.home}
        element={
          <ProtectedRoute>
            <HomeCustomer />
          </ProtectedRoute>
        }
      />
      {/* Customer */}
      <DefaultLayout
        path={routes.customer.items}
        element={
          <ProtectedRoute>
            <ItemCustomer />
          </ProtectedRoute>
        }
      />
      {/* Seller */}
      <DefaultLayout
        path={routes.seller.home}
        element={
          <ProtectedRoute>
            <HomeSeller />
          </ProtectedRoute>
        }
      />
      <DefaultLayout
        path={routes.seller.items}
        element={
          <ProtectedRoute>
            <ItemSeller />
          </ProtectedRoute>
        }
      />
    </div>
  );
};

export default Routes;

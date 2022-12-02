import clsx from 'clsx';
import Avatar from 'common/components/Avatar/Avatar';
import routes from 'constants/routes';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
  getAuthTokenCookie,
  getAuthUserCookie,
  removeAuthTokenCookie,
  removeAuthUserCookie,
} from 'utils/cookies';

const Header = () => {
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [openUserModal, setOpenUserModal] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    setCurrentLocation(location.pathname);
  }, [location]);

  const isHomePage =
    currentLocation === routes.customer.home ||
    currentLocation === routes.seller.home;

  const isItemsPage =
    currentLocation === routes.customer.items ||
    currentLocation === routes.seller.items;

  const isOrdersPage =
    currentLocation === routes.customer.orders ||
    currentLocation === routes.seller.orders;

  /* Styles Start */
  const linkActive = 'text-lg text-blue-700 font-bold px-2 mx-2';
  const linkInactive =
    'text-md text-blue-600 px-2 mx-2 font-normal hover:text-blue-900 hover:cursor-pointer';
  const userSettings =
    'text-md text-blue-600 font-normal hover:text-blue-700 hover:font-semibold hover:cursor-pointer';
  /* Styles End */

  /* Functions Start */
  const handleModal = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('clicked');
    setOpenUserModal((prev) => !prev);
  };

  const handleLogout = () => {
    removeAuthTokenCookie();
    removeAuthUserCookie();
    navigate(routes.signin);
  };

  const handleHome = () => {
    if (getAuthUserCookie()?.user_type === 3) {
      navigate(routes.customer.home);
    }
    if (getAuthUserCookie()?.user_type === 2) {
      navigate(routes.seller.home);
    }
  };

  const handleItems = () => {
    console.log('clicked');
    if (getAuthUserCookie()?.user_type === 3) {
      navigate(routes.customer.items);
    }
    if (getAuthUserCookie()?.user_type === 2) {
      navigate(routes.seller.items);
    }
  };

  const handleOrders = () => {
    if (getAuthUserCookie()?.user_type === 3) {
      navigate(routes.customer.orders);
    }
    if (getAuthUserCookie()?.user_type === 2) {
      navigate(routes.seller.orders);
    }
  };
  /* Functions End */

  return (
    <div className="h-20 bg-gray border-2 border-blue-400 border-opacity-25 pointer">
      <div className="flex gap-8 justify-end mx-14 my-auto h-full p-auto items-center">
        <div
          className={clsx(isHomePage ? linkActive : linkInactive)}
          onClick={handleHome}
        >
          Home
        </div>
        <div
          className={clsx(isItemsPage ? linkActive : linkInactive)}
          onClick={handleItems}
        >
          Items
        </div>
        <div
          className={clsx(isOrdersPage ? linkActive : linkInactive)}
          onClick={handleOrders}
        >
          Orders
        </div>
        <div>
          <Avatar
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            size="h-10 w-10"
            shape="circle"
            className="rounded-full border-2 border-blue-500 hover:cursor-pointer"
            onClick={handleModal}
            onBlur={() => setOpenUserModal((prev) => !prev)}
          />
          <div
            className={clsx(
              'modal w-32 h-auto absolute right-14 mt-2 bg-white border-2 border-blue-400 rounded-md p-3',
              { hidden: !openUserModal }
            )}
          >
            <div className="modal-content">
              <div className="flex flex-col gap-3">
                <div className={clsx(userSettings)}>Profile</div>
                <div className={clsx(userSettings)} onClick={handleLogout}>
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from 'common/Components/Button';
import Card from 'common/Components/Card';

import routes from 'constants/routes';
import { useEffect } from 'react';

import { getData, fetchTodos } from 'slices/AuthSlice';

const Sigin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const users: [] = useSelector((state: any) => state.auth.users);

  const handleNavigation = () => {
    navigate(routes.signup);
  };

  const handleClick = () => {
    dispatch(getData());
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    if (users !== null) {
      console.log(users);
    }
  }, [users]);

  return (
    <div className="flex flex-col items-center justify-center flext-auto h-screen mx-auto content-center bg-[#F3F7F9]">
      <div className="w-full">
        <button onClick={() => handleClick()}>123</button>
        {users?.map((user: any) => {
          return <p key={user.id}>{user.title}</p>;
        })}
        <div className="flex flex-row items-center justify-center">
          <Card
            width="w-3/12"
            height="h-96"
            otherProps="min-w-[500px]"
            children={
              <form>
                <div className="mx-10 my-10">
                  <div className="flex justify-center">
                    <div className="w-28">
                      <label className="text-lg">Email</label>
                    </div>
                    <div className="w-full">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-10">
                    <div className="w-28">
                      <label className="text-lg">Password</label>
                    </div>
                    <div className="w-full">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-20">
                    <Button
                      width="w-96"
                      height="h-10"
                      type="submit"
                      bgColor="bg-blue-400"
                      otherProps="hover:bg-blue-500 rounded-sm"
                      children={
                        <p className="text-white font-semibold">Sign In</p>
                      }
                    />
                  </div>
                  <div className="flex justify-center mt-3">
                    <p className="text-blue-300">
                      No account ?{' '}
                      <span
                        className="text-blue-400 font-bold hover:cursor-pointer"
                        onClick={handleNavigation}
                      >
                        Register Now
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Sigin;

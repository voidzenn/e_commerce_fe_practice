import Button from 'common/Components/Button';
import Card from 'common/Components/Card';
import routes from 'constants/routes';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // console.log(e.target.firstName.value);
  };

  const handleNavigation = () => {
    navigate(routes.homePage);
  };

  return (
    <div className="flex flex-col items-center justify-center flext-auto h-screen mx-auto content-center bg-[#F3F7F9]">
      <div className="w-full">
        <div className="flex flex-row items-center justify-center">
          <Card
            width="w-6/12"
            height="h-5/12"
            otherProps="min-w-[500px]"
            children={
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mx-5 my-10">
                  <div className="flex gap-4">
                    <div className="w-28">
                      <label className="text-lg">First Name*</label>
                    </div>
                    <div className="w-60">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                        name="firstName"
                        // required
                      />
                    </div>
                    <div className="w-28">
                      <label className="text-lg">Last Name*</label>
                    </div>
                    <div className="w-96">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                        // required
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 mt-10">
                    <div className="w-28">
                      <label className="text-lg">Age</label>
                    </div>
                    <div className="w-56">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="number"
                      />
                    </div>
                    <div className="w-28">
                      <label className="text-lg">Gender</label>
                    </div>
                    <div className="w-52">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <div className="w-32">
                      <label className="text-lg">Adress*</label>
                    </div>
                    <div className="w-full">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                        // required
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <div className="w-28">
                      <label className="text-lg">Email*</label>
                    </div>
                    <div className="w-60">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="email"
                        // required
                      />
                    </div>
                    <div className="w-40">
                      <label className="text-lg">Cofirm Email*</label>
                    </div>
                    <div className="w-60">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="email"
                        // required
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-10">
                    <div className="w-28">
                      <label className="text-lg">Password *</label>
                    </div>
                    <div className="w-60">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                        // required
                      />
                    </div>
                    <div className="w-40">
                      <label className="text-lg">Confirm Password*</label>
                    </div>
                    <div className="w-60">
                      <input
                        className="border-2 border-blue-200 focus:border-blue-500 focus:outline-none rounded-sm w-full text-lg px-2"
                        type="text"
                        // required
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
                        <p className="text-white font-semibold">Register</p>
                      }
                    />
                  </div>
                  <div className="flex justify-center mt-3">
                    <p className="text-blue-300" onClick={handleNavigation}>
                      Already have an account ?{' '}
                      <span className="text-blue-400 font-bold hover:cursor-pointer">
                        Sign in
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

export default Signup;

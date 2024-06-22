import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen py-40"
      style={{
        backgroundImage:
          "linear-gradient(115deg, white, hsl(40, 53%, 93%), white)",
      }}
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col w-10/12 mx-auto overflow-hidden shadow-lg lg:flex-row lg:w-8/12 rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(115deg, #000000, #424242, #202419)",
          }}
        >
          <div
            className="flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-1/2"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/beautiful-fire-pit-near-winter-camping-ground_23-2149228980.jpg?t=st=1715778393~exp=1715781993~hmac=c2a60cba155f4903ddb690feedc47d3db6ba3d1c9959ddc090051fa4d408d487&w=740)",
            }}
          >
            <h1 className="mb-3 text-3xl font-bold text-white font-poppins">
              Welcome
            </h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac
                <a href="#" className="font-semibold text-green-500">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full px-12 py-16 lg:w-1/2 bg-darkCream">
            <h2 className="mb-4 text-3xl font-bold text-white">Register</h2>
            <p className="mb-4 text-white">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Firstname"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-2 py-1 border border-gray-400 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Lastname"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-2 py-1 border border-gray-400 rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-400 rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-400 rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border border-gray-400 rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className="border border-gray-400"
                />
                <span className="text-white">
                  I accept the
                  <a href="#" className="font-semibold text-darkGreen">
                     Terms of Use
                  </a>
                   &
                  <a href="#" className="font-semibold text-darkGreen">
                     Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="rounded-md border w-full py-3 text-center text-darkCream bg-creamBase"
                >
                  Register Now
                </button>
              </div>
            </form>
            <div className="mt-5 text-white text-center">
              <p>Already have an account?</p>
              <a href="loginPage.html" className="font-semibold text-darkGreen">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

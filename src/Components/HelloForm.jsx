import React from "react";
import { useState } from "react";
import { CiGlass } from "react-icons/ci";

function HelloForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  function handleFormSubmition(e) {
    e.preventDefault();
    console.log("submited");
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(name, value);
  }

  return (
    <form
      onSubmit={handleFormSubmition}
      className="bg-gray-800 w-full grid place-content-center place-items-center gap-3  p-3 rounded-lg grid-cols-1"
    >
      <h1 className="text-4xl text-center pb-2 font-bold font-primary text-amber-600">
        Hello {user.firstName} {user.lastName}! ☺️
      </h1>
      <p className="text-amber-50">{user.email}</p>

      <input
        type="text"
        placeholder="First Name"
        className="rounded-lg p-5 w-[300px]"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="rounded-lg p-5 w-[300px]"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        className="rounded-lg p-5 w-[300px]"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-slate-400 rounded-lg p-5 w-[300px] hover:bg-amber-600"
      >
        Submit
      </button>
    </form>
  );
}

export default HelloForm;

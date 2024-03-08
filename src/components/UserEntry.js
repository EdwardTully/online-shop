import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import NavBar from "./NavBar";

function UserEntry() {
  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      password: "",
      address: { street: "", city: "", state: "", zip: "" },
      phone: "",
      email: "",
      credit: "",
      logged: true
    },
  });

  const { register, handleSubmit, formState, reset, control } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/users", data)
      .catch((error) => console.log(error));
    reset();
  };

  return (
    <div className="userEntry">
      <NavBar />
      <h3>Register</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="user">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
          })}
        />
        <p className="errorss">{errors.name?.message}</p>
        <label htmlFor="user">User Name</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "user name is required",
            },
          })}
        />
        <p className="errorss">{errors.username?.message}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: "Should have 1 lc alpha, 1 uc alpha, length 6-15",
            },
          })}
        />
        <p className="errorss">{errors.password?.message}</p>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" {...register("address.street")} />
        <label htmlFor="city">City</label>
        <input type="text" id="city" {...register("address.city")} />
        <label htmlFor="state">State</label>
        <input type="text" id="state" {...register("address.state")} />
        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" {...register("address.zip")} />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          {...register("phone", {
            pattern: {
              value: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
              message: "valid phone is required",
            },
          })}
        />
        <p className="errorss">{errors.phone?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
              message: "valid email is required",
            },
          })}
        />
        <p className="errorss">{errors.email?.message}</p>
        <label htmlFor="credit">Credit Card</label>
        <input
          type="text"
          id="credit"
          {...register("credit", {
            required: {
              value: true,
              message: "credit card is required",
            },
          })}
        />
        <p className="errorss">{errors.credit?.message}</p>
        <button>Enter Info</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default UserEntry;

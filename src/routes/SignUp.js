import React, { useState } from 'react';
import UserPool from "../UserPool";
import './SignUp.css'; // Assuming you saved the CSS code in a file named SignUp.css

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={onSubmit}>
        <h1 className="get-started-here">Get Started Here!</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

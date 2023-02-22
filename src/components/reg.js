import { useState } from "react";
import ValidateEmail from "./valiedateEmail";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const RegistrationForm = () =>{
  const [firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const[role, setRole] = useState("");

  const getIsFormValid =()=>{
    return(
      firstName &&
      ValidateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value:"",
      isTouched: false
    });
    setRole("role");
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return(
    <div className="reg">
      <form onSubmit={handleSubmit}>
          <fieldset>
              <h2>Sign Up</h2>

              <div className="Field">
                <label>
                  First name <sup>*</sup>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e)=>{
                    setFirstName(e.target.value);
                  }}
                  placeholder ="First name"
                />
              </div>

              <div className="Field">
                <label>
                  Last name <sup>*</sup>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e)=>{
                    setLastName(e.target.value);
                  }}
                  placeholder ="Last name"
                />
              </div>

              {/* Email */}
              <div className="Field">
                <label>
                  Email <sup>*</sup>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                  placeholder ="Email"
                />

              </div>
              {/* Password */}
              <div className="Field">
                  <label>
                    Password <sup>*</sup>
                  </label>
                  <input
                    type="password"
                    value={password.value}
                    onChange = {(e) =>{
                      setPassword({...password, value: e.target.value});
                    }}
                    onBlur = {() =>{
                      setPassword({...password, isTouched: true});
                    }}
                    placeholder = "Password"
                  />
                  {password.isTouched && password.value.length < 8 ? (
                    <PasswordErrorMessage />
                  ) : null}
              </div>
              
              {/* Role */}
              <div className="Field">
                    <label>
                      Role <sup>*</sup>
                    </label>
                    <select
                      value={role}
                      onChange = {(e)=>{
                        setRole(e.target.value);
                      }}
                    >
                      <option value="role">Role</option>
                      <option value="individual">Individual</option>
                      <option value="business">Business</option>
                    </select>
              </div>
              <button type="submit" disabled={!getIsFormValid()}>
                      Create account
              </button>
          </fieldset>
      </form>
    </div>
  );

}

export default RegistrationForm;
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

import '../Style.css';
export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email,
        })
      );

      setError(null);
      history.push("/user-list");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setEmail("");
  };

  return (
    <div className="center">
      <div className="head">
        <h2>Add user</h2>
      </div>
      <div className="row">
        <div className="three-columns">
          <label htmlFor="nameInput" id="input">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Anne Graham"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput" id="input">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
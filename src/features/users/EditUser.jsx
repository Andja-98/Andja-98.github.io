import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "./usersSlice";
import '../Style.css';

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
        })
      );

      setError(null);
      history.push("/user-list");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="center">
      <div className="head">
        <h2>Edit user</h2>
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
          <label htmlFor="emailInput"id="input">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder=""
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
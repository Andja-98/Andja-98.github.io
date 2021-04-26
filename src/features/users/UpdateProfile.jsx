import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    birthday: "",
    // address:"",
    linkedin:""
  });

  const { name, username, email, phone, birthday,linkedin} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    
    loadUser();
    
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://my-json-server.typicode.com/Andja-98/mockjson/users/1`, user);
    history.push("/user-profile");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://my-json-server.typicode.com/Andja-98/mockjson/users/1`);
    setUser(result.data);
    
  };
  return (
    <div className="update-profile">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update your profile</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label id="input">Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label id="input">Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label id="input">E-mail address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label id="input">Phone number</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label id="input">Birthday</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="birthday"
              value={birthday}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
          <label id="input">Address</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <div className="form-group">
            <label id="input">Linkedin</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="linkedin"
              value={linkedin}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button onClick={onSubmit} className="button">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    birthday: "",
    address:"",
    linkedin:""
  });

  const { name, username, email, phone, birthday,address,linkedin} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://my-json-server.typicode.com/Andja-98/mockjson/users/${id}`, user);
    history.push("/user-profile/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://my-json-server.typicode.com/Andja-98/mockjson/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="update-profile">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update your profile</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Your E-mail "
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Birthday"
              name="birthday"
              value={birthday}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your Linkedin"
              name="linkedin"
              value={linkedin}
              onChange={e => onInputChange(e)}
            />
          </div>
          <Link className="button" to="/user-profile/">
       Save changes
      </Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
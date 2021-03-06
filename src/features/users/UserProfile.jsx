import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../Style.css';

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    birthday:"",
    userlevel:"",
    // address:"",
    linkedin:""

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`https://my-json-server.typicode.com/Andja-98/mockjson/users/1`);
    setUser(res.data);
  };


  return (
    
    <div className="user-info">
      
      <h2 className="display-4"><i class='fas'>&#xf406;</i> User {id}</h2>
      <div><Link className="button" to="/update-profile/">
        Update profile
      </Link>
      </div>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Username:  {user.username}</li>
        <li className="list-group-item">Email:  {user.email}</li>
        <li className="list-group-item">Phone:  {user.phone}</li>
        <li className="list-group-item">Birthday:  {user.birthday}</li>
        <li className="list-group-item">User level:  {user.userlevel}</li>
        {/* <li className="list-group-item">Address: {user.address}</li> */}
        <li className="list-group-item">Linkedin:  {user.linkedin}</li>
      </ul>
    </div>
    
  );
};

export default User;
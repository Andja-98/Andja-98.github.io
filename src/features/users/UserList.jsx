import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import '../Style.css';

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row-row">
      </div>
      <div className="row-row">
        <div className="two columns">
          <button
            onClick={() => dispatch(fetchUsers())}
            className="button-primary"
          >
            Load users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row-row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="users-table">
            <thead id="head-tr">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, name, email }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button onClick={() => handleDelete(id)} id="btn">Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button id="btn-btn">Edit</button>
                      </Link>
                      <Link to={`/view-user/${id}`}>
                        <button id="btn-btn-btn">View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
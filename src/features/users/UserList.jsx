import { userDeleted } from "./usersSlice";
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
                      <button onClick={() => handleDelete(id)} id="delete-button">Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button id="edit-button">Edit</button>
                      </Link>
                      <Link to={`/user-profile/${id}`}>
                        <button id="view-button">View</button>
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
};
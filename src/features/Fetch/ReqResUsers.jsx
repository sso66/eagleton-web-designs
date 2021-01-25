import React, { useState, useEffect } from "react";
import "./styles.scss";

const baseURL = "https://reqres.in/api/"

export default function ReqResUsers() {
  const [users, setUsers] = useState([]);
  const [loading] = useState(false);
  const [errors] = useState(null);

  const fetchUsers = async () => {
    const response = await fetch(`${baseURL}users`)
    const json = await response.json();
    setUsers(json.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="Users">
      <h4>Fetch API request from ReqRes: {baseURL}users</h4>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

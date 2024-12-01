import React, { useEffect, useState } from "react";

export default function Table() {
  // State to hold the fetched user data
  const [users, setUsers] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">User List</h2>
    {/* {console.log(users[4].name)} */}
      {/* Check if users data is available */}
      {users.length > 0 ? (
        <ul className="mt-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="border-b p-4 mb-2 bg-gray-100 rounded-lg"
            >
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

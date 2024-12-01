import React, { useEffect, useState } from "react";

export default function Tabledata() {
  // State to hold the fetched user data
  const [users, setUsers] = useState([]);

  // useEffect to fetch data when the component mounts      // do study of mount/render/unmount/load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")        // get/post API?
      .then((response) => response.json())                    // json dictonary
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [users]); // dependancy array in use effect     //different types of use effect

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">User List in Table</h2>

      {/* Check if users data is available */}
      {users.length > 0 ? (
        <table className="table-auto w-full mt-4 border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-400">
              <th className="border border-gray-400 p-2">ID</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Username</th>
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">City</th>
              <th className="border border-gray-400 p-2">Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (                                            //map function
              <tr key={user.id} className="bg-white">
                <td className="border border-gray-400 p-2">{user.id}</td>
                <td className="border border-gray-400 p-2">{user.name}</td>       {/*abc*/ } 
                <td className="border border-gray-400 p-2">{user.username}</td>
                <td className="border border-gray-400 p-2">{user.email}</td>
                <td className="border border-gray-400 p-2">{user.address.city}</td>
                <td className="border border-gray-400 p-2">{user.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

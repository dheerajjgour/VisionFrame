import { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  // 🔹 GET USERS
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data.slice(0, 5));
      });
  }, []);

  // 🔹 ADD USER
  const addUser = async () => {
    if (!name) {
      alert("Enter name");
      return;
    }

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      { name }
    );

    setUsers([res.data, ...users]);
    setName("");
  };

  // 🔹 DELETE USER
  const deleteUser = async (id) => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    setUsers(users.filter(user => user.id !== id));
  };

  // 🔹 UPDATE USER
  const updateUser = async () => {
    await axios.put(
      `https://jsonplaceholder.typicode.com/users/${editId}`,
      { name }
    );

    setUsers(
      users.map(user =>
        user.id === editId ? { ...user, name } : user
      )
    );

    setEditId(null);
    setName("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React REST API CRUD (Vite)</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      {editId ? (
        <button onClick={updateUser}>Update</button>
      ) : (
        <button onClick={addUser}>Add</button>
      )}

      <hr />

      {users.map(user => (
        <div key={user.id} style={{ marginBottom: 10 }}>
          <b>{user.name}</b>

          <button
            onClick={() => {
              setEditId(user.id);
              setName(user.name);
            }}
            style={{ marginLeft: 10 }}
          >
            Edit
          </button>

          <button
            onClick={() => deleteUser(user.id)}
            style={{ marginLeft: 5 }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

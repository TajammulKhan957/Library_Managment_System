// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserList.module.css'; 

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.userList}> {/* Use CSS module class */}
      <h3>User List</h3>
      <ul className={`${styles['list-group']} list-group`}> {/* Use combined classes */}
        {users.map(user => (
          <li key={user.id} className={`${styles['list-group-item']} list-group-item`}> {/* Use combined classes */}
            {user.name} (Email: {user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

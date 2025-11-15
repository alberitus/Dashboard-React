import { useState, useEffect } from 'react';
import { userService } from '../services/userService';
import './Dashboard.css';
import './Table.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        userService.getAll()
            .then((data) => {
                setUsers(data);
            })
            .catch((err) => {
                console.error('Failed to fetch users:', err);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {;
    }

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>Users Management</h2>
                <p className="subtitle">Manage your users and their permissions</p>
            </div>

            <div className="card">
                <div className="card-header">
                    <h3>All Users</h3>
                    <button className="btn btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add New User
                    </button>
                </div>

                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn btn-sm btn-edit">Edit</button>
                                            <button className="btn btn-sm btn-delete">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;

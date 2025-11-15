import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
        { id: 'users', label: 'Users', path: '/users', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
        { id: 'products', label: 'Products', path: '/products', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' },
        { id: 'orders', label: 'Orders', path: '/orders', icon: 'M9 11H3v9h6v-9z M22 11h-6v9h6v-9z M15.5 2H8.5v7h7V2z' },
        { id: 'analytics', label: 'Analytics', path: '/analytics', icon: 'M18 20V10 M12 20V4 M6 20v-6' },
        { id: 'settings', label: 'Settings', path: '/settings', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' }
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-menu">
                {menuItems.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={item.icon}></path>
                    </svg>
                    <span className="menu-label">{item.label}</span>
                </NavLink>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
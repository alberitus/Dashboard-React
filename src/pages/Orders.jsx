import './Dashboard.css';
import './Table.css';

const Orders = () => {
    const orders = [
        { id: '#1234', customer: 'John Doe', amount: '$299', status: 'Completed', date: '2024-01-15' },
        { id: '#1235', customer: 'Jane Smith', amount: '$459', status: 'Processing', date: '2024-01-14' },
        { id: '#1236', customer: 'Mike Johnson', amount: '$199', status: 'Pending', date: '2024-01-14' },
        { id: '#1237', customer: 'Sarah Williams', amount: '$599', status: 'Completed', date: '2024-01-13' },
    ];

    return (
        <div className="dashboard">
        <div className="dashboard-header">
            <h2>Orders Management</h2>
            <p className="subtitle">Track and manage customer orders</p>
        </div>

        <div className="stats-grid">
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Total Orders</span>
                <span className="stat-change positive">+12.5%</span>
            </div>
            <div className="stat-value">1,234</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Pending</span>
            </div>
            <div className="stat-value">45</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Processing</span>
            </div>
            <div className="stat-value">89</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Completed</span>
            </div>
            <div className="stat-value">1,100</div>
            </div>
        </div>

        <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Recent Orders</h3>
            <div className="table-container">
            <table className="data-table">
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                    <td style={{ fontWeight: '600' }}>{order.id}</td>
                    <td>{order.customer}</td>
                    <td style={{ fontWeight: '600' }}>{order.amount}</td>
                    <td>
                        <span className={`status-badge status-${order.status.toLowerCase()}`}>
                        {order.status}
                        </span>
                    </td>
                    <td>{order.date}</td>
                    <td>
                        <button className="btn btn-sm btn-primary">View</button>
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

export default Orders;
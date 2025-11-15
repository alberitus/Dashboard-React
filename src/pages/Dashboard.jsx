import './Dashboard.css';

const Dashboard = () => {
    const stats = [
        { title: 'Total Users', value: '2,543', change: '+12.5%', isPositive: true },
        { title: 'Revenue', value: '$45,231', change: '+8.2%', isPositive: true },
        { title: 'Orders', value: '1,234', change: '-3.1%', isPositive: false },
        { title: 'Products', value: '567', change: '+5.7%', isPositive: true }
    ];

    const recentActivities = [
        { user: 'John Doe', action: 'Purchased Product A', time: '2 minutes ago' },
        { user: 'Jane Smith', action: 'Registered new account', time: '15 minutes ago' },
        { user: 'Mike Johnson', action: 'Updated profile', time: '1 hour ago' },
        { user: 'Sarah Williams', action: 'Placed order #1234', time: '2 hours ago' }
    ];

    return (
        <div className="dashboard">
        <div className="dashboard-header">
            <h2>Dashboard Overview</h2>
            <p className="subtitle">Welcome back! Here's what's happening today.</p>
        </div>

        <div className="stats-grid">
            {stats.map((stat, index) => (
            <div key={index} className="stat-card">
                <div className="stat-header">
                <span className="stat-title">{stat.title}</span>
                <span className={`stat-change ${stat.isPositive ? 'positive' : 'negative'}`}>
                    {stat.change}
                </span>
                </div>
                <div className="stat-value">{stat.value}</div>
            </div>
            ))}
        </div>

        <div className="dashboard-grid">
            <div className="card chart-card">
            <h3>Sales Overview</h3>
            <div className="chart-placeholder">
                <svg width="100%" height="200" viewBox="0 0 400 200">
                <polyline
                    fill="none"
                    stroke="var(--card-hover)"
                    strokeWidth="3"
                    points="0,150 50,120 100,140 150,80 200,100 250,60 300,90 350,50 400,70"
                />
                </svg>
            </div>
            </div>

            <div className="card activity-card">
            <h3>Recent Activities</h3>
            <div className="activity-list">
                {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                    <div className="activity-avatar">
                    <img src={`https://ui-avatars.com/api/?name=${activity.user}&background=5174c5&color=fff`} alt={activity.user} />
                    </div>
                    <div className="activity-details">
                    <p className="activity-user">{activity.user}</p>
                    <p className="activity-action">{activity.action}</p>
                    </div>
                    <span className="activity-time">{activity.time}</span>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
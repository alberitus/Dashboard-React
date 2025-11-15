import './Dashboard.css';

const Analytics = () => {
    return (
        <div className="dashboard">
        <div className="dashboard-header">
            <h2>Analytics Overview</h2>
            <p className="subtitle">View your business insights and metrics</p>
        </div>

        <div className="stats-grid">
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Page Views</span>
                <span className="stat-change positive">+18.2%</span>
            </div>
            <div className="stat-value">124.5K</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Visitors</span>
                <span className="stat-change positive">+12.8%</span>
            </div>
            <div className="stat-value">45.2K</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Bounce Rate</span>
                <span className="stat-change negative">+2.4%</span>
            </div>
            <div className="stat-value">42.5%</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Avg. Session</span>
                <span className="stat-change positive">+5.3%</span>
            </div>
            <div className="stat-value">3m 24s</div>
            </div>
        </div>

        <div className="dashboard-grid">
            <div className="card chart-card">
            <h3>Traffic Overview</h3>
            <div className="chart-placeholder">
                <svg width="100%" height="250" viewBox="0 0 400 250">
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--card-hover)', stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: 'var(--card-hover)', stopOpacity: 0 }} />
                    </linearGradient>
                </defs>
                <polyline
                    fill="url(#gradient1)"
                    stroke="var(--card-hover)"
                    strokeWidth="3"
                    points="0,200 50,180 100,190 150,140 200,160 250,120 300,150 350,100 400,120 400,250 0,250"
                />
                </svg>
            </div>
            </div>

            <div className="card">
            <h3>Top Pages</h3>
            <div className="activity-list">
                {[
                { page: '/dashboard', views: '12.5K', percentage: 85 },
                { page: '/products', views: '8.2K', percentage: 65 },
                { page: '/users', views: '5.4K', percentage: 45 },
                { page: '/orders', views: '3.8K', percentage: 30 }
                ].map((item, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--text)', fontWeight: '600' }}>{item.page}</span>
                    <span style={{ color: 'var(--title)' }}>{item.views}</span>
                    </div>
                    <div style={{ 
                    width: '100%', 
                    height: '8px', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '4px',
                    overflow: 'hidden'
                    }}>
                    <div style={{ 
                        width: `${item.percentage}%`, 
                        height: '100%', 
                        background: 'var(--card-hover)',
                        transition: 'width 0.3s'
                    }}></div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
};

export default Analytics;
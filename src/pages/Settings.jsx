import './Dashboard.css';

const Settings = () => {
  return (
        <div className="dashboard">
        <div className="dashboard-header">
            <h2>Settings</h2>
            <p className="subtitle">Manage your account and application settings</p>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
            <div className="card">
            <h3>Profile Settings</h3>
            <div style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
                <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--title)', fontSize: '14px' }}>
                    Full Name
                </label>
                <input 
                    type="text" 
                    defaultValue="Admin User"
                    style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--bg)',
                    borderRadius: '8px',
                    color: 'var(--text)',
                    fontSize: '14px'
                    }}
                />
                </div>
                <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--title)', fontSize: '14px' }}>
                    Email Address
                </label>
                <input 
                    type="email" 
                    defaultValue="admin@example.com"
                    style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--bg)',
                    borderRadius: '8px',
                    color: 'var(--text)',
                    fontSize: '14px'
                    }}
                />
                </div>
                <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--title)', fontSize: '14px' }}>
                    Role
                </label>
                <input 
                    type="text" 
                    defaultValue="Administrator"
                    disabled
                    style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--bg)',
                    borderRadius: '8px',
                    color: 'var(--title)',
                    fontSize: '14px'
                    }}
                />
                </div>
                <button style={{
                background: 'var(--card-hover)',
                color: 'var(--text-reverse)',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                marginTop: '10px'
                }}>
                Save Changes
                </button>
            </div>
            </div>

            <div className="card">
            <h3>Notification Settings</h3>
            <div style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
                {[
                { label: 'Email Notifications', description: 'Receive email updates about your account' },
                { label: 'Push Notifications', description: 'Receive push notifications in your browser' },
                { label: 'Order Updates', description: 'Get notified about new orders' },
                { label: 'Weekly Reports', description: 'Receive weekly analytics reports' }
                ].map((item, index) => (
                <div key={index} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px'
                }}>
                    <div>
                    <p style={{ color: 'var(--text)', fontWeight: '600', marginBottom: '4px' }}>
                        {item.label}
                    </p>
                    <p style={{ color: 'var(--title)', fontSize: '13px' }}>
                        {item.description}
                    </p>
                    </div>
                    <label style={{ 
                    position: 'relative', 
                    display: 'inline-block', 
                    width: '48px', 
                    height: '24px',
                    cursor: 'pointer'
                    }}>
                    <input type="checkbox" defaultChecked={index % 2 === 0} style={{ display: 'none' }} />
                    <span style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'var(--card-hover)',
                        borderRadius: '24px',
                        transition: '0.3s'
                    }}>
                        <span style={{
                        position: 'absolute',
                        content: '',
                        height: '18px',
                        width: '18px',
                        left: '3px',
                        bottom: '3px',
                        background: 'white',
                        borderRadius: '50%',
                        transition: '0.3s'
                        }}></span>
                    </span>
                    </label>
                </div>
                ))}
            </div>
            </div>

            <div className="card">
            <h3>Security</h3>
            <div style={{ marginTop: '20px', display: 'grid', gap: '15px' }}>
                <button style={{
                background: 'var(--card-hover)',
                color: 'var(--text-reverse)',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                textAlign: 'left'
                }}>
                Change Password
                </button>
                <button style={{
                background: 'rgba(59, 130, 246, 0.8)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                textAlign: 'left'
                }}>
                Enable Two-Factor Authentication
                </button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Settings;
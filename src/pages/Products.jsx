import './Dashboard.css';

const Products = () => {
    const products = [
        { id: 1, name: 'Product A', category: 'Electronics', price: '$299', stock: 45 },
        { id: 2, name: 'Product B', category: 'Clothing', price: '$59', stock: 120 },
        { id: 3, name: 'Product C', category: 'Books', price: '$19', stock: 0 },
        { id: 4, name: 'Product D', category: 'Electronics', price: '$499', stock: 23 },
    ];

    return (
        <div className="dashboard">
        <div className="dashboard-header">
            <h2>Products Management</h2>
            <p className="subtitle">Manage your product inventory</p>
        </div>

        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Total Products</span>
            </div>
            <div className="stat-value">567</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Out of Stock</span>
            </div>
            <div className="stat-value">12</div>
            </div>
            <div className="stat-card">
            <div className="stat-header">
                <span className="stat-title">Categories</span>
            </div>
            <div className="stat-value">24</div>
            </div>
        </div>

        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Product List</h3>
            <button className="btn btn-sm btn-primary">Add Product</button>
            </div>
            
            <div className="activity-list">
            {products.map((product) => (
                <div key={product.id} className="activity-item">
                <div className="activity-avatar" style={{ 
                    background: 'var(--card-hover)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'var(--text-reverse)'
                }}>
                    {product.name.charAt(0)}
                </div>
                <div className="activity-details">
                    <p className="activity-user">{product.name}</p>
                    <p className="activity-action">{product.category} • {product.price}</p>
                </div>
                <span className="activity-time" style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    background: product.stock > 0 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: product.stock > 0 ? '#22c55e' : '#ef4444'
                }}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Products;
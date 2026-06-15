import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/admin.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('New');
  const [token, setToken] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    if (!token) {
      window.location.href = '/admin/login';
      return;
    }
    fetchStats();
    fetchLeads();
  }, [token, filter]);

  const fetchStats = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/leads/stats/overview`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-user-role': 'admin',
          },
        }
      );
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/leads?status=${filter}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-user-role': 'admin',
          },
        }
      );
      setLeads(response.data.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId, newStatus) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/leads/${leadId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'x-user-role': 'admin',
          },
        }
      );
      fetchLeads();
      fetchStats();
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRole');
    window.location.href = '/admin/login';
  };

  if (!stats) return <div className="loading">Loading dashboard...</div>;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>📊 Lead Management Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      <div className="dashboard-container">
        {/* Stats Section */}
        <section className="stats-section">
          <h2>Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Leads</h3>
              <p className="stat-number">{stats.totalLeads}</p>
            </div>
            <div className="stat-card new">
              <h3>New Leads</h3>
              <p className="stat-number">{stats.newLeads}</p>
            </div>
            <div className="stat-card contacted">
              <h3>Contacted</h3>
              <p className="stat-number">{stats.contactedLeads}</p>
            </div>
            <div className="stat-card qualified">
              <h3>Qualified</h3>
              <p className="stat-number">{stats.qualifiedLeads}</p>
            </div>
            <div className="stat-card converted">
              <h3>Converted</h3>
              <p className="stat-number">{stats.convertedLeads}</p>
            </div>
            <div className="stat-card conversion">
              <h3>Conversion Rate</h3>
              <p className="stat-number">{stats.conversionRate}</p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="locations-section">
          <h2>By Location</h2>
          <div className="location-cards">
            <div className="location-card">
              <h4>Hyderabad</h4>
              <p className="location-count">{stats.locations.hyderabad}</p>
            </div>
            <div className="location-card">
              <h4>Sangareddy</h4>
              <p className="location-count">{stats.locations.sangareddy}</p>
            </div>
          </div>
        </section>

        {/* Loan Categories Section */}
        <section className="categories-section">
          <h2>By Loan Category</h2>
          <div className="category-cards">
            <div className="category-card">
              <h4>Home Loans</h4>
              <p className="category-count">{stats.loanCategories.homeLoans}</p>
            </div>
            <div className="category-card">
              <h4>LAP</h4>
              <p className="category-count">{stats.loanCategories.lapLoans}</p>
            </div>
            <div className="category-card">
              <h4>Mortgage Loans</h4>
              <p className="category-count">{stats.loanCategories.mortgageLoans}</p>
            </div>
          </div>
        </section>

        {/* Leads Table Section */}
        <section className="leads-section">
          <h2>Leads Management</h2>
          <div className="filter-controls">
            <label>Filter by Status:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Rejected">Rejected</option>
              <option value="Converted">Converted</option>
            </select>
          </div>

          {loading ? (
            <div className="loading">Loading leads...</div>
          ) : (
            <div className="leads-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Loan Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead._id}>
                      <td>{lead.firstName} {lead.lastName}</td>
                      <td>
                        <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                      </td>
                      <td>
                        <a href={`mailto:${lead.email}`}>{lead.email}</a>
                      </td>
                      <td>{lead.loanType}</td>
                      <td>₹{(lead.loanAmount / 100000).toFixed(1)}L</td>
                      <td>
                        <span className={`status-badge ${lead.status.toLowerCase()}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td>
                        <select
                          onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                          defaultValue={lead.status}
                          className="status-select"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Qualified">Qualified</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Converted">Converted</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;

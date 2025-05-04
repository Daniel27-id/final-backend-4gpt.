import React, { Component } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Minuman from './MInuman';
import Makanan from './Makanan';
import About from './About';
import Contact from './Contact';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <aside className="sidebar">
          <h3 id='dashboard'>WELCOME</h3>
          <ul id='dsbrd'>
            <li id='dsbrdsatu'><Link to="/dashboard/home">Home</Link></li>
            <li id='dua'><Link to="/dashboard/Makanan">Makanan</Link></li>
            <li id='tiga'><Link to="/dashboard/Minuman">Minuman</Link></li>
            <li id='empat'><Link to="/dashboard/About">About</Link></li>
            <li id='lima'><Link to="/dashboard/Contact">Contact</Link></li>
          </ul>
          <button onClick={this.props.handleLogout}>Logout</button>
        </aside>
        <main className="content">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="Minuman" element={<Minuman />} />
            <Route path="Makanan" element={<Makanan />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </main>
        <footer className="footer">RM. Wakeke</footer>
        <header className="header"> Welcome to RM. Wakeke</header>
      </div>
    );
  }
}

export default Dashboard;

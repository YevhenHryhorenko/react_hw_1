import React from 'react';
import '../styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__navigation">
        <ul className="sidebar__list">
          <li  className="sidebar__item">
            <a href="#">Technology</a>
          </li>
          <li  className="sidebar__item">
            <a href="#">Interested</a>
          </li>
          <li  className="sidebar__item">
            <a href="#">Team</a>
          </li>
          <li  className="sidebar__item">
            <a href="#">Investers</a>
          </li>
          <li  className="sidebar__item">
            <a href="#">News</a>
          </li>
          <li  className="sidebar__item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
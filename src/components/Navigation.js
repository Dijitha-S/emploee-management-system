import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import logo from '../static/logo.png';
import "../App.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
          <img
            src={logo}
            width="40"
            height="50"
            className="d-inline-block align-center"
            alt="logo"
          />{" "}
          Employees Management System
        </Navbar.Brand>
      </Navbar>

      <div className='sidebar'>
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            Navigation
          </CDBSidebarHeader>

          <CDBSidebarContent>
            <CDBSidebarMenu>

              <NavLink to="/" className="nav-link">
                <CDBSidebarMenuItem icon="home">
                  Home
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink to="/employees" className="nav-link">
                <CDBSidebarMenuItem icon="list">
                  Employees List
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink to="/manage" className="nav-link">
                <CDBSidebarMenuItem icon="user">
                  Manage Employees
                </CDBSidebarMenuItem>
              </NavLink>

            </CDBSidebarMenu>
          </CDBSidebarContent>

        </CDBSidebar>
      </div>
    </div>
  );
};

export default Navigation;
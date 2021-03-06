import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  return (
    <aside className="app-sidebar">
      {/* <div className="app-sidebar__user">
          <div className="dropdown">
          <a className="nav-link pl-2 pr-2 leading-none d-flex" data-toggle="dropdown" href="#">
            <img alt="image" src="/assets/img/avatar/avatar-1.jpg" className=" avatar-md rounded-circle" />
            <span className="ml-2 d-lg-block">
              <span className=" app-sidebar__user-name mt-5">Jessica Lee</span><br />
              <span className="text-muted app-sidebar__user-name text-sm"> Web-Designer</span>
            </span>
          </a>
        </div>
      </div> */}
      <ul className="side-menu">
        <li className={props.props.page === 'dashboard' ? "active" : ""}>
          <Link className={props.props.page === 'dashboard' ? "side-menu__item active" : "side-menu__item"}  to="/"><i className="side-menu__icon fa fa-desktop"></i><span className="side-menu__label">Dashboard</span></Link>
        </li>
        <li className={(props.props.page === 'branch') || (props.props.page === 'departments') || (props.props.page === 'units') || (props.props.page === 'roles') || (props.props.page === 'responsibility') || (props.props.page === 'kpi') || (props.props.page === 'staff') ? "slide is-expanded" : "slide"}>
          <a className={(props.props.page === 'branch') || (props.props.page === 'departments') || (props.props.page === 'units') || (props.props.page === 'roles') || (props.props.page === 'responsibility') || (props.props.page === 'kpi') || (props.props.page === 'staff') ? "side-menu__item active" : "side-menu__item"}  data-toggle="slide" href="#"><i className="side-menu__icon fa fa-tasks"></i><span className="side-menu__label">Company MGT</span><i className="angle fa fa-angle-right"></i></a>
          <ul className="slide-menu">
            <li className={props.props.page === 'branch' ? "active" : ""}>
              <Link 
                className={props.props.page === 'branch' ? "slide-item active" : "slide-item"} to="/branches">
                <span>Branches</span>
              </Link>
            </li>
            <li className={props.props.page === 'departments' ? "active" : ""}>
              <Link 
                className={props.props.page === 'departments' ? "slide-item active" : "slide-item"} to="/departments"><span>Departments</span>
              </Link>
            </li>
            <li className={props.props.page === 'units' ? "active" : ""}>
              <Link className={props.props.page === 'units' ? "slide-item active" : "slide-item"} to="/units">
              <span>Units</span>
              </Link>
            </li>
            <li className={props.props.page === 'roles' ? "active" : ""}>
              <Link className={props.props.page === 'roles' ? "slide-item active" : "slide-item"} to="/roles">
                <span>Roles</span>
              </Link>
            </li>
            <li className={props.props.page === 'responsibility' ? "active" : ""}>
              <Link className={props.props.page === 'responsibility' ? "slide-item active" : "slide-item"} to="/responsibility">
                <span>Responsibility</span>
              </Link>
            </li>
            <li className={props.props.page === 'kpi' ? "active" : ""}>
              <Link className={props.props.page === 'kpi' ? "slide-item active" : "slide-item"} to="/kpi">
                <span>Kpi</span>
              </Link>
            </li>
            <li className={props.props.page === 'staff' ? "slide active" : "slide"}>
							<a className="side-menu__item second-side-menu__item" data-toggle="second-slide" href="#">
                <span className="side-menu__label" style={{paddingLeft: '25px', fontSize: '12px'}}>Staff</span><i className="angle fa fa-angle-right"></i>
              </a>
							<ul className="second-slide-menu">
								<li className="active"><Link to="/create_staff/one" className="slide-item active">Personal Information</Link></li>
								<li><Link className="slide-item">Qualification and Experience</Link></li>
                <li><Link className="slide-item">Employment Information</Link></li>
                <li><Link className="slide-item">Guarantor Information</Link></li>
                <li><Link className="slide-item">Upload</Link></li>
                <li><Link to="/staff_list" className="slide-item">Staff List</Link></li>
							</ul>
						</li>
          </ul>
        </li>
        <li>
          <a className="side-menu__item" href="#"><i className="side-menu__icon fa fa-credit-card"></i><span className="side-menu__label">Payroll</span></a>
        </li>
        {/* <li>
          <a className="side-menu__item" href="#"><i className="side-menu__icon fa fa-hand-o-left"></i><span className="side-menu__label">Leave</span></a>
        </li> */}
        <li className={(props.props.page === 'leave_setup') || (props.props.page === 'leave_management') || (props.props.page === 'leave_history') ? "slide is-expanded" : "slide"}>
          <a className={(props.props.page === 'leave_setup') || (props.props.page === 'leave_management') || (props.props.page === 'leave_history') ? "side-menu__item active" : "side-menu__item"} data-toggle="slide" href="#"><i className="side-menu__icon fa fa-tasks"></i><span className="side-menu__label">Leave</span><i className="angle fa fa-angle-right"></i></a>
          <ul className="slide-menu">
            <li className={props.props.page === 'leave_setup' ? "active" : ""}>
              <Link 
                className={props.props.page === 'leave_setup' ? "slide-item active" : "slide-item"} to="/leave_setup">
                <span>Leave Setup</span>
              </Link>
            </li>
            <li className={props.props.page === 'leave_management' ? "active" : ""}>
              <Link 
                className={props.props.page === 'leave_management' ? "slide-item active" : "slide-item"} to="/leave_management"><span>Manage Application</span>
              </Link>
            </li>
            <li className={props.props.page === 'leave_history' ? "active" : ""}>
              <Link 
                className={props.props.page === 'leave_history' ? "slide-item active" : "slide-item"} to="/leave_history"><span>Leave History</span>
              </Link>
            </li>
            <li className={props.props.page === 'calender' ? "active" : ""}>
              <Link 
                className={props.props.page === 'calender' ? "slide-item active" : "slide-item"} to="/#"><span>Calender</span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a className="side-menu__item" href="#"><i className="side-menu__icon fa fa-money"></i><span className="side-menu__label">Budget</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="#"><i className="side-menu__icon fa fa-exchange"></i><span className="side-menu__label">Transfer</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="#"><i className="side-menu__icon fa fa-user"></i><span className="side-menu__label">Profile</span></a>
        </li>
      </ul>
    </aside>
  )
}

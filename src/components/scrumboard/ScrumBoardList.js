import React from "react";
import {NavLink, Link} from 'react-router-dom';
const BoardList = ({ boards }) => {
  return (
    <div className="project-list section">
      {boards &&
        boards.map((el, index) => {
          if (boards.length < 1) {
            return (
              <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                </div>
              </div>
            );
          }
          return (
            <Link to={'/scrumboard/'+ el.id} key={index} id={index}>
            <div className="card z-depth-0 project-summary col-md-4" >
              <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{el.title}</span>
                <p>{el.label}</p>
                <p className="grey-text">3rd September, 2am</p>
              </div>
            </div>
            </Link>
          );
        })}
        <NavLink to='/newBoard'><a className="waves-effect waves-light btn"><i className='material-icons right'>add</i>Create a new Project</a></NavLink>
    </div>
  );
};

export default BoardList;

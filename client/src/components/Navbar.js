import React from 'react';

export default (props) => {
  const {
    onNavigate,
    onLogout
  } = props;

  return (
    <nav className="nav">
      <div className="nav-left">
        <a className="nav-item" onClick={() => onNavigate('/')}>
          <h4 className="title is-4">Neosavvy</h4>
        </a>
      </div>

      {/*
       <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
       <!-- You need JavaScript to toggle the "is-active" className on "nav-menu" -->
       */}
       <span className="nav-toggle">
         <span></span>
         <span></span>
         <span></span>
       </span>

       {/*
       <!-- This "nav-menu" is hidden on mobile -->
       <!-- Add the modifier "is-active" to display it on mobile -->
       */}
       <div className="nav-right nav-menu">
         <a className="nav-item" onClick={() => onNavigate("/new-client")}>New Client</a>
         <a className="nav-item" onClick={() => onNavigate("/new-resource")}>New Resource</a>

         <div className="nav-item">
           <div className="field is-grouped">
             <p className="control">
               <a className="button" onClick={() => onLogout()}>
                 <span className="icon is-small">
                   <i className="fa fa-user"></i>
                 </span>
                 <span>Logout</span>
               </a>
             </p>
           </div>
         </div>
       </div>
     </nav>
  )
};

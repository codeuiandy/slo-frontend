import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import PersonalInfo from './components/Onboarding/PersonalInfo';
import Qualification from './components/Onboarding/Qualification';
import Employment from './components/Onboarding/Employment';
import Guarantor from './components/Onboarding/Guarantor';
import Upload from './components/Onboarding/Upload';
import PendingApplication from './components/Onboarding/Pending';
import StaffList from './components/Onboarding/StaffList';
import Branch from './components/andyBranch/branch/branch'
import Department from './components/andyBranch/department/department'
import Unit from './components/andyBranch/unit/unit'
import JobType from './components/andyBranch/jobType/jobType'


import 'react-notifications/lib/notifications.css';

// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
      <Router>
          <NotificationContainer />
        {/* <ToastContainer /> */}
        <Switch>
          {/* <Route exact path="/" component={Homepage}/> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route path="/create_staff/one" component={PersonalInfo} /> */}
          <Route exact path="/" component={PersonalInfo} />
          <Route path="/create_staff/two/:id" component={Qualification} />
          <Route path="/create_staff/three/:id" component={Employment} />
          <Route path="/create_staff/four/:id" component={Guarantor} />
          <Route path="/create_staff/five/:id" component={Upload} />
          <Route path="/create_staff/six" component={PendingApplication} />
          <Route path="/staff_list" component={StaffList} />
          <Route path="/Branch" component={Branch} />
          <Route path="/Department" component={Department} />
          <Route path="/Unit" component={Unit} />
          <Route path="/JobType" component={JobType} />
        

          
        
          
        </Switch>
      </Router>
  );
}

export default App;

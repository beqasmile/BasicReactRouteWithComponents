import { Route, Link } from 'react-router-dom';

function EmployeePrivate({match})
{

    return <div>

        <h1>This is employee private page</h1>
        <ul>
            <li><Link to={`${match.url}/MySalary`}>My Salary</Link></li>
            <li><Link to={`${match.url}/MyWorkingHours`}>My working hounrs</Link></li>
       </ul>
            <Route path={`${match.path}/MySalary`} component={() => (<div> My Salary is 20000 nis </div>)}/>
            <Route path={`${match.path}/MyWorkingHours`} component={() => (<div> My working hours are 9 </div>)}/>

    </div>
}

export default EmployeePrivate;
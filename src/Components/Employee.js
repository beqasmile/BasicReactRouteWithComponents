import { Route, Link } from 'react-router-dom';

function Employee({match})
{

    return <div>

        <h1>This is employee public page</h1>
        <ul>
            <li><Link to={`${match.url}/WorkStartDay`}>Work Start Day</Link></li>
            <li><Link to={`${match.url}/WorkFinishDat`}>Work Finish Day</Link></li>
       </ul>
            <Route path={`${match.path}/WorkStartDay`} component={() => (<div> Work starts at 9 o'clock </div>)}/>
            <Route path={`${match.path}/WorkFinishDat`} component={() => (<div> Work finish at 18 o'clock </div>)}/>

    </div>
}

export default Employee;
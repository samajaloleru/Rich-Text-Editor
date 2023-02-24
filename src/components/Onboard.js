import {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

class Onboard extends Component {
  render() {
    return (
      <div className="dt w-100 bg-black  vh-100">
        <Link to="/editor" className='dtc white no-underline v-mid'>
          <div className='fl w-100'>
            <div className='flex items-center justify-center b w-100 tc'>
              <img src={logo} className="App-logo" alt="logo" /><span className='f1'>hivedeck</span>
            </div>
          </div>
          <div className="fl w-100 b ttu tc f2">
            Developer's Assesment
          </div>

        </Link>
      </div>
    );
  }
}

export default Onboard;

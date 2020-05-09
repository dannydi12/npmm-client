import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import TokenService from '../../services/token-service'
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';
export default class SideBar extends React.Component {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  //Mystuff


  //hooks
  // const [
  //   email,
  //   setEmail,
  //   password,
  //   setPassword,
  //   username,
  //   setUsername,
  // ] = useState('');

  handleLogoutClick = () => {
    // TokenService.clearAuthToken();
  };


  // renderLogoutLink() {
  //   return (
  //     <div className='Header__logged-in'>
  //       <Link
  //         onClick={this.handleLogoutClick}
  //         to='/'>
  //         Logout
  //       </Link>
  //     </div>
  //   )
  // }


  // renderLoginLink() {
  //   return (
  //     <div className='Header__not-logged-in'>
  //       <Link
  //         to='/register'>
  //         Register
  //       </Link>
  //       <Hyph />
  //       <Link
  //         to='/login'>
  //         Log in
  //       </Link>
  //     </div>
  //   )
  // }
  state = {
    isActive: false,
    collections: [item1,item2,item3]
  };

  handleShow = () => {
    this.setState({isActive: true});
  };

  handleHide = () => {
    this.setState({isActive: false});
  };

  function SideBar() {
    // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
    // const dispatch = useDispatch(); // to dispatch actions
  
    return (
      <div>
        <NavLink onClick={this.state.isActive && this.state.collections}>Collections</NavLink>
      </div>
    );
  }

export default SideBar;
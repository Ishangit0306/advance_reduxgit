import { useDispatch } from 'react-redux';
// import { toggleAction } from '../../store';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {cartToggleHandler} from '../../store/toggleslicer'

const MainHeader = (props) => {

  const dispatch=useDispatch();
  const ToggleHandler=()=>{
        console.log("Dispatching action");
        dispatch(cartToggleHandler());
        console.log("Action Dispatched");
  }
 

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={ToggleHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

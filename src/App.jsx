import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './store/user/user-slice'
import { getUser } from './store/user/user-controller';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Body from './components/body/Body.jsx';


function App() {

  return (
   <>
    <Header/>
    <Body/>
    <Footer/>
   </>    
  )
}

export default App

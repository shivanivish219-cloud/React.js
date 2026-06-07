
import { createRoot } from 'react-dom/client'
import StateWithCC from './states/state-with-class-component'
import StateWithFunc from './states/state-with-function'
import App from './states/state-objectwith-func-component'
import StateObjectWithFunc from './states/object-to-states-component'
import ProfileCard from './states/Profile-box'
import ProfileObjState from './states/profile-state-component'
import ArrayList from './states/JSON-array'
// import Greetings from './1.Basic-Components/greeting-by-class'
// import Footer from './2. Webpages/Footer'
// import Header from './2. Webpages/Header'
// import ProfileCard from './2. Webpages/profile-card'

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <>
 {/* <Greetings/>
 <Header/>
 <Footer/>
 <ProfileCard/> */}

{/* <StateWithCC/>
<StateWithFunc/>
<App/> */}
<StateObjectWithFunc/>
<ProfileCard  name={"shivani"}
        age={23}
        email={"shivani123@gmail.com"}
/>

{/* <ProfileObjState/> */}
<ArrayList/>
 </>



)

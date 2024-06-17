import  { useState } from 'react';
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faHeart, faEnvelope, faGear, faRightFromBracket, faMinus } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-white w-20 h-screen rounded-r-lg shadow-lg flex flex-col justify-between" style={{ height: 'calc(100vh - 2rem)', margin: '1rem 0' }}>
      <div className="pt-3">
        <img src={logo} alt="" />
        <h1 className="font-black font-bold text-center -mt-5">NATEAT</h1>
      </div>
      <div>
        <ul className="text-center">

          {/* <li className={`mt-5 py-2 ${activeItem === 'home' ? 'bg-purple-50 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('home')}>
            <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#ffc43a"}}/>
          </li> */}


            <div className={`${activeItem === 'home' ? 'mt-5 py-2 bg-purple-50  shadow-none ml-3 rounded-l-md' :'mt-5 py-2'}`}>
                <li className={` ${activeItem === 'home' ? 'bg-white  py-2 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('home')}>
                    <div className="flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#ffc43a"}}/>
                    {activeItem === 'home' ? <FontAwesomeIcon icon={faMinus} size="lg" style={{color: "#ffc43a"}}/> : ""}
                    </div>
                </li>
            </div>


           <div className={`${activeItem === 'user' ? 'mt-5 py-2 bg-purple-50  shadow-none ml-3 rounded-l-md' :'mt-5 py-2'}`}>
                <li className={` ${activeItem === 'user' ? 'bg-white  py-2 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('user')}>
                    <div className="flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#ffc43a"}}/>
                    {activeItem === 'user' ? <FontAwesomeIcon icon={faMinus} size="lg" style={{color: "#ffc43a"}}/> : ""}
                    </div>
                </li>
            </div> 

          {/* <li className={`mt-5 py-2 ${activeItem === 'heart' ? 'bg-purple-50 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('heart')}>
            <FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#ffc43a"}}/>
          </li> */}

           <div className={`${activeItem === 'heart' ? 'mt-5 py-2 bg-purple-50  shadow-none ml-3 rounded-l-md' :'mt-5 py-2'}`}>
                <li className={` ${activeItem === 'heart' ? 'bg-white  py-2 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('heart')}>
                    <div className="flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#ffc43a"}}/>
                    {activeItem === 'heart' ? <FontAwesomeIcon icon={faMinus} size="lg" style={{color: "#ffc43a"}}/> : ""}
                    </div>
                </li>
            </div> 


          {/* <li className={`mt-5 py-2 ${activeItem === 'envelope' ? 'bg-purple-50 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('envelope')}>
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#ffc43a"}}/>
          </li> */}

            <div className={`${activeItem === 'envelope' ? 'mt-5 py-2 bg-purple-50  shadow-none ml-3 rounded-l-md' :'mt-5 py-2'}`}>
                <li className={` ${activeItem === 'envelope' ? 'bg-white  py-2 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('envelope')}>
                    <div className="flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#ffc43a"}}/>
                    {activeItem === 'envelope' ? <FontAwesomeIcon icon={faMinus} size="lg" style={{color: "#ffc43a"}}/> : ""}
                    </div>
                </li>
            </div> 


          {/* <li className={`mt-5 py-2 ${activeItem === 'gear' ? 'bg-purple-50 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('gear')}>
            <FontAwesomeIcon icon={faGear} size="lg" style={{color: "#ffc43a"}}/>
          </li> */}

            <div className={`${activeItem === 'gear' ? 'mt-5 py-2 bg-purple-50  shadow-none ml-3 rounded-l-md' :'mt-5 py-2'}`}>
                <li className={` ${activeItem === 'gear' ? 'bg-white  py-2 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('gear')}>
                    <div className="flex flex-row justify-evenly">
                    <FontAwesomeIcon icon={faGear} size="lg" style={{color: "#ffc43a"}}/>
                    {activeItem === 'gear' ? <FontAwesomeIcon icon={faMinus} size="lg" style={{color: "#ffc43a"}}/> : ""}
                    </div>
                </li>
            </div> 



        </ul>
      </div>
      <div className="pb-3">
        <ul className="text-center">
          <li className={`mt-5 ${activeItem === 'logout' ? 'bg-purple-50 shadow-none ml-3 rounded-l-md' : ''}`} onClick={() => handleItemClick('logout')}>
            <FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{color: "#ffc43a"}}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
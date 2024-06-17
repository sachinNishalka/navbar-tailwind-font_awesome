import logo from "./assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faHeart, faEnvelope, faGear, faRightFromBracket , faMinus } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    const status = true
  return (
    <div className="bg-white w-20 h-screen rounded-r-lg shadow-lg flex flex-col justify-between" style={{ height: 'calc(100vh - 2rem)', margin: '1rem 0' }}>
      <div className="pt-3">
        <img src={logo} alt="" />
        <h1 className="font-black font-bold text-center -mt-5">NATEAT</h1>
      </div>
      <div>
            <ul className="text-center">

                <li className="mt-5 py-2 hover:bg-purple-50   hover:shadow-none hover:ml-3 hover:rounded-l-md">
                  <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#ffc43a"}}/>
                </li>

                <div className={`${status ? 'mt-5 py-2 bg-purple-50  shadow-none ml-3 rounded-l-md' :''}`}>
                        <li className={`${status ? ' bg-white  py-2 shadow-none ml-3 rounded-l-md ': ''}`} >
                            <div className="flex flex-row justify-evenly">
                                    <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#ffc43a"}}/>
                            {status ?<FontAwesomeIcon icon={faMinus} size="lg" style={{color: "#ffc43a"}}/>: ""}
                            </div>
                        </li>
                </div>

                <li className="mt-5 py-2 hover:bg-purple-50   hover:shadow-none hover:ml-3 hover:rounded-l-md"><FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#ffc43a"}}/></li>
                <li className="mt-5 py-2 hover:bg-purple-50   hover:shadow-none hover:ml-3 hover:rounded-l-md"><FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#ffc43a"}}/></li>
                <li className="mt-5 py-2 hover:bg-purple-50   hover:shadow-none hover:ml-3 hover:rounded-l-md"><FontAwesomeIcon icon={faGear} size="lg" style={{color: "#ffc43a"}}/></li>
            </ul>
      </div>
      <div className="pb-3">
        <ul className="text-center">
          <li className="mt-5"><FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{color: "#ffc43a"}}/></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

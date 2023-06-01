import React from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
// import { useDispatch } from "react-redux";
// import { log_out } from "../../redux/actions/auth.action";
import { Link,  useNavigate } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {

  const navigate = useNavigate();
  
  // const dispatch = useDispatch();
  const logOutHandler = () => {
    // dispatch(log_out());
    navigate('/login');

  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/home">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link to="/"> {/* /feed/subscription */}
        <li>
          <MdSubscriptions size={23} />
          <span>Subscription</span>
        </li>
      </Link>

      <li>
        <MdThumbUp size={23} />
        <span>LikedVideos</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't know</span>
      </li>

      <hr />
      <li onClick={logOutHandler}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;

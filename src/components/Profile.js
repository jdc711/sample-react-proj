import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import { Outlet, Link } from "react-router-dom";

function Profile(){
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <Link to=".">Profile Details</Link>
                <Link to="settings">Profile Settings</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Profile;
import UsersLeftPanel from "./UsersLeftPanel";
import UsersRightPanel from "./UsersRightPanel";
import "./users.css";

export const Users = () => {

    return (
        <div className="bookings">
            <div className="separator"></div>
            {/* left panel */}
            <div className="container-fluid">
                <div className="row align-items-start">
                    <UsersLeftPanel />
                    {/* Home right panel */}
                    <UsersRightPanel />

                </div>
            </div>
            <div className="separator"></div>
        </div>
    );
};

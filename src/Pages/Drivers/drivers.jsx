import DriversLeftPanel from "./DriversLeftPanel";
import DriversRightPanel from "./DriversRightPanel";
import "./drivers.css";

export const Drivers = () => {


    return (
        <div className="bookings">
            <div className="separator"></div>
            {/* left panel */}
            <div className="container-fluid">
                <div className="row align-items-start">
                    <DriversLeftPanel />
                    {/* Home right panel */}
                    <DriversRightPanel />

                </div>
            </div>
            <div className="separator"></div>
        </div>
    );
};

import "./customers.css";
import CustomersLeftPanel from "./CustomersLeftPanel";
import CustomersRightPanel from "./CustomersRightPanel";

export const Customers = () => {

    return (
        <div className="customers">
            <div className="separator"></div>
            {/* left panel */}
            <div className="container-fluid">
                <div className="row align-items-start">
					<CustomersLeftPanel />
                    {/* Home right panel */}
					<CustomersRightPanel />

                </div>
            </div>
            <div className="separator"></div>
        </div>
    );
};

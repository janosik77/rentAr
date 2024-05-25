/* eslint-disable react/prop-types */

import { useState } from "react";
import { AddBtn } from "./AddBtn";
import { AddModal } from "./AddModal";

export const FormModal = ({btnText, children}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="add-car-btn-area tab-panel">
            <div className="add-car-button">
                <AddBtn btnText={btnText} setShow={setShow}/>
                <AddModal btnText={btnText} show={show} setShow={setShow}>{children}</AddModal>
            </div>
        </div>
    );
};

import React from "react";
import millify from "millify";


const Statistics = ({item, figue, }) => {

    // precisionNo = 2;
    return (
        <div className="col-md-4 mt-3 ">
        <div className="h-100 p-3  border rounded-3">
            <h3 className="display-7 lead">{item}</h3>
            <p className="fw-bold mb-0 fs-4">
            { millify(parseInt(figue) , {precision: 2}) }
            </p>
        </div>
        </div>
    );
};

export default Statistics;

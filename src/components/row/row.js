import React from 'react';


const Row = ({left, rigth}) => {
    return (
        <div className="content-block">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {rigth}
            </div>
        </div>
    )
}
export default Row;
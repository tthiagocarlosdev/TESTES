import './LineWithArrow.css'

function LineWithArrow () {

    return ( 
        <div className="line-with-arrow">
            <div className="line"></div>
            <div><i className="fa-solid fa-angles-down"></i> </div>
            <div className="line"></div>
        </div>
     );
};

export default LineWithArrow;
import React from 'react'
import './Footer.css'

const footer = () => {
    return(
        <div className='main-footer'>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} DEVELOPED BY CHINMAY TIWARI & AKSHIT JOSHI | All Rights Reserved | Terms Of Service | Privacy
                </p>
            </div>
        </div>
    )
}

export default footer;
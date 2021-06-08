import React from "react";

const Header = (props) => {
        return(
            <nav>
                <div>
                    <a href="#">{props.link}</a>
                </div>
            </nav>
        )
}

export default Header;
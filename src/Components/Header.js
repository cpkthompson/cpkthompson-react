import React from "react";

const Header = props => {
    return (
        <span className="jumbo headerStyle">
            Hello, my name is <a href="about.html">Charles Thompson</a> and I
            love <a href="work">making</a> things for the web.
            <hr className="round-large hrStyle" />
        </span>
    );
};

export default Header;

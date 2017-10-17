import React from "react";

const Aside = props => {
    return (
        <aside className="padding-16 padding-large border padding light-grey">
            This site was created using only HTML and CSS. It was carefully
            hand-coded in{" "}
            <a href="https://www.jetbrains.com/pycharm/">PyCharm</a> and
            deployed to on <a href="//surge.sh">Surge.sh</a> because it was
            free. The type is set in lovely{" "}
            <a href="https://fonts.google.com/specimen/Karla">Karla</a> (for the
            body) and{" "}
            <a href="https://fonts.google.com/specimen/Raleway">Raleway</a> (for
            the header), all served by{" "}
            <a href="https://fonts.google.com">Google Fonts</a>.
        </aside>
    );
};

export default Aside;

/**
 * Libraries
 */

import React from 'react';

/**
 * Layout component definition and export
 */

export const Layout = (props) => {
    return(
        <div>
        <h1>Toolbarm, SideDrawer, Backdrop</h1>
        <div>
            {props.children}
        </div>
    </div>
    );
}

export default Layout;



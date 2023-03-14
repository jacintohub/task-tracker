import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';

function Layout({children}) {
    return (
        <div>
            <TopBar/>
            <SideBar/>
            <main className='pl-40 pt-16'>
                {children}
            </main>
        </div>
    );
}

export default Layout;
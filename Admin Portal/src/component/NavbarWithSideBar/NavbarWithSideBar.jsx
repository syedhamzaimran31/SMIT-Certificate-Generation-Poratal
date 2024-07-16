import React, { useEffect, useState } from 'react'
import Adminportal from '../Adminportal'

function NavbarWithSideBar({children}) {
    const [isXL, setIsXL] = useState(window.innerWidth >= 1200);
    const [isMD, setIsMD] = useState(window.innerWidth >= 768 && window.innerWidth < 1200);

    const handleResize = () => {
        setIsXL(window.innerWidth >= 1200);
        setIsMD(window.innerWidth >= 768 && window.innerWidth < 1200);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <>
        <div className="sticky-top">
            <Adminportal/>
        </div>
        <div className="mt-4  px-3"style={{ marginLeft: isXL ? "22%" : "0" }}>
            <main>{children}</main>
        </div>
    </>
  )
}

export default NavbarWithSideBar
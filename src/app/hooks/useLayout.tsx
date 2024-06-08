import { useEffect, useState } from "react";

const useLayout = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // All of bootstrap's breakpoints: 
    // https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints
    const xs = 576;
    const sm = 576;
    const md = 768;
    const lg = 992;
    const xl = 1200;
    const xxl = 1400;
    
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const isXs = windowWidth < xs;
    const isSm = windowWidth >= sm;
    const isMd = windowWidth >= md;
    const isLg = windowWidth >= lg;
    const isXl = windowWidth >= xl;
    const isXxl = windowWidth >= xxl;

    
    return {windowWidth, isXs, isSm, isMd, isLg, isXl, isXxl}
};

export default useLayout;
export const isMobile = navigator.userAgentData
    ? navigator.userAgentData!.mobile
    : false;
export const winSize =
    window.innerWidth < 700
        ? 'small'
        : window.innerWidth < 1024
        ? 'medium'
        : 'big';
export const winWidth = window.innerWidth;

const h = () => {
    isMobile;
    winSize;
};
export const updatedWindow = window.addEventListener('resize', h);

import type { LocaleLang } from './components/infoCards/types';

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

export const findLocaleText = (arr: LocaleLang[], language: string) => {
    return arr.find((l) => l.locale === language)?.text;
};

import taskImg from "../images/cart.png";
import ideaImg from "../images/bulb.png";
import quoteImg from "../images/quote.png";
import thoughtImg from "../images/settings.png";

export function checkDates(str: string) {
    return str.match(/[0-9]{1,2}[\/.\-_\\][0-9]{1,2}[\/.\-_\\][0-9]{4}/g)?.join(", ");
}

const monthNumToStr = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};

export function getCurrDate() {
    const currDate = new Date();
    return `${monthNumToStr[currDate.getMonth() as keyof {}]} ${currDate.getDate()}, ${currDate.getFullYear()}`;
}

export function scrollToElement(id: string) {
    const link = document.querySelector(id);
    link?.scrollIntoView({behavior: 'smooth', block: 'start'});
}

export function getImgPath(category: string) {
    switch (category) {
        case "Task":
            return taskImg;
        case "Idea":
            return ideaImg;
        case "Quote":
            return quoteImg;
        case "Random Thought":
            return thoughtImg;
        default:
            return "";
    }
}
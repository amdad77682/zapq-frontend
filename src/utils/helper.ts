export const datePlusMonthPlusYeaR = (date: string) => {
    if (!date) {
        return '';
    }
    return new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).format(new Date(date));
};

export const MODE = {
    story: 'story',
    branching: 'branching'
}
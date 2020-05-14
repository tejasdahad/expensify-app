// Filter Action Generator
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

export const setStartDate = (start) => ({
    type: 'SET_START_DATE',
    start
});

export const setEndDate = (end) => ({
    type: 'SET_END_DATE',
    end
});
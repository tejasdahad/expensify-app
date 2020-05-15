import { sortByAmount, setEndDate, setStartDate,setTextFilter,sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date' , () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date' , () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by date' , () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should generate sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Testing text by passing value', () => {
    const action = setTextFilter('date');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'date'
    });
});

test('Testing text with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});
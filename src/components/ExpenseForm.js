import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    } 
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {                // Refer regex101.com for regular expressions. This one supports like 1095.20
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please enter a valid description and amount'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount ,10),
                createdAt: this.state.createdAt.valueOf(), // to convert to milliseconds
                note: this.state.note
            });
        }
    }
    render() {
        return(
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    className="text-input"
                    type="text"
                    autoFocus
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    className="text-input"
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                />
                <textarea
                    className="textarea"
                    placeholder="Add a note for your expense(optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                ></textarea>
                <div>
                    <button className="button" type="submit">Save Expense</button>
                </div>
            </form>
        );
    }
};


export default ExpenseForm;
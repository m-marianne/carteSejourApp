import React, { Component } from "react";

class DatePicker extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			year: this.props.year,
			month: this.props.month - 1,
			day: this.props.day,
			chosenDate: null,
		}
		this.prevMonth = this.prevMonth.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
		this.dateSetter = this.dateSetter.bind(this);
		this.resetDate = this.resetDate.bind(this);
	}

	componentWillMount() {
		this.dateSetter(this.props.day, this.props.month - 1, this.state.year);
	}

	prevMonth(event) {
		event.preventDefault();
		let newMonth = this.state.month - 1 === -1 ? 11 : this.state.month - 1;
		let newYear = newMonth === 11 ? this.state.year - 1 : this.state.year;
		this.setState({year: newYear, month: newMonth});
	}

	nextMonth(event) {
		event.preventDefault();
		let newMonth = this.state.month + 1 === 12 ? 0 : this.state.month + 1;
		let newYear = newMonth === 0 ? this.state.year + 1 : this.state.year;
		this.setState({year: newYear, month: newMonth});
	}

	monthConverter(index) {
		return ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'][index];
	}

	dateSetter(day, month, year, event) {
		if(event !== undefined) event.preventDefault();
		day = day.toString().length < 2 ? '0' + day : day;
		month += 1;
		month = month.toString().length < 2 ? '0' + month : month;
		let eventDate = `${year}-${month}-${day}`;
		this.setState({chosenDate: eventDate});
		this.props.eventDate(eventDate);
	}

	resetDate(event) {
		event.preventDefault();
		this.setState({year: this.props.year, month: this.props.month - 1, day: this.props.day});
		this.dateSetter(this.props.day, this.props.month - 1, this.props.year);
	}
	
	render() {
		let date = new Date(this.state.year, this.state.month, 1);
		let weekDay = date.getDay() !== 0 ? date.getDay() : 7;

		date.setMonth(date.getMonth() + 1);
		date.setDate(1);
		date.setDate(date.getDate() - 1);

		let lastDay = date.getDate();
		// let totalCells = weekDay - 1 + lastDay <= 35 ? 35 : 42;
		let totalCells = 42;

		let calendar = [];
		for(let i = 0; i < totalCells; i++) {
			if(i >= weekDay - 1 && i < weekDay + lastDay - 1) {
				calendar[i] = i - weekDay + 2;
			} else {
				calendar[i] = '';
			}
		}

		let pickerYear = this.state.year;
		let pickerMonth = this.monthConverter(this.state.month);

		let cells = calendar.map(
			(item,i) => {
				if(item !== '') {
	    			let chosenDateArr = this.state.chosenDate.split('-');
					let cls = item == 	chosenDateArr[0] && 
										this.state.month == chosenDateArr[1] - 1 && 
										this.state.year == chosenDateArr[2] ? 'current' : '';
	    			let day = item;
	    			let month = this.state.month;
	    			let year = this.state.year;
					return (
						<div className="cell" key={i}>
							<a className={cls} href="#" onClick={event => this.dateSetter(day,month,year,event)}>{item}</a>
						</div>
					)
				} else {
					return <div className="cell" key={i}></div>
				}
			}
		);

		return (
			<div 
				className="datepicker-holder"
			>
				<div className="heading">
				  <a className="prev" href="#" onClick={this.prevMonth}>&lt;</a>
				  <a className="next" href="#" onClick={this.nextMonth}>&gt;</a>
				  <div className="MonthYearCurrent"><span>{pickerMonth}</span><span>{pickerYear}</span></div>
	    		</div>
				<div className="datepicker">
					{cells}
				</div>
				<div className="datePicker_footer">
		    		<div 
		    			className="chosenDate"
		    		>
						{this.state.chosenDate}
					</div>
					<a className="today" onClick={this.resetDate} href="#">revenir à aujourd'hui</a>
				</div>
			</div>
		);
	}
}
export default DatePicker;


// &lt; == less-than sign ( < )
// &gt; == greater-than sign ( > )
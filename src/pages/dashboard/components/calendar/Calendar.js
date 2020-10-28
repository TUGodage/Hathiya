import React, { Component } from 'react'
import DayNames from './DayNames'
import uuid from 'uuid/v4'
import Week from './Week'
import moment from 'moment/moment'
import s from './Calendar.module.scss'


class Calendar extends Component {

    state = {
      selectedMonth: moment(),
      selectedDay: moment().startOf("day"),
      selectedMonthEvents: [
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-01`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-02`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-03`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-04`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-05`, "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-06`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-07`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-08`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-09`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-10`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-11`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-12`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-13`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-14`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-15`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-16`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-17`,  "YYYYMMDD"),
        },

        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-18`, "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-19`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-20`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-21`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-22`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-23`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-24`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-25`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-26`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-27`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-28`,  "YYYYMMDD"),
        },

        {
          title: "",
          info: "",
          itemStyle: "#1870dc",
          link: "",
          date: moment(`${moment().year()}-${moment().month() + 1}-29`, "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-30`,  "YYYYMMDD"),
        },
        {
          title: "",
          info: "Select time slot",
          itemStyle: "#1870dc",
          date: moment(`${moment().year()}-${moment().month() + 1}-31`,  "YYYYMMDD"),
        },
      ],
      showEvents: false
    };

  previous = () => {
    this.setState({
      selectedMonth: this.state.selectedMonth.subtract(1, "month")
    });
  }

  next = () =>  {
    this.setState({
      selectedMonth: this.state.selectedMonth.add(1, "month")
    });
  }
  
  renderMonthLabel = () =>  {
    return (
      <span className={`${s.calendarItemContainer} ${s.monthLabel}`}>
        {this.state.selectedMonth.format("MMMM YYYY")}
      </span>
    );
  }



  
  renderWeeks = () =>  {
    const currentMonthView = this.state.selectedMonth;
    const currentSelectedDay = this.state.selectedDay;

    let weeks = [];
    let done = false;
    let previousCurrentNextView = currentMonthView
      .clone()
      .startOf("month")
      .subtract(1, "d")
      .day("Sunday");
    let count = 0;
    let monthIndex = previousCurrentNextView.month();

    while (!done) {
      weeks.push(
        <Week
          key={uuid()}
          selectedMonthEvents={this.state.selectedMonthEvents}
          previousCurrentNextView={previousCurrentNextView.clone()}
          currentMonthView={currentMonthView}
          selected={currentSelectedDay}
        />
      );
      previousCurrentNextView.add(1, "w");
      done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
      monthIndex = previousCurrentNextView.month();
    }
    return weeks;
  }


  render() {

      return (
        <div className={`${s.calendarRectangle}`}>
        <div>
        <section className={`${s.mainCalendar}`}>
          <header className={`${s.calendarHeader}`}>
            <div className={`${s.calendarRow} ${s.titleHeader}`}>
              <i
                className={`${s.calendarItemContainer} ${s.arrow} la la-arrow-left`}
                onClick={this.previous}
              />
              <div className={`${s.calendarItemContainer} ${s.headerText}`}>
              
              {this.renderMonthLabel()}
              </div>
              <i 
                className={`${s.calendarItemContainer} ${s.arrow} la la-arrow-right`} 
                onClick={this.next} 
              />
            </div>
            <DayNames />
          </header>
          <div className={`${s.daysContainer}`}>
            {this.renderWeeks()}
          </div>
        </section>
        </div>
        </div>
      );
    }
}

export default Calendar;
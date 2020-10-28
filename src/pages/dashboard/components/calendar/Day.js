import React, { Component } from 'react'
import { Popover, PopoverHeader, PopoverBody, Tooltip,} from 'reactstrap';
import s from './Calendar.module.scss'

class Day extends Component {
  state = {
    popoverShow: false,
    tooltipShow: false
  }

  togglePopover = () => {
    this.setState({ popoverShow: !this.state.popoverShow })
  }

  toggleTooltip = () => {
    this.setState({ tooltipShow: !this.state.tooltipShow })
  }

  render() {
    const { day, selected } = this.props;
    return (
      <div className={
          `${s.day}` +
          (day.isToday ? ` ${s.today}` : "") +
          (day.isCurrentMonth ? "" : ` ${s.differentMonth}`) +
          (day.date.isSame(selected) ? ` ${s.selected}` : "") +
          (day.hasEvents ? ` ${s.hasEvents}` : "") } > 

        {!day.hasEvents ? 
        <div className={s.dayNumber}>{day.number}</div> 
        : (day.hasEvents && day.link) 
        ? 
        <React.Fragment>
          <a
            rel="noopener noreferrer"
            target="_blank"
            onMouseEnter={this.toggleTooltip}
            onMouseOut={this.toggleTooltip}
            id={`Tooltip${day.number}`}
            href={day.link ? day.link : "#"} 
            className={s.dayNumber}> {day.number}
            {day.itemStyle ? 
              <span 
                style={{backgroundColor: `${day.itemStyle}`}} 
                className={s.calendarDot}>
              </span> : "" }
          </a>
          <Tooltip 
            placement="top" 
            isOpen={this.state.tooltipShow} 
            toggle={this.toggleTooltip} 
            target={`Tooltip${day.number}`}>
            {day.title}
          </Tooltip>
        </React.Fragment> 
        : (day.hasEvents && !day.link)
        ? 
          <React.Fragment>
            <div
              onClick={this.togglePopover}
              id={`Popover${day.number}`}
              className={s.dayNumber}> {day.number}
                {day.itemStyle ? 
                  <span 
                    style={{backgroundColor: `${day.itemStyle}`}} 
                    className={s.calendarDot}>
                  </span> : "" }
            </div>
            <Popover 
              placement="top" 
              isOpen={this.state.popoverShow} 
              target={`Popover${day.number}`} 
              toggle={this.togglePopover}>
              <PopoverHeader>{day.title}
              <form>
                <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select> <button>ok</button>
              
              <br></br>
              <select>
                <option>None</option>
                <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select> <button>ok</button>
              <br></br>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select> <button>ok</button>
              <br></br>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select> <button>ok</button>
              <br></br>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select>
              <select>
              <option value="">None</option>
              <option  value="1">7.00am</option>
              <option  value="2">8.00am</option>
              <option  value="3">9.00am</option>
              <option  value="4">10.00am</option>
              <option  value="5">11.00am</option>
              <option  value="6">12.00pm</option>
              <option value="7">1.00pm</option>
              <option value="8">2.00pm</option>
              <option value="9">3.00pm</option>
              <option value="10">4.00pm</option>
              <option value="11">5.00pm</option>
              <option value="12">6.00pm</option>
              <option value="13">7.00pm</option>
              <option value="14">8.00pm</option>
              <option value="15">9.00pm</option>
              <option value="16">10.00pm</option>
              </select> <button>ok</button>
              </form>
              </PopoverHeader>
              <PopoverBody>{day.info}</PopoverBody>
            </Popover> 
          </React.Fragment> 
        : "" }
      
      </div>
    );
  }
}
export default Day;
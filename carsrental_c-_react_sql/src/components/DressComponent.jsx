// import React, { useState } from 'react';
// import { Calendar } from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import { Dropdown } from 'primereact/dropdown';
// import { Button } from 'primereact/button';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import dressImage from './images/dress1.png'; // התמונה של השמלה

// const DressComponent = () => {
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);

//     const sizes = [
//         { label: 'Small', value: 'S' },
//         { label: 'Medium', value: 'M' },
//         { label: 'Large', value: 'L' },
//         { label: 'X-Large', value: 'XL' }
//     ];

//     const handleSizeChange = (e) => {
//         setSelectedSize(e.value);
//     };

//     return (
//         <div className="p-grid">
//             <div className="p-col-12 p-md-4">
//                 <img src={dressImage} alt="Dress" style={{ maxWidth: '100%' }} />
//             </div>
//             <div className="p-col-12 p-md-4">
//                 <Dropdown 
//                     value={selectedSize} 
//                     options={sizes} 
//                     onChange={handleSizeChange} 
//                     placeholder="Select Size" 
//                     className="p-mb-3" 
//                 />
//                 <Calendar 
//                     value={selectedDate} 
//                     onChange={setSelectedDate} 
//                     shouldHighlightWeekends 
//                     locale="he"
//                 />
//                 <Button label="Submit" className="p-mt-3" onClick={() => alert(`Size: ${selectedSize}, Date: ${selectedDate ? selectedDate.day + '/' + selectedDate.month + '/' + selectedDate.year : 'No Date Selected'}`)} />
//             </div>
//         </div>
//     );
// };

// export default DressComponent;
import React, { useState } from 'react';
import { getJewishMonthNames, getJewishDaysInMonth, getFirstDayOfJewishMonth } from './jewishCalendarUtils.js'; // נניח שיש לך פונקציות עזר כאלה
import "./Calender.css"
const JewishCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = getJewishMonthNames(); // שמות החודשים בלוח שנה יהודי

  const getDaysInMonth = (month, year) => {
    return getJewishDaysInMonth(year, month);
  };

  const getFirstDayOfMonth = (month, year) => {
    return getFirstDayOfJewishMonth(year, month);
  };

  const handlePreviousMonth = () => {
    const prevMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(new Date(prevMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(new Date(nextMonth));
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
    const firstDayOfMonth = getFirstDayOfMonth(currentDate.getMonth(), currentDate.getFullYear());
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<div key={`day-${i}`} className="calendar-day">{i}</div>);
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>הקודם</button>
        <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth}>הבא</button>
      </div>
      <div className="calendar-body">
        <div className="calendar-days">
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default JewishCalendar;

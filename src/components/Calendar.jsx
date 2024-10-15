import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Day from '../props/Day';
import generateDaysInMonth from '../helpers/GenerateDays';
import '../styles/Calendar.css';

const Calendar = ({ jobs, onAddJob }) => {
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
  /* useMemo to only generate days when the year or month changes
   to avoid recalculating days unless the month or year changes*/
const daysInMonth = useMemo(() => generateDaysInMonth(year, month), [year, month]);

  return (
    <div className="calendar-grid">
      {daysInMonth.map((date, index) => {
        if (!date) {
          return <div key={index} className="empty-day"></div>;
        }

        const jobKey = date.toISOString().split('T')[0];
        const job = jobs[jobKey];
        return (
          <Day
            key={index}
            date={date}
            job={job}
            onAddJob={onAddJob}
          />
        );
      })}
    </div>
  );
};

Calendar.propTypes = {
  jobs: PropTypes.object.isRequired,
  onAddJob: PropTypes.func.isRequired,
};

export default Calendar;

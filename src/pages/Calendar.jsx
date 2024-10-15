import Calendar from '../components/Calendar';
import { useState } from 'react';
/* Job State is passed as a prop to the Calendar component */
const CalendarPage = () => {
  const [jobs, setJobs] = useState({});

  /*
  this function is called when the user adds a new job, 
  it takes the date and job details as parameters and adds 
  them to the jobs state 
  */
  const addJob = (date, jobDetails) => {
    const formattedDate = date.toISOString().split('T')[0];
    setJobs((prevJobs) => ({
      ...prevJobs,
      [formattedDate]: jobDetails,
    }));
  };

  return (
    <div>
      <h1>Job Scheduler</h1>
      <Calendar jobs={jobs} onAddJob={addJob} />
    </div>
  );
};

export default CalendarPage;

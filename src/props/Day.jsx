import { useState } from 'react';
import JobModal from './JobModal';
import PropTypes from 'prop-types';
import '../styles/Day.css';

const Day = ({ date, job, onAddJob }) => {
  const [showModal, setShowModal] = useState(false);

  // Handle click to add job
  const handleClick = () => {
    if (date) setShowModal(true);
  };

  return (
    <div className="day-cell" onClick={handleClick}>
      {date ? (
        <div>
          <span>{date.getDate()}</span>
          {job && <div className="job-info">{job.customer}</div>}
        </div>
      ) : null}
      {showModal && (
        <JobModal date={date} onAddJob={onAddJob} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

Day.propTypes = {
  date: PropTypes.instanceOf(Date),
  job: PropTypes.shape({
    customer: PropTypes.string
  }),
  onAddJob: PropTypes.func.isRequired
};

export default Day;

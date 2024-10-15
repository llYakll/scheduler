import PropTypes from 'prop-types';
import '../styles/Modal.css';
import { useState } from 'react';

/* this is a modal component that is used to add a new job to the calendar. 
It is used in the Calendar component. */

const JobModal = ({ date, onAddJob, closeModal }) => {
  const [customer, setCustomer] = useState('');
  const [location, setLocation] = useState('');
  const [scope, setScope] = useState('');

  const handleSubmit = () => {
    if (customer && location && scope) {
      onAddJob(date, { customer, location, scope });
      closeModal();
    }
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Add Job for {date.toDateString()}</h3>
        <label>Customer:</label>
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Scope of Work:</label>
        <input
          type="text"
          value={scope}
          onChange={(e) => setScope(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleSubmit}>Save Job</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

JobModal.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onAddJob: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default JobModal;

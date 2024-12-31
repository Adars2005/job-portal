import React from 'react';

const JobComponent = ({ job, onEdit, onDelete }) => {
    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <button onClick={() => onEdit(job.id)}>Edit</button>
            <button onClick={() => onDelete(job.id)}>Delete</button>
        </div>
    );
};

export default JobComponent;
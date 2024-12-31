import React, { useEffect, useState } from 'react';
import JobComponent from '../components/JobComponent';

const JobPage = () => {
    const [jobs, setJobs] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const response = await fetch('/api/jobs');
        const data = await response.json();
        setJobs(data);
    };

    const createJob = async (e) => {
        e.preventDefault();
        const jobData = { title, description, company, location };

        await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        });

        setTitle('');
        setDescription('');
        setCompany('');
        setLocation('');
        fetchJobs();
    };

    const deleteJob = async (id) => {
        await fetch(`/api/jobs/${id}`, {
            method: 'DELETE'
        });
        fetchJobs();
    };

    const editJob = (id) => {
        // Implement edit functionality here
        alert('Edit functionality not implemented yet.');
    };

    return (
        <div className="container">
            <header>
                <h1>Simple Job Portal</h1>
            </header>
            <div className="form-container">
                <form onSubmit={createJob}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Job Title"
                        required
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        required
                    />
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company"
                        required
                    />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        required
                    />
                    <button type="submit">Create Job</button>
                </form>
            </div>
            <div id="jobList" className="job-list">
                {jobs.map(job => (
                    <div key={job._id} className="job-item">
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <a href="#" className="button" onClick={() => deleteJob(job._id)}>Delete</a>
                        <a href="#" className="button" onClick={() => editJob(job._id)}>Edit</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobPage;
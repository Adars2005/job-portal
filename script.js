document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('jobForm');
    const jobList = document.getElementById('jobList');

    const apiUrl = 'http://localhost:5000/api/jobs';

    const fetchJobs = async () => {
        const response = await fetch(apiUrl);
        const jobs = await response.json();
        jobList.innerHTML = '';
        jobs.forEach(job => {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job-item');
            jobItem.innerHTML = `
                <h2>${job.title}</h2>
                <p>${job.description}</p>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <a href="#" class="button" onclick="deleteJob('${job._id}')">Delete</a>
                <a href="#" class="button" onclick="editJob('${job._id}')">Edit</a>
            `;
            jobList.appendChild(jobItem);
        });
    };

    jobForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(jobForm);
        const jobData = {};
        formData.forEach((value, key) => {
            jobData[key] = value;
        });

        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        });

        jobForm.reset();
        fetchJobs();
    });

    fetchJobs();
});

const deleteJob = async (id) => {
    const apiUrl = `http://localhost:5000/api/jobs/${id}`;
    await fetch(apiUrl, {
        method: 'DELETE'
    });
    fetchJobs();
};

const editJob = async (id) => {
    // Implement edit functionality here
    alert('Edit functionality not implemented yet.');
};

// Ensure fetchJobs is available globally
window.fetchJobs = fetchJobs;
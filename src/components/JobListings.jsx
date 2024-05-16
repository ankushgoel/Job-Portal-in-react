import { useEffect, useState } from 'react'
// import { jobs } from '../jobs.json'
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:8000/jobs'); // ?_limit=3
                const data = await res.json();
                // console.log(data);
                if (data.length)
                    setJobs(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(true);
            }
        }
        fetchJobs();
    }, [])

    // console.log(jobs);
    const listings = isHome ? jobs.slice(0, 3) : jobs;
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                {loading ?
                    <div>
                        <Spinner loading={loading} />
                        <div className='text-3xl text-center'>Loading...</div>
                    </div> :
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {listings.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>}
            </div>
        </section>
    )
}

export default JobListings
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />

            {/* <!-- Developers and Employers --> */}
            <HomeCards />

            {/* <!-- Browse Jobs --> */}
            <JobListings />

            <ViewAllJobs />
        </>
    )
}

export default HomePage
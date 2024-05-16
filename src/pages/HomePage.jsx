
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    return (
        <>

            <Hero />

            {/* <!-- Developers and Employers --> */}
            <HomeCards />

            {/* <!-- Browse Jobs --> */}
            <JobListings isHome={true} />

            <ViewAllJobs />
        </>
    )
}

export default HomePage
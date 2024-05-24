import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import Job from "../Job/Job";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const applied = true;
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter =>{
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if(filter === "remote"){
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    }else if(filter === "onsite"){
        const onsiteJobs = appliedJobs.filter(
          (job) => job.remote_or_onsite === "Onsite"
        );
        setDisplayJobs(onsiteJobs);
      }
  }
  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length) {
      //   const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h2>Jobs I applied: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>handleJobsFilter('all')}>
            <a>all</a>
          </li>
          <li onClick={()=>handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul className="">
        {displayJobs.map((job) => (
          <li className="mt-6" key={job.id}>
            <Job job={job} applied={applied} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;

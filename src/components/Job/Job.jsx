/* eslint-disable react/prop-types */
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job, applied }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
  return (
    <div className={`card card-compact bg-base-100 shadow-xl ${applied && "grid grid-cols-4"}`}>
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className={`card-body ${applied && "col-span-2"}`}>
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-4 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe] mr-4">{remote_or_onsite}</button>
            <button className="px-4 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe] mr-4">{job_type}</button>
        </div>
        <div className="mt-4 flex">
            <h2 className="flex"><MdOutlineLocationOn className="text-2xl mr-2" /> {location}</h2>
            <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2" /> {salary}</h2>
        </div>
        
      </div>
      <div className={`card-actions ms-4 mb-4 ${applied && "content-center"}`}>
         <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
         </Link>
        </div>
    </div>
  );
};

export default Job;

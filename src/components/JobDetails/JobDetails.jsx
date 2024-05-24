import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage.js";


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  const { job_title, job_description, job_responsibility, salary } = job;
//   console.log(job);
  const handleApplyJob = () => {
   saveJobApplication(parseInt(id))
    toast.success("Job Applied Successfully");
  };

  return (
    <div>
      <h2>Job Details of: {id}</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border col-span-3">
          <p>
            <span>Job Description:</span> {job_description}
          </p>
          <p className="mt-6 ">
            <span>Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p className="mt-6">Educational Requirements:</p>
          <p className="mt-4">
            Bachelor degree to complete any reputational university.
          </p>
          <p className="mt-6">Experiences:</p>
          <p className="mt-4">2-3 Years in this field.</p>
        </div>
        <div className="">
          <div className="bg-slate-100 mb-4 border rounded-lg p-7">
            <h2>Job Details</h2>
            <hr className="bg-sky-600 border" />
            <div className="mt-6">
              <p className="flex items-center">
                <AiOutlineDollarCircle />
                <span className="ms-2">Salary :</span> {salary} (Per Month)
              </p>
              <div className="flex items-baseline">
                <IoCalendarOutline className="" />
                <p>
                  <span className="ms-2">Job Title :</span> {job_title}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="mb-6">Contact Information</h2>
              <hr className="mb-6 bg-sky-600 border" />
              <p className="flex items-center">
                <FiPhone />
                <span className="ms-2">Phone :</span> 01750-00 00 00
              </p>
              <p className="flex items-center">
                <AiOutlineMail />
                <span className="ms-2">Email :</span> info@gmail.com
              </p>
              <div className="flex items-start">
                <VscLocation className="text-4xl" />
                <p className="pt-1">
                  <span className="ms-2">Address :</span> Dhanmondi 32, Sukrabad
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleApplyJob} className="btn btn-primary w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;

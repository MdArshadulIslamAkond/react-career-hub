const getStoredJobApplication = ()=>{
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id => {
const getStoredJobApplications = getStoredJobApplication();
const exists = getStoredJobApplications.find(jobid=> jobid===id);
if (!exists){
    getStoredJobApplications.push(id);
    localStorage.setItem('job-applications', JSON.stringify(getStoredJobApplications));
    // return true;
}

}

export {getStoredJobApplication, saveJobApplication}

const Banner = () => {
    return (
        <div className="grid grid-cols-5 items-center mb-32" style={{
            background:
              "linear-gradient(.25turn, rgb(126, 144, 254,.05) 50%, rgb(152, 115, 255, .05) 100%)",
          }}>
            <div className="col-span-2">
                <h2 className="text-[70px] font-extrabold">One Step Closer To Your <span>Dream Job</span></h2>
                <p>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className="btn btn-md rounded-lg" style={{
            background:
              "linear-gradient(.25turn, rgb(126, 144, 254) 50%, rgb(152, 115, 255) 100%)",
          }}>Get Started</button>
            </div>
            <div className="col-span-3"> <img src="assets/images/user.png" alt="" /></div>
        </div>
    );
};

export default Banner;
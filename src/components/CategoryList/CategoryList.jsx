const CategoryList = () => {
  return (
    <div>
      <h2 className="text-6xl text-center">Job Category List</h2>
      <p className="text-center mt-1">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="rounded-lg"
          style={{
            background:
              "linear-gradient(.25turn, rgb(126, 144, 254,.05) 50%, rgb(152, 115, 255, .05) 100%)",
          }}
        >
          <div className="m-10">
          <div >
            <img src="assets/icons/accounts.png" alt="" />
          </div>
          <div className="mt-9">
            <h2 className="font-extrabold text-xl text-[#474747]">Account & Finance</h2>
            <p>300 Jobs Available</p>
          </div>
          </div>
        </div>
        <div className="rounded-lg"
          style={{
            background:
              "linear-gradient(.25turn, rgb(126, 144, 254,.05) 50%, rgb(152, 115, 255, .05) 100%)",
          }}
        >
          <div className="m-10">
          <div >
            <img src="assets/icons/creative.png" alt="" />
          </div>
          <div className="mt-9">
            <h2 className="font-extrabold text-xl text-[#474747]">Creative Design</h2>
            <p>100+ Jobs Available</p>
          </div>
          </div>
        </div>
        <div className="rounded-lg"
          style={{
            background:
              "linear-gradient(.25turn, rgb(126, 144, 254,.05) 50%, rgb(152, 115, 255, .05) 100%)",
          }}
        >
          <div className="m-10">
          <div >
            <img src="assets/icons/marketing.png" alt="" />
          </div>
          <div className="mt-9">
            <h2 className="font-extrabold text-xl text-[#474747]">Marketing & Sales</h2>
            <p>150 Jobs Available</p>
          </div>
          </div>
        </div>
        <div className="rounded-lg"
          style={{
            background:
              "linear-gradient(.25turn, rgb(126, 144, 254,.05) 50%, rgb(152, 115, 255, .05) 100%)",
          }}
        >
          <div className="m-10">
          <div >
            <img src="assets/icons/chip.png" alt="" />
          </div>
          <div className="mt-9">
            <h2 className="font-extrabold text-xl text-[#474747]">Engineering Job</h2>
            <p>224 Jobs Available</p>
          </div>
          </div>
        </div>
        
     
      
      </div>
    </div>
  );
};

export default CategoryList;

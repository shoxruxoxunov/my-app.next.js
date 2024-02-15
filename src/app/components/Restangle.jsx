function Restangle() {
  return (
    <>
      <div className="relative">
        <div className=" fixed top-[0px] left-[] right-[] h-[800px] w-[103px] rounded-r-[20xp] rounded-b-[20px] bg-[rgb(55,59,83)]">
          <div className="w-[103px] h-[103px] bg-[rgb(45,134,206)] rounded-r-[20px] rounded-b-[20px]">
            <div className="relative">
              <div className="absolute left-[32px] right-[-32px] top-[31px] bottom-[-31px] rounded-[50px]  bg-[rgb(255,255,255)] w-[40px] h-[40px]"></div>
            </div>
          </div>
          <div>
            <div className="relative">
              <label className=" absolute left-[31px] right-[32px] top-[200px] bottom-[-659px] rounded-[50px] swap swap-rotate ">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller "
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <div className="relative">
              <div className=" absolute left-[31px] right-[32px] top-[470px] bottom-[-659px] rounded-[50px] w-[40px] h-[40px]">
                <img
                  className="rounded-[50px]"
                  src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1446"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restangle;

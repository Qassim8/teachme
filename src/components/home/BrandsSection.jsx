function BrandsSection() {
  return (
    <div className="flex justify-between items-center p-3 mt-16 mb-24 bg-white border-slate-200 rounded-md">
      <div className=" w-[150px] px-5 border-r">
        <img
          src={require(`../../images/zoom.png`)}
          className="max-w-full"
          alt="icon"
        />
      </div>
      <div className="w-[150px] px-5 border-r ">
        <img
          src={require("../../images/google.png")}
          className="max-w-full"
          alt="icon"
        />
      </div>
      <div className=" w-[150px] px-5 border-r ">
        <img
          src={require("../../images/ibm.png")}
          className="max-w-full"
          alt="icon"
        />
      </div>
      <div className="w-[150px] px-5 border-r">
        <img
          src={require("../../images/microsoft.png")}
          className="max-w-full"
          alt="icon"
        />
      </div>
      <div className="w-[150px] px-5 border-r">
        <img
          src={require("../../images/adobe.png")}
          className="max-w-full"
          alt="icon"
        />
      </div>

      <div className="w-[150px] px-5 border-r">
        <img
          src={require("../../images/amazon.png")}
          className="max-w-full"
          alt="icon"
        />
      </div>
      <div className="w-[150px] px-5 border-r">
        <img
          src={require("../../images/meta.png")}
          className="max-w-full"
          alt="icon"
        />
      </div>
      <div className="w-[150px] px-5">
        <img
          src={require("../../images/youtube.png")}
          className="max-w-full"
          alt="icon"
        />
      </div>
    </div>
  );
}

export default BrandsSection;

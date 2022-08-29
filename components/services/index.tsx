export function Services() {
  return (
    <div>
      <h1 className=" font-bold text-2xl flex justify-center items-center">
        My Services
      </h1>
      <br /> <br />
      <p className="flex justify-center items-center">
        I offer services fit for any website or app. I can quickly maximize
        timely deliverables for real-time schemas.
      </p>
      <br />
      <br /> <br />
      <div className="flex justify-evenly">
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-20"
            src="https://demo.templateflip.com/super/images/services/web-design.svg"
          ></img>
          <div className="font-bold text-xl py-4">Web Design</div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <img
            className="w-20 "
            src="https://demo.templateflip.com/super/images/services/graphic-design.svg"
          ></img>
          <div className="font-bold text-xl py-4">Graphic Design</div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <img
            className="w-20 "
            src="https://demo.templateflip.com/super/images/services/ui-ux.svg"
          ></img>
          <div className="font-bold text-xl py-4">UI/UX</div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <img
            className="w-20 "
            src="https://demo.templateflip.com/super/images/services/app-development.svg"
          ></img>
          <div className="font-bold text-xl py-4">App Development</div>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1 className=" font-bold text-2xl flex justify-center">Contact Me</h1>
      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-800 font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 font-bold">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-800 font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-orange-700 border-0  py-2 px-4  w-20 focus:outline-none hover:bg-orange-600 rounded text-lg">
              Send
            </button>
          </div>
          <div className="px-5 py-4 w-1/2 ">
            <h1 className="font-bold text-lg text-gray-800">
              Lets talk how I can help you!
            </h1>
            <p className="text-gray-700">
              If you like my work and want to avail my services then drop me a
              message using the contact form. Or get in touch using my email or
              my contact number. See you!
            </p>
            <div className="py-4">
              <div className="flex justify-start">
                Email:
                <div className="font-bold text-gray-700 ml-2">
                  liapanou7@gmail.com
                </div>
              </div>
              <div className="flex justify-start">
                Phone:
                <div className="font-bold ml-2  text-gray-700">
                  2102528058 , 6980675483
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Hero() {
  return (
    <div>
      <div className="grid grid-cols-2 bg-[#F5FAFE] shadow">
        <img className="w-fit" src="/x.jpg" alt="man in a desk"></img>

        <div className="flex justify-center items-center flex-col">
          <div className="text-xl">HELLO!</div>
          <h1 className="font-bold text-4xl">I am Lia Panou</h1>
          <div className="text-xl">
            Web Developer & Mobile Application Developer
          </div>
          <div className="flex w-20 h-6 my-4">
            <img
              className="w-8"
              src="https://s2.svgbox.net/social.svg?ic=github"
            ></img>

            <img
              className="w-8"
              src="https://s2.svgbox.net/social.svg?ic=linkedin"
            ></img>
          </div>

          <div>
            <button className="btn mt-2 bg-orange-500">
              Get In Touch <span className="text-2xl font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

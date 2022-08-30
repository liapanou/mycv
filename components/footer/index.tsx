export function Footer() {
  return (
    <div className=" footer flex justify-center items-center flex-col space-y-0">
      <h1 className="font-bold text-2xl">Lia Panou</h1>
      <div>Web Developer & Mobile Application Developer</div>
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
      <div>© Super Folio. All rights reserved.</div>
      <div>Design - TemplateFlip</div>
    </div>
  );
}

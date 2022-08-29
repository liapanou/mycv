export function About() {
  return (
    <div>
      <div className="grid grid-cols-2  gap-x-16 m-6">
        <div className="flex justify-center flex-col w-1/2 ml-auto">
          <h1 className="text-2xl font-bold">Hello! I'm Lia Panou.</h1>
          <p className="py-4 ">
            I am passionate about UI/UX design and Web Design. I am a skilled
            front-end developer.I am a quick learner and a team worker that gets
            the job done.I can easily capitalize on low hanging fruits and
            quickly maximize timely deliverables for real-time schemas.
          </p>
          <div>
            Age: <span className="font-bold ml-6"></span>
          </div>
          <div>
            Email:<span className="font-bold ml-6">liapanou7@gmail.com</span>
          </div>
          <div>
            Phone:<span className="font-bold ml-6 ">2102528058</span>
          </div>
          <div>
            Address:<span className="font-bold ml-6">Nea Ionia,Athens</span>
          </div>
          <div>
            Status:<span className="font-bold ml-6">Available</span>
          </div>
        </div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQE0rsJMAW2cpw/profile-displayphoto-shrink_800_800/0/1657276058278?e=1667433600&v=beta&t=zpctk9_hBayxZI16GQ_Efz8MEiHr9CpEvbs0Mr1miT4"
          alt="me"
        ></img>
      </div>
    </div>
  );
}

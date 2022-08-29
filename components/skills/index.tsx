export function Skills() {
  return (
    <div>
      <h1 className="font-bold text-2xl flex justify-center">My Skills</h1>
      <br />
      <br />
      <div className="flex justify-center">
        I am a quick learner and specialize in multitude of skills required for
        Web Application Development and Product Design
      </div>
      <br />
      <br />
      <div className="flex justify-center  items-center flex-col ">
        <div>
          <div>HTML5</div>
          <div className="flex">
            <progress max="100" value="80" className="range m-4 w-80" />
            <span>80%</span>
          </div>
        </div>

        <div>
          <div>CSS3</div>
          <div className="flex">
            <progress max="100" value="70" className="range m-4 w-80" />
            <span>70%</span>
          </div>
        </div>

        <div>
          <div>JavaScript</div>
          <div className="flex">
            <progress max="100" value="60" className="range m-4 w-80" />
            <span>60%</span>
          </div>
        </div>
        <div>
          <div>React</div>
          <div className="flex">
            <progress max="100" value="80" className="range m-4 w-80" />
            <span>80%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

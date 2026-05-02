function Skills() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 m-20">
      <h2 className="text-5xl mb-14">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6  ">
        <div className="h-30 w-30 flex font-inter text-2xl flex-col justify-center items-center gap-2.5">
          <img src="src/assets/js.svg"></img>
          <span>JAVASCRIPT</span>
        </div>
        <div className="h-30 w-30 flex font-inter text-2xl flex-col justify-center items-center gap-2.5">
          <img src="src/assets/react.svg"></img>
          <span>REACT</span>
        </div>
        <div className="h-30 w-30 flex font-inter text-2xl flex-col justify-center items-center gap-2.5">
          <img src="src/assets/tailwindcss.svg" className="bg-blue-950"></img>
          <span>TAILWIND</span>
        </div>
        <div className="h-30 w-30 flex font-inter text-2xl flex-col justify-center items-center gap-2.5">
          <img src="src/assets/redux.svg" fill="#764ABC"></img>
          <span>REDUX</span>
        </div>
        <div className="h-30 w-30 flex font-inter text-2xl flex-col justify-center items-center gap-2.5">
          <img src="src/assets/vscode.svg"></img>
          <span>VS CODE</span>
        </div>
        <div className="h-30 w-30 flex font-inter text-2xl flex-col justify-center items-center gap-2.5">
          <img src="src/assets/figma.svg"></img>
          <span>FIGMA</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;

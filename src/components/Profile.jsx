function Profile() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 mx-[30px]">
      <div>
        <h3 className=" text-4xl">Profile</h3>
      </div>
      <div className="flex justify-center items-center flex-1 flex-col md:flex-row gap-x-14">
        <div className="relative  w-full flex-1 max-w-lg">
          <div className="absolute -bottom-2 -right-2 w-full h-full  bg-[#898787] rounded-xl z-0"></div>
          <div className="relative z-10 w-full h-full bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col my-8 mx-8 gap-4 text-[18px]">
              <h4 className="text-[#EA2678]! text-2xl! font-playfair mb-2">
                Basic İnformation
              </h4>

              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-semibold">Doğum Tarihi</span>
                <span>21.03.1991</span>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-semibold">İkamet Şehri</span>
                <span>Malatya</span>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-semibold ">Eğitim Durumu</span>
                <span>
                  İstanbul Teknik Üni. Elektronik ve Haberleşme Müh. 2018
                </span>
              </div>
              <div className="grid grid-cols-[150px_1fr] gap-4">
                <span className="font-semibold ">Tercih Ettiği Rol</span>
                <span>Full Stack Developer,Back End Developer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 max-w-lg m-4 sm:m-0">
          <h4 className="font-playfair text-[24px] mt-8 md:m-0">About Me</h4>
          <p className="text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
           
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

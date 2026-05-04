import { useLanguage } from "../contexts/LanguageContext";
import { Bar } from "./icons/Bar";

function Profile() {
  const { langData } = useLanguage();

  // Safety check: langData henüz yüklenmemişse hata almamak için
  if (!langData) return null;

  //nesne yapısına uygun destructuring
  const {
    dateText,
    subTitle,
    dateOfBirth,
    cityText,
    city,
    educationText,
    education,
    preferredRoleText,
    preferredRole,
  } = langData.profileSection.personalInfo;

  return (
    <section className="w-full flex flex-col gap-y-8 items-center md:items-start">
      {/* Başlık */}
      <div className="w-full px-1 md:px-0">
        <h3 className="text-4xl font-inter text-center ">
          {langData.profileSection.title}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-14 w-full">
        {/* KART ALANI */}
        <div className="relative flex-1 max-w-lg">
          {/* Dekoratif Arka Plan (Gölge efekti) */}
          <div className="absolute top-3 left-3 w-full h-full bg-[#9e9c9c] dark:bg-[#858484] rounded-xl z-0"></div>
          <div className="relative z-10 w-full h-auto bg-white  dark:bg-[#525252] rounded-xl shadow-xl p-8">
            <div className="flex flex-col gap-4  sm:text-[18px]">
              <h4 className="text-[#EA2678] sm:text-2xl text-xl font-playfair mb-2">
                {subTitle}
              </h4>

              {/* Veri Döngüsü */}
              {[
                { label: dateText, value: dateOfBirth },
                { label: cityText, value: city },
                { label: educationText, value: education },
                { label: preferredRoleText, value: preferredRole },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-x-4 items-start"
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className="leading-snug wrap-break-word">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT ME ALANI */}
        <article className="flex-1 flex flex-col gap-6 max-w-lg">
          <div className="relative">
            <Bar className='absolute  top-5 left-3/9   sm:-left-4 rounded-2xl w-22.5 h-4.5 text-[#82BBFF]'/>
          <h4 className="font-playfair relative z-10 text-[24px] text-center md:text-left">
            {langData.profileSection.aboutMe.subTitle}
          </h4>
          </div>
          <p className="sm:text-[18px]  leading-relaxed">
            {langData.profileSection.aboutMe.text}
          </p>
        </article>
      </div>
    </section>
  );
}

export default Profile;

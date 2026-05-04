import { useLanguage } from "../contexts/LanguageContext";

import { BigBar } from "./icons/BigBar";

function Footer() {
  const { langData } = useLanguage();
  const { socials,text } = langData.footerSection;
  return (
    <footer className="flex gap-14 justify-center font-medium font-inter">
      <div className="relative text-3xl sm:text-[42px] max-w-lg text-end ">
        <BigBar className='w-68 z-10 h-4.5 top-8 right-14 absolute text-[#3968A0] ' />
        <div className="relative z-10">{text}</div>
        
      </div>
      <div className="flex flex-col text-[24px]">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" 
            className={`${social.name === "Github" ? "text-blue-600 hover:text-blue-800" : ""}
                ${social.name === "Linkedin" ? "text-[#0077B5] hover:opacity-80" : ""}
                ${social.name === "Kişisel Blog" || social.name === "Personal Blog" ? "text-[#AF0C48] hover:opacity-80" : ""}
                ${social.name === "E-posta" || social.name === "Email" ? "text-[#EA2678] hover:opacity-80" : ""}`}
          >
            {social.name}
          </a>
        ))}
        
      </div>
    </footer>
  );
}

export default Footer;

import { useLanguage } from "../contexts/LanguageContext";

function Footer() {
  const { langData } = useLanguage();
  const { socials,text } = langData.footerSection;
  return (
    <div className="flex gap-14 justify-center font-medium font-inter">
      <div className="text-[42px] max-w-lg text-end ">
        {text}
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
    </div>
  );
}

export default Footer;

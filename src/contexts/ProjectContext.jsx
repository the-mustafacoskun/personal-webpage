import axios from 'axios';
import { createContext, useContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext =createContext();

const GITHUB_USERNAME='the-mustafacoskun';

const getRepo=async()=>{
   try{
    const response = await axios.get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`
    );

    return response.data.filter((repo)=>!repo.fork).slice(0, 2).map((repo)=>({
        id:repo.id,
        name:repo.name,
        url:repo.html_url,
        description:repo.description,
        topics:repo.topics,
        website:repo.homepage,
        
    }));

    } catch(error){
        console.error('Veri çekilirken hata oluştu',error);
        return [];
    }
};
console.log(getRepo());
function ProjectContextProvider({children}) {
  return (
    <ProjectContext.Provider value={{getRepo}}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider
// eslint-disable-next-line react-refresh/only-export-components
export const useProjects =()=> useContext(ProjectContext);
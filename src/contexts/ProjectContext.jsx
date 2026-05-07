// ProjectContext.js
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext();

const GITHUB_USERNAME = 'the-mustafacoskun';

function ProjectContextProvider({ children }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`
        );

        const gitProjectsCleanData = response.data
          .filter((repo) => !repo.fork && repo.homepage !== null && repo.homepage !== "")
          .slice(0, 2)
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            topics: repo.topics,
            website: repo.homepage,
          }));

        setRepos(gitProjectsCleanData);
      } catch (error) {
        console.error('Veri çekilirken hata oluştu', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <ProjectContext.Provider value={{ repos, loading }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContextProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useProjects = () => useContext(ProjectContext);
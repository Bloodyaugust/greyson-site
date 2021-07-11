import React, { useRef, useState } from 'react';
import TagFilter from './TagFilter.jsx';
import styles from './Projects.module.css';

export default function Projects({
  projects,
  projectsByTag
}) {
  const [projectsFilter, setProjectsFilter] = useState([]);
  const tagRefs = Object.keys(projectsByTag).map(tag => useRef());

  const filteredProjects = projectsFilter.length ? projects.filter(project => {
    return projectsFilter.some(tag => projectsByTag[tag]?.some(proj => proj.astro.headers[0].slug === project.astro.headers[0].slug));
  }) : projects;

  function handleTagFilterChange() {
    setProjectsFilter(tagRefs.map(tagRef => tagRef.current.value).filter(value => value !== null));
  }

  return (
    <div id="react" className={styles['projects-container']}>
      <div className={styles['project-filters']}>
        {Object.keys(projectsByTag).map((tag, index) => {
          return (
            <TagFilter onChange={handleTagFilterChange} ref={tagRefs[index]} tag={tag} key={`project-filter-${tag}`} />
          );
        })}
      </div>
      <div className={styles['projects']}>
        {filteredProjects.map((project) => {
          return (
            <div className={styles['project-card']} dangerouslySetInnerHTML={{ __html: project.astro.html }} key={`project-card-${project.astro.headers[0].slug}`} />
          );
        })}
      </div>
    </div>
  );
}

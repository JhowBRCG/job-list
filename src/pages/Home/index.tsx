import { useState, useEffect } from "react";
import { JobCard, FilterBar } from "../../components";
import { type Jobs } from "../../Types/Jobs";
import originalJobs from "../../data/data.json";
import "./styles.scss";

export const Home = () => {
  const [jobs, setJobs] = useState<Jobs[]>(originalJobs);
  const [filters, setFilters] = useState<string[]>([]);

  const addTagToFilterBar = (tag: string) => {
    setFilters((currentFilters) => {
      if (!currentFilters.includes(tag)) {
        return [...currentFilters, tag];
      }
      return currentFilters;
    });
  };

  const removeTag = (tag: string) => {
    setFilters((currentFilters) =>
      currentFilters.filter((currentTag) => {
        return currentTag !== tag;
      })
    );
    setJobs(originalJobs);
  };

  const clearFilters = () => {
    setFilters([]);
    setJobs(originalJobs);
  };

  const filterJobs = () => {
    setJobs((currentJobs) => {
      return currentJobs.filter((job) => {
        const { languages, role, level, tools } = job;
        const tags: string[] = [role, level, ...languages, ...tools];
        return filters.every((filter) => tags.includes(filter));
      });
    });
  };

  useEffect(() => {
    filterJobs();
  }, [filters]);

  return (
    <main>
      {filters.length > 0 && (
        <FilterBar
          filters={filters}
          removeTag={removeTag}
          clearFilters={clearFilters}
        />
      )}
      <div className="job-list">
        {jobs.map((job: Jobs) => (
          <JobCard
            addTagToFilterBar={addTagToFilterBar}
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </main>
  );
};

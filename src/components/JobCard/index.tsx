import { type Jobs } from "../../Types/Jobs";
import { Tag } from "..";
import "./styles.scss";

type JobProps = {
  job: Jobs;
  addTagToFilterBar: (tag: string) => void;
};

export const JobCard = ({ job, addTagToFilterBar }: JobProps) => {
  const { languages, role, level, tools } = job;
  const tags: string[] = [role, level, ...languages, ...tools];

  return (
    <article className={job.isFeatured ? "job-card border-active" : "job-card"}>
      <div className="job-card__left">
        <div className="job-card__logo">
          <img src={job.logo} />
        </div>
        <div className="job-card__info">
          <div className="job-card__header">
            <h2 className="job-card__company-name">{job.company}</h2>
            {job.isNew && <p className="new">NEW!</p>}
            {job.isFeatured && <p className="featured">FEATURED</p>}
          </div>
          <h1 className="job-card__position">{job.position}</h1>
          <div className="job-card__date">
            <small>{job.postedAt}</small>
            <small>{job.contract}</small>
            <small>{job.location}</small>
          </div>
        </div>
      </div>
      <hr className="job-card__hr" />
      <div className="job-card__right">
        <ul className="job-card__tag-list">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag addTagToFilterBar={addTagToFilterBar} tag={tag} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

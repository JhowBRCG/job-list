import "./styles.scss";
import { Tag, TagRemove } from "..";

type FilterBarProps = {
  filters: string[];
  removeTag: (tag: string) => void;
  clearFilters: () => void;
};

export const FilterBar = ({
  filters,
  removeTag,
  clearFilters,
}: FilterBarProps) => {
  return (
    <div className="filter-bar">
      <ul className="filter-bar__tag-list">
        {filters.map((tag: string) => (
          <li key={tag}>
            <Tag tag={tag} />
            <TagRemove tag={tag} removeTag={removeTag} />
          </li>
        ))}
      </ul>
      <button
        className="filter-bar__clear-button"
        onClick={() => clearFilters()}
      >
        Clear
      </button>
    </div>
  );
};

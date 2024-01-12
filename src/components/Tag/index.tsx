import "./styles.scss";

type TagProps = {
  tag: string;
  addTagToFilterBar?: (tag: string) => void | undefined;
};

export const Tag = ({ tag, addTagToFilterBar }: TagProps) => {
  return (
    <button
      onClick={() => addTagToFilterBar && addTagToFilterBar(tag)}
      className="job-card__tag"
    >
      {tag}
    </button>
  );
};

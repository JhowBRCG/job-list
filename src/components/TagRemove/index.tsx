import "./styles.scss";
import IconRemove from "../../assets/images/icon-remove.svg";

type TagRemoveProps = {
  removeTag: (tag: string) => void;
  tag: string;
};

export const TagRemove = ({ removeTag, tag }: TagRemoveProps) => {
  return (
    <button className="tag-remove" onClick={() => removeTag(tag)}>
      <img src={IconRemove} alt="Remove icon" />
    </button>
  );
};

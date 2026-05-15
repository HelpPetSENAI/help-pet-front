import Searchicon from "../../../assets/icons/g3/search-icon.jsx";
import { Input, Inputtext } from "./style.js";

export default function InputComponent({
  input,
  onChange,
  onKeyDown,
  $status,
  onSearch,
}) {
  return (
    <Input $status={$status}>
      <div
        onClick={onSearch}>
        <Searchicon />
      </div>
      <Inputtext
        placeholder="O que está procurando?"
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </Input>
  );
}

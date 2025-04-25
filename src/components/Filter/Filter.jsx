import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
      placeholder="Find contact by name"
    />
  );
};

export default Filter;

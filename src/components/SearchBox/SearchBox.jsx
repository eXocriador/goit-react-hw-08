import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import styles from "./SearchBox.module.css";
import { TextField } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <TextField
        label="Search contacts"
        variant="outlined"
        size="small"
        fullWidth
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;

import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/reducer/filterListReducer';

export const FilterList = () => {
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const changeFilter = event => dispatch(filter(event.currentTarget.value));

  return (
    <label>
      <input
        placeholder="Find video by name"
        className="text-xl border-[2px] border-blue-300 p-[10px] w-full focus:outline-green-500"
        type="text"
        name="filter"
        value={filterValue}
        onChange={changeFilter}
      />
    </label>
  );
};

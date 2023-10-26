import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/reducer/filterListReducer';


export const FilterList = () => {
    const filterValue = useSelector(state => state.filter.value);
    const dispatch = useDispatch();
    const changeFilter = (event) => dispatch(filter(event.currentTarget.value));

       return (
         <label>
          Find video by name 
            <input type="text"
                name="filter"
                value={filterValue}
                onChange={changeFilter}
               
            />
        </label>
    )
}
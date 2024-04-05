import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice'
import { selectNameFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'



export default function SearchBox({ }) {

    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch()

    return (
        <div className={css.searchBoxWrapper}>
            <label className={css.searchBarLabel} htmlFor="searchBar">Find contacts by name</label>
            <input className={css.searchBarInput} type="text" id='searchBar'
                onChange={e => { 
                dispatch(changeFilter(e.target.value))
            }} />
        </div>
    )

}
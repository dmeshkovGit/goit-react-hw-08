import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice'
import { selectNameFilter } from '../../redux/filters/selectors'
import css from './SearchBox.module.css'
import { IoSearchCircle } from "react-icons/io5";


export default function SearchBox({ }) {

    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch()

    return (
        <div className={css.searchBoxWrapper}>
            <input className={css.searchBarInput} placeholder='Search' type="text" id='searchBar'
                onChange={e => { 
                dispatch(changeFilter(e.target.value))
                }} />
            <IoSearchCircle className={css.icon} />
        </div>
    )

}
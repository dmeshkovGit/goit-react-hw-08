import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css'

export default function Loader() {
    return (
  <ProgressBar
  visible={true}
  height="40"
  width="40"
  borderColor="black"
  color="#4fa94d"
  ariaLabel="progress-bar-loading"
  wrapperClass={css.wrapper}
/>)
}
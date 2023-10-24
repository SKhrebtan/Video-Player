import css from './reactplayer.module.css';
import ReactPlayer from 'react-player';

export const OnlineReactPlayer = ({ formValue }) => {

  return (
    <div className={css.playerWrapper}>
      <ReactPlayer
        className={css.reactPlayer}
        url={formValue ?? 'https://www.youtube.com/watch?v=_fhDVVfELsM&t=1387s'}
        controls
        width='640px'
        height='480px'
      />
    </div>
  )

}
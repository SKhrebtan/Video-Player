import css from './reactplayer.module.css';
import ReactPlayer from 'react-player';

export const OnlineReactPlayer = ({formValue}) => {

    return (
        <div className={css.playerWrapper}>
        <ReactPlayer
          className={css.reactPlayer}
          url={formValue}
          width='640px'
          height='480px'
        />
        </div>
    )
   
}
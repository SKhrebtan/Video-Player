import css from './reactplayer.module.css';
import ReactPlayer from 'react-player/youtube';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { errorVideo } from 'redux/reducer/currentVideoReducer';
// function useLocalStorage(key, defaultValue) {
//   const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)
  
//   useEffect(() => {
//     return window.localStorage.setItem(key, JSON.stringify(state))
//   }, [state, key])
// return [state, setState]
// }
// const [video, setVideo] = useLocalStorage('video', 'https://www.youtube.com/watch?v=_fhDVVfELsM&t=1387s');
//  useEffect(() => {
//     if (!formValue) return;
//     setVideo(formValue)
//  }, [formValue, setVideo])
  
export const OnlineReactPlayer = ({ formValue }) => {
  
  const dispatch = useDispatch();
   const currentVideo = useSelector(state => state.video);

    const playerConfig = {
    youtubePlayerVars: {
      origin: 'https://www.youtube.com',
    },
  };
  useEffect(() => {
      if (currentVideo && !ReactPlayer.canPlay(currentVideo.url)) {
      dispatch(errorVideo(false))
      } else (dispatch(errorVideo(true)))
  },[currentVideo, dispatch])

  return (
    <div className={css.playerWrapper}>
      {!ReactPlayer.canPlay(currentVideo.url) && <div>Виникла помилка під час відтворення відео.</div>}
      {ReactPlayer.canPlay(currentVideo.url) && <ReactPlayer
        playing={true}
        className={css.reactPlayer}
        url={currentVideo.url ?? formValue}
        controls
        config={playerConfig}
       
         width='240px'
        height='180px'
      />}
    </div>
  )

}
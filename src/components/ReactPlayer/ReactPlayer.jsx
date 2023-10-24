import css from './reactplayer.module.css';
import ReactPlayer from 'react-player/youtube';
import { useState, useEffect } from 'react';
function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)
  
  useEffect(() => {
    return window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])
return [state, setState]
}
export const OnlineReactPlayer = ({ formValue }) => {
  const [video, setVideo] = useLocalStorage('video', 'https://www.youtube.com/watch?v=_fhDVVfELsM&t=1387s');
  const [videoError, setVideoError] = useState(null);
    const playerConfig = {
    youtubePlayerVars: {
      origin: 'https://www.youtube.com',
    },
  };
  const handleError = (error) => {
    console.log(error);
    console.log(error.message)
    setVideoError(error)
  }
  useEffect(() => {
    if (!formValue) return;
    setVideo(formValue)
  }, [formValue,setVideo])
  return (
    <div className={css.playerWrapper}>
      {videoError && <div>Виникла помилка під час відтворення відео.</div>}
      <ReactPlayer
        playing={true}
        className={css.reactPlayer}
        url={formValue ?? video}
        controls
        config={playerConfig}
        onError={()=>handleError}
        width='100%'
        height='640px'
      />
    </div>
  )

}
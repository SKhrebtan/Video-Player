import ReactPlayer from 'react-player/youtube';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { errorVideo } from 'redux/reducer/currentVideoReducer';
export const OnlineReactPlayer = ({ formValue }) => {
  const dispatch = useDispatch();
  const currentVideo = useSelector(state => state.video);
  const { items } = useSelector(state => state.videoList);
  const playList = items.map(item => item.url);
  const playerConfig = {
    youtubePlayerVars: {
      origin: 'https://www.youtube.com',
      controls: 1,
      autoplay: true,
    },
  };

  useEffect(() => {
    if (
      (currentVideo || playList) &&
      ReactPlayer.canPlay(currentVideo.url || playList)
    ) {
      dispatch(errorVideo(false));
    } else dispatch(errorVideo(true));
  }, [currentVideo, playList, dispatch]);

  return (
    <div className="max-w-[720px] h-[480px] laptop:max-w-[1100px] laptop:h-[600px]">
      {!ReactPlayer.canPlay(currentVideo.url || playList) && (
        <div>Виникла помилка під час відтворення відео.</div>
      )}
      {ReactPlayer.canPlay(currentVideo.url || playList) && (
        <ReactPlayer
          playing={true}
          url={currentVideo.url || playList}
          // url={currentVideo.url ?? formValue}
          controls
          config={playerConfig}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

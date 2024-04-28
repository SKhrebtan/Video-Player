import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { updateVideo } from 'redux/reducer/currentVideoReducer';
import { deleteVideo } from 'redux/reducer/videoListReducer';
export const ListVideo = () => {
  const { items } = useSelector(state => state.videoList);
  const filter = useSelector(state => state.filter.value);
  const currentVideo = useSelector(state => state.video);
  const dispatch = useDispatch();
  const playList = items.map(item => item.url);
  const normalizedFilter = filter.toLowerCase();

  const filteredVideos = useMemo(() => {
    if (items) {
      return items.filter(video =>
        video.name.toLowerCase().includes(normalizedFilter)
      );
    }
  }, [normalizedFilter, items]);

  const btnStyles =
    'w-[104px] rounded-md bg-blue-200 border-[1px] border-blue-500 p-[10px] w-[100px] hover:border-transparent hover:bg-blue-500 hover:text-white transition-all duration-300';
  const btnActiveStyles =
    'w-[104px] rounded-md bg-green-200 border-[1px] border-green-500 p-[10px] w-[100px] hover:border-transparent hover:bg-green-500 hover:text-white transition-all duration-300';
  const btnDeleteStyles =
    'w-[104px] rounded-md bg-red-200 border-[1px] border-red-500 p-[10px] w-[100px] hover:border-transparent hover:bg-red-500 hover:text-white transition-all duration-300';
  return (
    <ul className="flex flex-col gap-[10px]">
      <button
        className={
          Array.isArray(currentVideo.url) ? btnActiveStyles : btnStyles
        }
        type="button"
        onClick={() => dispatch(updateVideo(playList))}
      >
        Play the list
      </button>
      {filteredVideos.map(item => {
        return (
          <li
            key={item.id}
            className="flex flex-col desktop:flex-row items-center max-w-[720px] justify-between"
          >
            <p>{item.name}</p>
            <div className="flex gap-[10px]">
              <button
                className={
                  currentVideo.url &&
                  (item.url === currentVideo.url ? btnActiveStyles : btnStyles)
                }
                type="button"
                onClick={() => dispatch(updateVideo(item.url))}
              >
                Play
              </button>
              <button
                className={btnDeleteStyles}
                type="button"
                onClick={() => dispatch(deleteVideo(item.id))}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

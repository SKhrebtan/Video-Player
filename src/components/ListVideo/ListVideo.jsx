import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { updateVideo } from "redux/reducer/currentVideoReducer";
import { deleteVideo } from "redux/reducer/videoListReducer";
export const ListVideo = () => {
    const { items } = useSelector(state => state.videoList);
    const filter = useSelector(state=>state.filter.value)
    const dispatch = useDispatch();

      const normalizedFilter = filter.toLowerCase();
  
  const filteredVideos = useMemo(() => {
    if (items) { 
    return items.filter(video =>
      video.name.toLowerCase().includes(normalizedFilter))
  }
},[normalizedFilter, items])
    return (
        <ul>
            {filteredVideos.map(item =>
                <li key={item.id}>
                    <p>{item.name}</p>
                    <button type='button' onClick={()=>dispatch(updateVideo(item.url))}>Програти</button>
                    <button type='button' onClick={() =>dispatch(deleteVideo(item.id))}>Видалити</button>
                </li>)}
        </ul>
    )
}
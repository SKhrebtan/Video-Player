import { useSelector, useDispatch } from "react-redux"
import { updateVideo } from "redux/reducer/currentVideoReducer";
import { deleteVideo } from "redux/reducer/videoListReducer";
export const ListVideo = () => {
    const {items} = useSelector(state => state.videoList);
    const dispatch = useDispatch();
    return (
        <ul>
            {items.map(item =>
                <li key={item.id}>
                    <p>{item.name}</p>
                    <button type='button' onClick={()=>dispatch(updateVideo(item.url))}>Програти</button>
                    <button type='button' onClick={() =>dispatch(deleteVideo(item.id))}>Видалити</button>
                </li>)}
        </ul>
    )
}
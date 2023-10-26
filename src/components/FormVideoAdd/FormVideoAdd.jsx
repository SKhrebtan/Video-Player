import { addVideo } from "redux/reducer/videoListReducer";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
export const FormVideoAdd = () => {
    const dispatch = useDispatch();
    const currentVideo = useSelector(state => state.video);
    const videos = useSelector(state => state.videoList);
        
    const handleSubmit = e => {
        e.preventDefault();
        const newVideo = {
            id: nanoid(),
            name: e.target.elements.name.value,
            url: currentVideo.url,
        }
         if (videos.items.find(video => video.url === newVideo.url || video.name === newVideo.name)) {
        return alert('ay, такий контакт вже існує')
      }
        dispatch(addVideo(newVideo))
        e.target.reset();
}
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Введіть назву
                <input type='text' name="name"/>
            </label>
            <button type='submit'>Додати</button>
        </form>
    )
}
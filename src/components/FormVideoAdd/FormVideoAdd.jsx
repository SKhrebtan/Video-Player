import { addVideo } from 'redux/reducer/videoListReducer';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
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
    };
    if (
      videos.items.find(
        video => video.url === newVideo.url || video.name === newVideo.name
      )
    ) {
      return alert('ay, такий контакт вже існує');
    }
    dispatch(addVideo(newVideo));
    e.target.reset();
  };
  return (
    <form
      className="max-w-[720px] flex gap-[20px] justify-between"
      onSubmit={handleSubmit}
    >
      <label className="border-1 border-blue-100 grow">
        <input
          placeholder="Type name"
          className="text-xl border-[2px] border-blue-300 p-[10px] w-full focus:outline-green-500"
          type="text"
          name="name"
        />
      </label>
      <button
        className="rounded-md bg-blue-200 border-[1px] border-blue-500 p-[10px] w-[100px] hover:border-transparent hover:bg-blue-500 hover:text-white transition-all duration-300"
        type="submit"
      >
        Додати
      </button>
    </form>
  );
};

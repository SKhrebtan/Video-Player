import { useDispatch } from 'react-redux';
import { loadNewVideo } from 'redux/reducer/currentVideoReducer';
export const Form = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loadNewVideo(e.target.elements.video.value));
    e.target.reset();
  };

  return (
    <form
      className="max-w-[720px] flex gap-[20px] justify-between laptop:max-w-[1100px]"
      onSubmit={handleSubmit}
    >
      <label className="border-1 border-blue-100 grow" name="video">
        <input
          className="text-xl border-[2px] border-blue-300 p-[10px] w-full focus:outline-green-500"
          name="video"
          type="text"
        />
      </label>
      <button
        className="rounded-md bg-blue-200 border-[1px] border-blue-500 p-[10px] w-[100px] hover:border-transparent hover:bg-blue-500 hover:text-white transition-all duration-300"
        type="submit"
      >
        Load
      </button>
    </form>
  );
};

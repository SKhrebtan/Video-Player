import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { updateVideo } from 'redux/reducer/currentVideoReducer';
import { deleteVideo } from 'redux/reducer/videoListReducer';
import { useModal } from 'helpers/useModal';
import { DeleteModal } from './DeleteModal';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const ListVideo = () => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const [id, setId] = useState(null);
  const { items } = useSelector(state => state.videoList);
  const filter = useSelector(state => state.filter.value);
  const currentVideo = useSelector(state => state.video);
  const dispatch = useDispatch();
  const playList = items.map(item => item.url);
  const normalizedFilter = filter.toLowerCase();
  const handleDelete = id => {
    dispatch(deleteVideo(id));
  };
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
    <>
      <button
        className={
          Array.isArray(currentVideo.url) ? btnActiveStyles : btnStyles
        }
        type="button"
        onClick={() => dispatch(updateVideo(playList))}
      >
        Play the list
      </button>
      <ul className="flex flex-col gap-[10px] laptop:max-w-[1100px] laptop:flex-row laptop:flex-wrap">
        {filteredVideos.map((item, index) => (
          <InView key={id}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? '-150%' : '150%' }}
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? '0' : index % 2 === 0 ? '-150%' : '150%',
                }}
                transition={{ duration: 1.25 }}
              >
                <li
                  key={item.id}
                  className="flex flex-col desktop:flex-row items-center max-w-[720px] justify-between laptop:max-w-[100%] laptop:w-[523px]"
                >
                  <p>{item.name}</p>
                  <div className="flex gap-[10px]">
                    <button
                      className={
                        currentVideo.url &&
                        (item.url === currentVideo.url
                          ? btnActiveStyles
                          : btnStyles)
                      }
                      type="button"
                      onClick={() => dispatch(updateVideo(item.url))}
                    >
                      Play
                    </button>
                    <button
                      className={btnDeleteStyles}
                      type="button"
                      onClick={() => {
                        setId(item.id);
                        handleOpenModal();
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </motion.div>
            )}
          </InView>
        ))}
        <DeleteModal
          id={id}
          handleDelete={handleDelete}
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          btnStyles={btnStyles}
          btnDeleteStyles={btnDeleteStyles}
        />
      </ul>
    </>
  );
};

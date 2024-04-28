import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useState, useCallback } from 'react';
import { updateVideo } from 'redux/reducer/currentVideoReducer';
import { updateVideoList } from 'redux/reducer/videoListReducer';
import { deleteVideo } from 'redux/reducer/videoListReducer';
import { useModal } from 'helpers/useModal';
import { DeleteModal } from './DeleteModal';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useMediaObserver } from 'helpers/useObserver';
import SortableItem from './SortableItem';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import Item from './Item';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
export const ListVideo = () => {
  const screen = useMediaObserver();
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 1 },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 250,
        tolerance: 10,
      },
    })
  );
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
  const [filteredVideos, setFilteredVideos] = useState([]);
  useMemo(() => {
    if (items) {
      const videos = items.filter(video =>
        video.name.toLowerCase().includes(normalizedFilter)
      );

      setFilteredVideos(videos);
    }
  }, [normalizedFilter, items]);

  const btnStyles =
    'w-[104px] rounded-md bg-blue-200 border-[1px] border-blue-500 p-[10px] w-[60px] mobile:w-[100px] hover:border-transparent hover:bg-blue-500 hover:text-white transition-all duration-300';
  const btnActiveStyles =
    'w-[104px] rounded-md bg-green-200 border-[1px] border-green-500 p-[10px] w-[60px] mobile:w-[100px] hover:border-transparent hover:bg-green-500 hover:text-white transition-all duration-300';
  const btnActiveStyles2 =
    'w-[104px] rounded-md bg-green-200 border-[1px] border-green-500 p-[10px] w-[100px] hover:border-transparent hover:bg-green-500 hover:text-white transition-all duration-300';
  const btnDeleteStyles =
    'w-[104px] rounded-md bg-red-200 border-[1px] border-red-500 p-[10px] w-[60px] mobile:w-[100px] hover:border-transparent hover:bg-red-500 hover:text-white transition-all duration-300';

  const handleDragStart = useCallback(event => {
    console.log(event.active.id);
    setActiveId(event.active.id);
  }, []);
  const handleDragEnd = useCallback(
    event => {
      const { active, over } = event;
      if (active.id !== over?.id) {
        console.log(active);
        const oldIndex = filteredVideos.findIndex(
          filteredVideos => filteredVideos.id === active.id
        );
        const newIndex = filteredVideos.findIndex(
          filteredVideos => filteredVideos.id === over?.id
        );
        const updatedVideos = arrayMove(filteredVideos, oldIndex, newIndex);
        console.log(updatedVideos);
        setFilteredVideos(updatedVideos);
        dispatch(updateVideoList(updatedVideos));
      }

      setActiveId(null);
    },
    [dispatch, filteredVideos]
  );
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <>
      <button
        className={`${
          Array.isArray(currentVideo.url) ? btnActiveStyles2 : btnStyles
        } w-[100px]`}
        type="button"
        onClick={() => dispatch(updateVideo(playList))}
      >
        Play the list
      </button>
      {screen ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext
            items={filteredVideos}
            strategy={verticalListSortingStrategy}
          >
            <ul className="flex flex-col gap-[10px] overflow-hidden p-[5px]">
              {filteredVideos.map((item, index) => (
                <InView key={item.id}>
                  {({ ref, inView }) => (
                    <motion.div
                      ref={ref}
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? '-75%' : '75%',
                      }}
                      animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? '0' : index % 2 === 0 ? '-75%' : '75%',
                      }}
                      transition={{ duration: 1.25 }}
                    >
                      <SortableItem id={item.id} laptop={screen}>
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
                      </SortableItem>
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
          </SortableContext>
          <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
            {activeId ? (
              <Item id={activeId} isDragging>
                {filteredVideos.find(item => item.id === activeId).name}
              </Item>
            ) : null}
          </DragOverlay>
        </DndContext>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext
            items={filteredVideos}
            strategy={rectSortingStrategy}
          >
            <ul className="flex flex-col gap-[10px] laptop:max-w-[1100px] laptop:flex-row laptop:flex-wrap">
              {filteredVideos.map((item, index) => (
                <InView key={item.id}>
                  {({ ref, inView }) => (
                    <motion.div
                      ref={ref}
                      initial={{
                        opacity: 0,
                        x: index % 2 === 0 ? '-90%' : '90%',
                      }}
                      animate={{
                        opacity: inView ? 1 : 0,
                        x: inView ? '0' : index % 2 === 0 ? '-90%' : '90%',
                      }}
                      transition={{ duration: 1.25 }}
                    >
                      <SortableItem id={item.id} laptop={screen}>
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
                      </SortableItem>
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
          </SortableContext>
          <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
            {activeId ? (
              <Item id={activeId} isDragging>
                {filteredVideos.find(item => item.id === activeId).name}
              </Item>
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </>
  );
};

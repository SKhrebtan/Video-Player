import { OnlineReactPlayer } from './ReactPlayer/ReactPlayer';
import { Form } from './Form/Form';
import { FormVideoAdd } from './FormVideoAdd/FormVideoAdd';
import { ListVideo } from './ListVideo/ListVideo';
import { FilterList } from './FilterList/FilterList';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './App.module.css';

export const App = () => {
  const [formValue, setFormValue] = useState(null);
  const { items } = useSelector(state => state.videoList);
  const videoError = useSelector(state => state.video.error);
  const handleFormValue = value => {
    setFormValue(value);
  };
  return (
    <div className="flex flex-col mx-auto max-w-[720px] gap-[20px] py-10">
      <h1 className={css.title}>Online Video Player</h1>
      <Form onSubmit={handleFormValue} />
      <OnlineReactPlayer formValue={formValue} />
      {videoError && <FormVideoAdd />}
      {items.length > 0 && <FilterList />}
      <ListVideo />
    </div>
  );
};

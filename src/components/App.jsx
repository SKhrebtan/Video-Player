import { OnlineReactPlayer } from "./ReactPlayer/ReactPlayer";
import { Form } from "./Form/Form";
import { FormVideoAdd } from "./FormVideoAdd/FormVideoAdd";
import { ListVideo } from "./ListVideo/ListVideo";
import { useState } from "react";
import { useSelector } from "react-redux";
import css from './App.module.css'

export const App = () => {
  const [formValue, setFormValue] = useState(null);
const videoError = useSelector(state => state.video.error);
  const handleFormValue = value => {
setFormValue(value)
  }
  return (
    <div className={css.mainDiv}>
      <h1 className={css.title}>Online Video Player</h1>
      <Form onSubmit={handleFormValue} />
      <OnlineReactPlayer formValue={formValue} />
      {videoError && <FormVideoAdd />}
      <ListVideo/>
    </div>
  );
};

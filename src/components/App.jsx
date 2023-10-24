import { OnlineReactPlayer } from "./ReactPlayer/ReactPlayer";
import { Form } from "./Form/Form";
import { useState } from "react";
import css from './App.module.css'

export const App = () => {
  const [formValue, setFormValue] = useState(null);

  const handleFormValue = value => {
setFormValue(value)
  }
  return (
    <div className={css.mainDiv}>
      <h1 className={css.title}>Online Video Player</h1>
      <Form onSubmit={handleFormValue} />
      <OnlineReactPlayer formValue={formValue} />
    </div>
  );
};

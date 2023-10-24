import { OnlineReactPlayer } from "./ReactPlayer/ReactPlayer";
import { Form } from "./Form/Form";
import { useState } from "react";

export const App = () => {
  const [formValue, setFormValue] = useState(null);

  const handleFormValue = value => {
setFormValue(value)
  }
  return (
    <div>
      <h1>Online Video Player</h1>
      <Form onSubmit={handleFormValue} />
      <OnlineReactPlayer formValue={formValue} />
    </div>
  );
};

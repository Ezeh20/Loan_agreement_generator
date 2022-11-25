import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav.component";
import Homepage from "./Components/Homepage/homepage.component";
import Agree from "./Routes/Agreements/Agreements.component";
import Condition from "./Components/Agreement-options/text.component";
import Condition2 from "./Components/Agreement-options/text2.component";
import Form from "./Components/Form/form.component";
/**
 *
 * State needs to be lifted up so it can be shared between components
 */
function App() {
  const [form, setForm] = useState({});

  //store the mood input state in localStorage because react stores data in memory and returns to default
  //on page refresh

  //also store the form inputs in localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("form"));
    if (data !== null) setForm((pre) => ({ ...pre, ...data }));
  }, []);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Homepage />} />
        <Route
          path="/form"
          element={
            <Form
              form={setForm}
              bs={form}
            />
          }
        />
        <Route
          path="/generate"
          element={<Agree data={form}/>}
        />
        <Route path="/con1" element={<Condition />} />
        <Route path="/con2" element={<Condition2 />} />
      </Route>
    </Routes>
  );
}

export default App;

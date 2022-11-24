import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav.component";
import Homepage from "./Components/Homepage/homepage.component";
import Agree from "./Routes/Agreements/Agreements.component";
import Condition from "./Components/Agreement-options/text.component";
import Condition2 from "./Components/Agreement-options/text2.component";
import Form from "./Components/Form/form.component";

function App() {

  const [form, setForm] = useState({});
  const [mood, setMood] = useState("")

  useEffect(()=>{
    const data = localStorage.getItem("mood")
    if (data !== null) setMood(pre=>({...pre, ...data}))
  },[])

  useEffect(()=>{
    localStorage.setItem("mood", (mood))
  },[mood])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("form"))
    if (data !== null) setForm((pre)=>({...pre, ...data}));
  }, []);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Homepage />} />
        <Route path="/form" element={<Form  form={setForm} bs={form}  mood={setMood} />} />
        <Route path="/generate" element={<Agree cc={form} muu={mood} />} />
        <Route path="/con1" element={<Condition />} />
        <Route path="/con2" element={<Condition2 />} />
      </Route>
    </Routes>
  );
}

export default App;

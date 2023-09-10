import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchWords } from "./features/words/wordsSlice";
import  Layout  from './layout'; 
import  Wordslist  from "./features/words/wordslist";
import  AddWord  from "./features/words/addWord";
import  EditWord  from "./features/words/editWord";
import  WordPage  from "./features/words/wordPage";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchWords());
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Wordslist/>}/>               {/* pathe: "/" */}
        <Route path=":Word" element={<WordPage/>}/>         {/* pathe: "/:Word" */}
        <Route path="edit/:Word" element={<EditWord/>}/>   {/* pathe: "/edit/:Word" */}
        <Route path="addWord" element={<AddWord/>}/>        {/* pathe: "/addWord" */}
      </Route>
    </Routes>
  );
}

export default App;


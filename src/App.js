import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { layout } from './layout.js'; 
import { wordslist } from "./features/words/wordslist";
import { addWord } from "./features/words/addWord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<layout/>}>
        <Route index element={<wordslist/>}/>               {/* pathe: "/" */}
        <Route path=":Word" element={<wordPage/>}/>         {/* pathe: "/:Word" */}
        <Route path="edit/:Word" element={<wordslist/>}/>   {/* pathe: "/edit/:Word" */}
        <Route path="addWord" element={<addWord/>}/>        {/* pathe: "/addWord" */}
      </Route>
    </Routes>
  );
}

export default App;

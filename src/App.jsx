import {useState} from "react";
import ListInput from "./ListInput";
import ToDoItem from "./ToDoItem";


const App = () => {

  let [list, updateList] = useState([]);

  const addToList = (listItem) => {
    updateList([...list, listItem])
  }

  const deleteItem = (listItem) => {
      updateList(list = list.filter((item) => item !== listItem))
  }

  return (
      <>
      <ListInput addToList={addToList}/>
        {list.map((item, i) => <ToDoItem key={i} item={item} list={list} deleteItem={deleteItem}/>)}
      </>

  );
};

export default App;

import {useState} from "react";
import ListInput from "./ListInput";
import ToDoItem from "./ToDoItem";


const App = () => {

    let [list, updateList] = useState([]);
    const [nextId, setNextId] = useState(0);

    const addToList = (listItem) => {
        updateList([...list, {...listItem, id: nextId}]);
        setNextId(nextId + 1)
    }


    const deleteItem = (listItem) => {
        updateList(list = list.filter((item) => item !== listItem))
    }

    const updateItem = (updatedItem) => {
        const newList = list.map((item) => {
            if (item.id === updatedItem.id) {
                return updatedItem
            }
            return item
        })
        updateList(newList)
    }


    return (
        <>
            <ListInput addToList={addToList}/>
            {list.map((item, i) => <ToDoItem updateItem={updateItem} key={i} item={item} deleteItem={deleteItem}/>)}
        </>

    );
};

export default App;

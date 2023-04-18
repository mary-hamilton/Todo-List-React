import {useEffect, useState} from "react";
import ListInput from "./ListInput";
import ToDoItem from "./ToDoItem";
import axios from "axios";
import AddList from "./AddList";
import ListSelector from "./ListSelector";


const App = () => {

    let [listOfLists, updateListOfLists] = useState([]);

    const addToListOfLists = (newList) => {
        axios({
            url: `${baseUrl}/lists.json`,
            method: 'post',
            data: newList,
        }).then(getLists)
    }
    const getLists = () => {
        return axios({
            method: 'get',
            url: `${baseUrl}/lists.json`
        }).then(({ data }) => {
            updateListOfLists(turnDataObjectIntoArray(data))
        })
    }

    let [currentList, setCurrentList] = useState("");



    const baseUrl = `https://todo-list-project-fb3fe-default-rtdb.europe-west1.firebasedatabase.app`;

    useEffect(() => {
        getList(); getLists()
    }, []);


    const turnDataObjectIntoArray = (data) => data
            ? Object.keys(data).map((key) => ({...data[key], id: key}))
            : []

    let [list, updateList] = useState([]);


    const addToList = (listItem) => {
        addItemToList(listItem)
    }

    const addItemToList = (listItem) => {
        axios({
            url: `${baseUrl}/lists/${currentList.id}/items.json`,
            method: 'post',
            data: listItem,
        }).then(getList)
    }

    const getList = () => {
        return axios({
            method: 'get',
            url: `${baseUrl}/lists/${currentList.id}/items.json`
        }).then(({ data }) => {
            updateList(turnDataObjectIntoArray(data))
        })
    }


    const deleteItem = ( listItem ) => {
        return axios({
            method: 'delete',
            url: `${baseUrl}/lists/${currentList.id}/items/${listItem.id}.json`
        }).then(getList);
    }

    const updateItem = ({ checked, id }) => {

        return axios ({
            method: 'patch',
            url: `${baseUrl}/items/${id}.json`,
            data: {checked}
        }).then(getList);
    }


    return (
        <>
            <AddList addToListOfLists={addToListOfLists}/>
            <ListSelector listOfLists={listOfLists} currentList={currentList} setCurrentList={setCurrentList} getList={getList}/>
            <ListInput addToList={addToList}/>
            {list.map((item, i) => <ToDoItem updateItem={updateItem} key={i} item={item} deleteItem={deleteItem}/>)}
        </>

    );
};

export default App;

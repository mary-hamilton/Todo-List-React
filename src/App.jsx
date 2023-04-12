import {useEffect, useState} from "react";
import ListInput from "./ListInput";
import ToDoItem from "./ToDoItem";
import axios from "axios";


const App = () => {

    const baseUrl = `https://todo-list-project-fb3fe-default-rtdb.europe-west1.firebasedatabase.app`;

    useEffect(() => {
        getList()
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
            url: `${baseUrl}/items.json`,
            method: 'post',
            data: listItem,
        }).then(getList)
    }

    const getList = () => {
        return axios({
            method: 'get',
            url: `${baseUrl}/items.json`
        }).then(({ data }) => {
            updateList(turnDataObjectIntoArray(data))
        })
    }


    const deleteItem = ( listItem ) => {
        return axios({
            method: 'delete',
            url: `${baseUrl}/items/${listItem.id}.json`
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
            <ListInput addToList={addToList}/>
            {list.map((item, i) => <ToDoItem updateItem={updateItem} key={i} item={item} deleteItem={deleteItem}/>)}
        </>

    );
};

export default App;

import {Button, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const ListSelector = ( {listOfLists, currentList, setCurrentList} ) => {

    const [selectedList, setSelectedList] = useState(currentList)
    const changeList = (e) => {
        setSelectedList(e.target.value);

    }

    const handleSubmit = () => {
        setCurrentList(selectedList)
        console.log(currentList)
    }


    return (
        listOfLists.length > 0 &&
    <>
        <Select
            onChange={changeList}
            value={selectedList}
        >
            {listOfLists.map((list, i) => <MenuItem key={i} value={list}>{list.name}</MenuItem>)}
        </Select>
        <Button onClick={handleSubmit}>Select List</Button>
    </>
    )
}

export default ListSelector;
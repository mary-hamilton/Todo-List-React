import {Button, TextField} from "@mui/material";
import {useState} from "react";

const AddList = ( {addToListOfLists} ) => {

    let [newListValue, setNewListValue] = useState(
        {
            name: "",
            items: [],
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        addToListOfLists(newListValue);
    }

    const handleChange = (e) => {
        setNewListValue(
            {
                ...newListValue,
                name: e.target.value,
            }
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                name="listOfListsInput"
                label="Add List:"
                value={newListValue.name}
                onChange={handleChange}

            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default AddList;
import {Button, Container, TextField} from "@mui/material";
import {useState} from "react";

const ListInput = ( { addToList } ) => {

let [ inputValue, setInputValue ] = useState("");

const handleChange = (e) => {
    setInputValue(inputValue = e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    addToList(inputValue);
}


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                name="listInput"
                label="Add Item:"
                value={inputValue}
                onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default ListInput;
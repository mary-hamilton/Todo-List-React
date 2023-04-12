import {Button, TextField} from "@mui/material";
import {useState} from "react";

const ListInput = ( { addToList } ) => {

let [ inputValue, setInputValue ] = useState(
    {
    text: "",
    checked: false,
}
);

const handleChange = (e) => {
    setInputValue({
        ...inputValue,
        text: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    addToList(inputValue);
    setInputValue( {
        ...inputValue,
        text: "",
    })
}


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                name="listInput"
                label="Add Item:"
                value={inputValue.text}
                onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default ListInput;
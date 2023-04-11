import {Button, Checkbox} from "@mui/material";


const ToDoItem = ( {item, deleteItem} ) => {

    const deleteThisItem = () => {
        deleteItem(item);
    }

    return (
        <div>
            <Checkbox/>
              <p>{item}</p>
            <Button onClick={deleteThisItem}>Delete</Button>
        </div>
        )
}

export default ToDoItem;
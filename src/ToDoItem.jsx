import {Button, Card, Checkbox, Typography} from "@mui/material";
import { css } from '@emotion/css'



const ToDoItem = ( {item, deleteItem, updateItem} ) => {

    let cardCSS = css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid black;
      margin: 5px;
      background-color: ${item.checked ? "green" : "auto"};
      .MuiTypography-root {
        text-decoration: ${item.checked ? "line-through" : "auto"}
      }
      .MuiSvgIcon-root {
        color: ${item.checked ? "yellow" : "red"}
      }
      .MuiButtonBase-root {
        color: ${item.checked ? "yellow" : "red"}
      }
        `




    const deleteThisItem = () => {
        deleteItem(item);
    }

    const handleChange = () => {
        updateItem({
            ...item,
            checked: !item.checked,
        })
    }


    return (
            <Card className={cardCSS}>
                <Checkbox onChange={handleChange} checked={item.checked}/>
                <Typography>{item.text.toUpperCase()}</Typography>
                <Button onClick={deleteThisItem}>Delete</Button>
            </Card>
        )

}

export default ToDoItem;
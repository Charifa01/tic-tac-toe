import { Dispatch, SetStateAction } from 'react';
import styles from '../page.module.css'

type CellProps ={
    go : number,
    setGo :  Dispatch<SetStateAction<number>>,
    id : number,
    cell : string,
    cells : string[],
    setCells :Dispatch<SetStateAction<string[]>>,
    winingMessage : string
}
export default function Cell({go , setGo, id ,cell, cells, setCells,winingMessage} : CellProps){
    const handleClick = (e)=>{
        if(winingMessage){
            return;
        }
        const NotTaken = !cells[id];
        if(NotTaken){
            if(go === 0){
                handleCellsChange('circle')
                setGo(1)
            }else if(go === 1){
                handleCellsChange('cross')
                setGo(0)
            }
        }
    }
    const handleCellsChange = (cellToChange :string)=>{
        let CopyCells = [...cells];
        CopyCells[id]= cellToChange;
        setCells(CopyCells);

    }
    return(
        <div className={styles.square} onClick={handleClick}>
            <div className={cell}>{cell ? (cell === 'circle' ? 'O' : 'X') : ''} </div>
        </div>
    )
}
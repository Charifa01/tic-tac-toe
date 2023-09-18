'use client'
import { useEffect, useState } from 'react'
import Cell from './component/cell'
import styles from './page.module.css'   

export default function Home() {
  const [cells , setCells] = useState(['','','','','','','','','']);
  const [go ,setGo] = useState(Math.round(Math.random()));
  const [winingMessage, setWiningMessage] = useState('');
  const winingCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const TheTurn =()=>{
    if(go === 1){
      return "Its now Cross turn !"
    }else if( go === 0){
      return "Its now Circle turn !"
    }
  }
  useEffect(()=>{
    winingCombos.forEach((combo)=>{
      const circleWins = combo.every((a)=> cells[a] === 'circle');
      const crossWins = combo.every((a)=> cells[a] === 'cross');
      if(circleWins){
        setWiningMessage('Circle is Wins : )')
      }else if(crossWins){
        setWiningMessage('Cross is Wins : )')
      }
    })
  },[cells])

  useEffect(()=>{
    if(cells.every((cell)=> cell !== '' && !winingMessage)){
      setWiningMessage('Draw !!')
    }
  },[cells,winingMessage])

  return (
    <main className={styles.main}>
      <div className={styles.gameboard}>
        {cells.map((cell,index)=> (
          <Cell cell={cell} 
          id={index} 
          go={go} 
          setGo={setGo}
          key={index} 
          cells={cells} 
          setCells={setCells}
          winingMessage={winingMessage}
          />
        ))}
      </div>
      <div className={styles.turn}>{winingMessage} </div>
     {!winingMessage && <div className={styles.turn}>{TheTurn()}</div>}
    </main>
  )
}

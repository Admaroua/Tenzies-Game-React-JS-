import React from 'react'
import {nanoid} from "nanoid"
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const faces=[
        // 1
        [<div key={nanoid()} className='dot center middle'></div>],
        // 2
        [<div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot left bottom'></div>],
        // 3
        [<div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot center middle'></div>,
        <div key={nanoid()} className='dot left bottom'></div>],
        // 4
        [<div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot bottom right'></div>,
        <div key={nanoid()} className='dot left top'></div>,
        <div key={nanoid()} className='dot left bottom'></div>],
        // 5
        [<div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot bottom right'></div>,
        <div key={nanoid()} className='dot center middle'></div>,
        <div key={nanoid()} className='dot left top'></div>,
        <div key={nanoid()} className='dot left bottom'></div>],
        // 6
        [<div key={nanoid()} className='dot top right'></div>,
        <div key={nanoid()} className='dot bottom right'></div>,
        <div key={nanoid()} className='dot center right'></div>,
        <div key={nanoid()} className='dot center left'></div>,
        <div key={nanoid()} className='dot left top'></div>,
        <div key={nanoid()} className='dot left bottom'></div>]
    ];
    let face =faces[props.value-1]
    return (
        <div className="die" style={styles} onClick={props.held}>
            {face}
        </div>
    )
}
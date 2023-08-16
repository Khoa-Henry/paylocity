import React from 'react';
import {Link} from 'react-router-dom'

export default function ToDO(props) {


    const addToList = () => {
        if(props.userInput !== ''){
            if(props.items.find(i=>i.name == props.userInput)){
                return
            }
            let itemObject = {
                name: props.userInput,
                type: 'active',
            }
            let newArray = [...props.items]
            newArray.unshift(itemObject)
            props.setItems(newArray)
            props.setUserInput('')
        }
    }

    const completed =(item) =>{
        if (item.type === 'active'){
            let newArray = [...props.items]
            let index = newArray.findIndex(i=>i.name === item.name)
            newArray[index].type = 'completed'
            props.setItems(newArray)
        }else {
            let newArray = [...props.items]
            let index = newArray.findIndex(i=>i.name === item.name)
            newArray[index].type = 'active'
            props.setItems(newArray)
        }
    }

    const clearCompleted = () =>{
        let newArray = [...props.items]
        let activeArray= []
        newArray.map(item=> item.type === 'active' ? activeArray.push(item):null)
        props.setItems(activeArray)
    }

    const deleteItem = (item) => {
        let newArray=[...props.items]
        let index = newArray.findIndex(i=>i.name === item.name)
        newArray.splice(index,1)
        props.setItems(newArray)
    }

    return(
        <div >
            <div className="ui segments">
            <div style={{paddingTop:'1%',textAlign:'center'}}>
                <div style={{border:'double'}} className="ui header" >
                    <h1>Paylocity Board</h1>
                    <Link to='/dashboard'><a>Back</a></Link>
                </div>
                <div className="ui fluid input">
                <input
                    value={props.userInput}
                    onKeyDown={e=>e.key === 'Enter' ? addToList():null}
                    placeholder='What needs to be done...'
                    onChange={(e)=> props.setUserInput(e.target.value)} 
                />
                </div>
                <div className="ui divider"></div>
                </div>
            <div >
                {props.showList === 'all' ? (
                    <div>
                        <div className="ui divided list" style={{overflow:'auto',width:'auto', height:'500px'}}>
                            {props.items.filter(i=> i.type === 'active').map((item)=><div className="item"><input className="ui input" onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox"/>{item.name} {item.type === 'active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)} 
                            {props.items.filter(i=> i.type === 'completed').map((item)=><div className="item"><input  onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox"/>{item.name} {item.type === 'active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)}
                        </div>
                        <div style={{textAlign:'center'}}><button className="ui disabled button">All Tasks: {props.items.length}</button></div>
                    </div>
                ):null}
                {props.showList === 'active' ? (
                    <div >
                        <div className="ui divided list" style={{overflow:'auto',width:'auto', height:'500px'}}>
                            {props.items.filter(i=>i.type === 'active').map(item=><div className="item"><input className="ui input" onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox" />{item.name} {item.type ==='active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)}
                        </div>
                        <div style={{textAlign:'center'}}><button className="ui disabled button">active Tasks: {props.items.filter(i=>i.type === 'active').length}</button></div>                   
                    </div>
                ):null}
                {props.showList === 'completed' ? (
                    <div >
                        <div className="ui divided list" style={{overflow:'auto',width:'auto', height:'500px'}}>
                            {props.items.filter(i=>i.type === 'completed').map(item=><div  className="item"><input onClick={()=>completed(item)} checked={item.type === 'completed'} type="checkbox" />{item.name} {item.type ==='active' ? <button onClickCapture={()=>deleteItem(item)} className="right floated content">x</button>:null}</div>)}
                        </div>
                        <div style={{textAlign:'center'}}><button className="ui disabled button">Completed Tasks: {props.items.filter(i=>i.type === 'completed').length}</button></div>
                    </div>
                ):null}
            </div>
            <div style={{textAlign:'center'}}>
                <div className="ui buttons">
                    <button className="ui small button" onClick={()=>props.setShowList('all')}>All</button>
                    <button className="ui small button" onClick={()=>props.setShowList('active')}>active</button>
                    <button className="ui small button" onClick={()=>props.setShowList('completed')}>completed</button>
                </div>
                <button className="ui small button" onClick={()=>clearCompleted()}>Clear Completed</button>
            </div>
            </div>
        </div>
    )
}
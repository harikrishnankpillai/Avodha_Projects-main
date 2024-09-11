import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import './style/home.css'

const Todobody = () => {


    let [todos, setTodos] = useState([]);
    let [singletdo, setSingleodo] = useState([]);

    const saveState = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
        } catch (err) {
            return undefined;
        }
    }
    function deleteTodo(e) {
        const position = e.target.id;
        let todotemp = todos

        todotemp.splice(position, 1);
        console.log('todotemp:', todotemp, "position:", position);

        setTodos((prev) => {
            return [
                ...todotemp
            ]
        })
        saveState(todos)

    }


    const addTodo = (e) => {
        console.log(singletdo);
        setTodos((prev) => {
            return [
                ...prev,
                singletdo
            ]
        })
        setSingleodo('')
        saveState(todos)
    }


    const chaneinput = (e) => {
        setSingleodo(
            e.target.value
        )
    }

    const onFormSubmit = e => {
        e.preventDefault();
        // send state to server with e.g. `window.fetch`
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('state'));
        console.log(localStorage.getItem('state'));
        console.log(items);
        if (items) {
           setTodos(items);
        }


       
       
    }, [])

    return (
        <div className="app">
            <div className="todo-list">
                <div className='todoinputs'>
                    <form onSubmit={onFormSubmit}>

                        <input type='text ' value={singletdo} onChange={(e) => chaneinput(e)} />
                        <button type='submit' onClick={(e) => addTodo(e)}>Add item</button>
                    </form>

                </div>
                <ul>

                    {todos.map((todo, index) => (

                        <Todo
                            deleteTodo={deleteTodo}
                            key={index}
                            index={index}
                            todo={todo}
                        />
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default Todobody

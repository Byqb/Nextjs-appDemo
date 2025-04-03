"use client";

import { useState , useEffect} from "react";

export default function Todo() {

    const [todo, setTodo] = useState({});

    useEffect(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const res = await response.json();
        setTodo(res);
    }, []);


    return (
        <div>
        <h1>{todo.title}</h1>
        </div>
    )
}
<template>
    <div>
        <h1>Lista de todos</h1>

        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{todo.name}} | {{todo.estatus}}
            </li>
        </ul>

        {{todos}}
    </div>
</template>

<script>
 import { db } from '../firebase'
    export default {
        name: 'TodoList',
        data(){
            return {
                todos: []
            }
        },
        created() {
            this.listTodos();
        },
        methods: {
            async listTodos() {
                //  db.collection("users").get().then((querySnapshot) => {
                //     querySnapshot.forEach((doc) => {
                //         console.log(`${doc.id} => ${doc.data()}`);
                //     });
                // });
                const data = await db.collection("todos").get();
                this.todos  =  data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                //this.datos
            }
        }
    }
</script>
<template>
    <div>
        <h1>Crear todo</h1>
        <form @submit.prevent="addTodo">
            <p>
                Nombre de la tarea:
                <input type="text" v-model="name">
            </p>
            <p>
                Estatus:
                <select v-model="estatus">
                    <option value="pendiente">Pendiente</option>
                    <option value="terminada">terminada</option>
                </select>
            </p>
            <button type="submit">Aceptar</button>
        </form>
    </div>
</template>

<script>
 import { db } from '../firebase'
 import router from '../router'
    export default {
        name: 'TodoCreate',
        data(){
            return {
                name: "",
                estatus: ""
            }
        },
        methods: {
            async addTodo() {
                try{
                     await db.collection('todos').add({
                        name: this.name,
                        estatus: this.estatus,
                    })
                    this.name="";
                    this.estatus="";
                    router.push("/")

                }catch(error){
                    console.error(error)
                }
            }
        }
    }
</script>
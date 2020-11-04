<template>
    <div>
        <h1>Editar todo</h1>

        <form @submit.prevent="updateTodo">
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
        <hr>

        <button @click="eliminar = !eliminar" v-if="eliminar===false">Eliminar</button>
        <form v-if="eliminar===true">
            <h4>¿Estás seguro que desaeas eliminar?</h4>
            
            <p>
                <button @click="deleteTodo">Si Eliminar</button> 
            </p>
            <p>
                <button @click="eliminar = !eliminar">Cancelar</button>
            </p>
        </form>
    </div>
</template>

<script>
 import { db } from '../firebase'
  import router from '../router'
    export default {
        name: 'TodoEdit',
         data(){
            return {
                name: "",
                estatus: "",
                eliminar: false
            }
        },
        created(){
           this.getTodo(); 
        },
        methods:{
            async getTodo() {
                const id = this.$route.params.id;
                const data = await db.collection("todos").doc(id).get()
                const todo = (data.data())
                this.name = todo.name;
                this.estatus = todo.estatus
            },
            async updateTodo() {
                 const id = this.$route.params.id;
                  await db.collection('todos').doc(id).set({
                        name: this.name,
                        estatus: this.estatus,
                    })
                router.push("/")
            },
            async deleteTodo() {
                 const id = this.$route.params.id;
                  await db.collection('todos').doc(id).delete();
                router.push("/")
            }
        }
    }
</script>
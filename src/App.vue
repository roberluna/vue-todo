<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Todos</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Listar</router-link>  
          </li>
          <li class="nav-item">
             <router-link to="/create" class="nav-link">Crear</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid">
      <router-view/>
    </div>
</div>
</template>

<template>
  <div class="container">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand"
           routerLink="">My Web Shop</a>
      </div>
      <ul class="nav navbar-nav">
        <li routerLinkActive="active"><router-link to="/">Home</router-link></li>
        <li routerLinkActive="active"><router-link to="/admin">Admin</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view/>
</div>
</template>

<style lang="scss">
</style>

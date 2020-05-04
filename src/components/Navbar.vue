<template>
  <nav class="nav-left">
    <div ref="links" class="links">
      <router-link @click.native="clickHome" exact to="/"><span>Projects</span></router-link>
    </div>
    <div class="nav-right">
      <vs-input @keypress.enter.prevent="searchPosts" placeholder="Search"/>
      </div>
  </nav>
</template>

<style lang="scss">
.nav-left {
  font-family: 'IBM Sans Mono', monospace;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 10px;
  position: fixed;
  z-index: 10000;
  font-size: 25px;
}

.nav-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 50px;
    margin-top: 20px;
}
</style>

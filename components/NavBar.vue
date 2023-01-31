<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
                <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <nuxt-link exact active-class="active" class="nav-link active" aria-current="page" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link active-class="active" class="nav-link" to="/users">Users</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link active-class="active" no-prefetch class="nav-link" to="/about">About</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link active-class="active" no-prefetch class="nav-link" to="/login">Login</nuxt-link>
                        </li>
                        <li v-if="isAuth" class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}

.nav a {
  display: inline-block;
}
</style>

<template>
  <section>
    <h1>{{pageTitle}}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click.prevent="goTo(user)">{{user.name}} - {{user.email}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'User page',
    }
  },
  /* nuxtServerInit() заменяет метод fetch() подгружая данные на сервере 1 раз при загрузке приложения (см. store) */
  /*  async fetch({ store, error }) {
    try {
      if (store.getters['users/users'].length === 0) {
        await store.dispatch('users/fetchUsers')
      }
    } catch (e) {
      error(e)
    }
  }, */
  computed: {
    users() {
      return this.$store.getters['users/users']
    },
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user.id)
    },
  },
}
</script>

<style scoped>
</style>

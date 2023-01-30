<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <li v-for="user in users" :key="user">
        <a href="#" @click="goTo(user)"> User {{user}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    goTo(userId) {
      this.$router.push('/users/' + userId)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

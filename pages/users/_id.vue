<template>
  <div>
    <h1>{{user.name}}</h1>
    <hr/>
    <h2>{{ user.email }}</h2>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ params, store, error }) {
    try {
      const user = await store.dispatch('users/fetchUserById', params.id)
      return { user }
    } catch (e) {
      error(e)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

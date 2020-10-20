<template>
<div>
      <login class="login" v-show="$store.getters.getShowLogin" />

</div>
</template>

<script>
import Login from "./Login";

export default {
components: {
    Login
}
}
</script>

<style scoped>

</style>
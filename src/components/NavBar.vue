<template>
  <div id="nav">
    <router-link :to="{ name: 'LatestSnippets' }">New Snippets</router-link>
    |
    <router-link :to="{ name: 'BestSnippets' }">Top Snippets</router-link>
    |
    <router-link :to="{ name: 'AddSnippet' }">Add Snippets</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

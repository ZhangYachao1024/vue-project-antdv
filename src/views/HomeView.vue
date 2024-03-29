
<template>
  <main>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post of posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="onEnlargeText"
      />
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  const postFontSize = ref(1);
  const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
  ]);

  function onEnlargeText(fontSize) {
    postFontSize.value += fontSize;
  }
</script>

<style scoped>

</style>

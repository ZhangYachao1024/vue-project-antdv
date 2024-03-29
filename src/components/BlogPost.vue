<template>
    <div class="blog-post">
        <span style="padding-right: 10px;">{{ title }}</span>
        <button @click="emit('enlarge-text', 0.1)">Enlarge text</button>
    </div>

</template>

<script setup>
    const props = defineProps(['title']);
    const emit = defineEmits(['enlarge-text']);
</script>

<style lang="scss" scoped>

</style>
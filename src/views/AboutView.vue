<template>
    <a-space>
      <a-space wrap>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
      </a-space>

      <a-space warp>
        <a-tooltip title="search">
          <a-button shape="circle" :icon="h(SearchOutlined)" />
        </a-tooltip>
        <a-button :icon="h(SearchOutlined)">Search</a-button>
        <a-tooltip title="search">
          <a-button type="dashed" shape="circle" :icon="h(SearchOutlined)" />
        </a-tooltip>
        <a-button type="dashed" :icon="h(SearchOutlined)">Search</a-button>
        <a-button :icon="h(SearchOutlined)" href="https://www.baidu.com" />
      </a-space>
    </a-space>
</template>

<script setup>

import { SearchOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>

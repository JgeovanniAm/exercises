<template>
  <header>
      <slot name="title"></slot>
      <slot name="children"></slot>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
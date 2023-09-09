<template>
  <div class="preview">
    <p for="public">name: {{taskObject.title}}<p>
    <p for="frinds">description: {{taskObject.description}} </p>
    <span for="me">type: {{taskObject.type}}</span>
  </div>
</template>

<script>

  export default {
    name: 'preview-todo',
    props: {
      taskObject: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style scoped>
  .preview {
    border: 1px  gray solid;
    width: 40%;
    margin: 20px;
  }
</style>
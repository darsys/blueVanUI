<template>
  <li>
    {{ ioitem.text }}
    <button @click="$emit('remove', ioitem.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    ioitem: {
      type: Object,
      required: true
    }
  }
}
</script>
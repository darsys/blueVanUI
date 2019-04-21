<template>
  <li>
    {{ ioitem.text }} (pin:{{ ioitem.pin }})
    <button @click="$emit('remove', ioitem.id)">
      X
    </button>
    <button @click="$emit('read', ioitem.id)">
      Read
    </button>
    <button @click="$emit('on', ioitem.id)">
      On
    </button>
    <button @click="$emit('off', ioitem.id)">
      Off
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
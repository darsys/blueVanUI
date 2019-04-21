<template>
  <div>
    <input
        placeholder="io item name"
        type="text"
        class="input"
        :value="value"
        v-on="listeners"
    >
    <select
        type="text"
        class="input"
        :selected="pin"
    >
        <option>31</option>
        <option>32</option>
        <option>33</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    pin: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//@import '../variables.scss';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid blue;
}
</style>

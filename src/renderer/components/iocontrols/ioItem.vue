<template>
  <li>
    {{ ioitem.text }} (pin:{{ ioitem.pin }}) current val: {{ this.currentVal }}
    <button @click="$emit('read', read())">
      Read
    </button>
    <button @click="$emit('on', write(0))">
      On
    </button>
    <button @click="$emit('off', write(1))">
      Off
    </button>
  </li>
</template>

<script>
export default {
  data () {
    return {currentVal: null}
  },
  props: {
    ioitem: {
      type: Object,
      required: true
    }
  },
  methods: {
    read: function () {
      this.$http
        .get('http://192.168.87.123/arduino/digital/' + this.ioitem.pin, { crossDomain: true })
        .then(response => (this.currentVal = response.data))
        // .catch(error => console.log(error))
      return 'read called on pin ' + this.ioitem.pin
    },
    write: function (val) {
      this.$http
        .get('http://192.168.87.123/arduino/digital/' + this.ioitem.pin + '/' + val, { crossDomain: true })
        .then(response => (this.currentVal = response.data))
      return 'write called on pin ' + this.ioitem.pin + ' with val ' + val
    }
  }
}
</script>
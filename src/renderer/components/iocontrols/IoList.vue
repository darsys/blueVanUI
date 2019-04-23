<template>
	<div>
		<BaseInputText 
			v-model="newIOItemText"
			placeholder="new io"
			@keydown.enter="addIO"
		/>
    <IoInput
      v-model="newIOItemText"
    />
		<ul v-if="ioitems.length">
			<ioitem
				v-for="io in ioitems"
				:key="io.id"
				:ioitem="io"
				@remove="removeTodo"
        @read="readIO"
        @on="turnOn"
        @off="turnOff"
			/>
		</ul>
    
		<p v-else>
			Nothing left in the list. Add a new todo in the input above.
		</p>
    <span>Message: {{ msg }}</span>
	</div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import IoInput from './IoInput.vue'
import ioitem from './ioItem.vue'

let nextIOId = 1

export default {
  components: {
    BaseInputText, ioitem, IoInput
  },
  data () {
    return {
      msg: '',
      newIOItemText: '',
      ioitems: [
        {
          id: nextIOId++,
          text: 'Kitchen Lights',
          pin: 26
        },
        {
          id: nextIOId++,
          text: 'Main Lights',
          pin: 28
        },
        {
          id: nextIOId++,
          text: 'Diesel Heater',
          pin: 33
        }
      ]
    }
  },
  methods: {
    addIO () {
      const trimmedText = this.newIOItemText.trim()
      if (trimmedText) {
        this.ioitems.push({
          id: nextIOId++,
          text: trimmedText
        })
        this.newIOItemText = ''
      }
    },
    removeTodo (idToRemove) {
      this.ioitems = this.ioitems.filter(ioitem => {
        return ioitem.id !== idToRemove
      })
    },
    readIO (resp) {
      this.msg = 'Read ' + resp
    },
    turnOn (resp) {
      this.msg = 'TurnOn: ' + resp
    },
    turnOff (resp) {
      this.msg = 'TurnOff: ' + resp
    }
  }
}
</script>
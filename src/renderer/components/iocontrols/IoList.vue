<template>
	<div>
		<BaseInputText 
			v-model="newIOItemText"
			placeholder="new io"
			@keydown.enter="addIO"
		/>
		<ul v-if="ioitems.length">
			<ioitem
				v-for="io in ioitems"
				:key="io.id"
				:ioitem="io"
				@remove="removeTodo"
			/>
		</ul>
		<p v-else>
			Nothing left in the list. Add a new todo in the input above.
		</p>
	</div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import ioitem from './ioItem.vue'

let nextIOId = 1

export default {
  components: {
    BaseInputText, ioitem
  },
  data () {
    return {
      newIOItemText: '',
      ioitems: [
        {
          id: nextIOId++,
          text: 'First IO'
        },
        {
          id: nextIOId++,
          text: 'Second IO'
        },
        {
          id: nextIOId++,
          text: 'Third IO'
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
    }
  }
}
</script>
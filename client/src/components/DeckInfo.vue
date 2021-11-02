<template>
  <div>
      <div class="field has-addons">
          <div class="control is-expanded">
              <input v-if="selected" type="text" class="input  is-size-4 has-text-dark" v-model="editedName">
               <p v-else class="column">
                    <span class="is-size-4 has-text-white">{{ name }}</span>
                </p>
          </div>
          <div class="control">
              <span class="button is-size-4 is-warning" @click="select()"> {{ buttonName }}</span>
          </div>
      </div>
      <div style="position: absolute; bottom: 20px; right: 60px;" class="">
        <span class="is-light button has-text-danger del">
            Delete 
        </span> 
     </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            editedName: "",
            buttonName: "Edit",
            selected: false
        }
    },
    methods: {
        select(){
            this.selected = !this.selected
            if(this.buttonName == "Edit"){
                this.buttonName = "Save"

            } else {
                this.buttonName ="Edit"
                this.name = this.editedName
            }
        }
    }
}
</script>

<style scoped>
    
</style>
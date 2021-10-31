<template>
  <div>
       <input v-if="isSelected()" type="text" class="input" v-model="editedName">
        <p v-else class="column">
            <span class="tag mr-3 is-primary">{{ 1 }}</span>{{ name }}
        </p>
        <div class="column is-narrow">
            <span class="icon has-text-link pr-3" @click="isSelected() ? unselect() : select()">
                <i v-if="isSelected(item)" class="fas fa-window-close"></i>
                <i v-else class="fas fa-edit"></i>
            </span>
            <span class="icon has-text-danger" @click="isSelected() ? updateItem() : removeItem()">
                <i v-if="isSelected()"  class="fas fa-check"></i>
                <i v-else class="fas fa-trash"></i>
            </span>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            eeditedName: "",
            selected: {}
        }
    }
}
</script>

<style>

</style>
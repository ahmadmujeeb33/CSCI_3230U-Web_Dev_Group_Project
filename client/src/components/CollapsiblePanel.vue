<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{title}}</p>
      <a class="button card-header-icon" @click="isCollapsed = !isCollapsed">
        <font-awesome-icon icon="chevron-up" v-if="!isCollapsed"/>
        <font-awesome-icon icon="chevron-down" v-if="isCollapsed"/>
      </a>
    </header>
    <div class="card-content" :class="{'is-hidden':isCollapsed }">
      <slot v-if="!isCollapsed"></slot>
    </div>
    <footer class="card-footer" v-if="!isCollapsed">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
// import "@/storageShim.js";
export default {
  mounted() {
    if (this.id) {
      const state = this.getCollapseState();
      if (state) {
        this.isCollapsed = state[this.id];
      }
    }
  },
  props: {
    id: {
      type: String
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isCollapsed: true
    };
  },
  methods: {
    getCollapseState() {
      return localStorage.getObject("collapsibles") || {};
    },
    saveCollapsedState(value) {
      const state = this.getCollapseState();
      state[this.id] = value;
      localStorage.setObject("collapsibles", state);
    }
  },
  watch: {
    isCollapsed(newValue) {
      if (this.id) {
        this.saveCollapsedState(newValue);
      }
      this.$emit("collapseChanged", newValue);
    }
  }
};
</script>

<style scoped>
.card-header-icon.button {
  margin: 0.75rem;
}
.card {
  margin: 0.75rem;
}
</style>
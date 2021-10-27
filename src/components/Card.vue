<template functional>
  <section class="card--container">
    <a :href="props.url" class="card--link">
      <img :src="props.image" class="card--image" />
      <span class="card--name">{{ props.name }}</span>
      <slot name="decsription">
        <span class="card--description">{{ props.description }}</span>
      </slot>
    </a>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: {
      type: String,
      default: "placeholder-image-url"
    },
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
.card--container {
  margin: 0.3em 1em 1.5em 1em;
}

.card--link {
  text-decoration: none;
  color: #2e3333;
  display: flex;
  flex-direction: column;
}

.card--image {
  width: 21em;
}

.card--name {
  font-size: 1.8em;
  padding-top: 0.5em;
}

.card--description {
  color: #8c9b9b;
  padding-top: 0.8em;
}
</style>

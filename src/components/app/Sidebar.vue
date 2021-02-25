<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
      custom
      v-slot="{ href, navigate, isActive }"
    >
      <li :class="{ 'active': isActive }">
        <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['isOpen'],
  data: () => ({
    links: [
      {title: 'Счет', url: '/', exact: true},
      {title: 'История', url: '/history', exact: true},
      {title: 'Планирование', url: '/planing', exact: true},
      {title: 'Новая запись', url: '/record', exact: true},
      {title: 'Категории', url: '/categories', exact: true}
    ]
  })
}
</script>

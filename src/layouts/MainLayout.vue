<template>
  <div class="app-main-layout">
    <Navbar @toggle="this.isSidebarOpen = !this.isSidebarOpen" />
    <Sidebar :isOpen="isSidebarOpen" />
    <main class="app-content" :class="{full: !isSidebarOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar';
import Sidebar from '@/components/app/Sidebar';

export default {
  name: 'main-layout',
  data: () => ({
    isSidebarOpen: true
  }),
  components: {
    Navbar,
    Sidebar
  },
}
</script>

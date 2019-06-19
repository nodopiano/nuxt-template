<template>
  <el-dropdown>
    <div class="relative px-4 py-2 z-2 rounded flex items-center z-10 mt-0 rounded-t mr-1 hover:bg-grey-lightest">
      <LoggedUser />
    </div>
    <el-dropdown-menu slot="dropdown" trigger="click" class="user-dropdown">
      <!--       <el-dropdown-item class="user-dropdown__item">
        <nuxt-link to="/profile">
          <svgicon icon="user" class="pr-2" /><span>Profilo</span>
        </nuxt-link>
      </el-dropdown-item> -->
      <el-dropdown-item class="user-dropdown__item">
        <logout />
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Logout from './Logout.vue'
import LoggedUser from './LoggedUser'

export default {
  components: {
    Logout,
    LoggedUser
  },
  props: {}
}
</script>

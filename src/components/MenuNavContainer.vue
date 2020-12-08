<template>
    <Menu>
      <li>
        <router-link class="k-link k-menu-link" to="/">Home</router-link>
      </li>
        <li>
        <router-link class="k-link k-menu-link" to="/Blank1">Blank1</router-link>
        </li>
        <li>
        <router-link class="k-link k-menu-link" to="/Grid2">Grid2</router-link>
        </li>
        <li>
        <router-link class="k-link k-menu-link" to="/Form1">Form1</router-link>
        </li>
        <li>
        <router-link class="k-link k-menu-link" to="/Grid1">Grid1</router-link>
        </li>
        <li>
        <router-link class="k-link k-menu-link" to="/Chart1">Chart1</router-link>
        </li>
    </Menu>
</template>
<script>
import '@progress/kendo-ui/js/kendo.menu';
import { Menu } from "@progress/kendo-layout-vue-wrapper";
export default {
    components: {
       Menu
    }
}
</script>

import { defineAsyncComponent } from 'vue';

export const Header = defineAsyncComponent(() => import('../sections/Header.vue'));
export const Content = defineAsyncComponent(() => import('../sections/Content.vue'));

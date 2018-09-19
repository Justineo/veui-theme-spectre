<template>
  <article>
    <h1><code>&lt;veui-breadcrumb&gt;</code></h1>
    <section>
      <veui-breadcrumb :routes="items" @redirect="handleRedirect">
        <template slot-scope="{ index, label }">
          <veui-icon v-if="index === 0" name="home"/>
          <template v-else>{{ label }}</template>
        </template>
      </veui-breadcrumb>
    </section>
    <section>
      <veui-breadcrumb :routes="items" @redirect="handleRedirect"/>
    </section>
    <section>
      <veui-breadcrumb>
        <veui-breadcrumb-item to="/">首页</veui-breadcrumb-item>
        <veui-breadcrumb-item :to="{ name: 'Breadcrumb' }">面包屑</veui-breadcrumb-item>
        <veui-breadcrumb-item type="text">我在这里</veui-breadcrumb-item>
      </veui-breadcrumb>
    </section>
  </article>
</template>

<script>
import { Breadcrumb, BreadcrumbItem, Icon } from 'veui'
import 'vue-awesome-material-icons/icons/home'

export default {
  name: 'breadcrumb-demo',
  components: {
    'veui-breadcrumb': Breadcrumb,
    'veui-breadcrumb-item': BreadcrumbItem,
    'veui-icon': Icon
  },
  data () {
    return {
      index: 0,
      items: [
        { to: 'http://www.baidu.com', label: 'baidu', native: true },
        { to: '/steps', label: '步骤条组件' },
        { label: '监听跳转事件', native: true },
        { to: 'http://www.baidu.com', label: '阻止跳转事件', native: true },
        { to: 'http://www.baidu.com', label: 'replace', replace: true, native: true },
        { to: '/dialog', label: 'Dialog' },
        { to: 'http://jn.baidu.com', label: 'jn' }
      ]
    }
  },
  methods: {
    handleRedirect (event, router, index) {
      if (index === 2) {
        alert('redirect event')
      } else if (index === 3) {
        event.preventDefault()
        alert('prevent redirect event')
      }
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>

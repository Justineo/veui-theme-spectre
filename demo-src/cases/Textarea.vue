<template>
  <article>
    <h1><code>&lt;veui-textarea&gt;</code></h1>
    <section>
      <h2>小尺寸 + 显示 3 行</h2>
      <veui-textarea ui="sm" rows="3" v-model="value"/>
    </section>
    <section>
      <h2>默认尺寸 + 行号 + 自动扩展</h2>
      <veui-textarea line-number autoresize placeholder="请输入" v-model="value"/>
    </section>
    <section>
      <h2>大尺寸 + 自动扩展</h2>
      <veui-textarea ui="lg" autoresize v-model="value"/>
    </section>
    <section>
      <h2>只读</h2>
      <veui-textarea rows="3" line-number readonly v-model="value"/>
    </section>
    <section>
      <h2>禁用</h2>
      <veui-textarea rows="3" line-number disabled v-model="value"/>
    </section>
  </article>
</template>

<script>
import bus from '../bus'
import { Textarea } from 'veui'

export default {
  name: 'button-demo',
  components: {
    'veui-textarea': Textarea
  },
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.$children.forEach(child => {
      child.$on('click', () => {
        bus.$emit('log', child.$el.getAttribute('ui'))
      })
    })
  }
}
</script>

<style scoped>
section {
  margin-bottom: 20px;
}
</style>

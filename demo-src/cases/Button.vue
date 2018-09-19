<template>
  <article>
    <h1><code>&lt;veui-button&gt;</code></h1>
    <p>
      <veui-button ui="primary sm">提交</veui-button>
      <veui-button ui="primary">提交</veui-button>
      <veui-button ui="primary lg">提交</veui-button>
      <veui-button ui="primary" disabled>提交</veui-button>
      <veui-button ui="primary" loading>提交</veui-button>
    </p>
    <p>
      <veui-button ui="sm">保存</veui-button>
      <veui-button>保存</veui-button>
      <veui-button ui="lg">保存</veui-button>
      <veui-button disabled>保存</veui-button>
      <veui-button loading>保存</veui-button>
    </p>
    <p>
      <veui-button ui="sm"><veui-icon name="close"/> 取消</veui-button>
      <veui-button><veui-icon name="close"/> 取消</veui-button>
      <veui-button ui="lg"><veui-icon name="close"/> 取消</veui-button>
      <veui-button disabled><veui-icon name="close"/> 取消</veui-button>
      <veui-button loading><veui-icon name="close"/> 取消</veui-button>
    </p>
    <p>
      <veui-button ui="action sm"><veui-icon name="close" label="删除"/></veui-button>
      <veui-button ui="action primary"><veui-icon name="close" label="删除"/></veui-button>
      <veui-button ui="action success lg"><veui-icon name="close" label="删除"/></veui-button>
      <veui-button ui="action error" disabled><veui-icon name="close" label="删除"/></veui-button>
      <veui-button ui="action link" loading><veui-icon name="close" label="删除"/></veui-button>
    </p>
    <p>
      <veui-button ui="link sm">创建</veui-button>
      <veui-button ui="link">创建</veui-button>
      <veui-button ui="link lg">创建</veui-button>
      <veui-button ui="link" disabled>创建</veui-button>
      <veui-button ui="link" loading>创建</veui-button>
    </p>
    <p>
      <veui-button ui="success sm">编辑</veui-button>
      <veui-button ui="success">编辑</veui-button>
      <veui-button ui="success lg">编辑</veui-button>
      <veui-button ui="success" disabled>编辑</veui-button>
      <veui-button ui="success" loading>编辑</veui-button>
    </p>
    <p>
      <veui-button ui="error sm">删除</veui-button>
      <veui-button ui="error">删除</veui-button>
      <veui-button ui="error lg">删除</veui-button>
      <veui-button ui="error" disabled>删除</veui-button>
      <veui-button ui="error" loading>删除</veui-button>
    </p>
    <p>
      <veui-button ui="clear sm"/>
      <veui-button ui="clear"/>
      <veui-button ui="clear lg"/>
      <veui-button ui="clear" disabled/>
      <veui-button ui="clear" loading/>
    </p>
  </article>
</template>

<script>
import bus from '../bus'
import { Button, Icon } from 'veui'
import 'vue-awesome-material-icons/icons/close'

export default {
  name: 'button-demo',
  components: {
    'veui-icon': Icon,
    'veui-button': Button
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
p {
  user-select: none;
}

.veui-button {
  margin-right: 10px;
}
</style>

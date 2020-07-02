import Vue from 'vue'

// 传入一个组件配置
// 创建它的实例，并且将它挂载到body上
// 返回组件实例
export default function create(Component, props) {

  const Action = Vue.extend(Component);
  const comp = new Action({
    propsData: props,
    methods:{
      remove(){
        // 移除dom
        // 销毁组件
        comp.$el.remove();
        comp.$destroy();
      }
    }
  }).$mount()
  // 输出$el，它是一个注释
  // 组件里面v-if导致的
  /// patch算法，diff一样的
  // 当后面执行show
  document.body.appendChild(comp.$el);
  return comp;
  //console.log(Action);
  // 实例创建
  // 作业：使用extend方式创建组件实例并挂载
  // extend方法返回的组件构造函数
  // const Ctor = Vue.extend(Component)
  // const comp = new Ctor()

  // 方式二：借鸡生蛋
  // const vm = new Vue({
  //   render(h) {
  //     return h(Component, { props })
  //   }
  // }).$mount() // $mount()本质上将vdom=》dom

  // // 通过vm.$el获取生成的dom
  // document.body.appendChild(vm.$el)

  // // 删除函数
  // // 获取组件实例
  // const comp = vm.$children[0]

  // comp.remove = () => {
  //   document.body.removeChild(vm.$el)
  //   vm.$destroy()
  // }

  // return comp
}
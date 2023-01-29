const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  avatar: state => state.uv.avatar,
  name: state => state.uv.name,
  routes:state =>state.uv.myRouter
}
export default getters

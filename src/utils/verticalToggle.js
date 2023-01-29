const elTransition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
const Transition = {
    'before-enter'(el) {
        el.style.transition = elTransition
    },
    'enter'(el) {
        el.style.height = el.dataset.oldHeight
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
    },
    'after-enter'(el) {
        el.style.transition = ''
    },
    /** 收缩开始前 */
    'before-leave'(el) {
        //记录下dom原始高度
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldHeight = el.style.height; 
    },
     /** 收缩中 */
    'leave'(el) {
        el.style.transition = elTransition
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
    },
     /** 收缩后 */
    'after-leave'(el) {
        el.style.transition = ''
    }
}
export default {
    name: 'VerticalToggle',
    functional: true,
    render(h, { children }) {
        const data = {
            on: Transition
        }
        return h('transition', data, children)
    }
}
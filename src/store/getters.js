export default {
    mount: state => {
        return state.count * 10 + 100/3;
    }
}
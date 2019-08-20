export default  {
    props: ['id'],
    template: '<div>foo {{id}} -- {{$store.getters.mount}}</div>',
    // computed: {
    //     count() {
    //         return this.$store.state.count;
    //     }
    // }

}
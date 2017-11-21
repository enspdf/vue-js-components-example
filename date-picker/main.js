Vue.component('date-picker', {
    template: `<input />`,
    props: [ 'dateFormat' ],
    mounted () {
        $(this.$el).datepicker({
            dateFormat: this.dateFormat
        });
    },
    beforeDestroy () {
        $(this.$el).datepicker('hide').datepicker('destroy');
    }
});

new Vue({
    el: '#root'
});
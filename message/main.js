Vue.component('message', {
    props: ['title', 'body'],
    data () {
        return {
            isVisible: true
        }
    },
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button type="button" class="button is-small" @click="hideModal">
                    <span class="icon is-small">
                        <i class="fa fa-times"></i>
                    </span>
                </button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,
    methods: {
        hideModal () {
            this.isVisible = false;
        }
    }
});

new Vue({
    el: '#root'
});
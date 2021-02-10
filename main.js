const app = {
    data() {
        return {
            msg: 'Hello, Vue3',

            photos: [{image: 'images/1.jpeg',article: 'Hello',done: false},
            {image: 'images/2.jpg',article: 'World' ,done: false},
            {image: 'images/3.jpeg',article: 'Kushina' ,done: false},
            {image: 'images/4.jpeg',article: 'Minato' ,done: false}
        ]
        }
    },
    methods: {
        clickHeart(index){
            this.photos[index].done = !this.photos[index].done
        }
    },
    computed: {
        unclickHeart(){
            return this.photos.filter( t => !t.false ).length
        }
    }

}
Vue.createApp(app).mount('#app')
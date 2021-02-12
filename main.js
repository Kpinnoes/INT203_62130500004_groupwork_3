const app = {
    data() {
        return {
            msg: 'Hello, Vue3',

         photos: [
            {
                src: 'images/2.jpg',
                article: 'Hello',
                favor: false,
                like: 0,
                done: false
            },
            {
                src: 'images/5.jpg',
                article: 'World',
                favor: false,
                like: 0,done: false
            },
            {
                src: 'images/6.jpg',
                article: 'Dolphin',
                favor: false,
                like: 0,done: false

            },
            {
                src: 'images/9.jpg',
                article: 'Team 2020',
                favor: false,
                like: 0,done: false
            },
            {
                src: 'images/8.jpg',
                article: 'Welcome to ',
                favor: false,
                like: 0,done: false
            },
            {
                src: 'images/11.jpg',
                article: 'this Family <3',
                favor: false,
                like: 0,done: false
            }
      

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
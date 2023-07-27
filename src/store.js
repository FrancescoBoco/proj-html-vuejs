import {reactive} from 'vue'

export const store = reactive({
    activeLink: 0,
    links:[
        {
          name: 'Home',
          destination: '#home'
        },
        {
          name: 'About',
          destination: '#about'
        },
        {
          name: 'Projects',
          destination: '#projects'
        },
        {
          name: 'Services',
          destination: '#services'
        },
        {
          name: 'Blog',
          destination: '#blog'
        },
        {
          name: 'Contacts',
          destination: '#contacts'
        }
      ]
})
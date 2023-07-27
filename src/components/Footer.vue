<script>
import { store } from '../store';

export default {
  data(){
    return{ 
        store,
    }
  },
  methods: {
    linkActive(index){
        store.activeLink = index
        
    }
  },
  props: {
  }
}
</script>

<template>
    <div class="wrapper">
        <div class="container ">
            <div class="row justify-content-between ">
                <div class=" col-auto">
                    <img src="../consulting-landing/images/logotype-2-139x23.png" alt="">
                </div>
                <div class=" col-auto">
                    <ul>
                        <li  v-for="(singleLink, i) in store.links " :key="i" @click="linkActive(i)"
                            :class="{'active' : i == store.activeLink}"
                            >
                            <a :href="singleLink.destination">
                                {{singleLink.name}}
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div class=" col-auto">
                    <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> 
                </div>
            </div>
            <div class="row justify-content-between ">
                <div class="col-auto">
                    <div>
                        Terms of use
                    </div>
                    <div>
                        Provacy Enviromenta Policy
                    </div>
                </div>
                <div class="col-auto">
                    Copyright © 2020 Phlox Consulting. All Rights Reserved
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.wrapper{
    background-color: #22213B;
    .container{
        .row:first-child{
            padding: 50px 0;
            border-bottom: 1px solid rgb(107, 107, 107);
            div{
                .active{
                    color:white;
                    font-weight: bold;
                    border-bottom: 2px solid white;
                }
                color: white;
                i{
                    padding: 5px;
                }
                img{
                    height: 25px;
                    
                }
                ul{
                    list-style: none;
                    display: flex;

                    li{
                        a{
                        color: white;
                        text-decoration: none;
                        padding: 10px;
                        &:hover{
                            font-weight: bold;
                            border-bottom: 2px solid white;
                        }
                        }                        
                    }
                }
            }
        }
        .row:last-child{
            color: rgb(195, 193, 193);
            padding: 50px 0;
        }
    }
}

</style>
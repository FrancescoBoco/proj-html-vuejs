<script>
import {store} from '../store'
import axios  from 'axios';



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
     <!--  Div utilizzati solo per bg  -->
<div class="header-left-bg">
</div>
<div class="header-right-bg">
</div>
     <!--  FINE Div utilizzati solo per bg  -->


        <div class="container " id="home">
            <div class="row justify-content-between align-items-center">
                <div class="col left-header p-4">
                <div>
                        <img src="../consulting-landing/images/logotype.png" alt="Logo ">
                </div>
                </div>

                <div class="col">
                        <ul class="d-flex" >
                            <li v-for="(singleLink, i) in store.links " :key="i" @click="linkActive(i)"
                            :class="{'active' : i == store.activeLink}">
                                {{ singleLink.name }}
                            </li>
                            
                        </ul>
                </div>
            </div>
            <div class="my-row ">
                <div class="my-col" >
                    <div class="line">
                        
                    </div>
                    <h3>
                        ALLWAYS THE BEST WAY YOU NEED IT
                    </h3>
                    <h1>
                        THE BEST BUSSINES CONSULTING 
                    </h1>
                    <div>
                        <button>
                            READ MORE
                        </button>
                        <span>
                            <i class="fa-solid fa-play"></i> 
                        </span>
                    </div>
                </div>
            </div>
        </div>

    


        
</template>


<style lang="scss" scoped>
button{
    border: none;
    background-color: #7DFAC2;
    color: black;
    padding: 10px 30px;
    &:hover{
        background-color: #40fca7;
    }
}
.active{
    color:white;
    font-weight: bold;
    border-top: 2px solid white;
}
.header-left-bg{
        height: 600px;
        background-color: #22213B;
        width: 1000px;
        position: absolute;
        left: 0;
        z-index: -1;

}
.header-right-bg{
        height: 600px;
        background-image: url(../consulting-landing/images/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg);
        background-size: cover;
        width: 1000px;
        position: absolute;
        right: 0;
        z-index: -1;

    }

.left-header{

    img{
    height: 20px;
    }
}

ul{
    list-style: none;
    justify-content: end;
    li{
        padding: 20px;
        color: white;
        &:hover{
            font-weight: bold;
            border-top: 2px solid white;
        }
    }
}

.my-row{
    display: flex;
    width: 300px;
    padding-top: 100px;
    padding-bottom: 110px;
    color: white;
    .my-col{
        .line{
            display: inline-block;
            width: 35px;
            border-bottom: 3px solid #7DFAC2;
            height: 5px;
            margin-right: 15px;

        }

        h3{
            font-size: 0.8em;
            display: inline-block;
        }
        div{
            padding:10px
        }
        h1{
            font-size: 4em;
        }
        span{
            margin-left: 30px;
            padding: 10px 13px;
            border-radius: 50%;
            color: #7DFAC2;
            border: 1px solid white;
            &:hover{
                background-color: #40fca7;
                color: black;
            }
        }

    }
}
    
</style>
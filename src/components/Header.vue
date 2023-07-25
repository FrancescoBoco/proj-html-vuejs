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


        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col left-header p-4">
                <div>
                        <img src="../consulting-landing/images/logotype.png" alt="Logo ">
                </div>
                </div>

                <div class="col">
                        <ul class="d-flex">
                            <li>
                                HOME 
                            </li>
                            <li>
                                HOME
                            </li>
                            <li>
                                HOME
                            </li>
                            <li>
                                HOME
                            </li>
                            <li>
                                HOME
                            </li>
                        </ul>
                </div>
            </div>
            <div class="my-row ">
                <div class="my-col">
                    <h3>
                        ALLWAYS THE BEST WAY YOU NEED IT
                    </h3>
                    <h1>
                        THE BEST BUSSINES CONSULTING 
                    </h1>
                    <div>
                        <button>
                            Read more
                        </button>
                        <span>
                            icon 
                        </span>
                    </div>
                </div>
            </div>
        </div>

    


        
</template>


<style lang="scss" scoped>
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
        width: 1100px;
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
    }
}

.my-row{
    display: flex;
    width: 300px;
    padding-top: 100px;
    padding-bottom: 110px;
    color: white;
    .my-col{

        h3{
            font-size: 0.8em;
        }
        div{
            padding:10px
        }
        h1{
            font-size: 4em;
        }
        span{
            padding-left: 10px;
        }

    }
}
    
</style>
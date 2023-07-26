<script>
export default {
  data(){
    return{
    }
  },
  methods: {

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
                        <li>
                            <a href="#">
                                HOME
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                HOME
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                HOME
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                HOME
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">
                                HOME
                            </a>
                        </li>
                    </ul>
                </div>
                <div class=" col-auto">
                    icone icone icone 
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
                color: white;
                display: flex;
                img{
                    height: 25px;
                }
                ul{
                    list-style: none;
                    li{
                        a{
                        color: white;
                        text-decoration: none;
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
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
<div id="mian-one">
    <div  class="row">
        <div class="col">
            <h2>
                OUR CONSULTANTS CAN HELP YOU
            </h2>
        </div>
    </div>

    <div class="row">
        <div class="col-6">
            <h3>
                STATISTICAL CONSULTING
            </h3>
            <p>
                When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a
            </p>
        </div>

        <div class="col-6">
            <h3>
                DIGITAL CONSULTING
            </h3>
            <p>
                When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a
            </p>
        </div>

        <div class="col-6">
            <h3>
                BANKING CONSUTLTING 
            </h3>
            <p>
                When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a
            </p>
        </div>

        <div class="col-6">
            <h3>
                ENTERPRISE CONSUTLTING 
            </h3>
            <p>
                When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a
            </p>
        </div>
    </div>
</div>

     <!--  Div utilizzati solo per bg  -->
<div class="header-right-bg">
</div>
<div class="header-left-bg">
</div>
     <!--  FINE Div utilizzati solo per bg  -->
<div class="wrapper-main-two">
    <div id="main-two">
        <h3>
            ABOUT US
        </h3>
        <h1>
            WE MAKE YOUR STRATEGY WORK
        </h1>
        <div>
            <span>
                When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when I hear the buzz of the little world among the stalks,and grow familiar indescribable forms of the insects .and flies, then I feel the presence of the Almighty.
            </span>
        </div>
    </div>
</div>
<div id="wrapper-section-main-two">
    <h3>
        WE HELP TO DELIVER THE BUSINESS CASE 
    </h3>
    <div>

    </div>

</div>

</template>


<style lang="scss" scoped>
//  MIAN ONE 
#mian-one{
    
        max-width: 1100px;
        margin: 0 auto;
   
    h2{
        padding-top: 80px;
        padding-bottom: 80px;

    }

    p{
        max-width: 400px;   
        padding: 20px, 20px, 20px;   
        padding-bottom: 80px;

    }
}
// BACKGROUND ABSOLUTE 
.header-left-bg{
        height: 600px;
        background-color: #22213B;
        width: 1000px;
        position: absolute;
        right: 0;
        z-index: -2;

}
.header-right-bg{
        height: 600px;
        background-image: url(../consulting-landing/images/business-people-working-together-on-project-and-5FHSKBL.jpg);
        background-size: cover;
        width: 1000px;
        position: absolute;
        left: 0;
        z-index: -1;

}
//  MIAN TWO 
.wrapper-main-two{
    position: relative;
}
#main-two{
    max-width: 400px;
    color: white;
    position: absolute;
    right: 100px;
    top:150px;
    > h3{
        font-size: 0.8em;
    }
}
// MAIN TWO SECOND SECTION 

</style>
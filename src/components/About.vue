<template>
    <section>
        <div class="row mx-0 mb-2">
            <div class="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                <h3>Over ons</h3>
                <hr>
            </div>
        </div>
        <div class="row mx-0">
            <div class="col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2">
                <img src="@/assets/images/about.jpg" alt="About us">
            </div>
            <div class="col-12 col-md-5 col-lg-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien ante, sagittis vitae lorem quis, lobortis iaculis arcu. Ut eu odio et enim volutpat mollis
                    vitae rutrum ex. Sed gravida rutrum posuere. Aenean dapibus ante vel dui mollis, ac pellentesque purus lobortis. Fusce quis nisi a justo commodo ullamcorper.
                    Sed fringilla interdum orci, ac pretium neque.
                    <br><br>
                    Duis fringilla metus nisi, sed pulvinar eros auctor quis. Aliquam rhoncus at erat in scelerisque. Nulla ultricies lorem augue, eget condimentum sem ultricies
                    nec. Fusce ac mauris in eros egestas malesuada vel eu ante. Morbi ac ultricies sapien. Nunc ultrices purus sed quam molestie, vel maximus sem pulvinar.
                    Phasellus velit lectus, fermentum sed nisl eget, tincidunt blandit nibh.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.row:first-of-type {
    margin-top: 80px;
}

h3 {
    color: #B43C39;
}

img {
    width: 100%;
    border: #707070 solid 1px;
}
</style>

<script>
export default {
    name: 'About',
}
</script>

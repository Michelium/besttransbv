<template>
  <section>
    <div class="row">
      <div class="col-12 col-md-5 offset-md-1 offset-lg-2 text-section">
        <h1>Best Trans B.V.</h1>
        <h3>Beste keuze voor transport in regio Haaglanden</h3>
        <a class="btn btn-light text-white mt-md-2" href="#">CONTACT</a>
      </div>
      <div class="col-md-5">
        <img src="@/assets/images/hero.png" alt="Hero truck">
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    background: #efe0e0;
    height: 100vh;
  }

  @media (max-width: 767px) {
    .text-section {
      margin-top: 80px;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .text-section {
      margin-top: 250px;
    }
  }

  div {
    line-height: 0.8;
    position: relative;
  }

  div a {
    background-color: #B43C39;
    font-weight: bolder;
    width: 225px;
    height: 60px;
    font-size: 30px;
    border-radius: 0.478em;
  }
  div a:hover {
    background-color: #c44b48;
  }

  h1 {
    color: #B43C39;
    font-weight: bold;
    font-size: 60px;
  }

  h3 {
    color: #B43C39;
    font-weight: lighter;
  }

  img {
    position: absolute;
    top: 120px;
    width: 95%;
  }
</style>

<script>
export default {
  name: 'Hero',
}
</script>

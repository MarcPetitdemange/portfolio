<template>
  <section class="hero">
    <article class="presentation">
      {{ $t("hello") }} <br />
      {{ $t("iAmMarc") }} <br />
      <em class="fas fa-terminal" /> <span class="developperFullstack">
        {{ $t("fullStackDeveloper") }}
      </span>
      <br />
      <button class="glowOnHover" type="button">{{ $t("contacteMe") }}</button>
    </article>
    <article>
      <img src="" alt="Photo Marc Petitdemange" />
    </article>
  </section>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url('../assets/images/background.gif');
  background-size: cover;

  .presentation {
    font-size: 42pt;
    font-weight: bold;
    padding: 10rem 0 10rem 0rem;
  }
}

.developperFullstack {
  font-family: "CascadiaMono";
}

.glowOnHover {
  height: 4rem;
  width: 15rem;
  margin: 10px 7px;
  padding: 5px 5px;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border: 2px solid var(--fontColor);
}
.glowOnHover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 5px;
  border: none;
}
.glowOnHover:active:after {
  background: transparent;
}
.glowOnHover:hover:before {
  opacity: 1;
}
.glowOnHover:hover {
  border: 0px;
}
.glowOnHover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}
@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>

<style scoped lang="scss">

</style>
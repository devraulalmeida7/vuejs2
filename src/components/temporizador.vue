<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroVue v-bind:tempo-em-segundos="tempoEmSegundos"/>
        <!-- < cronometro v-bind:tempo-em-segundos="tempoEmSegundos"/> -->
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
          <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
          <span>stop</span>
        </button>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroVue from './cronometro.vue';

// exportando nosso componente
export default defineComponent({
    name: "TemporizadorVue",
    emits: ["aoTemporizadorFinalizado"],
    components:{
      CronometroVue
    } ,
    data(){
      return {
        tempoEmSegundos: 0,
        CronometroVue: 0,
        cronometroRodando: false,
      }
    },
    methods: {
      iniciar() {
        //começar a contagem
        this.cronometroRodando = true;
        this.CronometroVue = setInterval(() => {
          this.tempoEmSegundos++
          console.log(this.tempoEmSegundos);
        },1000)
        console.log("iniciando")
      },
      finalizar() {
        this.cronometroRodando = false;
        clearInterval(this.CronometroVue);
        this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
        this.tempoEmSegundos = 0;
      }
    }
})
</script>

<style scoped>

</style>
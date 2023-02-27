import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasVue from "../views/TarefasVue.vue";
import ProjetosVue from "../views/projetos.vue";
import Formulario from "../views/Projetos/formulario.vue"
import ListaVue from "../views/Projetos/lista.vue"

const rotas: RouteRecordRaw[] = [
    {
    // caminho da rota
    path: '/',
    name: "TarefasVue",
    component: TarefasVue
},
{
    path: '/projetos',
    component: ProjetosVue,
    children: [
        {
            path: '',
            name: 'Projetos',
            component: ListaVue
        },
        {
            path: 'novo',
            name: 'Novo projeto',
            component: Formulario
        },
        {
            path: ':id',
            name: 'Editar projeto',
            component: Formulario,
            props: true,
        }
    ]

}

];

const roteador = createRouter({
    // ele diz pro navegador que não é uma nova requisição.
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;
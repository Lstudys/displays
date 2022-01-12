import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from '../App.vue'
import Table11 from '@/pages/Table1/Table11.vue'
import Table12 from '@/pages/Table1/Table12'
import Table21 from '@/pages/Table2/Table21'
import Table22 from '@/pages/Table2/Table22'
import Table23 from '@/pages/Table2/Table23'
import Table24 from '@/pages/Table2/Table24'
import Table25 from '@/pages/Table2/Table25'
import Table26 from '@/pages/Table2/Table26'
import Table27 from '@/pages/Table2/Table27'
import Table28 from '@/pages/Table2/Table28'
import Table31 from '@/pages/Table3/Table31'
import Table32 from '@/pages/Table3/Table32'
import Table33 from '@/pages/Table3/Table33'
import Table34 from '@/pages/Table3/Table34'
import Table35 from '@/pages/Table3/Table35'
import Table36 from '@/pages/Table3/Table36'
import Table37 from '@/pages/Table3/Table37'
import Table38 from '@/pages/Table3/Table38'
import Table39 from '@/pages/Table3/Table39'
import Table310 from '@/pages/Table3/Table310'
import Table311 from '@/pages/Table3/Table311'
import Table312 from '@/pages/Table3/Table312'
import Table313 from '@/pages/Table3/Table313'
import Table3s1 from '@/pages/Table3/Table3s1'
import Table3s2 from '@/pages/Table3/Table3s2'
import Table3s3 from '@/pages/Table3/Table3s3'
import Table3s4 from '@/pages/Table3/Table3s4'
import Table3s5 from '@/pages/Table3/Table3s5'
import Table3s6 from '@/pages/Table3/Table3s6'
import Table3s7 from '@/pages/Table3/Table3s7'

import Table41 from '@/pages/Table4/Table41'
import Table42 from '@/pages/Table4/Table42'
import Table43 from '@/pages/Table4/Table43'
import Table44 from '@/pages/Table4/Table44'
import Table45 from '@/pages/Table4/Table45'
import Table46 from '@/pages/Table4/Table46'
import Table47 from '@/pages/Table4/Table47'
import Table48 from '@/pages/Table4/Table48'
import Table49 from '@/pages/Table4/Table49'
import Table410 from '@/pages/Table4/Table410'
import Table41s from '@/pages/Table4/Table41s'
import Table42s from '@/pages/Table4/Table42s'
import Table43s from '@/pages/Table4/Table43s'

const routes = [
    {
        path:'/',
        component:App,
    },
    {
        path:'/table11',
        component:Table11
    },
    {
        path:'/table12',
        component:Table12
    },
    {
        path:'/table21',
        component:Table21
    },
    {
        path:'/table22',
        component:Table22
    },
    {
        path:'/table23',
        component:Table23
    },
    {
        path:'/table24',
        component:Table24
    },
    {
        path:'/table25',
        component:Table25
    },
    {
        path:'/table26',
        component:Table26
    },
    {
        path:'/table27',
        component:Table27
    },
    {
        path:'/table28',
        component:Table28
    },
    {
        path:'/table31',
        component:Table31
    },
    {
        path:'/table32',
        component:Table32
    },
    {
        path:'/table33',
        component:Table33
    },
    {
        path:'/table34',
        component:Table34
    },
    {
        path:'/table35',
        component:Table35
    },
    {
        path:'/table36',
        component:Table36
    },
    {
        path:'/table37',
        component:Table37
    },
    {
        path:'/table38',
        component:Table38
    },
    {
        path:'/table39',
        component:Table39
    },
    {
        path:'/table310',
        component:Table310
    },
    {
        path:'/table311',
        component:Table311
    },
    {
        path:'/table312',
        component:Table312
    },
    {
        path:'/table313',
        component:Table313
    },
    {
        path:'/table3s1',
        component:Table3s1
    },
    {
        path:'/table3s2',
        component:Table3s2
    },
    {
        path:'/table3s3',
        component:Table3s3
    },
    {
        path:'/table3s4',
        component:Table3s4
    },
    {
        path:'/table3s5',
        component:Table3s5
    },
    {
        path:'/table3s6',
        component:Table3s6
    },
    {
        path:'/table3s7',
        component:Table3s7
    },
    {
        path:'/table41',
        component:Table41
    },
    {
        path:'/table42',
        component:Table42
    },
    {
        path:'/table43',
        component:Table43
    },
    {
        path:'/table44',
        component:Table44
    },
    {
        path:'/table45',
        component:Table45
    },
    {
        path:'/table46',
        component:Table46
    },
    {
        path:'/table47',
        component:Table47
    },
    {
        path:'/table48',
        component:Table48
    },
    {
        path:'/table49',
        component:Table49
    },
    {
        path:'/table410',
        component:Table410
    },
    {
        path:'/table41s',
        component:Table41s
    },
    {
        path:'/table42s',
        component:Table42s
    },
    {
        path:'/table43s',
        component:Table43s
    },

]

const router = new VueRouter({
    mode:'hash',
    routes
});

export default router;
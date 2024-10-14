<script>
export default{
    data() {
        return {
            title: `林之助紀念館`,
            subTitle: `『每一畫作，應該沒有高低、優劣之分，
                　　　　　　　　為每一幅畫都代表著作者自己的面目。』`,
            img: [
                {
                    id:1,
                    src:`src/img/bird1.PNG`
                },
                {
                    id:2,
                    src:`src/img/bird2.PNG`
                },
                {
                    id:3,
                    src:`src/img/logo.PNG`
                },
                {
                    id:4,
                    src:`src/img/lcc-head.PNG`
                },
                {
                    id:5,
                    src:`src/img/lookinfo.PNG`
                }
            ]
        }
    },
}

</script>



<template>
    <div class="w-full h-dvh grid grid-cols-3">
        <div class="border"></div>
        <div class="border col-span-2 overflow-hidden content-center">
            <h1 class="mb-5 text-4xl text-center">{{ title }}</h1>
            <h3 class="text-center whitespace-pre-line">{{ subTitle }}</h3>
            <!-- 漂浮的圖片 -->
            <div class="absolute top-0 left-0 w-10 h-auto">
            </div>
        </div>
    </div>
</template>

<style scoped>

@keyframes floating {
0% {
    top: 100%;
}
50% {
    opacity: 1;
}
100% {
    top: 0%;
    opacity: 0.2;
}
}
</style>
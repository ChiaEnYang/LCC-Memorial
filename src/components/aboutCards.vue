<script>

export default {
    data() {
        return {
            activeIndex: null,
            introduction: [
                {
                    title: '紀念館歷史',
                    img: '/src/img/2.jpg',
                    content:
                        `「林之助畫室（林之助紀念館）」原為國立臺中教育大學教職員宿舍，亦為林之助教授故居，建於昭和3（1928）年，採木造雨淋板構造，為日治時期木造雙併宿舍典型建築。建築物由東側之林之助畫室及西側建築所構成，現況西側建築基本上仍維持日治時期宿舍（官舍）之格局與特色，即大正6（1917）年頒布「判任官官舍標準改正」之判任官乙種雙併官舍；東側林之助畫室因林之助教授之使用，在空間上有所變更，呈現特有風格。畫室暨西側建築之建築面積（單棟）約為20坪左右，其空間規模為玄關2疊、座敷8疊、次之間6疊、茶之間6疊，並設有炊事場、踏込、浴廁及便所等。\n
                    畫室第一次擴建時間應在民國46（1957）年間或之前，林之助教授為了作畫需求，於建築東側擴建畫室。畫室空間在後期曾進行改建，推測應為配合住宅整體之擴建所進行之翻修，改建時間推測應該在民國67（1978）年之前，成為今日林之助畫室（紀念館）之主要樣貌，而該次改建亦為林之助教授親自設計，透過長期配合之工匠進行裝修 。\n
                    民國95（2006）年，面臨教育部來文須拆除收回老舊宿舍，當時本校楊思偉校長及莊明中主任秘書為表彰林之助教授對膠彩畫的重要貢献和代表意義，決定將宿舍推動保留為文化資產。民國96（2007）年經臺中市文化局審議委會決議，宿舍登錄為歷史建築，102（2013）年本校獲臺中市文化局補助350萬元、林之助家屬捐贈900萬元，以及裕元教育基金會捐贈1000萬元，將宿舍進行修復再利用計畫整建，前後共耗資2,140餘萬元修繕完成。民國104（2015）年6月6日，正式以「林之助紀念館」對外開放免費參觀，現由館方自籌經費管理營運。`,
                    show: false
                },
                {
                    title: '館長介紹 - 顏名宏 館長',
                    img: '/src/img/3.png',
                    content:
                        `學歷 \n
                     德國國立紐倫堡造型藝術學院藝術與開放空間系所最高文憑畢業 \n
                     AdBK, Akademie der Bildenden Künste Nürnberg, Kunst und öffentlichem Raum(Art and Public Space) , Meisterschüler, （同博士）Germany. \n
                      \n
                     現職 \n
                     ■ 國立臺中教育大學文化創意產業設計與營運學系 教授 \n
                     ■ 105-114年度「教育部補助高級中等以下學校校園美感環境再造－規劃輔導團隊計畫」計畫主持人 \n
                      \n
                     曾任 \n
                     ■ 教育部「整合型視覺形式美感教育實驗計畫子計畫：辦理中區美感教育大學基地計畫」計畫主持人2013- 2016 \n
                     ■ 文化部第二屆「世界遺產推動委員會」委員 2012 - 2013 \n
                     ■ 行政院文化建設委員會「社區總體營造推動委員會」委員 1999 - 2010 \n
                     ■ 教育部「第五、六屆藝術教育推動會」委員 2017 - 2021`,
                    show: false
                },
                {
                    title: '參觀資訊',
                    img: '/src/img/2.jpg',
                    content:
                        `開放時間 Opening Times \n
                     開館時間 \n
                     週二至週六 11：00~17：00 \n
                      \n
                     休館時間 \n
                     週日、週一及國定假日（逢國定假日皆不開放） \n
                      \n
                     貼心提醒： \n
                     ＊農曆春節休館日期，請以最新消息公告為主。 \n
                     ＊如遇天災、事變、其他不可抗力因素或館務所需，本館將停止開放部分或全部展區。 \n
                      \n
                     參觀須知 Visit Information \n
                     本館免費開放參觀，12歲以下兒童入館須由家長陪同帶領。 \n
                     館內分為「常設展廳」及「和室展廳」，全館容留人數為 35 人，當參觀人數超過此標準時，將採取入館人數限制（35人以上團體入館須事先預約）。 \n
                     進入本館「和室展廳」須脫鞋並穿著襪子（考量和室舊木地板維護及承重安全，無法開放輪椅及推車進入，造成不便，敬請見諒，更感謝您的理解）。 \n
                     本館全區嚴禁吸菸、嚼食檳榔及口香糖；館內禁止飲食、攜帶寵物（導盲犬除外）、長大型物件及危險物品。 \n
                     請尊重他人參觀品質，展廳內保持安靜，勿大聲喧嘩或追逐嬉鬧；館內展品除特別標示者，嚴禁觸摸。 \n
                     非本館活動辦理所產生之垃圾，請自行攜回處理。 \n
                     如未遵守參觀須知，經勸阻仍無改善者，本館得要求停止或取消參觀；若損及建築物、設備或展品，須負修復賠償及其所衍生相關責任與問題之責，違者必究。`,
                    show: false
                }
            ]
        }
    },
}
</script>


<template>

    <section class="w-full h-[400px] flex flex-row">
        <!-- 迴圈產生每張卡片 -->
        <div v-for="data in introduction" :key="data.index" class="h-full rounded-md overflow-hidden flex p-3"
            :class="data.show ? 'w-3/4' : 'flex-1'">

            <!-- 卡片中的圖片+標題 -->
            <div @click="data.show = !data.show"
                class="h-full grow min-w-64 bg-[url('/src/img/lcc-profile-bk.png')] bg-cover bg-center overflow-hidden border border-black border-dashed">
                <h3 class="font-bold">{{ data.title }}</h3>
            </div>

            <!-- text area -->
            <transition name="expand" mode="out-in">
                <div v-if="data.show" @click="data.show = !data.show"
                    class="h-full font-bold whitespace-pre-line break-all">
                    {{ data.content }}
                </div>
            </transition>

        </div>
    </section>

    <!-- 卡片區 -->
    <section class="mb-3 w-full h-[500px] grid gap-4 md:grid-cols-9 sm:grid-cols-1">
        <!-- 迴圈產生每張卡片(背景圖片=筆刷圖) -->
        <div v-for="data,index in introduction" :key="index"
        class="h-full bg-[url('/src/img/lcc-profile-bk.png')] bg-cover bg-center col-span-3 px-3 content-center border border-black border-dashed"
        :class="()=> {if(this.activeIndex){this.activeIndex === index ? 'col-span-7' : 'col-span-1'}}"
        @click="this.activeIndex = index">

            <!-- 卡片中的標題 -->
            <h3 class="text-xl font-bold text-center">{{ data.title }}</h3>

            <!-- text area -->
            <transition name="fade" mode="out-in">
                <div v-if="data.show" @click="data.show = !data.show"
                    class="h-full font-bold whitespace-pre-line break-all">
                    <h3 class="font-bold">{{ data.title }}</h3>
                    <p>{{ data.content }}</p>
                </div>
            </transition>

        </div>
    </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
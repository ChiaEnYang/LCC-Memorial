<script>
import { gsap } from "gsap";
import { ScrollTrigger, Observer } from "gsap/all";

export default {
    data() {
        return {
            artistDescribe: [
                {
                    id: 'describe-1',
                    content: '1出生於臺中大雅，12歲赴日本東京留學，中學畢業後考進日本帝國美術學校（今武藏野美術大學）日本畫科就讀，受教於奧村土牛、山口逢春、川崎小虎及小林巢居。畢業後進入兒玉希望日本畫塾，深入學習當時日本畫官展繪畫風格，並在年僅24歲時以〈朝涼〉入選紀元二六○○年奉祝美術展。林之助返臺後參加臺灣官辦府展，1942年以〈母子〉獲第五屆府展特選，1943年〈好日〉再獲第六屆府展特選第一名，奠定在臺灣畫壇的地位。'
                },
                {
                    id: 'describe-2',
                    content: '2出生於臺中大雅，12歲赴日本東京留學，中學畢業後考進日本帝國美術學校（今武藏野美術大學）日本畫科就讀，受教於奧村土牛、山口逢春、川崎小虎及小林巢居。畢業後進入兒玉希望日本畫塾，深入學習當時日本畫官展繪畫風格，並在年僅24歲時以〈朝涼〉入選紀元二六○○年奉祝美術展。林之助返臺後參加臺灣官辦府展，1942年以〈母子〉獲第五屆府展特選，1943年〈好日〉再獲第六屆府展特選第一名，奠定在臺灣畫壇的地位。'
                },
                {
                    id: 'describe-3',
                    content: '3出生於臺中大雅，12歲赴日本東京留學，中學畢業後考進日本帝國美術學校（今武藏野美術大學）日本畫科就讀，受教於奧村土牛、山口逢春、川崎小虎及小林巢居。畢業後進入兒玉希望日本畫塾，深入學習當時日本畫官展繪畫風格，並在年僅24歲時以〈朝涼〉入選紀元二六○○年奉祝美術展。林之助返臺後參加臺灣官辦府展，1942年以〈母子〉獲第五屆府展特選，1943年〈好日〉再獲第六屆府展特選第一名，奠定在臺灣畫壇的地位。'
                },
                {
                    id: 'describe-4',
                    content: '4出生於臺中大雅，12歲赴日本東京留學，中學畢業後考進日本帝國美術學校（今武藏野美術大學）日本畫科就讀，受教於奧村土牛、山口逢春、川崎小虎及小林巢居。畢業後進入兒玉希望日本畫塾，深入學習當時日本畫官展繪畫風格，並在年僅24歲時以〈朝涼〉入選紀元二六○○年奉祝美術展。林之助返臺後參加臺灣官辦府展，1942年以〈母子〉獲第五屆府展特選，1943年〈好日〉再獲第六屆府展特選第一名，奠定在臺灣畫壇的地位。'
                }
            ]
        }
    },
    mounted() {
        // Register GSAP Plugins
        gsap.registerPlugin(ScrollTrigger, Observer);

        // Timeline Animations
        let tl1In = gsap.timeline();
        tl1In.from("#describe-1", { y: "30%", opacity: 0, duration: 0.75, ease: "power2.inOut" });

        let tl1Out = gsap.timeline();
        tl1Out.to("#describe-1", { y: "-30%", opacity: 0, duration: 1, ease: "power2.inOut" });

        let tl2In = gsap.timeline();
        tl2In.from("#describe-2", { y: "30%", opacity: 0, duration: 0.75, ease: "power2.inOut" });

        let tl2Out = gsap.timeline();
        tl2Out.to("#describe-2", { y: "-30%", opacity: 0, duration: 1, ease: "power2.inOut" });

        let tl3In = gsap.timeline();
        tl3In.from("#describe-3", { y: "30%", opacity: 0, duration: 0.75, ease: "power2.inOut" });

        let tl3Out = gsap.timeline();
        tl3Out.to("#describe-3", { y: "-30%", opacity: 0, duration: 1, ease: "power2.inOut" });

        let tl4In = gsap.timeline();
        tl4In.from("#describe-4", { y: "30%", opacity: 0, duration: 0.75, ease: "power2.inOut" });

        // Master Timeline
        let masterTL = gsap.timeline({
            onReverseComplete: () => {
                scrollObserver.disable();
                sectionST.scroll(sectionST.start);
            },
            onComplete: () => {
                scrollObserver.disable();
                sectionST.scroll(sectionST.end);
            },
            paused: true
        });
        masterTL.add(tl1In, "in1").addPause().add(tl2In, "in2").add(tl1Out, "out1").addPause().add(tl3In, "in3").add(tl2Out, "out2").addPause().add(tl4In, "in4").add(tl3Out, "out3");

        // Scroll Observer
        let scrollObserver = Observer.create({
            type: "wheel,touch",
            wheelSpeed: -1,
            debounce: false,
            dragMinimum: 2,
            preventDefault: true,
            onUp: () => masterTL.play(),
            onDown: () => masterTL.reverse(),
            onEnable(self) {
                let savedScroll = self.scrollY();
                self._restoreScroll = (e) => self.scrollY(savedScroll);
                document.addEventListener("scroll", self._restoreScroll, { passive: false });
            },
            onDisable(self) {
                document.removeEventListener("scroll", self._restoreScroll);
            }
        });
        scrollObserver.disable();

        // ScrollTrigger
        let sectionST = ScrollTrigger.create({
            trigger: "#artist-section",
            start: "top top",
            end: "+=300",
            onEnter: self => {
                self.scroll(self.start + 1);
                masterTL.progress() < 1 && scrollObserver.enable();
            },
            onEnterBack: self => {
                self.scroll(self.end - 1);
                masterTL.progress() > 0 && scrollObserver.enable();
            },
            onLeave: () => scrollObserver.disable(),
            onLeaveBack: () => scrollObserver.disable(),
            markers: true,
            pin: true
        });
    },
    methods: {
    }
};

</script>



<template>
    <!-- 
     把區塊切成左右兩格，右邊留給雕像 -->
    <div id="artist-section" class="w-[90%] h-screen grid grid-cols-2">
        <!-- 
        文字區 -->
        <div class="border flex flex-col items-center">
            <h3 class="w-full h-1/4 pl-16 text-5xl font-bold border content-center">林之助</h3>
            <div class="w-80 text-justify relative">
                <div class="w-100 absolute top-0 left-0 text-lg bg-white" v-for="text in artistDescribe" :key="text.id"
                    :id="text.id">
                    {{ text.content }}
                </div>
            </div>
        </div>
    </div>
</template>
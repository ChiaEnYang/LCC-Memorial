<script>
import { gsap } from "gsap";
import { ScrollTrigger, Observer } from "gsap/all";

export default {
    data() {
        return {
            artistDescribe: [
                {
                    id: 'describe-1',
                    content: `出生於臺中大雅，12歲赴日本東京留學，中學畢業後考進日本帝國美術學校（今武藏野美術大學）日本畫科就讀，受教於奧村土牛、山口逢春、川崎小虎及小林巢居。畢業後進入兒玉希望日本畫塾，深入學習當時日本畫官展繪畫風格，並在年僅24歲時以〈朝涼〉入選紀元二六○○年奉祝美術展。林之助返臺後參加臺灣官辦府展，1942年以〈母子〉獲第五屆府展特選，1943年〈好日〉再獲第六屆府展特選第一名，奠定在臺灣畫壇的地位。`
                },
                {
                    id: 'describe-2',
                    content: `1945 年第二次世界大戰結束，臺灣經歷政權轉換，以膠為媒劑的東洋畫在戰後的臺灣日漸式微、幾近失傳。林之助有感於「東洋畫」名稱帶日本風，難容於當時的官方意識形態，於1977年提出「膠彩畫正名」，改用繪畫材料命名，以「膠彩畫」取代「東洋畫」，避免多餘的誤解與爭議，其後更組織膠彩畫協會、舉辦膠彩畫展，使膠彩畫在臺灣美術中得以保留並延續發展。`
                },
                {
                    id: 'describe-3',
                    content: `林之助於1946年進入臺中師範學校（今國立臺中教育大學）執教，同時遷入位於柳川西路的學校附屬宿舍，自此展開長達一甲子、他與住家兼畫室的不解之緣。\n由於當時學校裡只能教授素描、水彩及色彩學課程，面對膠彩畫即將失傳的窘境，林之助採用傳統畫塾的方式，從每屆學生中挑選出優秀學生，非但不收學費且免費提供顏料繪具，課後於住處教導傳授，以此培養膠彩畫的新一代。也因林之助所住宿舍外圍為竹籬笆圍牆，學生們便將之暱稱為「竹籬笆畫室」。這些竹籬笆畫室的學生，成了膠彩畫沒落、艱困時期中的少數捍衛者，也是往後臺灣省膠彩畫協會成立主要的中堅會員及推動執行者。`
                }
            ]
        }
    },
    mounted() {
        // Register GSAP Plugins 將要用的套件加進來
        gsap.registerPlugin(ScrollTrigger, Observer);

        // Timeline Animations 設定動畫細節
        let tl1Out = gsap.timeline();
        tl1Out.fromTo("#describe-2", { y: "30%", opacity: 0, duration: 0.3, ease: "power2.inOut" }, { y: "10%", opacity: 1, duration: 0.3, ease: "power2.inOut" }, 0);
        tl1Out.to("#describe-1", { y: "-10%", scale: 0.9, opacity: 0.3, duration: 0.3, ease: "power2.inOut" }, 0);

        let tl2In = gsap.timeline();
        tl2In.to("#describe-1", { y: "-30%", opacity: 0, duration: 0.3, ease: "power2.inOut" }, 0);
        tl2In.to("#describe-2", { y: "0", duration: 0.3, ease: "power2.inOut" }, 0);

        let tl2Out = gsap.timeline();
        tl2Out.fromTo("#describe-3", { y: "30%", opacity: 0, duration: 0.3, ease: "power2.inOut" }, { y: "10%", opacity: 1, duration: 0.3, ease: "power2.inOut" }, 0);
        tl2Out.to("#describe-2", { y: "-10%", scale: 0.9, opacity: 0.3, duration: 0.3, ease: "power2.inOut" }, 0);

        let tl3In = gsap.timeline();
        tl3In.to("#describe-2", { y: "-30%", opacity: 0, duration: 0.3, ease: "power2.inOut" }, 0);
        tl3In.to("#describe-3", { y: "0", duration: 0.3, ease: "power2.inOut" }, 0);

        // Master Timeline 把所有時間軸整合起來
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
        // 排列播放的順序
        masterTL.add(tl1Out, "out1").addPause().add(tl2In, "in2").addPause().add(tl2Out, "out2").addPause().add(tl3In, "in3");

        // Scroll Observer 監聽網頁的滾輪事件
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
                self._restoreScroll = () => self.scrollY(savedScroll);
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
    <div id="artist-section" class="w-[90%] h-dvh grid grid-cols-2">
        <!-- 
        文字區 -->
        <div class="border flex flex-col items-center">
            <h3 class="w-full h-1/4 pl-16 text-5xl font-bold border content-center">林之助</h3>
            <div class="w-3/5 text-justify relative">
                <div class="w-100 absolute top-0 left-0 text-lg font-medium whitespace-pre-line"
                    v-for="text in artistDescribe" :key="text.id" :id="text.id">
                    {{ text.content }}
                </div>
            </div>
        </div>
    </div>
</template>
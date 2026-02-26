const elfConfig = {
    images: [
        "/pet/1.jpg",
        "/pet/2.jpg",
        "/pet/3.jpg"
    ],
    normalDialogues: [
        "哈喽～今天也要元气满满哦！(๑•̀ㅂ•́)و✧",
        "偷偷告诉你，我其实是从二次元穿越来的！(｡•̀ᴗ-)✧",
        "今天的你也超棒的，继续加油呀！(๑˃̵ᴗ˂̵)و",
        "哎呀，被你发现了，我其实是网站的守护精灵～(◍•ᴗ•◍)",
        "要不要和我一起摸鱼？就一会儿…(๑•́ω•̀๑)",
        "猜猜我下一个动作是什么？猜对了有奖励哦～(≧∇≦)ﾉ",
        "我超甜的，要不要尝一口？(｡♥‿♥｡)"
    ],
    chestDialogues: [
        "讨厌啦～乱点什么呢 (⁄ ⁄•⁄ω⁄•⁄ ⁄)",
        "喂！你是不是变态啊？😡",
        "再点我要打110了哦！🚨",
        "救命啊！有色狼骚扰我！🆘",
        "算你狠…我躲还不行嘛😢",
        "呜呜呜，欺负人，我要告诉管理员！😭"
    ]
};

let currentIndex = 0;
let chestClickCount = 0;
let elfImage, elfSpeech, interactiveElf;

function initElf() {
    console.log('正在初始化小精灵...');
    
    const container = document.createElement('div');
    container.id = 'interactive-elf';
    container.innerHTML = `
        <div id="elf-speech"></div>
        <img id="elf-image" src="${elfConfig.images[0]}" alt="互动小精灵">
    `;
    document.body.appendChild(container);

    elfImage = document.getElementById('elf-image');
    elfSpeech = document.getElementById('elf-speech');
    interactiveElf = document.getElementById('interactive-elf');

    console.log('小精灵已添加到页面');

    interactiveElf.addEventListener('click', (e) => {
        currentIndex = (currentIndex + 1) % elfConfig.images.length;
        elfImage.src = elfConfig.images[currentIndex];

        const rect = elfImage.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const imgHeight = rect.height;
        
        const isChestClick = clickY > imgHeight * 0.3 && clickY < imgHeight * 0.6;
        
        let dialogue = '';
        if (isChestClick) {
            dialogue = elfConfig.chestDialogues[chestClickCount % elfConfig.chestDialogues.length];
            chestClickCount++;
        } else {
            dialogue = elfConfig.normalDialogues[Math.floor(Math.random() * elfConfig.normalDialogues.length)];
            chestClickCount = 0;
        }

        elfSpeech.textContent = dialogue;
        elfSpeech.classList.add('show');
        setTimeout(() => {
            elfSpeech.classList.remove('show');
        }, 4000);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initElf);
} else {
    initElf();
}

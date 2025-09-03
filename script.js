// グローバル変数として抽選結果を保存する配列を追加
let lotteryResults = [];

// 抽選対象のデータ（名前と画像ファイル名）
// 各参加者の名前の画像ファイル名を `nameImage` プロパティに「画像X.png」の形式で記述します。
const allParticipants = [
    { name: "内山 直揮", image: "1.png", nameImage: "画像1.png" },
    { name: "中津川 浩平", image: "2.png", nameImage: "画像2.png" },
    { name: "有地 悠人", image: "3.png", nameImage: "画像3.png" },
    { name: "西谷 頼征", image: "4.png", nameImage: "画像4.png" },
    { name: "中尾 恵太", image: "5.png", nameImage: "画像5.png" },
    { name: "草別 秀", image: "6.png", nameImage: "画像6.png" },
    { name: "高橋 克巳", image: "7.png", nameImage: "画像7.png" },
    { name: "小笠原 一彦", image: "8.png", nameImage: "画像8.png" },
    { name: "尾﨑 誠", image: "9.png", nameImage: "画像9.png" },
    { name: "渡邊 龍和", image: "10.png", nameImage: "画像10.png" },
    { name: "小田 翔矢", image: "11.png", nameImage: "画像11.png" },
    { name: "高橋 章徳", image: "12.png", nameImage: "画像12.png" },
    { name: "石田 貴徳", image: "13.png", nameImage: "画像13.png" },
    { name: "谷藤 良祐", image: "14.png", nameImage: "画像14.png" },
    { name: "相澤 勇也", image: "15.png", nameImage: "画像15.png" },
    { name: "小原 健心", image: "16.png", nameImage: "画像16.png" },
    { name: "渡邉 綾乃", image: "17.png", nameImage: "画像17.png" },
    { name: "小野寺 広敏", image: "18.png", "nameImage": "画像18.png" },
    { name: "清水 陽平", image: "19.png", "nameImage": "画像19.png" },
    { name: "渡部 司", image: "20.png", "nameImage": "画像20.png" },
    { name: "青柳 月弥", image: "21.png", "nameImage": "画像21.png" },
    { name: "橋詰 仁美", image: "22.png", "nameImage": "画像22.png" },
    { name: "井出 陸奥雄", image: "23.png", "nameImage": "画像23.png" },
    { name: "中村 武剛", image: "24.png", "nameImage": "画像24.png" },
    { name: "岡崎 侑波", image: "25.png", "nameImage": "画像25.png" },
    { name: "和田 紗耶香", image: "26.png", "nameImage": "画像26.png" },
    { name: "佐々木 進", image: "27.png", "nameImage": "画像27.png" },
    { name: "志村 佑真", image: "28.png", "nameImage": "画像28.png" },
    { name: "松永 初輝", image: "29.png", "nameImage": "画像29.png" },
    { name: "金子 竜久", image: "30.png", "nameImage": "画像30.png" },
    //{ name: "石川 朋華", image: "31.png", "nameImage": "画像31.png" },
    { name: "林 家俊", image: "32.png", "nameImage": "画像32.png" },
    { name: "亀山 剛彦", image: "33.png", "nameImage": "画像33.png" },
    { name: "上口 昌史", image: "34.png", "nameImage": "画像34.png" },
    { name: "髙橋 護", image: "35.png", "nameImage": "画像35.png" },
    { name: "高橋 涼", image: "36.png", "nameImage": "画像36.png" },
    { name: "工藤 嶺", image: "37.png", "nameImage": "画像37.png" },
    { name: "佐藤 玲偉", image: "38.png", "nameImage": "画像38.png" },
    { name: "苅谷 暁代", image: "39.png", "nameImage": "画像39.png" },
    { name: "外山 泰生", image: "40.png", "nameImage": "画像40.png" },
    { name: "中村 享永", image: "41.png", "nameImage": "画像41.png" },
    { name: "渡邉 政伸", image: "42.png", "nameImage": "画像42.png" },
    { name: "八木 彩菜", image: "43.png", "nameImage": "画像43.png" },
    { name: "八子 泰周", image: "44.png", "nameImage": "画像44.png" },
    { name: "松浦 正志", image: "45.png", "nameImage": "画像45.png" },
    { name: "佐藤 明弘", image: "46.png", "nameImage": "画像46.png" },
    { name: "大黒 将史", image: "47.png", "nameImage": "画像47.png" },
    { name: "西 赳", image: "48.png", "nameImage": "画像48.png" },
    { name: "岡﨑 拓也", image: "49.png", "nameImage": "画像49.png" },
    { name: "上田 恵里花", image: "50.png", "nameImage": "画像50.png" },
    { name: "菊地 一勝", image: "51.png", "nameImage": "画像51.png" },
    //{ name: "内藤 圭一", image: "52.png", "nameImage": "画像52.png" },
    { name: "木村 晃士", image: "53.png", "nameImage": "画像53.png" },
    { name: "菅原 敏之", image: "54.png", "nameImage": "画像54.png" },
    { name: "吉川 賢哉", image: "55.png", "nameImage": "画像55.png" },
    { name: "佐伯 柚樹", image: "56.png", "nameImage": "画像56.png" },
    { name: "今岡 美乃里", image: "57.png", "nameImage": "画像57.png" },
    { name: "小林 賢二", image: "58.png", "nameImage": "画像58.png" },
    { name: "西山 大亮", image: "59.png", "nameImage": "画像59.png" },
    { name: "菅谷 楓", image: "60.png", "nameImage": "画像60.png" },
    { name: "佐藤 登", image: "61.png", "nameImage": "画像61.png" },
    //{ name: "和田 圭司", image: "62.png", "nameImage": "画像62.png" },
    { name: "黒羽子 大輔", image: "63.png", "nameImage": "画像63.png" },
    { name: "井上 幸治", image: "64.png", "nameImage": "画像64.png" },
    { name: "竹島 岳也", image: "65.png", "nameImage": "画像65.png" },
    { name: "平川 桜子", image: "66.png", "nameImage": "画像66.png" },
    { name: "吉村 優七", image: "67.png", "nameImage": "画像67.png" },
    { name: "山本 寧々", image: "68.png", "nameImage": "画像68.png" },
    { name: "上田 将太", image: "69.png", "nameImage": "画像69.png" },
    { name: "浅野 領太", image: "70.png", "nameImage": "画像70.png" },
    //{ name: "芥川 隆太", image: "71.png", "nameImage": "画像71.png" },
    { name: "鈴木 亮広", image: "72.png", "nameImage": "画像72.png" },
    { name: "佐賀 雄樹", image: "73.png", "nameImage": "画像73.png" },
    { name: "菊池 明日香", image: "74.png", "nameImage": "画像74.png" },
    { name: "吉田 矩萌", image: "75.png", "nameImage": "画像75.png" },
    { name: "古川 雄太", image: "76.png", "nameImage": "画像76.png" },
    { name: "飛田 悠里", image: "77.png", "nameImage": "画像77.png" },
    { name: "森 結衣子", image: "78.png", "nameImage": "画像78.png" },
    { name: "佐々木 歩", image: "79.png", "nameImage": "画像79.png" },
    { name: "谷内山 勝俊", image: "80.png", "nameImage": "画像80.png" },
    { name: "一法師 達也", image: "81.png", "nameImage": "画像81.png" },
    { name: "葛岡 拓真", image: "82.png", "nameImage": "画像82.png" },
    { name: "厚木 菜良", image: "83.png", "nameImage": "画像83.png" },
    { name: "下道 銀士", image: "84.png", "nameImage": "画像84.png" },
    { name: "小林 達夫", image: "85.png", "nameImage": "画像85.png" },
    { name: "林 容", image: "86.png", "nameImage": "画像86.png" },
    { name: "橋田 昌之", image: "87.png", "nameImage": "画像87.png" },
    { name: "田久 敦士", image: "88.png", "nameImage": "画像88.png" },
    { name: "小川 浩一", image: "89.png", "nameImage": "画像89.png" },
    { name: "福重 実", image: "90.png", "nameImage": "画像90.png" },
    { name: "内間 直人", image: "91.png", "nameImage": "画像91.png" },
    { name: "大野 卓実", image: "92.png", "nameImage": "画像92.png" },
    { name: "近藤 肇", image: "93.png", "nameImage": "画像93.png" },
    { name: "木村 剛大", image: "94.png", "nameImage": "画像94.png" },
    { name: "石黒 翔太", image: "95.png", "nameImage": "画像95.png" },
    { name: "小助川 祐", image: "96.png", "nameImage": "画像96.png" },
    { name: "酒井 茜", image: "97.png", "nameImage": "画像97.png" },
    { name: "佐々木 豪", image: "98.png", "nameImage": "画像98.png" },
    { name: "増田 晃次", image: "99.png", "nameImage": "画像99.png" },
    { name: "福原 光咲", image: "100.png", "nameImage": "画像100.png" },
    { name: "LUONG MY NGUYET", image: "101.png", "nameImage": "画像101.png" },
    { name: "伊谷 会那", image: "102.png", "nameImage": "画像102.png" },
    { name: "古川 麻耶", image: "103.png", "nameImage": "画像103.png" },
    { name: "小林 輝久", image: "104.png", "nameImage": "画像104.png" },
    { name: "昆 克実", image: "105.png", "nameImage": "画像105.png" },
    { name: "中野 智子", image: "106.png", "nameImage": "画像106.png" },
    { name: "髙井 悠", image: "107.png", "nameImage": "画像107.png" },
    { name: "鈴木 孝陸", image: "108.png", "nameImage": "画像108.png" },
    { name: "渡邉 佑夏", image: "109.png", "nameImage": "画像109.png" },
    { name: "村上 明穂", image: "110.png", "nameImage": "画像110.png" },
    { name: "田中 淳子", image: "111.png", "nameImage": "画像111.png" },
    { name: "栗原 しのぶ", image: "112.png", "nameImage": "画像112.png" },
    { name: "清水 瞳", image: "113.png", "nameImage": "画像113.png" },
    { name: "稲崎 江里", image: "114.png", "nameImage": "画像114.png" },
    { name: "安井 亜美", image: "115.png", "nameImage": "画像115.png" },
    { name: "大久保 明朗", image: "116.png", "nameImage": "画像116.png" },
    { name: "神 慶人", image: "117.png", "nameImage": "画像117.png" },
    { name: "松沢 弘太", image: "118.png", "nameImage": "画像118.png" },
    { name: "石井 創", image: "119.png", "nameImage": "画像119.png" },
    { name: "廣田 佳祐", image: "120.png", "nameImage": "画像120.png" },
    { name: "大西 裕治", image: "121.png", "nameImage": "画像121.png" },
    { name: "山口 浩平", image: "122.png", "nameImage": "画像122.png" },
    { name: "小山 真平", image: "123.png", "nameImage": "画像123.png" },
    { name: "笠井 瑛里香", image: "124.png", "nameImage": "画像124.png" },
    { name: "安田 優樹", image: "125.png", "nameImage": "画像125.png" },
    { name: "早坂 康佑", image: "126.png", "nameImage": "画像126.png" },
    { name: "隈川 雛奈子", image: "127.png", "nameImage": "画像127.png" },
];

// 新しいギフト画像の配列を追加 (30種類)
const giftImages = [
    "gift_1.png", // 実際のファイル名に置き換えてください
    "gift_2.png", // 実際のファイル名に置き換えてください
    "gift_3.png", // 実際のファイル名に置き換えてください
    "gift_4.png", // 実際のファイル名に置き換えてください
    "gift_5.png", // 実際のファイル名に置き換えてください
    "gift_6.png", // 実際のファイル名に置き換えてください
    "gift_7.png", // 実際のファイル名に置き換えてください
    "gift_8.png", // 実際のファイル名に置き換えてください
    "gift_9.png", // 実際のファイル名に置き換えてください
    "gift_10.png", // 実際のファイル名に置き換えてください
    "gift_11.png", // 実際のファイル名に置き換えてください
    "gift_12.png", // 実際のファイル名に置き換えてください
    "gift_13.png", // 実際のファイル名に置き換えてください
    "gift_14.png", // 実際のファイル名に置き換えてください
    "gift_15.png", // 実際のファイル名に置き換えてください
    "gift_16.png", // 実際のファイル名に置き換えてください
    "gift_17.png", // 実際のファイル名に置き換えてください
    "gift_18.png", // 実際のファイル名に置き換えてください
    "gift_19.png", // 実際のファイル名に置き換えてください
    "gift_20.png", // 実際のファイル名に置き換えてください
    "gift_21.png", // 実際のファイル名に置き換えてください
    "gift_22.png", // 実際のファイル名に置き換えてください
    "gift_23.png", // 実際のファイル名に置き換えてください
    "gift_24.png", // 実際のファイル名に置き換えてください
    "gift_25.png", // 実際のファイル名に置き換えてください
    "gift_26.png", // 実際のファイル名に置き換えてください
    "gift_27.png", // 実際のファイル名に置き換えてください
    "gift_28.png", // 実際のファイル名に置き換えてください
    "gift_29.png", // 実際のファイル名に置き換えてください
    "gift_30.png", // 実際のファイル名に置き換えてください
];

// ギフト名画像の配列
const giftNameImages = [
    "gift1_name.png",
    "gift2_name.png",
    "gift3_name.png",
    "gift4_name.png",
    "gift5_name.png",
    "gift6_name.png",
    "gift7_name.png",
    "gift8_name.png",
    "gift9_name.png",
    "gift10_name.png",
    "gift11_name.png",
    "gift12_name.png",
    "gift13_name.png",
    "gift14_name.png",
    "gift15_name.png",
    "gift16_name.png",
    "gift17_name.png",
    "gift18_name.png",
    "gift19_name.png",
    "gift20_name.png",
    "gift21_name.png",
    "gift22_name.png",
    "gift23_name.png",
    "gift24_name.png",
    "gift25_name.png",
    "gift26_name.png",
    "gift27_name.png",
    "gift28_name.png",
    "gift29_name.png",
    "gift30_name.png",
];


// スピニング中に表示する16枚のギフト画像
const spinningGiftImages = [
    "spinning_gift_1.png", // 実際のファイル名に置き換えてください
    "spinning_gift_2.png", // 実際のファイル名に置き換えてください
    "spinning_gift_3.png", // 実際のファイル名に置き換えてください
    "spinning_gift_4.png", // 実際のファイル名に置き換えてください
    "spinning_gift_5.png", // 実際のファイル名に置き換えてください
    "spinning_gift_6.png", // 実際のファイル名に置き換えてください
    "spinning_gift_7.png", // 実際のファイル名に置き換えてください
    "spinning_gift_8.png", // 実際のファイル名に置き換えてください
    "spinning_gift_9.png", // 実際のファイル名に置き換えてください
    "spinning_gift_10.png", // 実際のファイル名に置き換えてください
    "spinning_gift_11.png", // 実際のファイル名に置き換えてください
    "spinning_gift_12.png", // 実際のファイル名に置き換えてください
    "spinning_gift_13.png", // 実際のファイル名に置き換えてください
    "spinning_gift_14.png", // 実際のファイル名に置き換えてください
    "spinning_gift_15.png", // 実際のファイル名に置き換えてください
    "spinning_gift_16.png", // 実際のファイル名に置き換えてください
];


let currentParticipants = [...allParticipants]; // シャッフル用
// スピニング時間とアニメーション関連の変数
let animationInterval; // setIntervalのIDを保持
let totalSpinTime = 2500; // スピニングの合計時間（ミリ秒）
const imageChangeInterval = 50; // 画像が変わる間隔（ミリ秒）

let lotteryCount = 0; // 抽選回数をカウントする変数
const MAX_DISPLAY_COUNT = 30; // 表示する抽選回数の上限（この回数までカウントダウン表示）

// DOM要素の取得 (一部はDOMContentLoaded内で初期化)
const container = document.querySelector('.container');
const introImage = document.getElementById('introImage');
const startButton = document.getElementById('startButton');
const remainingCountDisplay = document.getElementById('remainingCountDisplay');



// 動的に追加される要素を保持するための変数 (display-areaと関連要素)
let displayArea;
let congratulationsMessage;
let selectedImage;
let giftImage; // 新しいギフト画像要素
let giftNameImage; // 新しいギフト名画像要素
let selectedName;
let resultActionsDiv; // result-actionsへの参照を保持
let imageRow; // 画像を横並びにするコンテナ

// 全ての画像をプリロードする関数
function preloadAllImages() {
    allParticipants.forEach(p => {
        const img = new Image();
        img.src = `images/${p.image}`;
        const nameImg = new Image();
        nameImg.src = `images/${p.nameImage}`;
    });
    // 新しいギフト画像をプリロード
    giftImages.forEach(gif => {
        const giftImg = new Image();
        giftImg.src = `images/${gif}`;
    });
    
    // ギフト名画像をプリロード
    giftNameImages.forEach(nameGif => {
        const giftNameImg = new Image();
        giftNameImg.src = `images/${nameGif}`;
    });


    // スピニング用ギフト画像をプリロード
    spinningGiftImages.forEach(gif => {
        const spinningGiftImg = new Image();
        spinningGiftImg.src = `images/${gif}`;
    });

    // ボタンの背景画像
    const startNormal = new Image();
    startNormal.src = 'images/start_button.png'; // 抽選開始ボタンの通常画像
    const rerunNormal = new Image();
    rerunNormal.src = 'images/nextbutton.png'; // もう一度抽選ボタンの通常画像
    
    // 背景画像もプリロード
    const bgImg = new Image();
    bgImg.src = 'images/background.jpg';

    console.log("All images preloaded.");
}

// display-areaを動的に作成する関数
function createDisplayArea() {
    displayArea = document.createElement('div');
    displayArea.id = 'display-area';
    displayArea.classList.add('display-area'); // style.cssで定義されたスタイルを適用

    congratulationsMessage = document.createElement('span');
    congratulationsMessage.id = 'congratulationsMessage';
    congratulationsMessage.classList.add('hidden'); // 初期は非表示
    congratulationsMessage.textContent = 'おめでとうございます！';

    imageRow = document.createElement('div'); // 新しいimage-rowコンテナを作成
    imageRow.classList.add('image-row'); // CSSでスタイルを適用するためのクラス


    // 参加者画像と名前画像をまとめるコンテナ
    const participantColumn = document.createElement('div');
    participantColumn.classList.add('participant-column');

    selectedImage = document.createElement('img');
    selectedImage.id = 'selectedImage';
    selectedImage.alt = '選ばれた画像';
    selectedImage.src = ''; // 初期値は空

    resultActionsDiv = document.createElement('div'); // resultActionsDivを初期化
    resultActionsDiv.classList.add('result-actions'); // style.cssで定義されたスタイルを適用

    selectedName = document.createElement('img');
    selectedName.id = 'selectedName';
    selectedName.alt = '選ばれた名前';
    selectedName.src = ''; // 初期値は空

    resultActionsDiv.appendChild(selectedName); // selectedNameをresultActionsDivに追加
    participantColumn.appendChild(selectedImage); // selectedImageをparticipantColumnに追加
    participantColumn.appendChild(resultActionsDiv); // resultActionsDivをparticipantColumnに追加

    // ギフト画像をまとめるコンテナ
    const giftColumn = document.createElement('div');
    giftColumn.classList.add('gift-column');

    giftImage = document.createElement('img');
    giftImage.id = 'giftImage';
    giftImage.alt = 'ギフト画像';
    giftImage.src = ''; // 初期値は空
    giftImage.classList.add('gift-image'); // ギフト画像用のクラスを追加 (CSSで調整)

    // ★追加★: ギフト名画像要素を作成
    giftNameImage = document.createElement('img');
    giftNameImage.id = 'giftNameImage';
    giftNameImage.alt = 'ギフト名';
    giftNameImage.src = ''; // 初期値は空
    giftNameImage.classList.add('gift-name-image'); // スタイルを適用するためのクラス

    giftColumn.appendChild(giftImage);
    giftColumn.appendChild(giftNameImage); // ★追加★: giftNameImageをgiftImageの下に追加

    imageRow.appendChild(participantColumn);
    imageRow.appendChild(giftColumn); // image-rowにgiftColumnを追加

    // ★ここまで修正・追加★

    displayArea.appendChild(congratulationsMessage);
    displayArea.appendChild(imageRow); // displayAreaにimage-rowを追加

    // .top-image-container の直後に追加
    const topImageContainer = document.querySelector('.top-image-container');
    if (topImageContainer) {
        topImageContainer.after(displayArea);
    } else {
        // topImageContainer が見つからない場合は、startButtonのparentNodeに挿入
        container.insertBefore(displayArea, startButton.parentNode);
    }
    console.log("Display area created and appended.");
}

// display-areaを削除する関数 (初期状態に戻すため)
function removeDisplayArea() {
    if (displayArea && displayArea.parentNode) {
        displayArea.parentNode.removeChild(displayArea);
        displayArea = null; // 参照をクリア
        // displayAreaが削除されたら、中の要素への参照もクリア
        congratulationsMessage = null;
        selectedImage = null;
        giftImage = null; // 参照をクリア
        selectedName = null;
        resultActionsDiv = null; // この参照もクリア
        imageRow = null; // 参照をクリア
        console.log("Display area removed and references cleared.");
    }
}

// 抽選結果関連の要素を非表示にする関数
function hideAllResults() {
    // これらの要素はdisplayAreaが作成された後に参照が設定されるため、nullチェックが必要
    if (congratulationsMessage) congratulationsMessage.classList.add('hidden');
    if (selectedImage) {
        selectedImage.classList.add('hidden');
        selectedImage.style.transform = 'scale(0)'; // アニメーション用
        selectedImage.style.opacity = '0'; // アニメーション用
    }
    if (giftImage) { // ギフト画像も非表示に
        giftImage.classList.add('hidden');
        giftImage.style.transform = 'scale(0)'; // アニメーション用
        giftImage.style.opacity = '0'; // アニメーション用
    }
    // ★修正★: selectedNameとresultActionsDivもここで非表示にしておく
    if (selectedName) {
        selectedName.classList.add('hidden');
    }
    if (resultActionsDiv) {
        resultActionsDiv.style.opacity = '0'; // アニメーション用
        resultActionsDiv.classList.add('hidden'); // hiddenクラスも追加
    }
    
    if (remainingCountDisplay) remainingCountDisplay.classList.add('hidden'); // 非表示にする
    console.log("All result elements hidden.");
}

// スピニングアニメーションの実行
function spinAnimation() {
    // 全ての要素を一度リセット (selectedImageとselectedNameを隠す)
    hideAllResults();

    const lotteryVideo = document.getElementById("lotteryVideo");
  const winnerVideo = document.getElementById("winnerVideo");

  // 当選動画は止めて非表示
  winnerVideo.pause();
  winnerVideo.style.display = "none";

  // 抽選中動画を再生
  lotteryVideo.style.display = "block";
  lotteryVideo.currentTime = 0;
  lotteryVideo.play().catch(e => console.warn("抽選動画再生失敗:", e));

    // selectedImageとgiftImageを非表示状態からアニメーション準備
    if (selectedImage) {
        selectedImage.classList.remove('hidden'); // hiddenクラスを削除して表示状態にする
        selectedImage.style.transition = 'none'; // アニメーションを一時的に無効
        selectedImage.style.transform = 'scale(1)'; // 表示中の画像を瞬時に正しいサイズにする
        selectedImage.style.opacity = '1';
        selectedImage.offsetHeight; // 強制リフロー (スタイル変更を反映させる)
    }
    if (giftImage) {
        giftImage.classList.remove('hidden'); // hiddenクラスを削除して表示状態にする
        giftImage.style.transition = 'none'; // アニメーションを一時的に無効
        giftImage.style.transform = 'scale(1)'; // 表示中の画像を瞬時に正しいサイズにする
        giftImage.style.opacity = '1';
        giftImage.offsetHeight; // 強制リフロー (スタイル変更を反映させる)
    }
    // スピニング中の表示エリアにクラスを追加
    if (displayArea) {
        displayArea.classList.add('spinning');
    }

    // スピニング中の画像切り替えタイマーを開始
     animationInterval = setInterval(() => {
        spinImages(); // スピニング中の画像切り替え
    }, imageChangeInterval);

    
    // スピニング終了後の処理を遅延実行
    setTimeout(() => {
        clearInterval(animationInterval); // スピニングを停止
        console.log("Spinning animation ended.");
        if (displayArea) {
            displayArea.classList.remove('spinning'); // スピニングクラスを削除
        }
        displayFinalResult(); // 最終結果を表示する関数を呼び出す
    }, totalSpinTime); // totalSpinTime は2000msに設定済み
}



// 抽選結果関連の要素を表示する関数
function showResultElements() {
    // congratulationsMessage以外の要素の表示は各setTimeoutで制御するため、ここでは行わない
    if (congratulationsMessage) congratulationsMessage.classList.remove('hidden');
    console.log("Result elements shown.");
}




// スピニング中の画像切り替え
function spinImages() {
    // allParticipants配列からランダムに画像を選んで表示
    const randomIndex = Math.floor(Math.random() * allParticipants.length);
    const participant = allParticipants[randomIndex];
    if (selectedImage) {
        selectedImage.src = `images/${participant.image}`;
    }

   // ★修正★: spinningGiftImages配列からランダムに画像を選んで表示
    const randomSpinningGiftIndex = Math.floor(Math.random() * spinningGiftImages.length);
    const spinningGift = spinningGiftImages[randomSpinningGiftIndex];
    if (giftImage) {
        giftImage.src = `images/${spinningGift}`;
    }

    // ★削除★: giftNameImageの更新は不要    

}

// 抽選開始ボタンのクリックハンドラ
function handleStartButtonClick() {
    console.log("Start button clicked.");

    // 抽選回数が30回に達したら処理を停止
    if (lotteryCount >= MAX_DISPLAY_COUNT) {
        alert("抽選は終了しました。");
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none';
        if (displayArea) { removeDisplayArea(); }
        if (introImage) { introImage.classList.add('hidden'); }
        if (remainingCountDisplay) { remainingCountDisplay.classList.add('hidden'); }
        return;
    }

    // 全員抽選済みの場合のチェック（127回抽選した後）
    if (currentParticipants.length === 0) {
        alert("全員抽選済みです！これ以上抽選できません。");
        startButton.classList.add('hidden');
        startButton.style.pointerEvents = 'none';
        if (displayArea) { removeDisplayArea(); } // displayAreaも削除
        if (introImage) { introImage.classList.add('hidden'); }
        // remainingCountDisplayはHTMLに常に存在するため、hiddenクラスで非表示
        if (remainingCountDisplay) { remainingCountDisplay.classList.add('hidden'); }
        return;
    }

    // 導入画像と開始ボタンを隠す
    if (introImage) {
        introImage.classList.add('hidden');
        console.log("Intro image hidden.");
    }

    startButton.classList.add('hidden'); // スピニング中はボタンを非表示に
    startButton.style.pointerEvents = 'none'; // クリックできないようにする
    
    startButton.classList.remove('rerun-button'); // 念のためrerun-buttonクラスを削除しておく

    // display-areaがまだ存在しない場合に作成
    if (!displayArea) {
        createDisplayArea();
        console.log("Display area was not present, created now.");
    } else {
        // displayAreaが既に存在する場合は、要素をリセット
        hideAllResults(); // selectedImageなどは非表示にする
        console.log("Existing display area reset.");
    }

    displayArea.classList.remove('hidden');

    // スピニング開始時には、残り回数表示を一旦非表示にする (結果表示時に再表示)
    if (remainingCountDisplay) {
        remainingCountDisplay.classList.add('hidden');
    }

    // ここで新しいspinAnimation関数を呼び出す
    spinAnimation();
    console.log("Spinning animation initiated.");
}

// 最終結果を表示する関数
function displayFinalResult() {

    console.log("displayFinalResult called.");

    if (currentParticipants.length === 0) {
        alert("全員抽選済みです！これ以上抽選できません。");
        startButton.textContent = "全員抽選終了"; // 全員抽選済みのメッセージ
        startButton.classList.remove('hidden'); // ボタンは表示する
        startButton.style.pointerEvents = 'none'; // クリック不可にする
        startButton.classList.remove('rerun-button'); // スタイルも戻す
        if (displayArea) { removeDisplayArea(); }
        // remainingCountDisplayはHTMLに常に存在するため、hiddenクラスで非表示
        if (remainingCountDisplay) { remainingCountDisplay.classList.add('hidden'); }
        return;
    }

    const selectedParticipant = getRandomParticipant();
    
    // ★修正箇所★
    // ギフトの重複を避けるために、選ばれたギフトを配列から削除するロジックを追加
    const selectedGiftIndex = Math.floor(Math.random() * giftImages.length);
    const selectedGift = giftImages.splice(selectedGiftIndex, 1)[0]; // 選ばれたギフトを削除して取得
    const selectedGiftName = giftNameImages.splice(selectedGiftIndex, 1)[0]; // 対応するギフト名も削除して取得

    // 結果をオブジェクトとして作成し、配列に追加
    const result = {
        participantName: selectedParticipant.name,
        participantImage: selectedParticipant.image,
        giftImage: selectedGift,
        giftNameImage: selectedGiftName
    };
    lotteryResults.push(result);

    // localStorageに保存する
    localStorage.setItem('lotteryResults', JSON.stringify(lotteryResults));

    if (selectedParticipant) {
        lotteryCount++;
        console.log(`Actual lottery count: ${lotteryCount}`);

        // selectedImageの最終結果表示アニメーション準備
        selectedImage.style.transition = 'none'; // アニメーションを一時的に無効
        selectedImage.style.transform = 'scale(0)';
        selectedImage.style.opacity = '0';
        selectedImage.src = `images/${selectedParticipant.image}`;
        selectedName.src = `images/${selectedParticipant.nameImage}`;
        console.log(`Final participant result: ${selectedParticipant.name}, image: ${selectedParticipant.image}`);

        // giftImageの最終結果表示アニメーション準備（最初は非表示のまま）
        giftImage.style.transition = 'none';
        giftImage.style.transform = 'scale(0)';
        giftImage.style.opacity = '0';
        giftImage.src = `images/${selectedGift}`;
        console.log(`Final gift result: ${selectedGift}`);

        // ★追加★: giftNameImageの最終結果表示アニメーション準備
        if (giftNameImage) {
            giftNameImage.style.transition = 'none';
            giftNameImage.style.transform = 'scale(0)';
            giftNameImage.style.opacity = '0';
            giftNameImage.src = `images/${selectedGiftName}`;
            console.log(`Final gift name result: ${selectedGiftName}`);
        }

        // ★追加★ selectedNameとresultActionsDivのアニメーション準備
        if (selectedName) selectedName.classList.add('hidden'); // hiddenを確保
        if (resultActionsDiv) {
            resultActionsDiv.classList.add('hidden'); // hiddenを確保
            resultActionsDiv.style.opacity = '0'; // 透明度を0に確保
        }

        selectedImage.offsetHeight; // 強制リフロー (ブラウザにスタイル変更をすぐに適用させる)
        giftImage.offsetHeight; // 強制リフロー
        // ★追加★ selectedNameとresultActionsDivの強制リフロー
        if (selectedName) selectedName.offsetHeight;
        if (resultActionsDiv) resultActionsDiv.offsetHeight;


        // selectedImage, selectedName, resultActionsDivのアニメーションを同時に開始
        setTimeout(() => {
            selectedImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in';
            selectedImage.style.transform = 'scale(1)';
            selectedImage.style.opacity = '1';
            console.log("selectedImage animation started.");

            // ★追加★ selectedNameとresultActionsDivもここで表示
            if (selectedName) selectedName.classList.remove('hidden');
            if (resultActionsDiv) {
                resultActionsDiv.classList.remove('hidden');
                resultActionsDiv.style.transition = 'opacity 1.0s ease-in'; // resultActionsDivにもアニメーションを追加
                resultActionsDiv.style.opacity = '1';
            }
            console.log("selectedName and resultActionsDiv animation started.");

        }, 50); // 50msの短い遅延で開始


        // ★修正★: giftImageとgiftNameImageのアニメーションを同時に開始
        setTimeout(() => {
            giftImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in';
            giftImage.style.transform = 'scale(1)';
            giftImage.style.opacity = '1';

            if (giftNameImage) {
                giftNameImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in';
                giftNameImage.style.transform = 'scale(1)';
                giftNameImage.style.opacity = '1';
                giftNameImage.classList.remove('hidden');
            }
            console.log("giftImage and giftNameImage animation started.");
        }, 1050); // selectedImageと同時に現れるように、同じ時間でsetTimeoutを設定

        
        // 最終画像の表示アニメーションが完了した後にボタンなどを表示
        // このsetTimeoutの遅延時間も、最も遅いアニメーション（giftImage）の完了に合わせて調整
        setTimeout(() => {
            showResultElements(); // おめでとうメッセージを表示 (selectedName, selectedImage, resultActionsDiv, giftImageは個別に制御)

        // 30回目に達したら、次の抽選ボタンを非表示にする
        if (lotteryCount === MAX_DISPLAY_COUNT) {
            // 抽選が終了したことをコンソールに記録
            console.log("Lottery has reached the max count. Redirecting to final page.");
            
            // 5秒後に指定したページにリダイレクト
            setTimeout(() => {
                window.location.href = "final_page.html"; // "final_page.html"を目的のページに置き換えてください
            }, 5000); // 5000ミリ秒 = 5秒
            
            // 現在の抽選結果は画面に残しておくため、ここでreturnしない
            // ★変更終了★

        }

        // 残りの表示回数を計算し、30回目以降は非表示にするロジック
        const displayRemainingCount = MAX_DISPLAY_COUNT - lotteryCount;
        // remainingCountDisplayがnullでないことを確認
        if (remainingCountDisplay) {
             if (displayRemainingCount > 0) {
                remainingCountDisplay.textContent = `Last... ${displayRemainingCount} `;
                remainingCountDisplay.classList.remove('hidden'); // 表示
                console.log(`Displayed remaining count: ${displayRemainingCount}`);
              } else {
                    // 表示すべき回数が0以下になった場合 (30回目以降)
                    remainingCountDisplay.classList.add('hidden'); // 非表示
                    console.log("Displayed remaining count is 0 or less. Hiding display.");
                }
            }
            // 30回目以降でない場合のみボタンを表示する
            if (lotteryCount < MAX_DISPLAY_COUNT) {
            startButton.textContent = "もう一度抽選";
            startButton.classList.remove('hidden');
            startButton.style.pointerEvents = 'auto';
            startButton.classList.add('rerun-button');
            console.log("Button text set to 'もう一度抽選' and rerun-button class added.");
        }
                      
        }, 2200); // selectedImageのアニメーション1秒 + giftImageの遅延1秒 + giftImageのアニメーション1秒 + α (例: 1.2秒) = 3.2秒 (調整済み)
    }
    const lotteryVideo = document.getElementById("lotteryVideo");
    const winnerVideo = document.getElementById("winnerVideo");


   // 🔄 動画切り替え
  lotteryVideo.pause();
  lotteryVideo.style.display = "none";

  winnerVideo.style.display = "block";
  winnerVideo.currentTime = 0;
  winnerVideo.play().catch(e => console.warn("当選動画再生失敗:", e));
   

  document.getElementById("result-display").style.display = "block";
}

// 参加者の中からランダムに一人選ぶ関数 (重複なし)
function getRandomParticipant() {
    if (currentParticipants.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * currentParticipants.length);
    const selected = currentParticipants[randomIndex];
    currentParticipants.splice(randomIndex, 1); // 選ばれた人を配列から削除（重複防止）
    return selected;
}

// ページロード時に導入画像を表示 (初期状態)
document.addEventListener('DOMContentLoaded', () => {
    preloadAllImages(); // 全画像をプリロード

    // 導入画像を初期表示
    if (introImage) {
        introImage.classList.remove('hidden');
        console.log("DOMContentLoaded: introImage displayed.");
    }
    // 初期状態ではstartButtonに.rerun-buttonクラスがないことを確認
    startButton.classList.remove('rerun-button');
    console.log("DOMContentLoaded: Initial state set. Rerun class ensured absent.");

    // remainingCountDisplayはHTMLに直接配置されるので、ここで初期状態をhiddenにする
    if (remainingCountDisplay) {
        remainingCountDisplay.classList.add('hidden');
        console.log("DOMContentLoaded: remainingCountDisplay initially hidden.");
    }

    // 開始ボタンにイベントリスナーを設定
    startButton.addEventListener('click', handleStartButtonClick);
});

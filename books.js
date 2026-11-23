/* 書架設定：要新增書，就在這裡加一筆，並把頁面圖放到 books/<id>/pages/、縮圖放到 books/<id>/thumbs/ */
/* 書架頁的大標題與小標題：直接改這兩行文字就好（小標題留空 '' 就不顯示） */
window.SITE = { title: '桃園好食光・營養升級全照顧', subtitle: '吃得飽 × 吃得好 × 吃得安心 × 師生共好', notice: '此網頁僅供評鑑活動使用' };

window.BOOKS = [
  {
    id: 'review',
    goText: '開始匯報',
    row: 1,
    title: '午餐輔導團評鑑書',
    subtitle: '桃園市午餐輔導團亮點活動',
    pages: 11,
    single: true,           // 橫式簡報：書攤開但只顯示右邊一頁
    secs: [4, 11, 10, 19, 13, 14, 14, 11, 12, 12, 17],   // 每頁停留秒數（第 1～11 頁），來自定稿版簡報的自動換頁時間
    holdEnd: true,           // 旁白播完後停在最後一頁（不循環）；要循環就刪掉這行或改成 false
    audio: 'media/review-narration.m4a?v=1',   // 旁白：換頁跟著聲音走（換旁白檔時，把 ?v=1 改成 ?v=2，網頁才會抓到新檔）
    cues: [0, 4.3, 16.3, 26.1, 47.8, 61.9, 77.1, 92.3, 104.2, 116.7, 129.5],   // 第 1～11 頁各從旁白第幾秒開始（用校時工具 cue.html 量的）
    ratio: 16 / 9,
    toc: [
      { t: '封面', p: 1 },
      { t: '營養升級看得見', p: 2 },
      { t: '生生喝鮮乳・桃園鈣健康', p: 3 },
      { t: '校園米其林美食爭霸賽', p: 4 },
      { t: '友善環境健康好餐', p: 5 },
      { t: '「食」在安心・食農共學', p: 6 },
      { t: '一口桃滋味', p: 7 },
      { t: '繽紛蔬樂盒', p: 8 },
      { t: '校園食農教育成果展', p: 9 },
      { t: '午餐教育工作研習及參訪', p: 10 },
      { t: '食育力五星城市', p: 11 }
    ]
  },
  {
    id: 'peach',
    row: 2,
    title: '一口桃滋味',
    subtitle: '',
    pages: 178,
    ratio: 515.906 / 728.504,
    coverRatio: 148 / 210,
    toc: []
  },
  {
    id: 'milk',
    row: 2,
    title: '生生喝鮮乳',
    subtitle: '',
    pages: 24,
    ratio: 419.528 / 595.276,
    coverRatio: 148 / 210,
    toc: [
      { t: '目錄', p: 2 },
      { t: '實施方式', p: 3 },
      { t: '靠卡領取卡別', p: 4 },
      { t: '申辦對象', p: 6 },
      { t: '　公私立小學', p: 7 },
      { t: '　公私立幼兒園、托嬰中心', p: 8 },
      { t: '　2~6歲未就讀', p: 9 },
      { t: '申辦方式', p: 10 },
      { t: '　公私立小學', p: 11 },
      { t: '　公私立幼兒園、托嬰中心', p: 12 },
      { t: '　2~6歲未就讀', p: 13 },
      { t: '補換發卡說明', p: 14 },
      { t: '其他服務', p: 17 },
      { t: '合作通路客服專線', p: 18 },
      { t: '查詢窗口', p: 19 },
      { t: '提醒事項', p: 20 }
    ]
  },
  {
    id: 'lunch',
    row: 2,
    title: '健康好餐x食在安心',
    subtitle: '',
    pages: 82,
    single: true,           // 橫式簡報：書攤開但只顯示右邊一頁
    cover: 'books/lunch/cover.jpg',
    coverRatio: 148 / 210,
    ratio: 16 / 9,
    toc: [
      { t: '封面', p: 1 },
      { t: '食在安心成果簡報', p: 2 },
      { t: '南勢國小 健康好餐', p: 10 },
      { t: '社子國小 健康好餐', p: 57 }
    ]
  },
  {
    id: 'video',
    row: 2,
    type: 'video',
    title: '校園米其林美食爭霸賽',
    subtitle: '',
    duration: '9 分 23 秒',
    src: 'media/michelin-v3.mp4',
    poster: 'media/michelin-poster-v3.jpg',
    cover: 'media/michelin-cover.jpg',
    coverRatio: 148 / 210
  }
];


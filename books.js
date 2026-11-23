/* 書架設定：要新增書，就在這裡加一筆，並把頁面圖放到 books/<id>/pages/、縮圖放到 books/<id>/thumbs/ */
/* 書架頁的大標題與小標題：直接改這兩行文字就好（小標題留空 '' 就不顯示） */
window.SITE = { title: '桃園好食光・營養升級全照顧', subtitle: '吃得飽 × 吃得好 × 吃得安心 × 師生共好' };

window.BOOKS = [
  {
    id: 'peach',
    title: '一口桃滋味',
    subtitle: '營養午餐亮點食譜',
    pages: 178,
    ratio: 515.906 / 728.504,
    coverRatio: 148 / 210,
    toc: []
  },
  {
    id: 'milk',
    title: '生生喝鮮乳',
    subtitle: '桃園鈣健康・憑卡免費換',
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
    type: 'video',
    title: '校園米其林美食爭霸賽',
    subtitle: '活動影片',
    duration: '9 分 23 秒',
    src: 'media/michelin-v2.mp4',
    poster: 'media/michelin-poster-v2.jpg',
    cover: 'media/michelin-cover.jpg',
    coverRatio: 148 / 210
  },
  {
    id: 'review',
    row: 2,
    title: '午餐輔導團評鑑書',
    subtitle: '桃園市午餐輔導團亮點活動',
    pages: 11,
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
  }
];

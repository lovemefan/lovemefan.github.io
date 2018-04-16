mePlayer({
  music: {
    src: './bgm.mp3',
    title: '疯人院',
    author: '魏晨',
    loop: true,
    cover: './cover.jpg',
    lrc:
      '[ti:疯人愿]\n[ar:魏晨]\n[al:话剧《奋斗》主题歌曲]\n[02:01.65][00:01.91]歌曲：疯人愿(话剧《奋斗》主题歌曲)\n[02:02.61][00:04.30]歌手：魏晨\n[02:03.71][00:06.40]专辑：话剧《奋斗》主题歌曲\n[02:04.93][00:08.92]作词/作曲：陆虎 编曲：刘佳\n[02:06.71][00:14.12]\n[02:08.53][00:18.57]\n[02:10.54][00:22.48]\n[00:25.00]很想念　我想你的笑脸\n[00:30.89]是对你的爱恋 声音回荡耳边\n[00:40.14]轻轻　想起你说的那些誓言\n[00:47.68]真的好遥远　在瞬间沦陷\n[02:32.28][00:54.79]很胆怯　你对我的敷衍\n[02:38.24][01:00.72]不想对谁亏欠 泪水划过指尖\n[02:47.65][01:10.52]画面　昨天的故事还在上演\n[02:55.52][01:17.61]如果能永远　我依然情愿\n[03:02.17][01:24.69]\n[03:02.54][01:25.06]我是个疯子疯子疯子只爱你的疯子\n[03:06.20][01:28.76]你是个傻子傻子傻子傻的却好懂事\n[04:02.35][03:47.55][03:09.95][01:32.51]要爱你一辈子　写爱你的故事\n[04:06.61][03:51.54][03:14.20][01:36.20]在我心里承诺了几千次\n[04:09.40][03:54.59][03:17.33][01:39.53]\n[04:09.91][03:54.92][03:17.59][01:39.90]我是个疯子疯子疯子只爱你的疯子\n[04:13.61][03:58.65][03:21.14][01:43.71]你是个傻子傻子傻子傻的却好懂事\n[04:17.20][03:24.84][01:47.41]说出我的心事　是爱你的故事\n[04:21.74][03:29.10][01:51.62]说不出爱你是我太固执\n[03:33.38][01:58.82]\n[03:40.06]我想你忘拉忘拉忘拉你的样子\n[03:44.08]'
  },
  target: '.music',
  autoplay: false
})

document.querySelector('button').addEventListener('click', function() {
  mePlayer.toggleTheme()
})

window.setTimeout(mePlayer.play, 1500)

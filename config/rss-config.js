// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "NHK 主要news",
      url: "https://www.nhk.or.jp/rss/news/cat0.xml",
      category: "NHK",
    },
    {
      name: "NHK 社会",
      url: "https://www.nhk.or.jp/rss/news/cat1.xml",
      category: "NHK",
    },
    {
      name: "NHK 科学 医疗",
      url: "https://www.nhk.or.jp/rss/news/cat3.xml",
      category: "NHK",
    },
    {
      name: "NHK 政治",
      url: "https://www.nhk.or.jp/rss/news/cat4.xml",
      category: "NHK",
    },
    {
      name: "NHK 经济",
      url: "https://www.nhk.or.jp/rss/news/cat5.xml",
      category: "NHK",
    },
    {
      name: "NHK 国际",
      url: "https://www.nhk.or.jp/rss/news/cat6.xml",
      category: "NHK",
    },
    {
      name: "NHK 体育",
      url: "https://www.nhk.or.jp/rss/news/cat7.xml",
      category: "NHK",
    },
    {
      name: "NHK 文化 娱乐",
      url: "https://www.nhk.or.jp/rss/news/cat2.xml",
      category: "NHK",
    },
    {
      name: "Hacker News 近期最佳",
      url: "https://hnrss.org/best",
      category: "科技资讯",
    },
    {
      name: "Hacker News 历史每日前十",
      url: "https://rsshub.rssforever.com/github/issue/headllines/hackernews-daily",
      category: "科技资讯",
    },
    {
      name: "Github 今日热门",
      url: "https://rsshub.rssforever.com/github/trending/daily/any",
      category: "代码项目",
    },
    {
      name: "Github 近一周热门",
      url: "https://rsshub.rssforever.com/github/trending/weekly/any",
      category: "代码项目",
    },
    {
      name: "Hugging Face 每日论文",
      url: "https://rsshub.rssforever.com/huggingface/daily-papers",
      category: "科研论文",
    },
    {
      name: "Hugging Face 博客",
      url: "https://rsshub.rssforever.com/huggingface/blog",
      category: "技术博客",
    },
    {
      name: "Google 开发者博客",
      url: "https://rsshub.rssforever.com/google/developers/en",
      category: "技术博客",
    },
    {
      name: "Google 研究博客",
      url: "https://rsshub.rssforever.com/google/research",
      category: "技术博客",
    },
    {
      name: "Product Hunt 今日热门",
      url: "https://rsshub.rssforever.com/producthunt/today",
      category: "产品资讯",
    },
    {
      name: "LINUX DO 今日热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=daily",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一周热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=weekly",
      category: "论坛",
    },
    {
      name: "LINUX DO 近一月热门",
      url: "https://r4l.deno.dev/https://linux.do/top.rss?period=monthly",
      category: "论坛",
    },
  {
    name: "少数派",
    url: "https://sspai.com/feed",
    category: "Tech",
  },
  {
    name: "机核",
    url: "https://www.gcores.com/rss",
    category: "Tech",
  },
  {
    name: "BBC 中国",
    url: "https://plink.anyfeeder.com/bbc/cn",
    category: "News",
  },
  {
    name: "NHK WORLD-JAPAN News",
    url: "https://rsshub.app/nhk/news",
    category: "News",
  },
  {
    name: "The world in brief | The Economist",
    url: "https://rsshub.app/economist/espresso",
    category: "News",
  },
  {
    name: "纽约时报中文网",
    url: "https://rsshub.app/nytimes",
    category: "News",
  },
  {
    name: "Hong Kong Free Press HKFP",
    url: "https://hongkongfp.com/feed/",
    category: "Hong Kong SAR China",
  },
  {
    name: "香港新聞RSS - 香港經濟日報 hket.com",
    url: "https://www.hket.com/rss/hongkong",
    category: "Hong Kong SAR China",
  },
  {
    name: "hongkongnews.net latest rss headlines",
    url: "http://feeds.hongkongnews.net/rss/b82693edf38ebff8",
    category: "Hong Kong SAR China",
  },
  {
    name: "RSS di   - ANSA.it",
    url: "https://www.ansa.it/sito/ansait_rss.xml",
    category: "Italy",
  },
  {
    name: "The Local",
    url: "https://feeds.thelocal.com/rss/it",
    category: "Italy",
  },
  {
    name: "RSS DiariodelWeb.it",
    url: "https://www.diariodelweb.it/rss/home/",
    category: "Italy",
  },
  {
    name: "Fanpage",
    url: "https://www.fanpage.it/feed/",
    category: "Italy",
  },
  {
    name: "Libero Quotidiano",
    url: "https://www.liberoquotidiano.it/rss.xml",
    category: "Italy",
  },
  {
    name: "Il Mattino Web",
    url: "https://www.ilmattino.it/?sez=XML&args&p=search&args[box]=Home&limit=20&layout=rss",
    category: "Italy",
  },
  {
    name: "Adnkronos - ultimoratop",
    url: "https://www.adnkronos.com//RSS_PrimaPagina.xml",
    category: "Italy",
  },
  {
    name: "Milan News",
    url: "https://www.milannews.it/rss/",
    category: "Italy",
  },
  {
    name: "Internazionale",
    url: "https://www.internazionale.it/sitemaps/rss.xml",
    category: "Italy",
  },
  {
    name: "Italy | The Guardian",
    url: "https://www.theguardian.com/world/italy/rss",
    category: "Italy",
  },
  {
    name: "Repubblica.it > Homepage",
    url: "https://www.repubblica.it/rss/homepage/rss2.0.xml",
    category: "Italy",
  },
  {
    name: "Panorama",
    url: "https://www.panorama.it/feed/gn",
    category: "Italy",
  },
  {
    name: "Japan Times latest articles",
    url: "https://www.japantimes.co.jp/feed/topstories/",
    category: "Japan",
  },
  {
    name: "Japan Today",
    url: "https://japantoday.com/feed",
    category: "Japan",
  },
  {
    name: "News On Japan",
    url: "http://www.newsonjapan.com/rss/top.xml",
    category: "Japan",
  },
  {
    name: "All - Kyodo News+",
    url: "https://english.kyodonews.net/rss/all.xml",
    category: "Japan",
  },
  {
    name: "BRIDGE（ブリッジ）テクノロジー＆スタートアップ情報",
    url: "http://feeds.feedburner.com/SdJapan",
    category: "Japan",
  },
  {
    name: "NYT > Japan",
    url: "https://www.nytimes.com/svc/collections/v1/publish/http://www.nytimes.com/topic/destination/japan/rss.xml",
    category: "Japan",
  },
  {
    name: "ライブドアニュース - 主要トピックス",
    url: "https://news.livedoor.com/topics/rss/top.xml",
    category: "Japan",
  },
  {
    name: "朝日新聞デジタル",
    url: "http://rss.asahi.com/rss/asahi/newsheadlines.rdf",
    category: "Japan",
  },
  {
    name: "9to5Mac",
    url: "https://9to5mac.com/feed/",
    category: "Apple",
  },
  {
    name: "Apple",
    url: "https://www.youtube.com/feeds/videos.xml?user=Apple",
    category: "Apple",
  },
  {
    name: "Apple Newsroom",
    url: "https://www.apple.com/newsroom/rss-feed.rss",
    category: "Apple",
  },
  {
    name: "AppleInsider News",
    url: "https://appleinsider.com/rss/news/",
    category: "Apple",
  },
  {
    name: "Cult of Mac",
    url: "https://www.cultofmac.com/feed",
    category: "Apple",
  },
  {
    name: "Daring Fireball",
    url: "https://daringfireball.net/feeds/main",
    category: "Apple",
  },
  {
    name: "MacRumors",
    url: "https://www.youtube.com/feeds/videos.xml?user=macrumors",
    category: "Apple",
  },
  {
    name: "MacRumors: Mac News and Rumors - Mac Blog",
    url: "http://feeds.macrumors.com/MacRumors-Mac",
    category: "Apple",
  },
  {
    name: "MacStories",
    url: "https://www.macstories.net/feed/",
    category: "Apple",
  },
  {
    name: "Macworld.com",
    url: "https://www.macworld.com/feed",
    category: "Apple",
  },
  {
    name: "Marco.org",
    url: "https://marco.org/rss",
    category: "Apple",
  },
  {
    name: "OS X Daily",
    url: "http://feeds.feedburner.com/osxdaily",
    category: "Apple",
  },
  {
    name: "The unofficial Apple community",
    url: "https://www.reddit.com/r/apple/.rss",
    category: "Apple",
  },
  {
    name: "iMore - The #1 iPhone, iPad, and iPod touch blog",
    url: "http://feeds.feedburner.com/TheiPhoneBlog",
    category: "Apple",
  },
  {
    name: "r/iPhone",
    url: "https://www.reddit.com/r/iphone/.rss",
    category: "Apple",
  },
  {
    name: "The Loop",
    url: "https://www.loopinsight.com/feed/",
    category: "Apple",
  },
  {
    name: "A year of reading the world",
    url: "https://ayearofreadingtheworld.com/feed/",
    category: "Books",
  },
  {
    name: "Aestas Book Blog",
    url: "https://aestasbookblog.com/feed/",
    category: "Books",
  },
  {
    name: "BOOK RIOT",
    url: "https://bookriot.com/feed/",
    category: "Books",
  },
  {
    name: "Kirkus Reviews",
    url: "https://www.kirkusreviews.com/feeds/rss/",
    category: "Books",
  },
  {
    name: "Page Array – NewInBooks",
    url: "https://www.newinbooks.com/feed/",
    category: "Books",
  },
  {
    name: "So many books, so little time",
    url: "https://www.reddit.com/r/books/.rss",
    category: "Books",
  },
  {
    name: "Wokeread",
    url: "https://wokeread.home.blog/feed/",
    category: "Books",
  },
  {
    name: "Eurogamer.net",
    url: "https://www.eurogamer.net/feed",
    category: "Gaming",
  },
  {
    name: "GameSpot - All Content",
    url: "https://www.gamespot.com/feeds/mashup/",
    category: "Gaming",
  },
  {
    name: "IGN All",
    url: "https://www.ign.com/rss/articles/feed",
    category: "Gaming",
  },
  {
    name: "Indie Games Plus",
    url: "https://indiegamesplus.com/feed/",
    category: "Gaming",
  },
  {
    name: "Kotaku",
    url: "https://kotaku.com/rss",
    category: "Gaming",
  },
  {
    name: "Makeup and Beauty Blog | Makeup Reviews, Swatches and How-To Makeup",
    url: "https://www.makeupandbeautyblog.com/feed/",
    category: "Gaming",
  },
  {
    name: "PlayStation.Blog",
    url: "http://feeds.feedburner.com/psblog",
    category: "Gaming",
  },
  {
    name: "Polygon -  All",
    url: "https://www.polygon.com/rss/index.xml",
    category: "Gaming",
  },
  {
    name: "Rock, Paper, Shotgun",
    url: "http://feeds.feedburner.com/RockPaperShotgun",
    category: "Gaming",
  },
  {
    name: "Steam RSS News Feed",
    url: "https://store.steampowered.com/feeds/news.xml",
    category: "Gaming",
  },
  {
    name: "The Ancient Gaming Noob",
    url: "http://feeds.feedburner.com/TheAncientGamingNoob",
    category: "Gaming",
  },
  {
    name: "TouchArcade - iPhone, iPad, Android Games Forum",
    url: "https://toucharcade.com/community/forums/-/index.rss",
    category: "Gaming",
  },
  {
    name: "r/gaming",
    url: "https://www.reddit.com/r/gaming.rss",
    category: "Gaming",
  },
  {
    name: "Escapist Magazine",
    url: "https://www.escapistmagazine.com/feed/",
    category: "Gaming",
  },
  {
    name: "Xbox's Major Nelson",
    url: "https://news.xbox.com/en-us/feed/",
    category: "Gaming",
  },
  {
    name: "/Film",
    url: "https://feeds2.feedburner.com/slashfilm",
    category: "Movies",
  },
  {
    name: "Ain't It Cool News Feed",
    url: "https://www.aintitcool.com/node/feed/",
    category: "Movies",
  },
  {
    name: "ComingSoon.net",
    url: "https://www.comingsoon.net/feed",
    category: "Movies",
  },
  {
    name: "Deadline",
    url: "https://deadline.com/feed/",
    category: "Movies",
  },
  {
    name: "Film School Rejects",
    url: "https://filmschoolrejects.com/feed/",
    category: "Movies",
  },
  {
    name: "FirstShowing.net",
    url: "https://www.firstshowing.net/feed/",
    category: "Movies",
  },
  {
    name: "Movie News and Discussion",
    url: "https://www.reddit.com/r/movies/.rss",
    category: "Movies",
  },
  {
    name: "Movies",
    url: "https://www.bleedingcool.com/movies/feed/",
    category: "Movies",
  },
  {
    name: "Variety",
    url: "https://variety.com/feed/",
    category: "Movies",
  },
  {
    name: "IndieWire",
    url: "https://www.indiewire.com/feed/",
    category: "Movies",
  },
  {
    name: "EDM.com - The Latest Electronic Dance Music News, Reviews & Artists",
    url: "https://edm.com/.rss/full/",
    category: "Music",
  },
  {
    name: "Metal Injection",
    url: "http://feeds.feedburner.com/metalinjection",
    category: "Music",
  },
  {
    name: "Music Business Worldwide",
    url: "https://www.musicbusinessworldwide.com/feed/",
    category: "Music",
  },
  {
    name: "Song Exploder",
    url: "http://songexploder.net/feed",
    category: "Music",
  },
  {
    name: "RSS: News",
    url: "https://pitchfork.com/feed/feed-news/rss",
    category: "Music",
  },
  {
    name: "Consequence",
    url: "https://consequence.net/feed/",
    category: "Music",
  },
  {
    name: "Billboard",
    url: "https://www.billboard.com/feed/",
    category: "Music",
  },
  {
    name: "BBC News - World",
    url: "https://feeds.bbci.co.uk/news/world/rss.xml",
    category: "News",
  },
  {
    name: "CNN.com - RSS Channel - World",
    url: "http://rss.cnn.com/rss/edition_world.rss",
    category: "News",
  },
  {
    name: "International: Top News And Analysis",
    url: "https://www.cnbc.com/id/100727362/device/rss/rss.html",
    category: "News",
  },
  {
    name: "NDTV News - World-news",
    url: "http://feeds.feedburner.com/ndtvnews-world-news",
    category: "News",
  },
  {
    name: "NYT > World News",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    category: "News",
  },
  {
    name: "Top stories - Google News",
    url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
    category: "News",
  },
  {
    name: "World",
    url: "https://feeds.washingtonpost.com/rss/world",
    category: "News",
  },
  {
    name: "World News",
    url: "https://www.reddit.com/r/worldnews/.rss",
    category: "News",
  },
  {
    name: "World News Headlines, Latest International News, World Breaking News - Times of India",
    url: "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms",
    category: "News",
  },
  {
    name: "Yahoo News - Latest News & Headlines",
    url: "https://www.yahoo.com/news/rss",
    category: "News",
  },
  {
    name: "60-Second Science",
    url: "http://rss.sciam.com/sciam/60secsciencepodcast",
    category: "Science",
  },
  {
    name: "BBC News - Science & Environment",
    url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
    category: "Science",
  },
  {
    name: "Discovery",
    url: "https://podcasts.files.bbci.co.uk/p002w557.rss",
    category: "Science",
  },
  {
    name: "FlowingData",
    url: "https://flowingdata.com/feed",
    category: "Science",
  },
  {
    name: "Invisibilia",
    url: "https://feeds.npr.org/510307/podcast.xml",
    category: "Science",
  },
  {
    name: "Latest Science News -- ScienceDaily",
    url: "https://www.sciencedaily.com/rss/all.xml",
    category: "Science",
  },
  {
    name: "NYT > Science",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    category: "Science",
  },
  {
    name: "Nature",
    url: "https://www.nature.com/nature.rss",
    category: "Science",
  },
  {
    name: "Phys.org - latest science and technology news stories",
    url: "https://phys.org/rss-feed/",
    category: "Science",
  },
  {
    name: "Probably Science",
    url: "https://probablyscience.libsyn.com/rss",
    category: "Science",
  },
  {
    name: "Sawbones: A Marital Tour of Misguided Medicine",
    url: "https://feeds.simplecast.com/y1LF_sn2",
    category: "Science",
  },
  {
    name: "Science Latest",
    url: "https://www.wired.com/feed/category/science/latest/rss",
    category: "Science",
  },
  {
    name: "Science-Based Medicine",
    url: "https://sciencebasedmedicine.org/feed/",
    category: "Science",
  },
  {
    name: "Scientific American Content: Global",
    url: "http://rss.sciam.com/ScientificAmerican-Global",
    category: "Science",
  },
  {
    name: "Shirtloads of Science",
    url: "https://shirtloadsofscience.libsyn.com/rss",
    category: "Science",
  },
  {
    name: "TED Talks Daily (SD video)",
    url: "https://pa.tedcdn.com/feeds/talks.rss",
    category: "Science",
  },
  {
    name: "The Infinite Monkey Cage",
    url: "https://podcasts.files.bbci.co.uk/b00snr0w.rss",
    category: "Science",
  },
  {
    name: "This Week in Science – The Kickass Science Podcast",
    url: "http://www.twis.org/feed/",
    category: "Science",
  },
  {
    name: "Science Vs",
    url: "https://feeds.megaphone.fm/sciencevs",
    category: "Science",
  },
  {
    name: "Reddit Science",
    url: "https://www.reddit.com/r/science/.rss",
    category: "Science",
  },
  {
    name: "Gastropod",
    url: "https://feeds.megaphone.fm/VMP6255701211",
    category: "Science",
  },
  {
    name: "Radiolab",
    url: "https://feeds.simplecast.com/EmVW7VGp",
    category: "Science",
  },
  {
    name: "Hidden Brain",
    url: "https://feeds.simplecast.com/kwWc0lhf",
    category: "Science",
  },
  {
    name: "Analog(ue)",
    url: "https://www.relay.fm/analogue/feed",
    category: "Tech",
  },
  {
    name: "Ars Technica",
    url: "http://feeds.arstechnica.com/arstechnica/index",
    category: "Tech",
  },
  {
    name: "CNET",
    url: "https://www.youtube.com/feeds/videos.xml?user=CNETTV",
    category: "Tech",
  },
  {
    name: "CNET News",
    url: "https://www.cnet.com/rss/news/",
    category: "Tech",
  },
  {
    name: "Clockwise",
    url: "https://www.relay.fm/clockwise/feed",
    category: "Tech",
  },
  {
    name: "Gizmodo",
    url: "https://gizmodo.com/feed",
    category: "Tech",
  },
  {
    name: "Hacker News",
    url: "https://news.ycombinator.com/rss",
    category: "Tech",
  },
  {
    name: "Lifehacker",
    url: "https://lifehacker.com/feed/rss",
    category: "Tech",
  },
  {
    name: "Linus Tech Tips",
    url: "https://www.youtube.com/feeds/videos.xml?user=LinusTechTips",
    category: "Tech",
  },
  {
    name: "Marques Brownlee",
    url: "https://www.youtube.com/feeds/videos.xml?user=marquesbrownlee",
    category: "Tech",
  },
  {
    name: "Mashable",
    url: "http://feeds.mashable.com/Mashable",
    category: "Tech",
  },
  {
    name: "Reply All",
    url: "https://feeds.megaphone.fm/replyall",
    category: "Tech",
  },
  {
    name: "Rocket",
    url: "https://www.relay.fm/rocket/feed",
    category: "Tech",
  },
  {
    name: "Slashdot",
    url: "http://rss.slashdot.org/Slashdot/slashdotMain",
    category: "Tech",
  },
  {
    name: "Stratechery by Ben Thompson",
    url: "https://stratechery.com/feed/",
    category: "Tech",
  },
  {
    name: "TechCrunch",
    url: "http://feeds.feedburner.com/TechCrunch",
    category: "Tech",
  },
  {
    name: "The Keyword",
    url: "https://blog.google/rss/",
    category: "Tech",
  },
  {
    name: "The Next Web",
    url: "https://thenextweb.com/feed",
    category: "Tech",
  },
  {
    name: "The Verge",
    url: "https://www.youtube.com/feeds/videos.xml?user=TheVerge",
    category: "Tech",
  },
  {
    name: "The Verge -  All Posts",
    url: "https://www.theverge.com/rss/index.xml",
    category: "Tech",
  },
  {
    name: "The Vergecast",
    url: "https://feeds.megaphone.fm/vergecast",
    category: "Tech",
  },
  {
    name: "This Week in Tech (Audio)",
    url: "https://feeds.twit.tv/twit.xml",
    category: "Tech",
  },
  {
    name: "Unbox Therapy",
    url: "https://www.youtube.com/feeds/videos.xml?user=unboxtherapy",
    category: "Tech",
  },
  {
    name: "https://www.engadget.com/",
    url: "https://www.engadget.com/rss.xml",
    category: "Tech",
  },
  {
    name: "Accidental Tech Podcast",
    url: "https://cdn.atp.fm/rss/public?x1e5mf9f",
    category: "Tech",
  },
  {
    name: "Atlas Obscura - Latest Articles and Places",
    url: "https://www.atlasobscura.com/feeds/latest",
    category: "Travel",
  },
  {
    name: "Live Life Travel",
    url: "https://www.livelifetravel.world/feed/",
    category: "Travel",
  },
  {
    name: "NYT > Travel",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml",
    category: "Travel",
  },
  {
    name: "Nomadic Matt's Travel Site",
    url: "https://www.nomadicmatt.com/travel-blog/feed/",
    category: "Travel",
  },
  {
    name: "Travel | The Guardian",
    url: "https://www.theguardian.com/uk/travel/rss",
    category: "Travel",
  },
  {
    name: "WirelessWire News",
    url: "https://wirelesswire.jp/feed/",
    category: "Tech",
  }
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}

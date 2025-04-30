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
    name: "开源中国-软件更新资讯",
    url: "https://rsshub.app/oschina/news/project",
    category: "Tech",
  },
  {
    name: "让小产品的独立变现更简单 - ezindie.com",
    url: "https://www.ezindie.com/feed/rss.xml",
    category: "Tech",
  },
  {
    name: "少数派 -- Matrix",
    url: "https://plink.anyfeeder.com/ssapi/matrix",
    category: "Tech",
  },
  {
    name: "BBC 中国",
    url: "https://plink.anyfeeder.com/bbc/cn",
    category: "News",
  },
  {
    name: "undefined | NHK WORLD-JAPAN News",
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
    name: "Sydney Morning Herald - Latest News",
    url: "https://www.smh.com.au/rss/feed.xml",
    category: "Australia",
  },
  {
    name: "ABC News",
    url: "https://www.abc.net.au/news/feed/1948/rss.xml",
    category: "Australia",
  },
  {
    name: "The Age - Latest News",
    url: "https://www.theage.com.au/rss/feed.xml",
    category: "Australia",
  },
  {
    name: "PerthNow",
    url: "https://www.perthnow.com.au/news/feed",
    category: "Australia",
  },
  {
    name: "The Canberra Times - Local News",
    url: "https://www.canberratimes.com.au/rss.xml",
    category: "Australia",
  },
  {
    name: "Brisbane Times - Latest News",
    url: "https://www.brisbanetimes.com.au/rss/feed.xml",
    category: "Australia",
  },
  {
    name: "Independent Australia",
    url: "http://feeds.feedburner.com/IndependentAustralia",
    category: "Australia",
  },
  {
    name: "Business News - Latest Headlines",
    url: "https://www.businessnews.com.au/rssfeed/latest.rss",
    category: "Australia",
  },
  {
    name: "Crikey",
    url: "https://feeds.feedburner.com/com/rCTl",
    category: "Australia",
  },
  {
    name: "Michael West",
    url: "https://michaelwest.com.au/feed/",
    category: "Australia",
  },
  {
    name: "Global News",
    url: "https://globalnews.ca/feed/",
    category: "Canada",
  },
  {
    name: "Financial Post",
    url: "https://financialpost.com/feed",
    category: "Canada",
  },
  {
    name: "National Post",
    url: "https://nationalpost.com/feed",
    category: "Canada",
  },
  {
    name: "Ottawa Citizen",
    url: "https://ottawacitizen.com/feed",
    category: "Canada",
  },
  {
    name: "The Province",
    url: "https://theprovince.com/feed",
    category: "Canada",
  },
  {
    name: "LaPresse.ca - Actualités",
    url: "https://www.lapresse.ca/actualites/rss",
    category: "Canada",
  },
  {
    name: "Toronto Sun - RSS Feed",
    url: "https://torontosun.com/category/news/feed.xml",
    category: "Canada",
  },
  {
    name: "CBC | Top Stories News",
    url: "https://www.cbc.ca/webfeed/rss/rss-topstories",
    category: "Canada",
  },
  {
    name: "france24.com",
    url: "https://www.france24.com/en/rss",
    category: "France",
  },
  {
    name: "Mediapart",
    url: "https://www.mediapart.fr/articles/feed",
    category: "France",
  },
  {
    name: "Paris Star",
    url: "https://www.parisstaronline.com/feed",
    category: "France",
  },
  {
    name: "Le Monde.fr - Actualités et Infos en France et dans le monde",
    url: "https://www.lemonde.fr/rss/une.xml",
    category: "France",
  },
  {
    name: "L'Obs - A la une",
    url: "https://www.nouvelobs.com/a-la-une/rss.xml",
    category: "France",
  },
  {
    name: "Franceinfo - Les Titres",
    url: "https://www.francetvinfo.fr/titres.rss",
    category: "France",
  },
  {
    name: "La Dépêche du Midi : actualités et info en direct de la région Occitanie et des environs - ladepeche.fr",
    url: "https://www.ladepeche.fr/rss.xml",
    category: "France",
  },
  {
    name: "Ministry for Europe and Foreign Affairs - Actualités",
    url: "https://www.diplomatie.gouv.fr/spip.php?page=backend-fd&lang=en",
    category: "France",
  },
  {
    name: "L'essentiel",
    url: "https://www.sudouest.fr/essentiel/rss.xml",
    category: "France",
  },
  {
    name: "Ouest-France - Actualité",
    url: "https://www.ouest-france.fr/rss/une",
    category: "France",
  },
  {
    name: "Le Huffington Post",
    url: "https://www.huffingtonpost.fr/rss/all_headline.xml",
    category: "France",
  },
  {
    name: "ZEIT ONLINE | Nachrichten, Hintergründe und Debatten",
    url: "http://newsfeed.zeit.de/index",
    category: "Germany",
  },
  {
    name: "Aktuell - FAZ.NET",
    url: "https://www.faz.net/rss/aktuell/",
    category: "Germany",
  },
  {
    name: "tagesschau.de - Die Nachrichten der ARD",
    url: "https://www.tagesschau.de/infoservices/alle-meldungen-100~rss2.xml",
    category: "Germany",
  },
  {
    name: "Deutsche Welle",
    url: "https://rss.dw.com/rdf/rss-en-all",
    category: "Germany",
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
    name: "TheJournal.ie",
    url: "https://www.thejournal.ie/feed/",
    category: "Ireland",
  },
  {
    name: "All: BreakingNews.ie",
    url: "https://feeds.breakingnews.ie/bntopstories",
    category: "Ireland",
  },
  {
    name: "The42",
    url: "https://www.the42.ie/feed/",
    category: "Ireland",
  },
  {
    name: "IrishExaminer.com",
    url: "https://feeds.feedburner.com/ietopstories",
    category: "Ireland",
  },
  {
    name: "IrishCentral.com - Top Stories",
    url: "https://feeds.feedburner.com/IrishCentral",
    category: "Ireland",
  },
  {
    name: "Irish Mirror - Home",
    url: "https://www.irishmirror.ie/?service=rss",
    category: "Ireland",
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
    name: "Mexico | The Guardian",
    url: "https://www.theguardian.com/world/mexico/rss",
    category: "Mexico",
  },
  {
    name: "Excélsior - RSS",
    url: "https://www.excelsior.com.mx/rss.xml",
    category: "Mexico",
  },
  {
    name: "Reforma",
    url: "https://www.reforma.com/rss/portada.xml",
    category: "Mexico",
  },
  {
    name: "Lo último en Vanguardia MX",
    url: "https://vanguardia.com.mx/rss.xml",
    category: "Mexico",
  },
  {
    name: "Portada, El Siglo de Torreón",
    url: "https://www.elsiglodetorreon.com.mx/index.xml",
    category: "Mexico",
  },
  {
    name: "El Financiero",
    url: "https://www.elfinanciero.com.mx/arc/outboundfeeds/rss/?outputType=xml",
    category: "Mexico",
  },
  {
    name: "ElNorte",
    url: "https://www.elnorte.com/rss/portada.xml",
    category: "Mexico",
  },
  {
    name: "El Informador :: Noticias de Jalisco, México, Deportes & Entretenimiento",
    url: "https://www.informador.mx/rss/ultimas-noticias.xml",
    category: "Mexico",
  },
  {
    name: "24 Horas",
    url: "https://24-horas.mx/feed/",
    category: "Mexico",
  },
  {
    name: "Mexico News Daily",
    url: "https://mexiconewsdaily.com/feed/",
    category: "Mexico",
  },
  {
    name: "8 Columnas",
    url: "https://8columnas.com.mx/feed/",
    category: "Mexico",
  },
  {
    name: "Interaksyon",
    url: "https://interaksyon.philstar.com/feed/",
    category: "Philippines",
  },
  {
    name: "philstar.com - RSS Headlines",
    url: "https://www.philstar.com/rss/headlines",
    category: "Philippines",
  },
  {
    name: "BusinessWorld",
    url: "https://www.bworldonline.com/feed/",
    category: "Philippines",
  },
  {
    name: "GMA News Online / News",
    url: "https://data.gmanews.tv/gno/rss/news/feed.xml",
    category: "Philippines",
  },
  {
    name: "Current PH",
    url: "https://currentph.com/feed/",
    category: "Philippines",
  },
  {
    name: "Top Gear: The Philippine authority on cars and the automotive industry",
    url: "https://www.topgear.com.ph/feed/rss1",
    category: "Philippines",
  },
  {
    name: "Eagle News",
    url: "https://www.eaglenews.ph/feed/",
    category: "Philippines",
  },
  {
    name: "Tempo – The Nation's Fastest Growing Newspaper",
    url: "http://tempo.com.ph/feed/",
    category: "Philippines",
  },
  {
    name: "Abante Tonite",
    url: "https://tonite.abante.com.ph/feed/",
    category: "Philippines",
  },
  {
    name: "TechPinas : Philippines' Technology News, Tips and Reviews Blog",
    url: "http://feeds.feedburner.com/Techpinas",
    category: "Philippines",
  },
  {
    name: "INQUIRER.net",
    url: "https://www.inquirer.net/fullfeed/",
    category: "Philippines",
  },
  {
    name: "Najnowsze",
    url: "http://feeds.feedburner.com/wPolitycepl",
    category: "Poland",
  },
  {
    name: "Newsweek Polska",
    url: "https://www.newsweek.pl/rss.xml",
    category: "Poland",
  },
  {
    name: "Dziennik.pl Dziennik - dziennik.pl",
    url: "http://rss.dziennik.pl/Dziennik-PL/",
    category: "Poland",
  },
  {
    name: "www.wirtualnemedia.pl",
    url: "https://www.wirtualnemedia.pl/rss/wirtualnemedia_rss.xml",
    category: "Poland",
  },
  {
    name: "GazetaPrawna.pl - biznes, podatki, prawo, finanse, wiadomości, praca",
    url: "http://rss.gazetaprawna.pl/GazetaPrawna",
    category: "Poland",
  },
  {
    name: "https://www.rp.pl",
    url: "https://www.rp.pl/rss_main?unknown-old-rss",
    category: "Poland",
  },
  {
    name: "RMF24.pl",
    url: "https://www.rmf24.pl/feed",
    category: "Poland",
  },
  {
    name: "Lenta.ru : Новости",
    url: "https://lenta.ru/rss",
    category: "Russia",
  },
  {
    name: "Газета.Ru - Первая полоса",
    url: "https://www.gazeta.ru/export/rss/first.xml",
    category: "Russia",
  },
  {
    name: "Все материалы - Московский Комсомолец",
    url: "https://www.mk.ru/rss/index.xml",
    category: "Russia",
  },
  {
    name: "Российская Газета",
    url: "https://rg.ru/xml/index.xml",
    category: "Russia",
  },
  {
    name: "NEWSru.com :: Главные новости",
    url: "https://rss.newsru.com/top/big/",
    category: "Russia",
  },
  {
    name: "RT - Daily news",
    url: "https://www.rt.com/rss/",
    category: "Russia",
  },
  {
    name: "Meduza.io",
    url: "https://meduza.io/rss/all",
    category: "Russia",
  },
  {
    name: "Russia Insider Daily Headlines",
    url: "https://russia-insider.com/en/all-content/rss",
    category: "Russia",
  },
  {
    name: "TASS",
    url: "https://tass.com/rss/v2.xml",
    category: "Russia",
  },
  {
    name: "The Moscow Times - Independent News From Russia",
    url: "https://www.themoscowtimes.com/rss/news",
    category: "Russia",
  },
  {
    name: "Газета",
    url: "https://www.kommersant.ru/RSS/main.xml",
    category: "Russia",
  },
  {
    name: "PravdaReport",
    url: "https://english.pravda.ru/export.xml",
    category: "Russia",
  },
  {
    name: "The Local",
    url: "https://feeds.thelocal.com/rss/es",
    category: "Spain",
  },
  {
    name: "EL PAÍS: el periódico global",
    url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",
    category: "Spain",
  },
  {
    name: "España",
    url: "https://rss.elconfidencial.com/espana/",
    category: "Spain",
  },
  {
    name: "ElDiario.es - ElDiario.es",
    url: "https://www.eldiario.es/rss/",
    category: "Spain",
  },
  {
    name: "Portada // expansion",
    url: "https://e00-expansion.uecdn.es/rss/portada.xml",
    category: "Spain",
  },
  {
    name: "El Periódico - portada",
    url: "https://www.elperiodico.com/es/rss/rss_portada.xml",
    category: "Spain",
  },
  {
    name: "huffingtonpost.es",
    url: "https://www.huffingtonpost.es/feeds/index.xml",
    category: "Spain",
  },
  {
    name: "Euro Weekly News Spain",
    url: "https://euroweeklynews.com/feed/",
    category: "Spain",
  },
  {
    name: "BBC News - Home",
    url: "https://feeds.bbci.co.uk/news/rss.xml",
    category: "United Kingdom",
  },
  {
    name: "World news | The Guardian",
    url: "https://www.theguardian.com/world/rss",
    category: "United Kingdom",
  },
  {
    name: "Home | Mail Online",
    url: "https://www.dailymail.co.uk/home/index.rss",
    category: "United Kingdom",
  },
  {
    name: "The Independent",
    url: "http://www.independent.co.uk/news/uk/rss",
    category: "United Kingdom",
  },
  {
    name: "Daily Express :: News Feed",
    url: "http://feeds.feedburner.com/daily-express-news-showbiz",
    category: "United Kingdom",
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

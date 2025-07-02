import axios from 'axios';
import cheerio from 'cheerio';



const d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
if (month < 10) {
  month = "0" + month
}
if (month == "00") {
  year = year - 1
  month = "12"
}

let baseURL = "https://xvideos4.com"

export const home = async ({ page }) => {
  try {
    let list = [];

    const bestVideos = await axios.get(`https://www.hentaicity.com/`);
    const $ = cheerio.load(bestVideos.data);
    const newReleases =  $('div.thumb-list.title-spacing').html().replaceAll("https://www.hentaicity.com", "");
    const manga = $('div.manga').html().replaceAll("https://www.hentaicity.com", "")
    const recent = $('div.recent').html().replaceAll("https://www.hentaicity.com", "")
    $('div.thumb-list.title-spacing > div.outer-item:not(._767p)').each((i, el) => {
      list.push({
        id : $(el).html().replaceAll("https://www.hentaicity.com", "")
    });
    });
    return {
      newReleases: newReleases,
      pop: list,
      recent: recent,
      manga: manga

    };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};


export const profile = async ({ id }) => {
  try {
    let list = [];
    let filter = []

    const bestVideos = await axios.get(`https://www.hentaicity.com/profile/${id}/`);
    const $ = cheerio.load(bestVideos.data);
  const sectionElement = $('section.content').clone(); // clone so we can safely manipulate it

// Remove the div with class="1"
sectionElement.find('div.ubox-text.profile').remove(); // This targets class="1"
const section = sectionElement.html(); // Get the modified HTML

const pageTitle = $('title').text();

return {
  title: section,
  pageTitle: pageTitle,
};
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};


export const videoLib = async ({ id }) => {
  try {
    let list = [];
    let filter = []

    const bestVideos = await axios.get(`https://www.hentaicity.com/${id}`);
    const $ = cheerio.load(bestVideos.data);
    const title = $('section.content > h1').text();
    const totalFiles = $('div.total_files').text()
     $('div.thumb-list.title-spacing > div.outer-item-pics:not(._767p)').each((i, el) => {
      list.push({
        id : $(el).html().replaceAll("https://www.hentaicity.com", "")
    });
    });
     $('div.thumb-list.title-spacing > div.outer-item:not(._767p)').each((i, el) => {
      list.push({
        id : $(el).html().replaceAll("https://www.hentaicity.com", "")
    });
    });
    $('div.pulldown').each((i, el) => {
      filter.push({
        id : $(el).html().replaceAll("https://www.hentaicity.com", "")
    });
    });
    const pagination1 = $('div.pagination._767p').html().replaceAll("https://www.hentaicity.com", "")
    const pagination2 = $('div.pagination._768plus').html().replaceAll("https://www.hentaicity.com", "")
    const pageTitle = $('title').text();
    // const manga = $('div.manga').html().replaceAll("https://www.hentaicity.com", "")
    // const recent = $('div.recent').html().replaceAll("https://www.hentaicity.com", "")
    // $('div.thumb-list.title-spacing > div.outer-item').each((i, el) => {
    //   list.push($(el).html().replaceAll("https://www.hentaicity.com", ""));
    // });
    return { 
      title: title.trim(),
      pageTitle: pageTitle,
      totalFiles: totalFiles,
      list: list,
      filter: filter,
      pagination1 : pagination1,
      pagination2: pagination2
    };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};



export const videoScrape = async ({ id }) => {
  try {
    let list = [];

    const bestVideos = await axios.get(`https://www.hentaicity.com/${id}`);
    const $ = cheerio.load(bestVideos.data);
    const m3u8 =  $('video#video-id > source').attr('src');
    const desc = $('div.ubox-text:not(.share2)').html().replaceAll("https://www.hentaicity.com", "");
    const relatedVid = $('div.thumb-list.title-spacing').html()
    const taglink = $('div#taglink').html().replaceAll("https://www.hentaicity.com", "");
    const image = $('meta[property="og:image"]').attr('content');
    const title = $('meta[property="og:title"]').attr('content');
    const url = $('meta[property="og:url"]').attr('content').replaceAll("https://www.hentaicity.com", "");
  const videoDownload = $('meta[property="og:video:url"]').attr('content');
    // const manga = $('div.manga').html().replaceAll("https://www.hentaicity.com", "")
    // const recent = $('div.recent').html().replaceAll("https://www.hentaicity.com", "")
    // $('div.thumb-list.title-spacing > div.outer-item').each((i, el) => {
    //   list.push($(el).html().replaceAll("https://www.hentaicity.com", ""));
    // });
    return {
      title: title,
  
      m3u8: m3u8,
      desc: desc,
      url: url,
      relatedVid: relatedVid,
      taglink:taglink,
      image: image,
      videoDownload:videoDownload

      // pop: list,
      // recent: recent,
      // manga: manga

    };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const galScrape = async ({ id }) => {
  try {
    let list = [];

    const bestVideos = await axios.get(`https://www.hentaicity.com/${id}`);
    const $ = cheerio.load(bestVideos.data);
    const m3u8 =  $('video#video-id > source').attr('src');
    const desc = $('div.ubox-text:not(.share2)').html().replaceAll("https://www.hentaicity.com", "");
    const relatedVid = $('div.thumb-list.title-spacing').html()
    const taglink = $('div#taglink').html().replaceAll("https://www.hentaicity.com", "");
    const image = $('meta[property="og:image"]').attr('content');
    const title = $('meta[property="og:title"]').attr('content');
    const url = $('meta[property="og:url"]').attr('content').replaceAll("https://www.hentaicity.com", "");
    const videoDownload = $('meta[property="og:video:url"]').attr('content');
     $('div.thumb-list > div.outer-item-pics.gallery:not(._767p)').each((i, el) => {
      list.push({
        id : $(el).html()
    })
     });
    // const manga = $('div.manga').html().replaceAll("https://www.hentaicity.com", "")
    // const recent = $('div.recent').html().replaceAll("https://www.hentaicity.com", "")
    // $('div.thumb-list.title-spacing > div.outer-item').each((i, el) => {
    //   list.push($(el).html().replaceAll("https://www.hentaicity.com", ""));
    // });
    return {
      title: title,
      m3u8: m3u8,
      list: list,
      desc: desc,
      url: url,
      relatedVid: relatedVid,
      taglink:taglink,
      image: image,
      videoDownload:videoDownload
      // pop: list,
      // recent: recent,
      // manga: manga

    };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const index = async () => {
  try {
    let list = [];

    const bestVideos = await axios.get(baseURL);
    const $ = cheerio.load(bestVideos.data);
    $('div.thumb-block').each((i, el) => {
      list.push({
        title: $(el).find('p.title').text(),
        url: baseURL + $(el).find('p.title > a').attr('href'),
        imgURL: $(el).find('div.thumb img').attr('data-src'),
        duration: $(el).find('span.bg > span.duration').text(),
        author: $(el).find('span.bg a').text(),
        authorURL: baseURL + $(el).find('span.bg a').attr('href'),
        quality: $(el).find('span.video-hd-mark').text(),
        views:$(el).find('span.bg > span').text().split('-')[1].replace("Views", "").trim(),
        id: $(el).attr('data-id'),

      });
    });
    return list;

  } catch (err) {
    console.log(err);
    return { error: err };
  }
};




export const bestVideos = async ({ page = 0 }) => {
  try {
    let list = [];

    const bestVideos = await axios.get(`https://www.xvideos.com/best/${year}-${month}/${page}`);
    const $ = cheerio.load(bestVideos.data);
    $('div.thumb-block').each((i, el) => {
      list.push({
        title: $(el).find('p.title > a').attr("title"),
        imgURL: $(el).find('div.thumb img').attr('data-src'),
        duration: $(el).find('span.bg > span.duration').text(),
        author: $(el).find('span.bg a').text(),
        authorURL: $(el).find('span.bg a').attr('href'),
        quality: $(el).find('span.video-hd-mark').text(),
        views: $(el).find('span.bg > span').text().split('-')[1].replace("Views", "").trim(),
        id: $(el).attr('data-id')

      });
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}


export const tagList = async ({ tag = "" }) => {
  try {
    let list = [];

    const bestVideos = await axios.get(`https://www.xvideos.com/tags/${tag}`);
    const $ = cheerio.load(bestVideos.data);
    $('ul.tags-list#tags li').each((i, el) => {
      list.push({
        id: $(el).find('a').attr("href"),
        name: $(el).find('a > b').text(),
        videos: $(el).find('a > span').text(),

      });
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}
export const bestVideoPage = async ({ page = 0 }) => {
  let list = [];
  try {


    const searchPagination = await axios.get(`https://www.xvideos.com/best/${year}-${month}/${page}`);
    const $ = cheerio.load(searchPagination.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};


export const searchXvideos = async ({ k, sort = "relevance", page = 0 }) => {
  try {
    let list = [];
    const CompletedAnime = await axios.get(`https://www.xvideos.com/?k=${k}&sort=${sort}&p=${page}`);
    const $ = cheerio.load(CompletedAnime.data);

    $('div.thumb-block').each((i, el) => {
      if ($(el).find('p.profile-info').text() === "Channel" || $(el).find('span.prof-thumb-title').text() === "Channel / Model" || $(el).find('span.prof-thumb-title').text() === "Model") {

      } else {
        list.push({
          title: $(el).find('p.title > a').attr("title"),
          imgURL: $(el).find('div.thumb img').attr('data-src'),
          duration: $(el).find('span.bg > span.duration').text(),
          author: $(el).find('span.bg a').text(),
          authorURL: $(el).find('span.bg a').attr('href'),
          quality: $(el).find('span.video-hd-mark').text(),
          views: $(el).find('span.bg > span').text().split('-')[1].replace("Views", "").trim(),
          id: $(el).attr('data-id')

        });
      }
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}


export const verified = async ({ k, page = 0 }) => {
  try {
    let list = [];
    const verified = await axios.get(`https://www.xvideos.com/verified-${k}/videos/${page}`);
    const $ = cheerio.load(verified.data);

    $('div.thumb-block').each((i, el) => {
      if ($(el).find('p.profile-info').text() === "Channel") {

      } else {
        list.push({
          title: $(el).find('p.title > a').attr("title"),
          imgURL: $(el).find('div.thumb img').attr('data-src'),
          duration: $(el).find('span.bg > span.duration').text(),
          author: $(el).find('span.bg a').text(),
          authorURL: $(el).find('span.bg a').attr('href'),
          quality: $(el).find('span.video-hd-mark').text(),
          country: $(el).find('span.bg > span ').text().trim().split('(').pop().split(')')[0],
          id: $(el).attr('data-id')

        });
      }
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}


export const channel = async ({ k, page = 0 }) => {
  try {
    let list = [];
    const channel = await axios.get(`https://www.xvideos.com/channels/bangbros-network#_tabVideos`);
    const $ = cheerio.load(channel.data);

    $('div#tabVideos >  div.thumb-block').each((i, el) => {
      list.push({
        id: $(el).find('div.thumb-under > p.title > a').attr("href"),


      });
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}
export const searchPagination = async ({ k, sort = "relevance", page = 0 }) => {
  let list = [];
  try {


    const searchPagination = await axios.get(`https://www.xvideos.com/?k=${k}&p=${page}&sort=${sort}`);
    const $ = cheerio.load(searchPagination.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html().replaceAll("/?k=", "/search?k=")

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const taggedPagination = async ({ sort = "relevance", tag, page = 0 }) => {
  let list = [];
  try {


    const taggedPagination = await axios.get(`https://www.xvideos.com/tags/s:${sort}/${tag}/${page}`);
    const $ = cheerio.load(taggedPagination.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};


export const relatedVideos = async () => {
  let list = [];
  try {


    const related = await axios.get(`https://www.xvideos.com/video72301422/_`);
    const $ = cheerio.load(related.data);

    $('div.thumb-block').each((i, el) => {
      list.push({
        title: i
      });
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};


export const verifiedVideos = async (page) => {
  try {
    let list = [];
    const verified = await axios.get(`https://www.xvideos.com/verified/videos/${page}`);
    const $ = cheerio.load(verified.data);

    $('div.thumb-block').each((i, el) => {
      if ($(el).find('p.profile-info').text() === "Channel") {

      } else {
        list.push({
          title: $(el).find('p.title > a').attr("title"),
          imgURL: $(el).find('div.thumb img').attr('data-src'),
          duration: $(el).find('span.bg > span.duration').text(),
          author: $(el).find('span.bg a').text(),
          authorURL: $(el).find('span.bg a').attr('href'),
          quality: $(el).find('span.video-hd-mark').text(),
          country: $(el).find('span.bg > span ').text().trim().split('(').pop().split(')')[0],
          id: $(el).attr('data-id')

        });
      }
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

export const verifiedVideosPagination = async (page = 0) => {
  let list = [];
  try {


    const searchPagination = await axios.get(`https://www.xvideos.com/verified/videos/${page}`);
    const $ = cheerio.load(searchPagination.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};


export const verifiedCatPagination = async ({ k, page = 0 }) => {
  let list = [];
  try {


    const searchPagination = await axios.get(`https://www.xvideos.com/verified-${k}/videos/${page}`);
    const $ = cheerio.load(searchPagination.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const taggedVideos = async ({ sort = "relevance", tag, page = 0 }) => {
  try {
    let list = [];
    const verified = await axios.get(`https://www.xvideos.com/tags/s:${sort}/${tag}/${page}`);
    const $ = cheerio.load(verified.data);

    $('div.thumb-block').each((i, el) => {
      if ($(el).find('p.profile-info').text() === "Channel") {

      } else {
        list.push({
          title: $(el).find('p.title > a').attr("title"),
          imgURL: $(el).find('div.thumb img').attr('data-src'),
          duration: $(el).find('span.bg > span.duration').text(),
          author: $(el).find('span.bg a').text(),
          authorURL: $(el).find('span.bg a').attr('href'),
          quality: $(el).find('span.video-hd-mark').text(),
          views: $(el).find('span.bg > span').text().split('-')[1].replace("Views", "").trim(),
          id: $(el).attr('data-id')

        });
      }
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

export const newVideos = async ({ page = 1 }) => {
  try {
    let list = [];
    const newVideos = await axios.get(`https://www.xvideos.com/new/${page}`);
    const $ = cheerio.load(newVideos.data);

    $('div.thumb-block').each((i, el) => {
      if ($(el).find('p.profile-info').text() === "Channel") {

      } else {
        list.push({
          title: $(el).find('p.title > a').attr("title"),
          imgURL: $(el).find('div.thumb img').attr('data-src'),
          duration: $(el).find('span.bg > span.duration').text(),
          author: $(el).find('span.bg a').text(),
          authorURL: $(el).find('span.bg a').attr('href'),
          quality: $(el).find('span.video-hd-mark').text(),
          views: $(el).find('span.bg > span').text().split('-')[1].replace("Views", "").trim(),
          id: $(el).attr('data-id')

        });
      }
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

export const newVideosPage = async (page = 0) => {
  let list = [];
  try {


    const channelIndexPage = await axios.get(`https://www.xvideos.com/new/${page}`);
    const $ = cheerio.load(channelIndexPage.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};


export const category = async ({ cat, page = 0 }) => {
  try {
    let list = [];
    const newVideos = await axios.get(`https://www.xvideos.com/c/${cat}/${page}`);
    const $ = cheerio.load(newVideos.data);

    $('div.thumb-block').each((i, el) => {
      if ($(el).find('p.profile-info').text() === "Channel") {

      } else {
        list.push({
          title: $(el).find('p.title > a').attr("title"),
          imgURL: $(el).find('div.thumb img').attr('data-src'),
          duration: $(el).find('span.bg > span.duration').text(),
          author: $(el).find('span.bg a').text(),
          authorURL: $(el).find('span.bg a').attr('href'),
          quality: $(el).find('span.video-hd-mark').text(),
          views: $(el).find('span.bg > span').text().split('-')[1].replace("Views", "").trim(),
          id: $(el).attr('data-id')

        });
      }
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

export const catPage = async ({ cat, page = 0 }) => {
  let list = [];
  try {


    const channelIndexPage = await axios.get(`https://www.xvideos.com/c/${cat}/${page}`);
    const $ = cheerio.load(channelIndexPage.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const indexPage = async () => {
  let list = [];
  try {


    const channelIndexPage = await axios.get(`https://www.xvideos.com`);
    const $ = cheerio.load(channelIndexPage.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const videoDetails = async ({ id }) => {
  try {
    const proxy = {
      protocol: 'https',
      host: '23.94.86.138', // Free proxy from the list 
      port: 80,
    };
    const config = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
      }
    };
    let tags = [];


    let pornstar = [];
    let recommended = [];
    //const data = await xvideos.videos.details({ url: 'https://www.xvideos.com/video36638661/chaturbate_lulacum69_30-05-2018' });
    const video = await axios.get(`https://www.lizporn.net/video${id}/_`, { config });
    const $ = cheerio.load(video.data);


    const title = $('title').text().replace(" - XVIDEOS.COM", "");
    const duration = " ";
    // const image = $('meta[property="og:image"]').attr('content');
    const videoType = $('meta[property="og:video:type"]').attr('content');
    const videoWidth = $('meta[property="og:video:width"]').attr('content');
    const videoHeight = $('meta[property="og:video:height"]').attr('content');
    const views = $('strong.mobile-hide').text();
    const quality = $('span.video-hd-mark').text()
    const videoScript = $('#video-player-bg > script:nth-child(6)').html();
    const image = videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1];
    const files = {
      HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
      thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
      thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
      thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
      thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
    };

    $('div.related-content > div.related-content__tabs > div#related-videos > div.mozaique > div.thumb-block.with-add-nth-child-2-plus-1.with-add-nth-child-3-plus-1.with-add-nth-child-4-plus-1.with-add-nth-child-5-plus-1.with-add-nth-child-6-plus-1.tb_full_init.tbm-init-ok').each((i, el) => {
      recommended.push({
        title: "sasd"

      });
    })
    const mainUploaderID = $('li.main-uploader > a').attr('href');
    const mainUplaoderName = $('li.main-uploader > a > span.name').text();

    $('div.video-metadata > ul > li.model').each((i, el) => {
      pornstar.push({

        id: $(el).find('a').attr("href"),
        name: $(el).find('a').text()
      })
    });

    $('div.video-metadata > ul > li').each((i, el) => {
      if ($(el).find('a').attr("href") === "#") {

      } else {
        tags.push({

          id: $(el).find('a').attr("href"),
          tag: $(el).find('a').text(),
          tagName: $(el).find('a').attr("href").slice("/")[1],
        })
      }

    })

    const userProfile = await axios.get(`https://www.xvideos.com${mainUploaderID}`);
    const $userProfile = cheerio.load(userProfile.data);
    const profilePic = $userProfile('div.profile-pic > img').attr('src');
    return {
      title,
      duration,
      image,
      views,
      videoType,
      videoWidth,
      recommended,
      videoHeight,
      quality,
      mainUploaderID,
      mainUplaoderName,
      files,
      tags,
      profilePic,
      pornstar
    };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}




export const pornstarsIndex = async (page = 0) => {
  try {
    let list = [];
    const pornstarsIndex = await axios.get(`https://www.xvideos.com/pornstars-index/${page}`);
    const $ = cheerio.load(pornstarsIndex.data);

    $('div.thumb-block').each((i, el) => {
      list.push({
        id: $(el).find('div.thumb-inside > div.thumb > a').attr("href"),
        imgURL: $(el).find('div.thumb >  a  > script').text().split('<img src="').pop().split('" id=')[0],
        name: $(el).find('div.thumb-under > p.profile-name > a').text(),
        rank: $(el).find('div.thumb-under > p.profile-name > strong').text(),
        videos: $(el).find('p.profile-counts > span.with-sub').text().trim(),


      });
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

//channelIndexPage

export const channelIndexPage = async (page = 0) => {
  let list = [];
  try {


    const channelIndexPage = await axios.get(`https://www.xvideos.com/channels-index/${page}`);
    const $ = cheerio.load(channelIndexPage.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};
export const channelIndex = async (page = 0) => {
  try {
    let list = [];
    const channelIndex = await axios.get(`https://www.xvideos.com/channels-index/${page}`);
    const $ = cheerio.load(channelIndex.data);

    $('div.thumb-block').each((i, el) => {
      list.push({
        id: $(el).find('div.thumb-inside > div.thumb > a').attr("href"),
        imgURL: $(el).find('div.thumb >  a  > script').text().split('<img src="').pop().split('" id=')[0],
        name: $(el).find('span.profile-name').text().trim(),
        videos: $(el).find('p.profile-counts > span.with-sub').text().trim(),


      });
    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

export const pornstarsIndexPagination = async (page = 0) => {
  let list = []
  try {
    const pornstarsIndexPagination = await axios.get(`https://www.xvideos.com/pornstars-index/${page}`);
    const $ = cheerio.load(pornstarsIndexPagination.data);

    $('div.pagination:first > ul > li').each((i, elem) => {

      if ($(elem).find('a').text() == "Prev" || $(elem).find('a').text() == "Next" || $(elem).find('a').text() == "...") {

      } else {
        list.push({
          id: $(elem).html()

          // animeUrl: BASE_URL + '/' + $(elem).find('p.name > a').attr('href'),
        });
      }

    });
    return list;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}



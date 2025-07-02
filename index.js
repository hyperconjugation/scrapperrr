import express from 'express';
import cors from 'cors';

import {
    home,
    videoLib,
    videoScrape,
    profile,
    galScrape
   
} from './scraper.js';
const port = process.env.PORT || 8888;

const corsOptions = {
    origin: '*',
    credentails: true,
    optionSuccessStatus: 200,
    port: port,
  };
  
  const app = express();
  
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('WORKING');
});


// app.get('/index', async (req, res) => {
//     try {
//         //const page = req.query.page;
//         const data = await index();

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });

app.get('/home', async (req, res) => {
    try {
        const page = req.query.page;
        const data = await home({page});

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/videoLib', async (req, res) => {
    try {
        const id = req.query.id;
        const data = await videoLib({id});

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/videoScrape', async (req, res) => {
    try {
        const id = req.query.id;
        const data = await videoScrape({id});

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/galScrape', async (req, res) => {
    try {
        const id = req.query.id;
        const data = await galScrape({id});

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

app.get('/profile', async (req, res) => {
    try {
        const id = req.query.id;
        const data = await profile({id});

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
});

// app.get('/newVideosPage', async (req, res) => {
//     const page = req.query.page;
//     const data = await newVideosPage( page);

//     res.status(200).json(data);

// });

// app.get('/newVideos', async (req, res) => {
//     try {
//         const page = req.query.page;
//         const data = await newVideos({page});

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });

// app.get('/tagList', async (req, res) => {
//     try {
//         const tag = req.query.tag;
//         const data = await tagList({tag});

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });

// app.get('/bestVideosPage', async (req, res) => {
//     const k = req.query.k;
//     const page = req.query.page;
//     const data = await bestVideoPage({k, page});

//     res.status(200).json(data);

// });

// app.get('/cat', async (req, res) => {
//     const cat = req.query.cat;
//     const page = req.query.page;
//     const data = await category({cat, page});

//     res.status(200).json(data);

// });

// app.get('/catPage', async (req, res) => {
//     const cat = req.query.cat;
//     const page = req.query.page;
//     const data = await catPage({cat, page});

//     res.status(200).json(data);

// });

// app.get('/pornstars-index', async (req, res) => {
    
//         const page = req.query.page;
//         const data = await pornstarsIndex(page);

//         res.status(200).json(data);
    
// });

// app.get('/verifiedPage', async (req, res) => {
    
//     const page = req.query.page;
//     const data = await verifiedVideosPagination(page);

//     res.status(200).json(data);

// });

// app.get('/verifiedCatPage', async (req, res) => {
//     const k = req.query.k;
//     const page = req.query.page;
//     const data = await verifiedCatPagination({k, page});

//     res.status(200).json(data);

// });


// app.get('/channels-index', async (req, res) => {
    
//     const page = req.query.page;
//     const data = await channelIndex(page);

//     res.status(200).json(data);

// });

// app.get('/channels-index-page', async (req, res) => {
    
//     const page = req.query.page;
//     const data = await channelIndexPage(page);

//     res.status(200).json(data);

// });

// app.get('/search', async (req, res) => {
    
//     const k = req.query.k;
//     const page = req.query.page;
//     const sort = req.query.sort;
//     const data = await searchXvideos({k,sort, page});

//     res.status(200).json(data);

// });

// app.get('/verified', async (req, res) => {
    
//     const k = req.query.k;
//     const page = req.query.page;
//     const data = await verified({k, page});

//     res.status(200).json(data);

// });


// app.get('/channel', async (req, res) => {
    
//     const k = req.query.k;
//     const page = req.query.page;
//     const data = await channel({k, page});

//     res.status(200).json(data);

// });

// app.get('/searchPage', async (req, res) => {
//     try {
//         const k = req.query.keyw;
//         const page = req.query.page;
//         const sort = req.query.sort;
//         const data = await searchPagination({k, sort ,page});

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });

// app.get('/pornstarsIndexPage', async (req, res) => {
//     try {
//         const page = req.query.page;
//         const data = await pornstarsIndexPagination(page);

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });

// app.get('/taggedPagination', async (req, res) => {
//     try {
//         const sort = req.query.sort;
//         const tag = req.query.tag;
//         const page = req.query.page;
        
       
//         const data = await taggedPagination({ sort,tag ,page});

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });


// app.get('/verifiedVideos', async (req, res) => {
//     try {
//         const page = req.query.page;
//         const data = await verifiedVideos(page);

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });


// app.get('/relatedVideos', async (req, res) => {
//     try {
//         const id = req.query.id;
//         const data = await relatedVideos(id);

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });



// app.get('/taggedVideos', async (req, res) => {
//     try {
//         const sort = req.query.sort;
//         const tag = req.query.tag;
//         const page = req.query.page;
//         const data = await taggedVideos({sort ,tag, page});

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });





// app.get('/videoDetails', async (req, res) => {
//     try {
//         // const id = req.query.id;
//         const id = req.query.id;
//         const data = await videoDetails({id});

//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({
//             status: 500,
//             error: 'Internal Error',
//             message: err,
//         });
//     }
// });






app.listen(port, () => {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});
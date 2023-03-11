const express = require("express");
const fs = require("fs");
const ytdl = require("ytdl-core");
const path = require("path");
const cors = require("cors");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const dbPath = path.join(__dirname, "Database.db");
app.use(cors());
const PORT=process.env.PORT || 4002
let db = null;
app.use(express.static(path.join(__dirname,"public")))
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(PORT, () => {
      console.log("Server Running at http://localhost:4000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

const Array = [
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "wB6IFCeTssk",
    published_at: "Apr 19, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
    title:
      "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
    view_count: "1.4K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "pNNWFUCcgq0",
    published_at: "Mar 14, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-2-img.png",
    title:
      "Yellow Strikers are Ready to Strike Big | Watch it on Viu | iB Cricket Super Over League",
    view_count: "2K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "qVmaFOjrZJY",
    published_at: "Mar 14, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-3-img.png",
    title:
      "Blue Blasters are ready | iB Cricket Super Over League | watch it on Viu",
    view_count: "2.1K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "mwEm4sizTxk",
    published_at: "Jan 30, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-4-img.png",
    title: "Sam Billings having fun with Virtual Reality Cricket",
    view_count: "3.6K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "DehxHMRRkMU",
    published_at: "Jan 23, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-5-img.png",
    title: "Stephen Fleming takes on Morne Morkel in VR Cricket",
    view_count: "3.2K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "72HfJiYO_zM",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-6-img.png",
    title: "Best of Virender Sehwag in iB Cricket Super Over League",
    view_count: "2.3K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "V_L4JkC9RJY",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-7-img.png",
    title: "Best of Suresh Raina in iB Cricket Super Over League",
    view_count: "2.9K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "4lJkA6uMaQQ",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-8-img.png",
    title: "Best of VVS Laxman in iB Cricket Super Over League",
    view_count: "1K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "nDj39xsD6Wc",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-9-img.png",
    title: "Best of Prithvi Shaw in iB Cricket Super Over League",
    view_count: "1.1K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "xIODhZclVpY",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-10-img.png",
    title: "Best of Mohammad Kaif in iB Cricket Super Over League",
    view_count: "45K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "gWWNV3DCeE0",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-11-img.png",
    title: "Best of Brendon McCullum in iB Cricket Super Over League",
    view_count: "1.6K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "omIdd0NEcVo",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-12-img.png",
    title: "Best of Andre Russell in iB Cricket Super Over League",
    view_count: "1.4K",
  },

  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "omIdd0NEcVo",
    published_at: "Jun 27, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-13-img.png",
    title: "Best of Chris Lynn in iB Cricket Super Over League",
    view_count: "675",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "omIdd0NEcVo",
    published_at: "Jun 1, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-14-img.png",
    title:
      "iB Cricket winning hearts across the world | Virtual Reality Cricket",
    view_count: "5.4K",
  },
  {
    channelname: "iB Cricket",
    profile_image_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
    id: "omIdd0NEcVo",
    published_at: "Jan 31, 2019",
    thumbnail_url:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-15-img.png",
    title: "iB Cricket | The World's Most Immersive Virtual Reality Cricket",
    view_count: "8.6K",
  },
];

app.get("/videos", (req, res) => {
  console.log("vachi");
  res.send({
    Array: [
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "wB6IFCeTssk",
        published_at: "Apr 19, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
        title:
          "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
        view_count: "1.4K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "pNNWFUCcgq0",
        published_at: "Mar 14, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-2-img.png",
        title:
          "Yellow Strikers are Ready to Strike Big | Watch it on Viu | iB Cricket Super Over League",
        view_count: "2K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "qVmaFOjrZJY",
        published_at: "Mar 14, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-3-img.png",
        title:
          "Blue Blasters are ready | iB Cricket Super Over League | watch it on Viu",
        view_count: "2.1K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "mwEm4sizTxk",
        published_at: "Jan 30, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-4-img.png",
        title: "Sam Billings having fun with Virtual Reality Cricket",
        view_count: "3.6K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "DehxHMRRkMU",
        published_at: "Jan 23, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-5-img.png",
        title: "Stephen Fleming takes on Morne Morkel in VR Cricket",
        view_count: "3.2K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "72HfJiYO_zM",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-6-img.png",
        title: "Best of Virender Sehwag in iB Cricket Super Over League",
        view_count: "2.3K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "V_L4JkC9RJY",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-7-img.png",
        title: "Best of Suresh Raina in iB Cricket Super Over League",
        view_count: "2.9K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "4lJkA6uMaQQ",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-8-img.png",
        title: "Best of VVS Laxman in iB Cricket Super Over League",
        view_count: "1K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "nDj39xsD6Wc",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-9-img.png",
        title: "Best of Prithvi Shaw in iB Cricket Super Over League",
        view_count: "1.1K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "xIODhZclVpY",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-10-img.png",
        title: "Best of Mohammad Kaif in iB Cricket Super Over League",
        view_count: "45K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "gWWNV3DCeE0",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-11-img.png",
        title: "Best of Brendon McCullum in iB Cricket Super Over League",
        view_count: "1.6K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "omIdd0NEcVo",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-12-img.png",
        title: "Best of Andre Russell in iB Cricket Super Over League",
        view_count: "1.4K",
      },

      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "omIdd0NEcVo",
        published_at: "Jun 27, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-13-img.png",
        title: "Best of Chris Lynn in iB Cricket Super Over League",
        view_count: "675",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "omIdd0NEcVo",
        published_at: "Jun 1, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-14-img.png",
        title:
          "iB Cricket winning hearts across the world | Virtual Reality Cricket",
        view_count: "5.4K",
      },
      {
        channelname: "iB Cricket",
        profile_image_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png",
        id: "omIdd0NEcVo",
        published_at: "Jan 31, 2019",
        thumbnail_url:
          "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-15-img.png",
        title:
          "iB Cricket | The World's Most Immersive Virtual Reality Cricket",
        view_count: "8.6K",
      },
    ],
  });
});

app.get("/video", (request, res) => {
  console.log(request.query.id);

  const result = Array.filter((eachItem) => eachItem.id === request.query.id);
  console.log("Vachinfi");
  res.send({ Array: result });
});

app.get("/videdownload", async (req, res) => {
  try {
    const value = req.query.value;

    const metaaInfo = await ytdl.getInfo(
      `https://www.youtube.com/watch?v=${value}`
    );

    return res.send({
      url: "https://youtube.com/embed/" + value,
      infoOfVideo: metaaInfo.formats,
    });
  } catch (e) {
    res.send("Please open a Youtube video");
  }
});

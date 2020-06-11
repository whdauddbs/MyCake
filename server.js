const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const multer = require("multer");
const upload = multer({ dest: "./upload" });

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
  dateStrings: conf.dateStrings,
  multipleStatements: true,
});

connection.connect();

app.get("/api/shops", (req, res) => {
  connection.query("SELECT * FROM SHOP_INFO", (err, rows, fields) => {
    res.send(rows);
  });
});

/*
app.get("/api/userMylist", (req, res) => {
  connection.query("SELECT * FROM user_mylist", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/userHistory", (req, res) => {
  connection.query("SELECT * FROM user_history", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/userLike", (req, res) => {
  connection.query("SELECT * FROM user_like", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/userSearch", (req, res) => {
  connection.query("SELECT * FROM user_search", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/dramas", (req, res) => {
  connection.query("SELECT * FROM drama_info", (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/drama", (req, res) => {
  let sql = "SELECT * FROM drama_info where idx=?";
  let params = [req.query.idx];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/tags", (req, res) => {
  let sql =
    "SELECT en_tag FROM tag_info where drama_idx=?;" +
    "SELECT ko_tag FROM tag_info where drama_idx=?";
  let params = [req.query.idx, req.query.idx];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/casts", (req, res) => {
  let sql = "SELECT * FROM cast_info WHERE drama_idx=? ORDER BY importance";
  let params = [req.query.idx];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/episodes", (req, res) => {
  let sql = "SELECT * FROM episode_info WHERE drama_idx=? ORDER BY e_num";
  let params = [req.query.idx];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/items", (req, res) => {
  let sql = "SELECT * FROM item_info WHERE epi_idx=?";
  let params = [req.query.idx];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/mainEpisodes", (req, res) => {
  let sql = `select episode_info.idx, e_num, en_e_title, e_img, en_d_name, en_studio_name, year(d_year) as year, d_season
   from episode_info join drama_info
   on episode_info.drama_idx = drama_info.idx
   order by rand() limit 10;`; // Todo: episode 1만 뜨게 나중에 수정(where epi_idx=1)
  let params = [req.query.idx];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
*/

app.post("/api/signup", upload.array(), (req, res) => {
  let sql = "INSERT INTO USER_INFO VALUES (null, ?, ?, ?, ?, ?, ?)";
  let id = req.body.id;
  let name = req.body.name;
  let phone = req.body.phone;
  let shop_name = req.body.shop_name;
  let shop_link = req.body.shop_link;
  let password = req.body.password;
  let params = [id, name, phone, shop_name, shop_link, password];
  connection.query(sql, params, (err, rows, fields) => {
    if (rows) res.send(rows);
    else res.sendStatus(409);
  });
});

app.post("/api/signin", (req, res) => {
  let sql =
    "SELECT id, name, phone, shop_name, shop_link FROM USER_INFO WHERE id = ? AND password = ?";
  let id = req.body.id;
  let password = req.body.password;
  let params = [id, password];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
/*
app.post("/api/dramas", upload.array(), (req, res) => {
  let sql =
    "INSERT INTO drama_info VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  let en_d_name = req.body.en_d_name;
  let ko_d_name = req.body.ko_d_name;
  let d_img = req.body.d_img;
  let en_studio_name = req.body.en_studio_name;
  let ko_studio_name = req.body.ko_studio_name;
  let studio_img = req.body.studio_img;
  let d_year = req.body.d_year;
  let d_season = parseInt(req.body.d_season);
  let en_d_story = req.body.en_d_story;
  let ko_d_story = req.body.ko_d_story;
  let en_d_genre = req.body.en_d_genre;
  let ko_d_genre = req.body.ko_d_genre;
  let d_network = req.body.d_network;
  let d_epi_num = parseInt(req.body.d_epi_num);
  let en_d_cast = req.body.en_d_cast;
  let ko_d_cast = req.body.ko_d_cast;
  let d_platform = parseInt(req.body.d_platform);
  let params = [
    en_d_name,
    ko_d_name,
    d_img,
    en_studio_name,
    ko_studio_name,
    studio_img,
    d_year,
    d_season,
    en_d_story,
    ko_d_story,
    en_d_genre,
    ko_d_genre,
    d_network,
    d_epi_num,
    en_d_cast,
    ko_d_cast,
    d_platform
  ];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/dramaModify", upload.array(), (req, res) => {
  let sql =
    "UPDATE drama_info SET en_d_name=?, ko_d_name=?, d_img=?, en_studio_name=?, ko_studio_name=?, studio_img=?," +
    " d_year=?, d_season=?, en_d_story=?, ko_d_story=?, en_d_genre=?, ko_d_genre=?," +
    " d_network=?, d_epi_num=?, en_d_cast=?, ko_d_cast=?, d_platform=?  where idx=?";
  let en_d_name = req.body.en_d_name;
  let ko_d_name = req.body.ko_d_name;
  let d_img = req.body.d_img;
  let en_studio_name = req.body.en_studio_name;
  let ko_studio_name = req.body.ko_studio_name;
  let studio_img = req.body.studio_img;
  let d_year = req.body.d_year;
  let d_season = parseInt(req.body.d_season);
  let en_d_story = req.body.en_d_story;
  let ko_d_story = req.body.ko_d_story;
  let en_d_genre = req.body.en_d_genre;
  let ko_d_genre = req.body.ko_d_genre;
  let d_network = req.body.d_network;
  let d_epi_num = parseInt(req.body.d_epi_num);
  let en_d_cast = req.body.en_d_cast;
  let ko_d_cast = req.body.ko_d_cast;
  let d_platform = parseInt(req.body.d_platform);
  let idx = parseInt(req.query.idx);
  let params = [
    en_d_name,
    ko_d_name,
    d_img,
    en_studio_name,
    ko_studio_name,
    studio_img,
    d_year,
    d_season,
    en_d_story,
    ko_d_story,
    en_d_genre,
    ko_d_genre,
    d_network,
    d_epi_num,
    en_d_cast,
    ko_d_cast,
    d_platform,
    idx
  ];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/tags", upload.array(), (req, res) => {
  let str = "INSERT INTO tag_info VALUES (null, ?, ?, ?);";
  let sql = "";
  let params = [];
  let idx = parseInt(req.body.idx);
  let en_tags = req.body.en_tags_input.split(",");
  let ko_tags = req.body.ko_tags_input.split(",");
  en_tags.forEach(function(item, index) {
    sql += str;
    params.push(idx);
    params.push(en_tags[index]);
    params.push(ko_tags[index]);
  });
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/casts", upload.array(), (req, res) => {
  let sql = "INSERT INTO cast_info VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)";
  let drama_idx = parseInt(req.body.idx);
  let en_actor_name = req.body.en_actor_name;
  let ko_actor_name = req.body.ko_actor_name;
  let en_role_name = req.body.en_role_name;
  let ko_role_name = req.body.ko_role_name;
  let actor_img = req.body.actor_img;
  let importance = parseInt(req.body.importance);
  let actor_sns = req.body.actor_sns;
  let params = [
    drama_idx,
    en_actor_name,
    ko_actor_name,
    en_role_name,
    ko_role_name,
    actor_img,
    importance,
    actor_sns
  ];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/castDelete", upload.array(), (req, res) => {
  let sql = "DELETE FROM cast_info where idx=?";
  let params = [parseInt(req.body.idx)];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/episodes", upload.array(), (req, res) => {
  let sql = "INSERT INTO episode_info VALUES (null, ?, ?, ?, ?, ?, ?, 0, 0, ?)";
  let drama_idx = parseInt(req.body.idx);
  let e_num = parseInt(req.body.e_num);
  let en_e_title = req.body.en_e_title;
  let ko_e_title = req.body.ko_e_title;
  let e_img = req.body.e_img;
  let e_view = parseInt(req.body.e_view);
  let e_url = req.body.e_url;
  let params = [drama_idx, e_num, en_e_title, ko_e_title, e_img, e_view, e_url];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/episodeModify", upload.array(), (req, res) => {
  let sql =
    "UPDATE episode_info SET e_num=?, en_e_title=?, ko_e_title=?, e_img=?, e_view=?, e_url=?  where idx=?";
  let e_num = parseInt(req.body.e_num);
  let en_e_title = req.body.en_e_title;
  let ko_e_title = req.body.ko_e_title;
  let e_img = req.body.e_img;
  let e_view = parseInt(req.body.e_view);
  let e_url = req.body.e_url;
  let idx = parseInt(req.body.idx);
  let params = [e_num, en_e_title, ko_e_title, e_img, e_view, e_url, idx];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/items", upload.array(), (req, res) => {
  let sql = "INSERT INTO item_info VALUES (null, ?, ?, ?, ?, ?, ?, ?)";
  let drama_idx = parseInt(req.body.idx);
  let en_i_name = req.body.en_i_name;
  let ko_i_name = req.body.ko_i_name;
  let i_img = req.body.i_img;
  let i_link = req.body.i_link;
  let en_i_description = req.body.en_i_description;
  let ko_i_description = req.body.ko_i_description;
  let params = [
    drama_idx,
    en_i_name,
    ko_i_name,
    i_img,
    i_link,
    en_i_description,
    ko_i_description
  ];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/itemDelete", upload.array(), (req, res) => {
  let sql = "DELETE FROM item_info where idx=?";
  let params = [parseInt(req.body.idx)];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));

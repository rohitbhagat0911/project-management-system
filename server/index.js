const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const path = require('path');
const fileUpload = require('express-fileupload');
const bcrypt = require("bcrypt")
const multer = require('multer');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    port: 3307,
    password: "01Rohit",
    database: "project"
}
);

const app = express();
app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '2gb' }));
app.use(bodyParser.urlencoded({limit: '2gb', extended: true}));

// app.use((req, res, next) => {
//   console.log(req.headers['content-length']);
//   next();
// });


app.get("/api/get/", (req, res) => {
        const sqlGet = "SELECT * FROM project_details RIGHT JOIN project_files ON project_details.project_id = project_files.project_id LEFT JOIN project_author ON project_author.project_id = project_files.project_id";
        db.query(sqlGet, (error, result) => {
            res.send(result);
        })
}); 

// reg

// app.get("/login", (req, res)  => {
 
//   const sqlGet = "SELECT * FROM project_login";
//   db.query(sqlGet, (error, result) => {
//       res.send(result);
//   })  

// });

// app.post("/login", (req, res) => {
//   const reg = req.body.username;
//   const password = req.body.password;

//   const saltRounds = 10;
//   const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

//   db.query("SELECT * FROM project_login WHERE regno = ? AND password = ?", [reg, password], (err, result) =>{ 
//     if(err) {
//       res.send({err: err});
//       console.log(err);
//     }

//     if(result.length > 0){
//       res.send(result); 
//       console.log(result);
//     } else {
//       console.log(result);
//       res.send({message: "Invalid"});
//     }
//   });


// });

app.post("/login", (req, res) => {
  const reg = req.body.username;
  const password = req.body.password;

  db.query("SELECT * FROM project_login WHERE regno = ?", [reg], async (err, result) =>{ 
    if(err) {
      res.send({err: err});
      console.log(err);
    }

    if(result.length > 0){
      const hashedPassword = result[0].password;
      console.log(hashedPassword);
      const match = await bcrypt.compare(password, hashedPassword);
      if(match){
        console.log("done");
        res.send(result); 
        console.log(result);
      } else {
        res.send({message: "Invalid"});
      }
    } else {
      res.send({message: "Invalid"});
    }
  });
});

  
  

// console.log(req.body);

// const password = req.body.password;
// const username = req.body.username;
//       db.query('SELECT * FROM project_login WHERE username = ? AND password = ?;',[username, password], (err, result) => {
       
//         if (err) {
//           res.send({err: err});
//         }

//         if (result.length > 0) {
//             res.send(result);
//         } else {
       
//           res.send({mesdvfsage: "asdsafdsfdg"});
          
//         }

//       });


 

    app.get("/demo", (req, res)  => {
 
      const sqlGet = "SELECT * FROM demo";
      db.query(sqlGet, (error, result) => {
          res.send(result);
      })  

    });

    app.get("/ideas", (req, res)  => {
 
      const sqlGet = "SELECT * FROM project_ideas";
      db.query(sqlGet, (error, result) => {
          res.send(result);
      })  

    });

    app.post("/addideas"  ,(req, res) => {
      let title = req.body.heading;
      let about = req.body.description;
      let reg = req.body.reg;
      let user = req.body.user;
      let stream = req.body.stream;
      let year = req.body.year;

      const sqlPost = `INSERT INTO project_ideas (heading, description, author_name, stream, reg_id, year) VALUES ("${title}", "${about}", "${user}", "${stream}", "${reg}" ,${year})`;
      db.query(sqlPost, function (err, result) {
        if (err) throw err;
    res.send(result);
      })
      console.log(req.body);
      // if(err) throw err;
    });

    app.get("/users", (req, res)  => {
 
      const sqlGet = "SELECT * FROM project_login";
      db.query(sqlGet, (error, result) => {
          res.send(result);
      })  

    });

    app.post("/addusers", async (req, res) => {
      let reg = req.body.reg;
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;
      let stream = req.body.stream;
      let year = req.body.year;
    
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    
      const sqlPost = `INSERT INTO project_login (regno, password, email_id, username, stream, year, user_level) VALUES ("${reg}", "${hashedPassword}", "${email}", "${name}", "${stream}" ,${year}, 0)`;
    
      db.query(sqlPost, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    
      console.log(req.body);
    });

    app.post("/editusers", async (req, res) => {
      let reg = req.body.reg;
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;
      let stream = req.body.stream;
      let year = req.body.year;
    
      let sqlParams = [];
    
      let sqlPost = `UPDATE project_login SET `;
      if (name) {
        sqlPost += `username = ?, `;
        sqlParams.push(name);
      }
      if (email) {
        sqlPost += `email_id = ?, `;
        sqlParams.push(email);
      }
      if (password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        sqlPost += `password = ?, `;
        sqlParams.push(hashedPassword);
      }
      if (stream) {
        sqlPost += `stream = ?, `;
        sqlParams.push(stream);
      }
      if (year) {
        sqlPost += `year = ?, `;
        sqlParams.push(year);
      }
      sqlPost = sqlPost.slice(0, -2); // remove the last comma and space
      sqlPost += ` WHERE regno = ?`;
    
      sqlParams.push(reg);
    
      db.query(sqlPost, sqlParams, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    
      console.log(req.body);
    });

    app.post("/deleteuser", async (req, res) => {
      let reg = req.body.reg;
    
      const sqlDelete = `DELETE FROM project_login WHERE regno = "${reg}"`;
    
      db.query(sqlDelete, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    
      console.log(req.body);
    });

    app.post("/editideas", async (req, res) => {
      let reg = req.body.reg;
      let heading = req.body.heading;
      let description = req.body.description;
    
      const sqlUpd = `UPDATE project_ideas SET description = "${description}" WHERE heading = "${heading}" AND reg_id = "${reg}"`;
    
      db.query(sqlUpd, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    
      console.log(req.body);
    });

    app.post("/deleteidea", async (req, res) => {
      let reg = req.body.reg;
    
      const sqlDelete = `DELETE FROM project_ideas WHERE reg_id = "${reg}"`;
    
      db.query(sqlDelete, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    
      console.log(req.body);
    });

    // app.post('/addfiles', upload.none(), (req, res) => {
    //   const image = req.body.image;
    //   console.log(req.body);
     
    // });

    // const router = express.Router();
// router.post('/addfiles', upload.array('files'), (req, res) => {
// });

// const upload = multer({
//   dest: 'uploads/',
//   limits: { fileSize: 200 * 1024 * 1024 },
//   storage: multer.memoryStorage()
// });

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/addfiles', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});



// app.post('/addfiles', upload.single('pdf'), (req, res) => {
//   console.log(req.file);
//   res.send('File uploaded!');
// });


// app.post('/addprojects', (req, res) => {
//   console.log("Projects " + req.body.title);


// });

// app.post('/adddevdetails', (req, res) => {
//   console.log("Dev " + req.body.dev);


// });

// app.post('/addfiles', (req, res) => {
//    console.log("Report " + req.body.pdf);

// });



//

// app.post("/login", (req, res) => {
//           const username = req.body.username;
//           const password = req.body.password;
          
//           db.query(
//             "SELECT * FROM project_login WHERE username = ? AND password = ?",
//             [username, password],
//             (err, result) => {
//               if(err) {
//                 res.send({err: err})
//               }

//                 if(result){
//                     res.send(result);
//                 }
//                 else {
//                   res.send({message: "username or password is invali"});
//                 }
              
//             }
//           )
// }); 

// SELECT * FROM project_details JOIN project_files ON project_details.project_id = project_files.project_id

// app.get("/api/get2/", (req, res) => {
//   const sqlGet2 = "SELECT * FROM project_files ";
//   db.query(sqlGet2, (error, result) => {
//       res.send(result);
//   })
// }); 





// app.get("/", (req, res) => {
    // const sqlInsert = "INSERT INTO project_details (project_name, project_author, registration_no, project_desc, project_title, no_of_author) VALUES ('aa', 'bb', '20it', 'ddaa','ff', 2)";
    // db.query(sqlInsert, (err, result) => {
    //     console.log("err", err);
    //     console.log("res", result);
    //    res.send("S");
    // } );

    
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

  
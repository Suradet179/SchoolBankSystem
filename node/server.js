const express = require("express"); ////npm install express-basic-auth
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//****************************************************************************

//middel middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
  next();
});

//****************************************************************************

// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlednXOyUdUPFg2I0GnzB8hj1zA0CJbBo",
  authDomain: "testnodefirebase-9dcf5.firebaseapp.com",
  databaseURL: "https://testnodefirebase-9dcf5.firebaseio.com",
  projectId: "testnodefirebase-9dcf5",
  storageBucket: "testnodefirebase-9dcf5.appspot.com",
  messagingSenderId: "20416511219",
  appId: "1:20416511219:web:97d195b4c91cbb7c094b86",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let firestore = firebase.firestore();

const auth = require("./auth");
app.get("/login/:username/:password", auth.login);
app.get("/logout", auth.logout);
//****************************************************************************

//จัดการข้อมูลนักเรียน
const student = require("./student");
//get*
app.get("/get_student1", student.getStudent1);
app.get("/get_student2", student.getStudent2);
app.get("/get_student3", student.getStudent3);
app.get("/get_student4", student.getStudent4);
app.get("/get_student5", student.getStudent5);
app.get("/get_student6", student.getStudent6);

//post
app.post("/add_sudent", student.addStudent);

// delete
app.delete("/delete_Student/:id", (req, res) => {
  (async () => {
    try {
      const doc1 = firestore.collection("student").doc(req.params.id); //ลบข้อมูลใน student
      const doc2 = firestore.collection("deposit").doc(req.params.id); //ลบข้อมูลใน student
      const doc3 = firestore.collection("withdraw").doc(req.params.id); //ลบข้อมูลใน student
      await doc1.delete();

      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

//get by id
app.get("/get_sudentById/:id", (req, res) => {
  (async () => {
    try {
      const document = firestore.collection("student").doc(req.params.id);
      let item = await document.get();
      let response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// update
app.put("/update_student/:id", (req, res) => {
  const id = req.params.id;
  (async () => {
    try {
      const document = firestore.collection("student").doc(id);
      document.update({
        generation: req.body.generation,
        sid: id,
        prefix: req.body.prefix,
        fname: req.body.fname,
        lname: req.body.lname,
        primary: req.body.primary,
        tid: req.body.tid,
        money: parseInt(req.body.money),
      });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// //*********************************Admin -->ครู*******************************************
//ครู
const teacher = require("./teacher");

//add_Teacher
app.post("/add_Teacher", teacher.add_Teacher);

//get all Teacher
app.get("/getTeacher", teacher.getTeacher);

//get by id teacher
app.get("/get_TeacherById/:id", (req, res) => {
  (async () => {
    try {
      let document = firestore.collection("teacher").doc(req.params.id);
      let item = await document.get();
      let response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// update ครู
app.put("/update_Teacher/:id", (req, res) => {
  const id = req.params.id;
  (async () => {
    try {
      let document = firestore.collection("teacher").doc(id);
      document.update({
        tid: req.body.tid,
        prefix: req.body.prefix,
        fname: req.body.fname,
        lname: req.body.lname,
        primary: req.body.primary,
        authority: req.body.authority,
      });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// delete ครู
app.delete("/delete_Teacher/:id", (req, res) => {
  (async () => {
    try {
      let doc = firestore.collection("teacher").doc(req.params.id); //ลบข้อมูลใน student
      await doc.delete();

      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();

});


// //**********************admin --> add_total_money//ที่เก็บเงินรวม***************************
//get all
app.get("/getSummoneyAll", student.getSummoneyAll);

//get by id
app.get("/getSummoneyById/:id", (req, res) => {
  (async () => {
    try {
      let document = firestore.collection("Total_Money").doc(req.params.id);
      let item = await document.get();
      let response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

//get เงินรวมแต่ละชั้น
app.get("/getSumMoney1", student.getSumMoney1);
app.get("/getSumMoney2", student.getSumMoney2);
app.get("/getSumMoney3", student.getSumMoney3);
app.get("/getSumMoney4", student.getSumMoney4);
app.get("/getSumMoney5", student.getSumMoney5);
app.get("/getSumMoney6", student.getSumMoney6);

//add summoney
app.post("/add_summoney", student.add_total_money);

// update แก้ไข เงินรวม
app.put("/update_summoney/:id", (req, res) => {
  (async () => {
    try {
      let document = firestore.collection("Total_Money").doc(req.params.id);
      document.update({
        generation: req.body.generation,
        primary: req.body.primary,
        total_money: parseInt(req.body.total_money),
      });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// delete total money
app.delete("/delete_summoney/:id", async (req, res) => {
  const abc = req.params.id;
  try {
    let docsss = firestore.collection("Total_Money").doc(abc);
    await docsss.delete();
    console.log(abc);
    return res.status(200).send();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
  // console.log(req.params.id)
});

////////////////////////////////////////////////////////////////รายการฝากเงิน แบบที่2
//จัดการการเงิน  V2
const finance2Withdraw = require("./finance2Withdraw");
const finance2Deposit = require("./finance2Deposit");
const { APP_BOOTSTRAP_LISTENER } = require("@angular/core");

//ฝาก V2
app.post("/Deposits", finance2Deposit.Deposits);
//ถอน V2
app.post("/Withdraws", finance2Withdraw.Withdraws);

//////////////////แสดงรายการฝาก//////////////////

// get รายการฝาก แบบแสดงทั้งหมด
app.get("/getDepositById/:generation/:sid", (req, res) => {
  let person = [];
  let document = firestore
    .collection("deposit")
    .doc(req.params.generation)
    .collection(req.params.sid)
    .orderBy("d_amount_deposit", "desc");
  let allCities = document
    .get()

    .then((snapshot) => {
      snapshot.forEach((doc) => {
        person.push({
          Data: doc.data(),
        });
      });

      res.json(person);
    });
});

// get รายการฝาก แบบเลือกเดือน
app.get("/listDepositMonthly/:generation/:sid/:month", (req, res) => {
  let generation = req.params.generation;
  let sid = req.params.sid;
  let month = req.params.month;

  // console.log("generationnnn"+generationnnn);
  // console.log("sidddd"+sidddd);
  // console.log("monthhhh"+monthhhh);
  let person = [];
  let document = firestore
    .collection("deposit")
    .doc(generation)
    .collection(sid)
    .where("month", "==", month);
  let allCities = document
    .get()

    .then((snapshot) => {
      snapshot.forEach((doc) => {
        person.push({
          Data: doc.data(),
        });
      });

      res.json(person);
    });
});

// get รายการฝาก แบบเลือกวันที่
app.get(
  "/listDepositBetweenDate/:generation/:sid/:date1/:date2",
  (req, res) => {
    let generation = req.params.generation;
    let sid = req.params.sid;
    let date1 = req.params.date1;
    let date2 = req.params.date2;

    // date: time4,
    // month: month,

    // console.log("generationnnn"+generationnnn);
    // console.log("sidddd"+sidddd);
    // console.log("monthhhh"+monthhhh);
    let person = [];
    let document = firestore
      .collection("deposit")
      .doc(generation)
      .collection(sid)
      .where("date", ">=", date1)
      .where("date", "<=", date2);

    let allCities = document
      .get()

      .then((snapshot) => {
        snapshot.forEach((doc) => {
          person.push({
            Data: doc.data(),
          });
        });

        res.json(person);
      });
  }
);

//get แสดงรายละเลียด รายการฝาก
app.get("/getDetaildepositById/:generation/:sid/:count", (req, res) => {
  (async () => {
    try {
      let document = firestore
        .collection("deposit")
        .doc(req.params.generation)
        .collection(req.params.sid)
        .doc(req.params.count);
      let item = await document.get();
      let response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

//////////////////แสดงรายการถอน//////////////////

// get รายการถอน แบบแสดงทั้งหมด
app.get("/getWithdrawById/:generation/:sid", (req, res) => {
  // const x1 = req.params.generation;
  // const x2 = req.params.sid;
  // console.log(x1);
  // console.log(x2);

  let person = [];
  let document = firestore
    .collection("withdraw")
    .doc(req.params.generation)
    .collection(req.params.sid)
    .orderBy("W_amount_withdraw", "desc");
  let allCities = document
    .get()

    .then((snapshot) => {
      snapshot.forEach((doc) => {
        person.push({
          Data: doc.data(),
        });
      });

      res.json(person);
    });
});

// get รายการถอน แบบเลือกเดือน
app.get("/listWithdrawMonthly/:generation/:sid/:month", (req, res) => {
  let generation = req.params.generation;
  let sid = req.params.sid;
  let month = req.params.month;


  let person = [];
  let document = firestore
    .collection("withdraw")
    .doc(generation)
    .collection(sid)
    .where("month", "==", month);
  let allCities = document
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        person.push({
          Data: doc.data(),
        });
      });

      res.json(person);
    });
});

// get รายการถอน แบบเลือกวันที่
app.get("/listWithdrawBetweenDate/:generation/:sid/:date1/:date2",
  (req, res) => {
    let generation = req.params.generation;
    let sid = req.params.sid;
    let date1 = req.params.date1;
    let date2 = req.params.date2;

    // date: time4,
    // month: month,

    // console.log("generationnnn"+generationnnn);
    // console.log("sidddd"+sidddd);
    // console.log("monthhhh"+monthhhh);

    let person = [];
    let document = firestore
      .collection("withdraw")
      .doc(generation)
      .collection(sid)
      .where("date", ">=", date1)
      .where("date", "<=", date2);
    let allCities = document
      .get()

      .then((snapshot) => {
        snapshot.forEach((doc) => {
          person.push({
            Data: doc.data(),
          });
        });

        res.json(person);
      });
  }
);

//get แสดงรายละเลียด รายการถอน
app.get("/getDetailwithdrawById/:generation/:sid/:count", (req, res) => {
  (async () => {
    try {
      let document = firestore
        .collection("withdraw")
        .doc(req.params.generation)
        .collection(req.params.sid)
        .doc(req.params.count);
      let item = await document.get();
      let response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
  
});

// //****************************************************************************
// แสดง port
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


 // must be listed before other Firebase SDKs
 var firebase = require("firebase/app");

 // Add the Firebase products that you want to use
 require("firebase/auth");
 require("firebase/firestore");

 let firestore = firebase.firestore()
 
 //////////////////////////////////////////////////////////////
 
 ///////////////////เพิ่มข้อมูล นักเรียน /////////////////////////////
 const addStudent = (req, response) => {

  
     const collections = req.body.collections
     const docsss = req.body.docsss

             firestore.collection("student").doc(docsss).set({ 
                 generation : collections,
                 sid : docsss,
                 prefix: req.body.prefix,
                 fname: req.body.fname,
                 lname: req.body.lname,
                 primary: req.body.primary,
                 tid: req.body.tid,
                 money: parseInt("0"),
                 withdraw: parseInt("0"),
                 deposit: parseInt("0"),
                 deposit_amount: parseInt("0"),
                 withdraw_amount: parseInt("0"),

             })
 
 }
 
//////////////////////////get ประถมศึกษาปีที่ 6/////////////////////////////////
 
const getStudent6 = (req, res) => {

 let person = [];
 let citiesRef = firestore.collection("student").where("primary","==","ประถมศึกษาปีที่ 6");
 let allCities = citiesRef.get()
 
   .then(snapshot => {
     snapshot.forEach(doc => { person.push({
         "StudentData" : doc.data()
     });
 
 
     });
     //console.log(person);
     res.json(person);
   })
   .catch(err => {
     console.log('Error getting documents', err);
   });
   
 }

//////////////////get ประถมศึกษาปีที่ 5//////////////////////////////////////////
const getStudent5 = (req, res) => {

  let person = [];
  let citiesRef = firestore.collection("student").where("primary","==","ประถมศึกษาปีที่ 5");
  let allCities = citiesRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { person.push({
          "StudentData" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(person);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}
 ///////////////////////get ประถมศึกษาปีที่ 4////////////////////////////////////
const getStudent4 = (req, res) => {

    let person = [];
    let citiesRef = firestore.collection("student").where("primary","==","ประถมศึกษาปีที่ 4");
    let allCities = citiesRef.get()
    
      .then(snapshot => {
        snapshot.forEach(doc => { person.push({
            "StudentData" : doc.data()
        });
    
    
        });
        //console.log(person);
        res.json(person);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
      
}
 
///////////////////////get ประถมศึกษาปีที่ 3/////////////////////////////////////
const getStudent3 = (req, res) => {

      let person = [];
      let citiesRef = firestore.collection("student").where("primary","==","ประถมศึกษาปีที่ 3");
      let allCities = citiesRef.get()
      
        .then(snapshot => {
          snapshot.forEach(doc => { person.push({
              "StudentData" : doc.data()
          });
      
      
          });
          //console.log(person);
          res.json(person);
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
        
}
 
///////////////////////get ประถมศึกษาปีที่ 2/////////////////////////////////////
const getStudent2 = (req, res) => {

        let person = [];
        let citiesRef = firestore.collection("student").where("primary","==","ประถมศึกษาปีที่ 2");
        let allCities = citiesRef.get()
        
          .then(snapshot => {
            snapshot.forEach(doc => { person.push({
                "StudentData" : doc.data()
            });
        
        
            });
            //console.log(person);
            res.json(person);
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
          
}
 
////////////////////////get ประถมศึกษาปีที่ 1////////////////////////////////////
const getStudent1 = (req, res) => {

          let person = [];
          let citiesRef = firestore.collection("student").where("primary","==","ประถมศึกษาปีที่ 1");
          let allCities = citiesRef.get()
          
            .then(snapshot => {
              snapshot.forEach(doc => { person.push({
                  "StudentData" : doc.data()
              });
          
          
              });
              //console.log(person);
              res.json(person);
            })
            .catch(err => {
              console.log('Error getting documents', err);
            });
            
}
//////////////////////////////////////////////////////////////////////////////
 
 


/////////////////////////////ที่เก็บเงินรวม/////////////////////////////////////////////////
//get แยกห้อง ไว้ใช้หน้าแดชบอร์ด
const getSumMoney1 = (req, res) => {

  let sum = [];
  let sumRef = firestore.collection("Total_Money").where("primary","==","ประถมศึกษาปีที่ 1");
  let all = sumRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { sum.push({
          "SumMoney" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(sum);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}

const getSumMoney2 = (req, res) => {

  let sum = [];
  let sumRef = firestore.collection("Total_Money").where("primary","==","ประถมศึกษาปีที่ 2");
  let all = sumRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { sum.push({
          "SumMoney" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(sum);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}

const getSumMoney3 = (req, res) => {

  let sum = [];
  let sumRef = firestore.collection("Total_Money").where("primary","==","ประถมศึกษาปีที่ 3");
  let all = sumRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { sum.push({
          "SumMoney" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(sum);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}

const getSumMoney4 = (req, res) => {

  let sum = [];
  let sumRef = firestore.collection("Total_Money").where("primary","==","ประถมศึกษาปีที่ 4");
  let all = sumRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { sum.push({
          "SumMoney" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(sum);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}

const getSumMoney5 = (req, res) => {

  let sum = [];
  let sumRef = firestore.collection("Total_Money").where("primary","==","ประถมศึกษาปีที่ 5");
  let all = sumRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { sum.push({
          "SumMoney" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(sum);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}

const getSumMoney6 = (req, res) => {

  let sum = [];
  let sumRef = firestore.collection("Total_Money").where("primary","==","ประถมศึกษาปีที่ 6");
  let all = sumRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { sum.push({
          "SumMoney" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(sum);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}

//********************************************************* 
//add_total_money
const add_total_money = (req, res) => {
  const generation = req.body.generation;
  const primary = req.body.primary;
  const total_money = parseInt("0");  
  const SumMoneyWithdraw = parseInt("0");
  const SumMoneyDeposit= parseInt("0");

  firestore.collection("Total_Money").doc(generation).set({ 
      generation : generation,
      primary: primary,
      total_money: total_money,
      SumMoneyWithdraw: SumMoneyWithdraw,
      SumMoneyDeposit: SumMoneyDeposit,
  })


  // console.log(generation);
  // console.log(primary);
  // console.log(total_money);

}

//********************************************************* 

//getSummoneyAll
const getSummoneyAll = (req, res) => {
  let sum = [];
  let sumRef = firestore.collection("Total_Money");
  let all = sumRef.get()
  
    .then(snapshot => {
      snapshot.forEach(doc => { sum.push({
          "SumMoney" : doc.data()
      });
  
  
      });
      //console.log(person);
      res.json(sum);
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
}

//********************************************************* 

























 module.exports = {
     addStudent,
     getStudent6,
     getStudent5,
     getStudent4,
     getStudent3,
     getStudent2,
     getStudent1,
     getSumMoney1,
     getSumMoney2,
     getSumMoney3,
     getSumMoney4,
     getSumMoney5,
     getSumMoney6,
     add_total_money,
     getSummoneyAll,

 
 }
 
 
 
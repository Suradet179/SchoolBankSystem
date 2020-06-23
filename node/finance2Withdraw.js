
 // must be listed before other Firebase SDKs
 var firebase = require("firebase/app");

 // Add the Firebase products that you want to use
 require("firebase/auth");
 require("firebase/firestore");

 let firestore = firebase.firestore()
 
 //*********************************************
 //การถอน
  const Withdraws = (req, res) => {  
 try {

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let autoId = '';
        for (let i = 0; i < 8; i++) {
        autoId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        //////////////

        const sid = req.body.sid;                         
        const money = parseInt(req.body.money);           
        const fname= req.body.fname;                      
        const lname = req.body.lname;                   
        const primary = req.body.primary;                 
        const generation = req.body.generation;           
        const prefix = req.body.prefix;  
        const tid = req.body.tid; 
        const RafID = autoId; 
        const count = req.body.count; 

         WithdrawById(sid,prefix,fname,lname,primary,money,generation,RafID,count);
         Update_w_MoneyById(sid,money);
         Update_w_Money(money,generation);
         Update_withdraw(money,sid);
         Withdraw_Amount(sid);
         SumMoneyWithdraw(generation,money);
         console.log("Withdraw-success");

      }
      
      catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }

}


//*********************************************************************************************
//บันทึกรายการถอนแต่ละครั้ง รายคน
const WithdrawById = function (sid,prefix,fname,lname,primary,money,generation,RafID,count) {
    let time = new Date();  //วันที่
    //วว-ดด-ปปปป
    let time2 = time.toISOString().
    replace(/T/, ' ').     
    replace(/\..+/, '') 
    let time3 = time2.split(' ');
    let time4 = time3[0];
    // month
    let xxx = time.toString();
    let mmm = xxx.split(' ');
    let month = mmm[1]

    //วันที่
    let t = time.toString();
    let t2 = t.split('G');
    let t3 = t2[0];
    let W_time_date = t3;

    

    let key = count.toString();

    const document11 = firestore.collection("withdraw").doc(generation).collection(sid).doc(key);   
        try {

            document11.set({
                    W_sid : sid,
                    W_prefix : prefix,
                    W_fname : fname,
                    W_lname : lname,
                    W_primary: primary,
                    W_withdraw: money,
                    W_date: W_time_date,
                    date: time4,
                    month: month,
                    W_generation: generation,
                    W_RafID : RafID,
                    W_amount_withdraw : count,
                  });

        }
        catch (error) {
            console.log(error);
        }
  }
 //********************************************************************************************* 
  //อัปเดต ยอดเงินรายคน
  const Update_w_MoneyById = function  (sid,moneysss) {
    
    const Ref11 = firestore.collection("student").doc(sid);
    
    return firestore.runTransaction(function(transaction111) {
    
        return transaction111.get(Ref11).then(function(testDoc5) {
            let newmoney1 = testDoc5.data().money - moneysss;  
            transaction111.update(Ref11, { money: newmoney1 });
        });
    
    
    }).then(function() {
        console.log("อัปเดต ยอดเงินรายคน Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
} 


//*************************************************************************************************
  //อัปเดต ยอดเงินรวม แต่ละห้อง(ถอน)
  const Update_w_Money = function  (money,generation) {
    const Ref22 = firestore.collection("Total_Money").doc(generation);

    return firestore.runTransaction(function(transaction12) {
    
        return transaction12.get(Ref22).then(function(testDoc6) {
            let newmoney2 = testDoc6.data().total_money - money;   
            transaction12.update(Ref22, { total_money: newmoney2}); //
        });

    }).then(function() {
        console.log("อัปเดต ยอดเงินรวม แต่ละห้อง(ถอน) Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}


//*************************************************************************************************
  //รวมยอดที่ถอนรายคน
  const Update_withdraw  = function  (money,sid) {
    const Ref33 = firestore.collection("student").doc(sid);

    return firestore.runTransaction(function(transaction13) {
    
        return transaction13.get(Ref33).then(function(testDoc7) {
            let newmoney3 = testDoc7.data().withdraw + money;   
            transaction13.update(Ref33, { withdraw: newmoney3});
        });

    }).then(function() {
        console.log("รวมยอดที่ถอนรายคน Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}




 //********************************************************************************************* 
  //อัปเดต นับจำนวนการถอน
  const Withdraw_Amount = function  (sid) {
    
    const RefW = firestore.collection("student").doc(sid);
    
    return firestore.runTransaction(function(transaction14) {
    
        return transaction14.get(RefW).then(function(testDoc8) {
            let newwithdraw_amount = testDoc8.data().withdraw_amount+1;   
            transaction14.update(RefW, { withdraw_amount: newwithdraw_amount });
        });
    
    
    }).then(function() {
        console.log("อัปเดต นับจำนวนการถอน Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
} 







const SumMoneyWithdraw = function  (generation,money) {

    const Refsummoney2 = firestore.collection("Total_Money").doc(generation);
    
    return firestore.runTransaction(function(transaction15) {
    
        return transaction15.get(Refsummoney2).then(function(Doc9) {
            let newSumMoneyWithdraw = Doc9.data().SumMoneyWithdraw + money;   
            transaction15.update(Refsummoney2, { SumMoneyWithdraw: newSumMoneyWithdraw });
        });
    
    
    }).then(function() {
        console.log("รวมยอดเงินถอน รายห้อง Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });


}














module.exports = {
    Withdraws
 }
 
 
 
 












































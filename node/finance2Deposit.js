
 // must be listed before other Firebase SDKs
 var firebase = require("firebase/app");

 // Add the Firebase products that you want to use
 require("firebase/auth");
 require("firebase/firestore");

 let firestore = firebase.firestore()
 
 //*********************************************
 //การฝาก
  const Deposits = (req, res) => {    
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
        const count = req.body.count;    //เปลี่ยนเป็น count

         DepositById(sid,prefix,fname,lname,primary,money,generation,RafID,count);//** */
         Update_d_MoneyById(sid,money);
         Update_d_Money(money,generation);
         Update_deposit(money,sid);
         Deposit_Amount(sid);
         SumMoneyDeposit(generation,money);
        console.log("Deposit-success");

      }
      
      catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }

}


//*********************************************************************************************
//บันทึกรายการฝากแต่ละครั้ง รายคน
const DepositById = function  (sid,prefix,fname,lname,primary,money,generation,RafID,count) {
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
        //วันที่
        let t = time.toString();
        let t2 = t.split('G');
        let t3 = t2[0];
        let d_time_date = t3;

    let key1 = count.toString();

    const document1 = firestore.collection("deposit").doc(generation).collection(sid).doc(key1);   
        try {

            document1.set({
                    d_sid : sid,
                    d_prefix : prefix,
                    d_fname : fname,
                    d_lname : lname,
                    d_primary: primary,
                    d_deposit: money,
                    d_date: d_time_date,
                    date: time4,
                    month: month,
                    d_generation: generation,
                    d_RafID : RafID,
                    d_amount_deposit : count,
                  });

        }
        
        catch (error) {
            console.log(error);

        }
  }

 //********************************************************************************************* 
  //อัปเดต ยอดเงินรายคน
  const Update_d_MoneyById = function  (sid,moneysss) {
    
    const Ref1 = firestore.collection("student").doc(sid);
    
    return firestore.runTransaction(function(transaction1) {
    
        return transaction1.get(Ref1).then(function(testDoc1) {
            let newmoney1 = testDoc1.data().money + moneysss;   //จำนวนเงินที่ฝาก
            transaction1.update(Ref1, { money: newmoney1 });
        });
    
    
    }).then(function() {
        console.log("อัปเดต ยอดเงินรายคน Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
} 


//*************************************************************************************************
  //อัปเดต ยอดเงินรวม แต่ละห้อง(ฝาก)
  const Update_d_Money = function  (money,generation) {
    const Ref2 = firestore.collection("Total_Money").doc(generation);

    return firestore.runTransaction(function(transaction2) {
    
        return transaction2.get(Ref2).then(function(testDoc2) {
            let newmoney2 = testDoc2.data().total_money + money;   //จำนวนเงินที่ฝาก
            transaction2.update(Ref2, { total_money: newmoney2}); //
        });

    }).then(function() {
        console.log("อัปเดต ยอดเงินรวม แต่ละห้อง(ฝาก) Transaction successfully committed! newmoney2");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}


//*************************************************************************************************
  //เงินรวมฝาก รายคน
  const Update_deposit  = function  (money,sid) {
    const Ref3 = firestore.collection("student").doc(sid);

    return firestore.runTransaction(function(transaction3) {
    
        return transaction3.get(Ref3).then(function(testDoc3) {
            let newmoney3 = testDoc3.data().deposit + money;   
            transaction3.update(Ref3, { deposit: newmoney3});
        });

    }).then(function() {
        console.log("Update เงินฝาก Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
}


 //********************************************************************************************* 
  //อัปเดต นับจำนวนการฝาก
  const Deposit_Amount = function  (sid) {
    
    const RefD = firestore.collection("student").doc(sid);
    
    return firestore.runTransaction(function(transaction4) {
    
        return transaction4.get(RefD).then(function(testDoc4) {
            let newdeposit_amount = testDoc4.data().deposit_amount+1;   
            transaction4.update(RefD, { deposit_amount: newdeposit_amount });
        });
    
    
    }).then(function() {
        console.log("อัปเดต นับจำนวนการฝาก Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });
} 



const SumMoneyDeposit = function  (generation,money) {

    const Refsummoney = firestore.collection("Total_Money").doc(generation);
    
    return firestore.runTransaction(function(transaction5) {
    
        return transaction5.get(Refsummoney).then(function(Doc1234) {
            let newSumMoneyDeposit = Doc1234.data().SumMoneyDeposit + money;   
            transaction5.update(Refsummoney, { SumMoneyDeposit: newSumMoneyDeposit });
        });
    
    
    }).then(function() {
        console.log("รวมยอดเงินฝาก รายห้อง Transaction successfully committed!");
    }).catch(function(error) {
        console.log("Transaction failed: ", error);
    });


}











 module.exports = {
    Deposits,

 }
 
 
 


















































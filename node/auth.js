require("firebase/auth");
require("firebase/firestore");
var firebase = require("firebase/app");
let firestore = firebase.firestore();

const login = async (req, res) => {
  try {
    const { username, password } = req.params;
    const loginResult = await firebase
      .auth()
      .signInWithEmailAndPassword(username, password);

    const { uid } = loginResult.user;
    let userInfo;
    await firestore
      .collection("teacher")
      .get()
      .then((snapshort) => {
        snapshort.forEach((user) => {
          if (user.data().uuid === uid) {
            userInfo = user.data();
          }
        });
      });
    res.json(userInfo);
  } catch (error) {
    return res.status(500).send(error);
  }
};
const logout = async (req, res) => {
  try {
    firebase
      .auth()
      .signOut()
      .then(() => {
        res.status(200).send({ message: "logout success" });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
};
module.exports = {
  login,
  logout,
};

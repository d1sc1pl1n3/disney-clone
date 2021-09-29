import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBZXqZo89Yr9oNG92hrBESKujuTjfDTKEw',
  authDomain: 'disneyplusclone-14309.firebaseapp.com',
  projectId: 'disneyplusclone-14309',
  storageBucket: 'disneyplusclone-14309.appspot.com',
  messagingSenderId: '1054088856252',
  appId: '1:1054088856252:web:02cabf079006c5e5f6c6b9',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db

//WORKING FROM GIT
// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

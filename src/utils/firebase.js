import * as firebase from 'firebase'

const config = {
 apiKey: "AIzaSyDxUL9PyErrJDFeBFzybHmiigc_qhr0d6o",
 authDomain: "nba-fullstack-a3e38.firebaseapp.com",
 databaseURL: "https://nba-fullstack-a3e38.firebaseio.com",
 projectId: "nba-fullstack-a3e38",
 storageBucket: "nba-fullstack-a3e38.appspot.com",
 messagingSenderId: "792961186589",
 appId: "1:792961186589:web:72e4214c3aa0b954f53ff4",
 measurementId: "G-42Y5W17ZZG"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');


const firebaseLooper = (snapshot) => {
 const data = [];
 snapshot.forEach(childSnapshot => {
  data.push({
   ...childSnapshot.val(),
   id: childSnapshot.key
  })
 });
 return data
}
export {
 firebase,
 firebaseLooper,
 firebaseDB,
 firebaseArticles,
 firebaseTeams,
 firebaseVideos
}
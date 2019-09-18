import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyCBCGSDesDHCeFl6KyLJ_8QWw2AUkhg5Ow",
	authDomain: "test-spd-a6bfa.firebaseapp.com",
	databaseURL: "https://test-spd-a6bfa.firebaseio.com",
	projectId: "test-spd-a6bfa",
	storageBucket: "",
	messagingSenderId: "184747108307",
	appId: "1:184747108307:web:4629acf83118cf2f293126"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

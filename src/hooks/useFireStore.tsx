import { initializeApp } from "firebase/app";
import { child, get, getDatabase, onValue, ref, set } from "firebase/database";

export default function useFireStore() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJ5E0Jh7m1E0GnM_FAH0sm6yYadgfWsu8",
    authDomain: "amdad-471c4.firebaseapp.com",
    databaseURL: "https://amdad-471c4.firebaseio.com",
    projectId: "amdad-471c4",
    storageBucket: "amdad-471c4.appspot.com",
    messagingSenderId: "270593853535",
    appId: "1:270593853535:web:6fbb1e09bf07d84fcdb3ea",
  };

  if (firebaseConfig?.apiKey) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);
    const writeMessage = (path: string, data: any) => {
      try {
        set(ref(db, path), data);
        console.log("PATH=======", path, "DATA=====", data);
      } catch (err) {
        // console.log('ERROR======', err);
      }
    };
    const getMessage = async (path: string) => {
      const dbRef = ref(db);
      return get(child(dbRef, path))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("PATH====", path, "GET DATA======", snapshot.val());
            return snapshot.val();
          } else {
            console.log("ERROR GET======", path, "No data available");
            return null;
          }
        })
        .catch(() => {
          console.log("ERROR GET======", path);
          return null;
        });
    };
    const onMessage = (path: string, callback: any) => {
      try {
        const starCountRef = ref(db, path);
        return onValue(starCountRef, (snapshot) => {
          callback(snapshot.val());
        });
      } catch (err) {
        // CONSOLE.LOG(err);
      }
    };

    return {
      writeMessage: writeMessage,
      getMessage: getMessage,
      onMessage: onMessage,
    };
  }
  return {
    writeMessage: () => console.log("Firebase not initialized"),
    getMessage: () => console.log("Firebase not initialized"),
    onMessage: () => console.log("Firebase not initialized"),
  };
}

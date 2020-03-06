import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/storage';

export async function writeRsvpData(formData, collectionName) {
    firebase
        .firestore()
        .collection(collectionName)
        .doc()
        .set(formData, { merge: true });
}

export default { writeRsvpData };

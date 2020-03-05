import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/storage';

export async function writeRsvpData(formData) {
    firebase
        .firestore()
        .collection('rsvp')
        .doc()
        .set({ formData }, { merge: true });
}

export default { writeRsvpData };

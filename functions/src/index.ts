import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

admin.initializeApp(functions.config().firebase);

const sendNotification = owner_uid => {
  return new Promise((resolve, reject) => {
    return admin
      .firestore()
      .collection('users')
      .doc(owner_uid)
      .get()
      .then(doc => {
        if (doc.exists && doc.data().token) {
          admin
            .messaging()
            .sendToDevice(doc.data().token, {
              data: {
                title: 'ํYour product was sold',
                sound: 'default',
                body: 'Tap to Check'
              }
            })
            .then(sent => {
              resolve(sent);
            })
            .catch(err => {
              reject(err);
            });
        } else {
          console.log('Error');
        }
      });
  });
};

const app = express();

// build multiple CRUD interfaces:
app.get('/', (req, res) => {
  res.send('Hello GET by Siriwasan');
});

app.post('/OrderHook/', async (req, res) => {
  res.send(req.body);
  req.body.RecordStatus = 'Unread';

  admin
    .firestore()
    .collection('orders')
    .add(req.body)
    .then(async doc => {
      console.log(doc);

      await sendNotification('4uBLN4Cwzucgh7ih93vVEh08Z3d2');
    })
    .catch(err => {
      console.log(err);
    });
  // sendNotification(data.data().owner);
});

app.put('/', (req, res) => {
  res.send('Hello PUT by Art');
});

app.patch('/', (req, res) => {
  res.send('Hello PATCH by Art');
});

app.delete('/', (req, res) => {
  res.send('Hello DELETE by Art');
});

// Create "main" function to host all other top-level functions
const main = express();
main.use('/api', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// Expose Express API as a single Cloud Function:
exports.main = functions.https.onRequest(main);

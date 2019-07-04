const webpush = require('web-push');

const options = {
    vapidDetails: {
        subject: 'http://127.0.0.1:8080',
        publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
        privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
    },
    TTL: 5000
}

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eHiCBVzkio0:APA91bGhF9q5YcZ971pKMAd0gewSVcKNndQfE_dTblwEl14h_PO7BzOvmqr9-qct9qct6DwDP308pv203t1qXAgt_la0E1oyt_-qD-nklU4D3nqidq403QGZOxHDg6Y7kBIDkRurEALR",
    "expirationTime": null,
    "keys": {
        "p256dh": "BKYffxMZUVBMaqa5o-7nfXsY2lIJSuhKmzOVzBfOjQpIkulGeDYqyraOAGD1V65nVFAH6Y8OhAZSiCVSLmzL5rE",
        "auth": "66AbiFFoIEkkQql4ShGEig"
    }
};

const payload = JSON.stringify({
    notification: {
        title: 'Your Gate Changed',
        body: 'Your Gate is now G62',
        icon: './assets/bed.png',
        data: 'additional data'
    }
});

webpush.sendNotification(
    pushSubscription,
    payload,
    options
);
/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var webPush = require('web-push');

// var pushSubscription = {
//   "endpoint": "https://android.googleapis.com/gcm/send/dm9Bw4rILNc:APA91bGgVG2u0XR3fDvCXUGoS8efOmB-6leS6KeELqG9k--BliLXoLTbzFrJ3xwocWLLr-UxSzKkQOoP2fGeGiX3BcQTwXiYMLlrM41PohVqJRd8BHxP3c9C6rsCGwm6aIEZed3npJoz",
//   "keys": {
//     "p256dh": "BFDXHSkHjhd6VxmjU7zwN3r9yTxtzXQ8oAsQc-dplObA5bKFGKKx-Lc_Vz1Euqj9ThOF02xz9BN9HvXkr4TCSI8=",
//     "auth": "J55FYn4Csd4MDwBy3CEbag=="
//   }
// };
var pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/caavNOyvvQQ:APA91bGyvTveCMnsZLagD2nC7bCa594bugiwoV1ra9qj1IPfCkZ-yHKlKkWWURiAErH4wocp0Shx7C4kUDxtnZxC0Q1az5yB5udDJuPF8BwyZXjh5_u3hFpEjEBIS8pj-2Bm00AHy7g6","keys":{"p256dh":"BKfuI8AJcXRY9ib2mtIR9afB7BVkkpPKxRM03yo_ZVh087RuVhr59w-T7lajsjiV0I5i4-_eZGRgbNDuK3PNfz4=","auth":"JFZtq7_Niz8lrqqaSBJObg=="}};

var vapidPublicKey = "BPno4JpSTD-39CgTfSPsCzYc9DpeMNqPQLiJpMW7WtYbBhc3qzK_bL1r1ksWujWfBvHx3YgKyXkdSffUW4nsWA4";
var vapidPrivateKey = "47eosN-H-e7AkjShREi1Y6HVcQ9TaOYXfcF5y9H09yA";

var payload = 'Here is a payload!';

var options = {
  //gcmAPIKey: 'AAAA0RKzWf4:APA91bEQdHuS-HXeSsmArss7Q4IlOfH6bU3qSvZt2LMwnq7_uZorcJ1ZDAOtbWXzb1QQeEjo65fh1T0foTKb-B1Y08hvPvfPBIuNukECrbNypruaLC3c4SV-RyzxmUHCiWj64HSCCq_j',
  TTL: 60,

  vapidDetails: {
    subject: 'mailto: jmtalarn@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }

};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);

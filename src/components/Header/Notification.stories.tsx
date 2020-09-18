import React from 'react';
import faker from 'faker';

import Notification, { NotiRowProps } from './Notification';

const fakeData: Array<NotiRowProps> = [];
for (let n = 0; n < 100; n++) {
  fakeData.push({
    key: n,
    isRead: faker.random.boolean(),
    text: faker.lorem.sentence(),
    date: faker.date.past().toString(),
    link: faker.internet.url(),
  });
}
export default {
  title: 'Notification',
  component: Notification,
};

export const HOLA = ():JSX.Element => {
  return <Notification data={fakeData} />;
};

import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import Header from './index';
import Notification, { NotiRowProps } from './Notification';
import { SigninButton } from './SigninButton';

const fakeData: NotiRowProps[] = [];
for (let n = 0; n < 100; n++) {
  fakeData.push({
    key: n,
    isRead: faker.random.boolean(),
    text: faker.lorem.sentence(),
    date: faker.date.past().toString(),
    link: faker.internet.url(),
  });
}

storiesOf('Header', module)
  .add('deafult', () => <Header isLogin={true} />)
  .add('SignIn', () => <Header isLogin={false} />)
  .add('Notification', () => <Notification data={fakeData} />)
  .add('SingIn Button', () => <SigninButton />);
  

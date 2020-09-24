import React, { useState } from 'react';
import ProfileModal from './ProfileModal';

export default { title: 'ProfileModal', component: ProfileModal };

type Post = {
  categoryColor: string;
  title: string;
  date: string;
};

const WrittenPosts: Array<Post> = [
  {
    title: '살아있다살아있다살아있 다살아있  다 살    아있다살  아있 fsa다살아있다',
    categoryColor: '#084B8A',
    date: '10분전',
  },
  {
    title: '살아있다살아있다살아  있다살아있다살 ㄹㅁㄴ앎닐  ㅇ아있다   살아있다',
    categoryColor: '#084B8A',
    date: '10분전',
  },
  {
    title: '살아있다살아있다살   아있다 살아있   다살ㅁㄴㅇㄹㅁㄴㄹ아있다살아있다',
    categoryColor: '#084B8A',
    date: '10분전',
  },
  { title: '살아있다살아있다살아있다살     아있다살아있다살아있다', categoryColor: '#084B8A', date: '10분전' },
];

export const Default = () => {
  const [visible, setVisible] = useState(true);
  return (
    <ProfileModal
      visible={visible}
      setVisible={setVisible}
      introduce="반갑습니다 james입니다."
      WrittenComments={WrittenPosts}
      WrittenPosts={WrittenPosts}
      name="Kimchi Man"
      closable={false}
    />
  );
};

import React from 'react';
import MeetupList from '@/components/meetups/MeetupList';
import Layout from '@/components/layout/Layout';

// Define dummyMeetups outside of the component
const dummyMeetups = [
  {
    id: 'M1',
    image: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg?imwidth=960',
    title: 'First Meetup',
    address: '123 Street, City A',
    description: 'This is the first meetup.',
  },
  {
    id: 'M2',
    image: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg?imwidth=960',
    title: 'Second Meetup',
    address: '456 Road, City B',
    description: 'This is the second meetup.',
  },
  {
    id: 'M3',
    image: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg?imwidth=960',
    title: 'Third Meetup',
    address: '789 Avenue, City C',
    description: 'This is the third meetup.',
  },
  {
    id: 'M4',
    image: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg?imwidth=960',
    title: 'Fourth Meetup',
    address: '1011 Lane, City D',
    description: 'This is the fourth meetup.',
  }
];

const HomePage = (props) => {
  return (
    <div>
      <MeetupList meetups={props.meetups}/>
    </div>
  );
};

export async function getServerSideProps(context) {

  
  return {
    props: {
      meetups: dummyMeetups
    }
  };
}

export default HomePage;

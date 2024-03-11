import MeetupDetail from "@/components/meetups/MeetupDetail";

import React from 'react'

const MeetupDetails = () => {
  return (
    <MeetupDetail
       image="https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg?imwidth=960"
       title="eden garden"
       address="georgia park street 5"
       description="a new city in berlin"
    />
  )
}

// 

export async function getStaticPaths() {
  // Assuming you have a list of meetup IDs
  const meetupIds = ['M1', 'M2', 'M3'];

  const paths = meetupIds.map((meetupId) => ({
    params: { meetupId }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // Assuming you have a function to fetch meetup data by ID
  const { params } = context;
  const meetupId = params.meetupId; // Extract meetup ID from params


  return {
    props: {
      meetupData:{
        id:meetupId,
        image:"https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg?imwidth=960",
        title:"eden garden",
        address:"georgia park street 5",
        description:"a new city in berlin"
      }
    }
  };
}

export default MeetupDetails
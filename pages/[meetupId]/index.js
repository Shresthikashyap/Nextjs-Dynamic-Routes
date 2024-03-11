import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import React from 'react'

const MeetupDetails = (props) => {
  console.log(props)

  if (!props.meetupData) {
    return <p>Meetup not found</p>; // Handle case where meetupData is null
  }
  return (

    <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta 
            name="description"
            content={props.meetupData.description}/>        
    </Head>
    <MeetupDetail
       image={props.meetupData.image}
       title={props.meetupData.title}
       address={props.meetupData.address}
       description={props.meetupData.description}
    />
  </Fragment>
  )
}

// 

export async function getStaticPaths() {
  // Assuming you have a list of meetup IDs

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db('meetupDB'); // Replace 'meetupDB' with your database name
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({},{_id:1}).toArray();

  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // Assuming you have a function to fetch meetup data by ID
  const { params } = context;
  const meetupId = params.meetupId; // Extract meetup ID from params
  console.log('meetup Id',meetupId)

  const client = await MongoClient.connect('mongodb+srv://sk2929542:1234shit@cluster0.7ypej7u.mongodb.net/Meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db('meetupDB'); // Replace 'meetupDB' with your database name
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
  //client.close()
  console.log('meetup data',selectedMeetup)

  return {
    props: {
      meetupData: {
        id:selectedMeetup._id.toString(),
        image:selectedMeetup.image,
        title:selectedMeetup.title,
        address:selectedMeetup.address,
        description:selectedMeetup.description
      }
    }
  };
}

export default MeetupDetails

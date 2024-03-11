import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

const NewMeetupPage = () => {
    const router = useRouter();

    async function addMeetupHandler(enteredData) {
        try {
            const response = await fetch('/api/new-meetup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(enteredData)
            });

            if (!response.ok) {
                throw new Error('Failed to add meetup');
            }

            const data = await response.json();
            console.log(data); 
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Fragment>
            <Head>
                <title>Add Meetup</title>
                <meta 
                name="description"
                content="Browse a hugr list of highly active React meetups"/>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
};

export default NewMeetupPage;

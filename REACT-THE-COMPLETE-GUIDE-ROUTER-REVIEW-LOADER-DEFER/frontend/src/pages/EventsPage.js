import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

/**
 * Suspense
 * - 다른 데이터가 도착하길 기다리는 동안에 폴백(fallback)을 보여주는 
 * 특정한 상황에서 사용할 수 있다.
 */
function EventsPage() {
    const {events} = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

export async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //return { isError: true, message: 'Could not fetch events.' };

        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
        //     status: 500
        // });

        throw json(
            { message: 'Could not fetch events.' },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents() // Promise
    });
}
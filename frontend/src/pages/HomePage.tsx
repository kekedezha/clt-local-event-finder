import React, { useEffect, useState } from "react";
import axios from "axios";
import { EventCard } from "../components/EventCard";

export const HomePage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/events").then(res => setEvents(res.data));
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event: any) => (
                <EventCard key={event.id} {...event} />
            ))}
        </div>
    );
};

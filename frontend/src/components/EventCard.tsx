import React from "react";

interface EventProps {
    title: string;
    date: string;
    location: string;
    category: string;
    summary: string;
}

export const EventCard: React.FC<EventProps> = ({ title, date, location, category, summary }) => (
    <div className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{date} • {location}</p>
        <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{category}</span>
        <p className="mt-2 text-sm text-gray-800">{summary}</p>
    </div>
);

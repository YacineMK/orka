"use client";

import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@/styles/calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: "Project Kickoff",
    start: new Date(2023, 5, 1, 9, 0),
    end: new Date(2023, 5, 1, 11, 0),
  },
  {
    id: 2,
    title: "Team Meeting",
    start: new Date(2023, 5, 3, 14, 0),
    end: new Date(2023, 5, 3, 15, 30),
  },
  {
    id: 3,
    title: "Client Presentation",
    start: new Date(2023, 5, 5, 10, 0),
    end: new Date(2023, 5, 5, 12, 0),
  },
];

const CustomToolbar = ({ date, onNavigate, onView, view }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <button
          onClick={() => onNavigate("PREV")}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-semibold mx-4">
          {moment(date).format(
            view === Views.MONTH ? "MMMM YYYY" : "MMMM D, YYYY",
          )}
        </h2>
        <button
          onClick={() => onNavigate("NEXT")}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <Select onValueChange={onView} defaultValue={view}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select view" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={Views.MONTH}>Month</SelectItem>
          <SelectItem value={Views.WEEK}>Week</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default function ModernCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState(Views.MONTH);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="h-screen ">
      <div className="container mx-auto bg-white rounded-xl overflow-hidden py-5">
        <Calendar
          localizer={localizer}
          events={events}
          date={currentDate}
          onNavigate={(newDate) => setCurrentDate(newDate)}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 2rem)" }}
          onSelectEvent={handleSelectEvent}
          view={view}
          onView={setView}
          views={[Views.MONTH, Views.WEEK]}
          className="modern-calendar"
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={handleCloseModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Start: {selectedEvent?.start.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">
              End: {selectedEvent?.end.toLocaleString()}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

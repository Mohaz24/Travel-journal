import React from "react";
import Header from "./components/Header"
import Journal from "./components/Journal"
import data from "./data.js";

function App() {
  const travelJournal = data.map((journal) => {
    return (
      <Journal
        title={journal.title}
        location={journal.location}  
        imageUrl={journal.imageUrl}
        description={journal.description}
        startDate={journal.startDate}
        endDate={journal.endDate}
        googleMapsUrl={journal.googleMapsUrl}
        key={journal.title}
      />
    );
  });
  return (
    <div>
      <Header title="my travel journal." />
      <main>{travelJournal}</main>
    </div>
  );
}

export default App;

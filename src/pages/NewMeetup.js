import NewMeetUpForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetuoPage() {
    const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-9f783-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history.replace("/");
      });
  }
  return (
    <section>
      <h1>Add Meetup </h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetuoPage;

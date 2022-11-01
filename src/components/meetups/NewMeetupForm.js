import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import {useRef} from "react"
function NewMeetUpForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const desciptionInputRef = useRef();
    const addressInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const eneteredImage = imageInputRef.current.value;
        const eneteredAddress = addressInputRef.current.value;
        const enteredDescription = desciptionInputRef.current.value;
        const meetupData = {
            title: enteredTitle,
            image: eneteredImage,
            address: eneteredAddress,
            desciption: enteredDescription
        };
        props.onAddMeetup(meetupData);
    }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler }>
        <div className={classes.control}>
          <label htmlFor="title">Meet Up Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meet Up image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" required rows="5" id="description" ref={desciptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetUpForm;

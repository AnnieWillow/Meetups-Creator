import {useNavigate} from 'react-router-dom';
import NewmeetupForm from "../Components/meetups/NewmeetupForm";
function NewMeetupPage(){
    const navigate=useNavigate();
    function addMeetupHandler(meetupData){
        console.log(meetupData);
        
        fetch('https://newmeetups-7cd2c-default-rtdb.firebaseio.com/.json',
       
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-type': 'application/json'
            }
         }
     ).then( () =>{
        navigate('/');
     });
    }
    return <div>
        <h1>Add New Meetup </h1>
        <section>
        <NewmeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        
       
    </div>
    
}
export default NewMeetupPage;
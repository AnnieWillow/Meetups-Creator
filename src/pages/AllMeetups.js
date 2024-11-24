

// import {useState,useEffect} from 'react';
// import MeetupList from '../Components/meetups/MeetupList';

//  function AllMeetupsPage(){

//    const [isLoading,setIsLoading] =useState(true);
//    const [loadedMeetups,setLoadedMeetups] =useState();
//    useEffect(() =>{
//      setIsLoading(true);
//      fetch('https://allmeetups-3908c-default-rtdb.firebaseio.com/meetups.json').then(response =>{
//        return response.json();
//      }).then(data =>{
//        const meetups=[];
//        for(const key in data){
//          const meetup={
//            id:key,
//            ...data[key]
//          };
//          meetups.push(meetup);
//        }
//        setIsLoading(false);
//        setLoadedMeetups(meetups);
//      });
//    },[]);
   
//    if(isLoading){
//      return <section>
//      <p>Loading...</p>
//      </section>
//    }

 
//    return <section>
//        <h1>All Meetups</h1>
//        <MeetupList meetups={loadedMeetups} />
//    </section>
// }
// export default AllMeetupsPage;

import { useState, useEffect } from 'react';
import MeetupList from '../Components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://newmeetups-7cd2c-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {loadedMeetups.length === 0 ? (
        <p>No meetups found. Add some!</p>
      ) : (
        <MeetupList meetups={loadedMeetups} />
      )}
    </section>
  );
}

export default AllMeetupsPage;

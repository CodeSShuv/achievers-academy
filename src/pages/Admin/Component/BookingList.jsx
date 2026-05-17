import React, {useState, useEffect} from 'react';
import "./css/booking.css"
import { getBookings } from '../../../api/API_BOOKING.JS';
import { deleteBookings } from '../../../api/API_BOOKING.JS';
import toast from 'react-hot-toast';
const BookingsList = () => {
    const [bookingsList,setBookingsList] = useState([]); 
    useEffect(()=>{
            (async()=>{
               

                    let res = await getBookings(); 
                    // console.log(res)
                    setBookingsList(res);
               
            })();
    },[]);

    const removeAbooking = async(bookingId) =>{
    try{
        
        let res = await deleteBookings(bookingId);
        toast.success("Booking Deleted" );
        // console.log(booking)
    
        setBookingsList([...[bookingsList.filter((booking)=>{
            
            
            return booking;
        })]]);
    }   catch(error){
        // console.log()
        toast.error(error);
    } 
    }
  return (
    <div className='booking-list'>

        <div className="booking-header">
            <h2>Booking List</h2>
<div className="filter-options">
    <ul>
        <li>IELTS</li>
        <li>PTE</li>
        <li>Consultant</li>
        <li>ALL</li>
    </ul>
</div>
        </div>
        
            <table className="booking-table">

            <thead>
                <tr>
                    {/* <th></th> */}
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Booking</th>
                    <th>
                       Action
                    </th>
                </tr>
            </thead>
            <tbody>
        {
            // console.log(bookingsList);
            bookingsList?.map((booking)=>{
                return  <tr className={booking._id}>
                        <td>{booking.fullName}</td>
                        <td>{booking.email}</td>
                        <td>
                        {booking.phoneNumber}
                        </td>
                        <td>{booking.booking}</td>
                        <td>
                            <button 
                           
                            onClick={
                                ()=>{
                                    // console.log(booking._id)
                                    removeAbooking(booking._id)
                                }
                            }id="delete-btn"className='action-btn'>Delete</button>
                        </td>
                    </tr>
            })
        }
            </tbody>
        </table>
       
    </div>
  )
}

export default BookingsList
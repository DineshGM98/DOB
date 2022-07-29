import React from 'react'
import './nic.css';
import Button from '@mui/material/Button';
import {UserAuth} from './context/AuthContext';

function NIC() {

    const{logOut, user} = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
           console.log(error) 
        }
    }


    function setPrint(val){
        const nic = document.getElementById("date_of_birth").value
        var date, day, gender, month, year;
        year = "19" + nic[0] + nic[1];
        day = Number.parseInt(nic[2] + nic[3] + nic[4]);
        
        if (day > 500) {
          gender = "Female";
          day = day - 500;
        } else {
          gender = "Male";
        }
        
        if (Number.parseInt(year)) {
          if (day <= 31) {
            month = "January";
            date = day;
          } else {
            if (day <= 60) {
              month = "February";
              date = day - 31;
            } else {
              if (day <= 91) {
                month = "Marcg";
                date = day - 60;
              } else {
                if (day <= 121) {
                  month = "April";
                  date = day - 91;
                } else {
                  if (day <= 152) {
                    month = "may";
                    date = day - 121;
                  } else {
                    if (day <= 182) {
                      month = "june";
                      date = day - 152;
                    } else {
                      if (day <= 213) {
                        month = "july";
                        date = day - 182;
                      } else {
                        if (day <= 244) {
                          month = "august";
                          date = day - 213;
                        } else {
                          if (day <= 274) {
                            month = "september";
                            date = day - 244;
                          } else {
                            if (day <= 305) {
                              month = "october";
                              date = day - 274;
                            } else {
                              if (day <= 335) {
                                month = "november";
                                date = day - 305;
                              } else {
                                if (day <= 366) {
                                  month = "december";
                                  date = day - 335;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        
          alert(gender + " " + year + " " + month + " " + date.toString());
        }
        
     }
  return (
    <div className='contain'>
        <div className="container">
        <div>
        <p>Welcome, {user?.displayName}</p>
        {/* <button onClick={handleSignOut}>logout</button> */}
    </div>
            <h1 className="text-center">DOB Calculator</h1>
            <div className="text-center">
                <label for="birth_day">Enter NIC Number: <input type="text" id='date_of_birth'/></label>

            </div>
            <Button variant='contained' onClick={()=>setPrint(true)}>getDetails</Button>
        </div>
       
    </div>
  )
}

export default NIC
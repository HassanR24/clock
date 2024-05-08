import { useState, useEffect } from "react"


function Clock(){

    const[time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return (() => {
            clearInterval(intervalId)
        })
    }, [])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const merediem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${merediem}`
    }

    function padZero(number){
        const num = number < 10 ? "0" : ""

        return num + number
    }


    return(
        <div className="clock-container">
            <span className="clock">
                {formatTime()}
            </span>
            
        </div>
    )
}

export default Clock
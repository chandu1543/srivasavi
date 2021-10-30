import React from 'react'

export default function AndhraBank(props) {
    return (
        <div>
           <marquee>
               <h1>
                    ANDHRABANK Account for {props.info.firstName}
               </h1>
           </marquee>
        </div>
    )
}

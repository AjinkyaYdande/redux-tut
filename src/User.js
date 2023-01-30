import React from 'react'

const User= (props)=>{
    console.log(props,"Props")
    return(
        <>
            <h3>User component</h3>
            <h4>{props.data.name}</h4>
            <h4>{props.data.designation}</h4>
        </>
    )
}
export default User;

import React from 'react'


const Page = (props) => {
    const { data, label } = props

    return (
        <div className='pageContainer'>
            <p>{label}</p>
            {
                data.map((entry, index) => (
                    <div key={index}>
                        <p>name: {entry.name}</p>
                        <p>description: {entry.description}</p>
                        <p>cost: {entry.cost}</p>

                    </div>
                ))
            }
        </div>
    )
}

export default Page;
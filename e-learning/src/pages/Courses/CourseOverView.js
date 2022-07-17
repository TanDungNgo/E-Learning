import React from 'react'


const CourseOverView = (props) => {

// const fakeDataConst = "You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company;Me will create a portfolio of ;15 apps to be able apply for junior developer jobs at a technology company"
const fakeDataConst = props.description
const dataToGet = (props.fixedData ? props.fixedData : fakeDataConst)

const renderOverView = dataToGet.split(";").map((item)=>{
    return   <li className='my-1' style={{maxInlineSize: "none"}}>
                <div className='flex align-center relative'>
                    <span class="dot absolute"></span>
                    <span className='pl-8 text-medium font-medium tracking-tight'>
                        {item}
                    </span>
                </div>
            </li>
})

return (
    <>
        <ul class="list-inside">

            {
            
            renderOverView
            

            }
        </ul>
    </>
  )
}

export default CourseOverView
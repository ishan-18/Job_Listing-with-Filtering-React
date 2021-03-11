import React from 'react'

export const JobComp = ({job1, handleTagClick, job1:{
    languages,
    level,
    role,
    tools
}}) => {

    const tags = [role, level]
    if(tools){
        tags.push(...tools)
    }   
    if(languages){
        tags.push(...languages)
    }

    return (
        <div style={{width: "100%"}}>
            <div className={`flex flex-col bg-white shadow-md my-14 mx-auto p-6 rounded lg:my-8 lg:flex-row ${job1.featured && 'border-l-4 border-color border-solid'}`} style={{width:"80%"}}>
                <div>
                    <img className="-mt-16 mb-4 w-20 h-20 lg:mt-0 lg:w-24 lg:h-24 lg:mb-0" src={job1.logo} alt={job1.company} />
                </div>
                <div className="flex flex-col justify-between ml-4">
                    <h3 className="font-bold color-teal">{job1.company}
                    {job1.new && <span className="dark-teal font-bold m-3 py-1 px-2 rounded-full text-xs uppercase">New</span>}
                    {job1.featured && <span className="dark-teal1 font-bold py-1 px-2 rounded-full text-xs uppercase">Featured</span>}
                    </h3>
                    <h2 className="font-bold text-xl my-2 lg:my-0">{job1.position}</h2>
                    <p className="text-gray-600">
                        {job1.postedAt} &nbsp;&nbsp;&middot;&nbsp;&nbsp;   {job1.contract} &nbsp;&nbsp;&middot;&nbsp;&nbsp;   {job1.location}
                    </p>
                </div>
                <div className="flex flex-wrap mt-4 mx-4 pt-4 border-t-2 border-gray-200 border-solid items-center lg:ml-auto lg:border-0 lg:py-0 lg:justify-center lg:mt-0">
                    {tags ?  tags.map((langAndtool)=> <span className="color-teal1 font-bold m-3 p-2 rounded lg:mb-0" onClick={()=>handleTagClick(langAndtool)}>{langAndtool}</span>) : ""}
                    
                </div>
            </div>
        </div>
    )
}


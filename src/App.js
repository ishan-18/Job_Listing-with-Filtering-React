import React, {useState, useEffect} from 'react'
import { JobComp } from "./components/JobComp";
import data from './assets/API/data.json'



function App() {

  const [job, setJob] = useState([]);
  const [filters, setFilters] = useState([])

  useEffect(()=> setJob(data), [])

  console.log(job)

  const filter_func = ({role, level, languages, tools }) =>{
    const tags = [role, level];
    if(tools){
      tags.push(...tools)
    }
    if(languages){
      tags.push(...languages)
    }

    if(filters.length === 0){
      return true
    }

    return filters.every(filter => tags.includes(filter))
  }

  const handleTagClick = (tag) => {
    if(filters.includes(tag)) return;
    setFilters([...filters, tag])
  }

  const handleFilterClick = (passedFilter) => {

    setFilters(filters.filter((f) => f !== passedFilter))
  }

  const fil_jobs = job.filter(filter_func)

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="App">
      <header className="bg mb-12">
        <img src="/images/bg-header-desktop.svg" className="w-full" alt="bg-img" />
      </header>
      {
        filters.length > 0 ? <div className="flex z-10 relative flex-wrap bg-white shadow-md -my-20 mb-16 mx-auto p-6 rounded lg:flex-row cursor-pointer" style={{width: "80%"}}>
        {
          filters.length > 0 && filters.map((filter) => <span onClick={()=>handleFilterClick(filter)} className="flex flex-"><span className="color-teal1 cursor-pointer font-bold m-3 p-2 rounded rounded-r-none lg:mb-0 text-sm">{filter} &nbsp;X</span></span>)
        }
        <button className="font-bold ml-auto border-0 outline-none bg-transparent" onClick={clearFilters}>Clear</button> 
      </div> : ""
      }
      {job.length === 0 ? (
          <p>Jobs are being fetched....</p>
        ) : (
          fil_jobs.map((job1) => <JobComp job1={job1} key={job1.id} handleTagClick={handleTagClick}/>)
        )
      }
      
    </div>
  );
}

export default App;

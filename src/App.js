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

    return tags.some(tag => filters.includes(tag))
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
        filters.length > 0 ? <div className="flex flex-col bg-white shadow-md my-16 mx-auto p-6 rounded sm:flex-row cursor-pointer" style={{width: "80%"}}>
        {
          filters.length > 0 && filters.map((filter) => <span onClick={()=>handleFilterClick(filter)}><span className="color-teal1 cursor-pointer font-bold m-3 p-2 rounded rounded-r-none sm:mb-0 text-sm">{filter}</span><span className="cursor-pointer font-bold -ml-3 p-2 rounded rounded-l-none sm:mb-0 text-sm" style={{backgroundColor: "hsl(180, 29%, 50%)", color: "hsl(180, 52%, 96%)"}}>X</span></span>)
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

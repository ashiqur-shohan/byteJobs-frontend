
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import jobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";
import axios from "axios";
function App() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  const fetchJobs = async () => {
    const tempJobs = [];
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((job) => {
      // const j = job.data()
      // tempJobs.push(j)
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn:  jobData.postedOn ? jobData.postedOn.toDate() : null,
      });
    });
    setJobs(tempJobs);
  };
  
  const fetchData = () =>{
    var url
    if(!search){
       url = `https://bytejobs-backend.onrender.com/job/` ;
    }
    else{
       url = `https://bytejobs-backend.onrender.com/job/?search=` + search;
    }
    
    axios.get(url).then((res) => setJobs(res.data));
    console.log(url)
    console.log(jobs)
    console.log(search)
  }


  useEffect(() => {
    fetchData();
  },[search]);
  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Header />
      <div className="text-center my-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <SearchBar />
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;

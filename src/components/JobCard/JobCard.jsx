import dayjs from "dayjs";
import PropTypes from "prop-types";

const JobCard = (props) => {
  // const skills = ["javascript", "react", "node.js", "django", "php"];
  const {job} = props
  const { comp_details } = job;
  // using dayjs to find how before the job was posted
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(job.posted_date, "day");
  console.log(job)
  // console.log(props.job)
  return (
    <div className="mx-40 mb-4">
      <div className="flex items-center justify-between rounded-lg border border-black bg-zinc-200 px-6 py-4 shadow-lg hover:-translate-y-1 hover:border-yellow-600 hover:transition">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">
            {job.title} - {comp_details.comp_name}
          </h1>
          <p>
            {job.work_type} | Experience : { job.experience_min} - {job.experience_max} | 
            { comp_details.comp_location}
          </p>
          {/* <div className="flex items-center gap-2">
            {job.skills.map((skill) => (
              <p
                key={skill}
                className="rounded-lg border border-black px-2 py-1 text-gray-500"
              >
                {skill}
              </p>
            ))}
          </div> */}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-500">
            Posted:
            {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
          </p>
          <a href={job.jobLink}>
            <button className="w-24 rounded-lg border-2 border-yellow-500 px-4 pb-2 pt-1 font-semibold text-black hover:bg-yellow-500 hover:text-white">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
    // <div>
    //   <p>{job.title}</p>
    //   <p>{comp_details.comp_name}</p>
    // </div>
  );
};

export default JobCard;
// JobCard.propTypes = {
//   job: PropTypes.object,
// };
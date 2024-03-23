import { useRouter } from "next/navigation";
type EarningProps = {
    total:any
};

const EarningCourse = ({total}: EarningProps) => 
{


    const router =useRouter()
    return(
    <div className="card-shadow mb-16 p-8 pb-16 bg-white text-center before:inset-0 2xl:w-[calc(50%-2rem)] 2xl:mx-4 2xl:mb-0 md:w-full md:mx-0 dark:bg-dark-2">
        <div className="mb-3 text-h6">Total Course</div>
        <div className="mb-3 text-d2 text-primary">{total}</div>
        {/* <div className="mb-4 px-8 text-grey">
            Update your payout method in Settings
        </div> */}
        <button onClick={()=>router.push("/courses")} className="btn-white w-full shadow-[0_0.5rem_1.25rem_rgba(227,230,236,0.6)] text-link hover:text-primary dark:shadow-none dark:bg-dark-1">
           Go to Course Table
        </button>
    </div>
    )
}

export default EarningCourse;

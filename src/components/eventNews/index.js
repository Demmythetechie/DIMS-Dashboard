import { useEffect, useState } from "react";

function EventNews() {
    const [dept, setDept] = useState(null);

    const courses = [
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', date: '27/09/2024'},
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', date: '27/09/2024'},
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', date: '27/09/2024'},
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', date: '27/09/2024'},
    ]

    const courseDetails = [
        {
            Department: 'Computer science',
            image: process.env.PUBLIC_URL + 'images/imageRep.jpg',
            intro: 'The Department of Information Technology is a forward-looking department offering a high-quality learning in a welcoming and friendly environment. Information Technology is a fast changing and advancing field and with our high standard reputation for innovative education, we offer courses that reflect this high level of changes and advancement. The department offers consultancy services to both government and private establishments.',
            body: `The areas of research in the department are the following: Networked and Embedded Systems, Intelligent Systems, Human Computer Interaction, Mobile Computing, Wireless Technology, Computer Networks, IT Project Development and Management, Software Development, IT Infrastructure Maintenance, Cloud Computing, Data Analysis, Computing and Communications, Computer Systems Architecture, Fast and efficient Algorithms, Parallel Computing Systems, Web Engineering, Internet of Things, Ubiquitous Computing.
            
The department currently shares three computer laboratories furnished with over five hundred computer systems connected to the internet with the Department of Computer Science. The hardware studies laboratory consists of HP Logic lab, HP logic analyzer, HP digital oscilloscope, HP pulse generator, pen plotter among others.

The department also shares a library/research laboratory which accommodates both e-library and physical books with the Department of Computer Science. The library/research laboratory is connected to the internet. Academic and technology staff offices are internet compliant and most offices are provided with inverter power system.`
        }
    ]

    function readMore(department) {
        setDept(department);
    }

    function back() {
        setDept(null);
    }

    useEffect(()=>{
        if (dept !== null) {
            for (let index in courseDetails) {
                if (dept === courseDetails[index].Department) {
                    setDept(courseDetails[index]);
                    break;
                }
            }
        }
    }, [dept]);

    return (
        <>
            <section className={`${dept !== null ? 'hidden' : 'w-[100%] pt-[3%] px-[2.5%] flex flex-col items-start pb-[3%]'}`}>
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-black">Events & News</p>
                <div className="flex flex-col w-[100%] h-fit gap-y-[5%]">
                    <div className="w-[100%] flex flex-row flex-wrap h-fit gap-x-[2%]">
                        {courses.map((course)=>(
                            <div className="relative w-[32%] aspect-[1/1.3] flex flex-col justify-end max-[640px]:w-[98%] max-[1280px]:w-[48%] max-[1280px]:aspect-[1/1.5]">
                                <div style={{ background: `url(${course.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[50%] max-[1024px]:bottom-[43%] absolute left-[5%] bottom-[40%] rounded-[7px]"></div>
                                <div className="w-[100%] h-[70%] flex flex-col justify-end items-end shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                                    <div className="absolute w-[100%] h-[20%] bottom-[15%] px-[5%] flex flex-col justify-between items-start max-[1024px]:h-[25%] max-[1024px]:gap-y-[4%]">
                                        <p className="text-[4.2vw] font-[Montserrat] font-bold text-[#01669f] sm:text-[2.6vw] md:text-[2vw] xl:text-[1.2vw]">{course.Department}</p>
                                        <p className="text-[3.8vw] font-[Montserrat] font-normal text-justify sm:text-[2.2vw] md:text-[1.5vw] xl:text-[1vw] text-black">{course.summary}</p>
                                    </div>
                                    <div className="w-[100%] h-[11%] mb-[2%] flex flex-row justify-between items-center px-[5%]">
                                        <p className="text-[3vw] sm:text-[1.8vw] md:text-[1.2vw] xl:text-[0.8vw] font-[Montserrat] font-normal text-black">Date Posted: {course.date}</p>
                                        <button onClick={()=> readMore(course.Department)} className="text-[3vw] bg-[#502369] text-white w-[30%] h-[100%] mb-[4%] rounded-[4px] font-[Montserrat] font-semibold sm:text-[2vw] md:text-[1.4vw] xl:text-[0.9vw]">Read more</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={`${dept !== null ? 'w-[100%] pt-[3%] pl-[2.5%] pr-[2.5%] flex flex-col items-start gap-y-[3vw] pb-[3%]' : 'hidden'}`}>
                <div onClick={back} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-[#502369]">{dept && dept.Department}</p>
                <div className="flex flex-col w-[100%] gap-y-[2.5vw] max-[640px]:gap-y-[1.2%]">
                    <div className="flex w-[100%] justify-between h-[20%] max-[640px]:h-[40%] max-[640px]:flex-col gap-y-[8vw]">
                        <div style={{ background: `url(${process.env.PUBLIC_URL + '/images/imageRep.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[40%] aspect-[1/0.7] rounded-[7px] max-[640px]:h-[60%] max-[640px]:w-[100%]"></div>
                        <div className="w-[60%] h-[90%] px-[5%] max-[640px]:px-[0%] max-[640px]:w-[100%] max-[640px]:h-fit">
                            <p className="text-[2.87vw] font-[Montserrat] font-normal text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">
                                The Department of Information Technology is a forward-looking department offering a high-quality learning in a welcoming and friendly environment. Information Technology is a fast changing and advancing field and with our high standard reputation for innovative education, we offer courses that reflect this high level of changes and advancement. The department offers consultancy services to both government and private establishments.
                            </p>
                        </div>
                    </div>
                    <p className="text-[2.87vw] font-[Montserrat] font-normal text-justify text-black whitespace-pre-wrap sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">
                        {dept && dept.body}
                    </p>
                </div>
            </section>
       </>
    );
}

export default EventNews;
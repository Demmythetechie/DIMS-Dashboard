import { useEffect, useState } from "react";

function Faculty() {
    const [dept, setDept] = useState(null);

    const courses = [
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + 'images/imageRep.jpg'},
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + 'images/imageRep.jpg'},
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + 'images/imageRep.jpg'},
        {Department: 'Computer science', summary: 'An event to share your product ideas to investors and win a prize and get recognition form experienced individuals.', image: process.env.PUBLIC_URL + 'images/imageRep.jpg'},
    ]

    const courseDetails = [
        {
            Department: 'Computer science',
            image: process.env.PUBLIC_URL + 'images/imageRep.jpg',
            intro: 'The Department of Information Technology is a forward-looking department offering a high-quality learning in a welcoming and friendly environment. Information Technology is a fast changing and advancing field and with our high standard reputation for innovative education, we offer courses that reflect this high level of changes and advancement. The department offers consultancy services to both government and private establishments.',
            body: `The areas of research in the department are the following: Networked and Embedded Systems, Intelligent Systems, Human Computer Interaction, Mobile Computing, Wireless Technology, Computer Networks, IT Project Development and Management, Software Development, IT Infrastructure Maintenance, Cloud Computing, Data Analysis, Computing and Communications, Computer Systems Architecture, Fast and efficient Algorithms, Parallel Computing Systems, Web Engineering, Internet of Things, Ubiquitous Computing.
            
The department currently shares three computer laboratories furnished with over five hundred computer systems connected to the internet with the Department of Computer Science. The hardware studies laboratory consists of HP Logic lab, HP logic analyzer, HP digital oscilloscope, HP pulse generator, pen plotter among others.

The department also shares a library/research laboratory which accommodates both e-library and physical books with the Department of Computer Science. The library/research laboratory is connected to the internet. Academic and technology staff offices are internet compliant and most offices are provided with inverter power system.`,
            keyFigures: [{name: 'James Bond', position: 'Vice Chancellor', image: process.env.PUBLIC_URL + 'images/imageRep.jpg', email: 'naim.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://x.com/NOkunade'}, {name: 'James Bond', position: 'Departmental President', image: process.env.PUBLIC_URL + 'images/imageRep.jpg', email: 'naim.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://x.com/NOkunade'}, {name: 'James Bond', position: 'Dean of school of computing', image: process.env.PUBLIC_URL + 'images/imageRep.jpg', email: 'naim.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://x.com/NOkunade'}, {name: 'James Bond', position: 'Departmental President', image: process.env.PUBLIC_URL + 'images/imageRep.jpg', email: 'naim.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://x.com/NOkunade'}],
            deptContact: '8138712653',
            deptMail: 'naim.okunade@gmail.com',
            deptOffice: 'SOC building, FUTA',
            deptAddress: '100 Smith Street Collingwood VIC 3066 AU'
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
            <section className={`${dept !== null ? 'hidden' : 'w-[100%] pt-[3%] px-[2.5%] flex flex-col items-start gap-y-[3vw] pb-[3%]'}`}>
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-black">Faculty</p>
                <div className="flex flex-col w-[100%] h-fit gap-y-[5%]">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-[#502369]">Departments in the School of Computing</p>
                    <div className="w-[100%] flex flex-row flex-wrap h-fit gap-x-[2%]">
                        {courses.map((course)=>(
                            <div className="relative w-[32%] aspect-[1/1.3] flex flex-col justify-end max-[1280px]:w-[48%] max-[1280px]:aspect-[1/1.5]">
                                <div style={{ background: `url(${course.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[50%] max-[1024px]:bottom-[43%] absolute left-[5%] bottom-[40%] rounded-[7px]"></div>
                                <div className="w-[100%] h-[70%] flex flex-col justify-end items-end shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                                    <div className="absolute w-[100%] h-[20%] bottom-[15%] px-[5%] flex flex-col justify-between items-start max-[1024px]:h-[25%] max-[1024px]:gap-y-[4%]">
                                        <p className="text-[3vw] font-[Montserrat] font-bold text-[#01669f] sm:text-[2.6vw] md:text-[2vw] xl:text-[1.2vw]">{course.Department}</p>
                                        <p className="text-[2.4vw] font-[Montserrat] font-normal text-justify sm:text-[2.2vw] md:text-[1.5vw] xl:text-[1vw] text-black">{course.summary}</p>
                                    </div>
                                    <button onClick={()=> readMore(course.Department)} className="text-[2vw] bg-[#502369] text-white w-[30%] h-[11%] mr-[4%] mb-[4%] rounded-[4px] font-[Montserrat] font-semibold sm:text-[2vw] md:text-[1.4vw] xl:text-[0.9vw]">Read more</button>
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
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-[#502369]">Department of {dept && dept.Department}</p>
                <div className="flex flex-col w-[100%] aspect-[1/1.4] gap-y-[3%] max-[640px]:aspect-[1/3.6] max-[640px]:gap-y-[1.2%] max-[1280px]:aspect-[1/2.2]">
                    <div className="flex w-[100%] justify-between h-[20%] max-[640px]:h-[40%] max-[640px]:flex-col">
                        <div style={{ background: `url(${process.env.PUBLIC_URL + 'images/imageRep.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[40%] h-[95%] rounded-[7px] max-[640px]:h-[60%] max-[640px]:w-[100%]"></div>
                        <div className="w-[60%] h-[90%] px-[5%] max-[640px]:px-[0%] max-[640px]:w-[100%] max-[640px]:h-fit">
                            <p className="text-[2.87vw] font-[Montserrat] font-normal text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">
                                The Department of Information Technology is a forward-looking department offering a high-quality learning in a welcoming and friendly environment. Information Technology is a fast changing and advancing field and with our high standard reputation for innovative education, we offer courses that reflect this high level of changes and advancement. The department offers consultancy services to both government and private establishments.
                            </p>
                        </div>
                    </div>
                    <p className="text-[2.87vw] font-[Montserrat] font-normal text-justify text-black whitespace-pre-wrap sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">
                        {dept && dept.body}
                    </p>
                    <div className="w-[100%] h-[24%] flex flex-col justify-between max-[1024px]:h-[36%]">
                        <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2.2vw] text-[#502369]">Department Representation</p>
                        <div className="w-[100%] h-[90%] flex justify-between max-[1024px]:flex-col max-[1024px]:flex-wrap max-[1024px]:gap-x-[2%] max-[1024px]:pb-[1.5%] max-[1024px]:overflow-hidden">
                            {dept && dept.keyFigures && dept.keyFigures.map((figure)=>(
                                <div className="relative w-[22.9%] h-[100%] flex flex-col justify-end max-[1024px]:w-[48%]">
                                    <div style={{ background: `url(${figure.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[50%] absolute left-[5%] bottom-[40%] rounded-[7px]"></div>
                                    <div className="w-[100%] h-[70%] flex flex-col justify-end items-end shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                                        <div className="absolute w-[100%] h-[30%] bottom-[5%] px-[5%] flex flex-col justify-between items-center">
                                            <p className="text-[3.4vw] font-[Montserrat] font-bold text-[#01669f] sm:text-[3vw] md:text-[2.4vw] min-[1024px]:text-[1.7vw] xl:text-[1.3vw]">{figure.name}</p>
                                            <p className="text-[3vw] font-[Montserrat] font-semibold text-center text-[#502369] sm:text-[2.6vw] md:text-[2vw] min-[1024px]:text-[1.2vw] xl:text-[1vw]">{figure.position}</p>
                                            <div className="w-[100%] h-[40%] flex flex-row items-center justify-around">
                                                <a href={`mailto:${figure.email}?`} className="w-[12%] aspect-square">
                                                    <svg viewBox="0 0 24 24" fill="none">
                                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#fff" fill="#502369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </a>
                                                <a href={figure.linkedln} target="_blank" rel="noreferrer" className="w-[12%] aspect-square">
                                                    <svg viewBox="0 0 24 24" fill="none">
                                                        <g clip-path="url(#clip0_733_8971)">
                                                            <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#502369"/>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_733_8971">
                                                                <rect width="24" height="24" fill="white"/>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                                <a href={figure.twitter} target="_blank" rel="noreferrer" className="w-[12%] aspect-square">
                                                    <svg viewBox="0 0 24 24" fill="none">
                                                        <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z" fill="#502369"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[70%] h-[23%] flex flex-col items-start justify-between pt-[3%] px-[3%] max-[640px]:w-[100%] max-[1280px]:w-[90%]">
                        <p className="text-[2.8vw] font-[Montserrat] font-semibold text-[#502369] min-[640px]:text-[2.2vw] min-[1280px]:text-[1.7vw] mb-[3%]">Department Contact Info</p>
                        <div className="flex flex-row flex-wrap w-[100%] h-[85%] justify-between">
                            <div className="flex w-[50%] justify-between h-[23%] max-[1280px]:w-[40%]">
                                <div className="w-[10%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="w-[85%] h-[80%] flex flex-col gap-y-[3%]">
                                    <p className="text-[2.4vw] font-[Montserrat] font-semibold text-[#502369] min-[640px]:text-[2vw] min-[1280px]:text-[1.2vw]">Chat with Us</p>
                                    <p className="text-[2.2vw] font-[Montserrat] text-left font-normal min-[640px]:text-[1.5vw] min-[1280px]:text-[1vw]">Our friendly team is here to help.</p>
                                    <a href={`mailto:${dept && dept.email}?`} className="text-[2.2vw] font-[Montserrat] text-left font-semibold min-[640px]:text-[1.5vw] min-[1280px]:text-[1.1vw] mt-[3%] text-blue-800">IFT.com</a>
                                </div>
                            </div>
                            <div className="flex w-[50%] justify-between h-[23%] max-[1280px]:w-[48%]">
                                <div className="w-[10%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="w-[85%] h-[80%] flex flex-col gap-y-[3%]">
                                    <p className="text-[2.4vw] font-[Montserrat] font-semibold text-[#502369] min-[640px]:text-[2vw] min-[1280px]:text-[1.2vw]">Office</p>
                                    <p className="text-[2.2vw] font-[Montserrat] text-left font-normal min-[640px]:text-[1.5vw] min-[1280px]:text-[1vw]">{dept && dept.deptOffice}</p>
                                    <a href="/" className="text-[2.2vw] font-[Montserrat] text-left font-semibold min-[640px]:text-[1.5vw] min-[1280px]:text-[1.1vw] mt-[3%] text-blue-800">{dept && dept.deptAddress}</a>
                                </div>
                            </div>
                            <div className="flex w-[50%] justify-between h-[23%] max-[1280px]:w-[48%]">
                                <div className="w-[10%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.945 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.1705C3.55777 2.05831 3.83233 2.00024 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.8879 9.97366 7.27689 9.8939 7.65086C9.81415 8.02482 9.62886 8.36809 9.35999 8.63998L8.08999 9.90997C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#00659F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="w-[85%] h-[80%] flex flex-col gap-y-[3%]">
                                    <p className="text-[2.4vw] font-[Montserrat] font-semibold text-[#502369] min-[640px]:text-[2vw] min-[1280px]:text-[1.2vw]">Phone</p>
                                    <p className="text-[2.2vw] font-[Montserrat] text-left font-normal min-[640px]:text-[1.5vw] min-[1280px]:text-[1vw]">Mon-Fri from 8am to 5pm.</p>
                                    <a href={`tel:+234 ${dept && dept.deptContact}`} className="text-[2.2vw] font-[Montserrat] text-left font-semibold min-[640px]:text-[1.5vw] min-[1280px]:text-[1.1vw] mt-[3%] text-blue-800">+(234){dept && dept.deptContact}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    );
}

export default Faculty;
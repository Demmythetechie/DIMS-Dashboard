import { useState, useRef } from "react";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';

function AdminCourses() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Main switch for between all the pages
    const [swch, setswch] = useState(null);
    const swchReminder = useRef();
    //switch for just the courses page per level
    const [courseSwch, setCourseSwch] = useState(0);
    const [swchAction, setswchAction] = useState(0);
    const [smt, setSmt] = useState(0);
    const [semesterr, setSemesterr] = useState('First');
    const [value, setValue] = useState('');

    const [binary, setBinary] = useState(0);

    const level = [
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
        [[{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}], [{name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Programming', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}, {name: 'Olivia Rhiye', link: '@Olivia', image: '/images/imageRep.jpg', status: 'Available', course: 'Computer Network', unit: '2', schedule: ['Monday', '11:00PM'], code: '112', venue: 'IFT lecture room'}]],
    ]

    function select(idx) {
        setswch(idx);
        setswchAction(idx)
        swchReminder.current = idx;
    }

    function semester(event) {
        let temp = event.target.value;
        temp = temp.split(",");
        setSemesterr(temp[0]);
        setSmt(Number(temp[1]));
    }

    function addCourses () {
        setswch(null);
        setCourseSwch(1);
    }

    function saveCourses () {
        setswch(swchReminder.current);
        setCourseSwch(0);
    }

    function back() {
        setswch(null)
        setBinary(0);
    }

    function back2() {
        setCourseSwch(0);
    }

    return (
        <section className={`${(swch === null) ? 'aspect-[1/1.5] md:aspect-[1/0.3] sm:aspect-[1/0.4]' : ''} w-[100%] flex flex-col justify-between`}>
            {(swch === null)  && (courseSwch === 0) ?
                <p className="text-[6vw] md:text-[2.5vw] sm:text-[3.2vw] font-[Montserrat] font-semibold">Courses</p>
            :
                <div className={`${(courseSwch === 0) ? 'flex' : 'hidden'} flex-col w-[100%] aspect-[1/0.5] min-[460px]:aspect-[1/0.4] sm:aspect-[1/0.2] md:aspect-[1/0.1] justify-between`}>
                    <div onClick={back} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%] mb-[2%]">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-[100%] h-[45%] items-start sm:items-center md:items-center">
                        <p className="font-[Montserrat] font-semibold text-[5.5vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-black">Add Courses</p>
                        <button onClick={addCourses} className="text-[3vw] w-[36%] sm:w-[22%] md:w-[15%] h-[50%] sm:h-[100%] md:h-[100%] bg-[#0D659F] text-[white] rounded-[8px] sm:text-[1.8vw] md:text-[1.1vw] font-[Montserrat] font-medium">Add courses</button>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-[100%] h-[30%] sm:h-[45%] md:h-[45%] items-start sm:items-center md:items-center">
                        <p className="text-[3vw] sm:text-[2vw] md:text-[1.7vw] font-[Montserrat] font-semibold text-[#0D659F]">{(swch === 0) ? '100 level Courses' : (swch === 1) ? '200 level Courses' : (swch === 2) ? '300 level Courses' : (swch === 3) ? '400 level Courses' : '500 level Courses'}</p>
                        <select onChange={semester} className="w-[55%] sm:w-[40%] md:w-[17%] h-[70%] sm:h-[70%] md:h-[70%] border border-black/50 bg-white text-[black] rounded-[2px] text-[3vw] min-[480px]:text-[2.2vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-normal">
                            <option value="First,0" className="font-[Montserrat] font-medium text-black" selected disabled hidden>{(swch === 0) ? '100 first semester' : (swch === 1) ? '200 first semester' : (swch === 2) ? '300 first semester' : (swch === 3) ? '400 first semester' : '500 first semester'}</option>
                            <option value="First,0" className="font-[Montserrat] font-medium text-black">{(swch === 0) ? '100 first semester' : (swch === 1) ? '200 first semester' : (swch === 2) ? '300 first semester' : (swch === 3) ? '400 first semester' : '500 first semester'}</option>
                            <option value="Second,1" className="font-[Montserrat] font-medium text-black">{(swch === 0) ? '100 second semester' : (swch === 1) ? '200 second semester' : (swch === 2) ? '300 second semester' : (swch === 3) ? '400 second semester' : '500 second semester'}</option>
                        </select>
                    </div>
                </div>
            }
            <div className={`${(swch === null) && (courseSwch === 0) ? 'flex' : 'hidden'} h-[85%] md:h-[70%] sm:h-[80%] w-[100%] flex-col items-center sm:flex-row sm:flex-wrap sm:justify-start md:flex-row md:flex-wrap md:justify-start gap-x-[6%] sm:gap-x-[5%] md:gap-x-[2%] gap-y-[2.5%] sm:gap-y-[10%] md:gap-y-[10%]`}>
                <div onClick={()=> select(0)} className="bg-[#0D659F] w-[90%] sm:w-[30%] md:w-[23%] h-[18%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">100 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{level[0][0].length + level[0][1].length}</span> Courses</p>
                </div>
                <div onClick={()=> select(1)} className="bg-white w-[90%] sm:w-[30%] md:w-[23%] h-[18%] sm:h-[45%] md:h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-[#0D659F] font-[Montserrat]">200 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{level[1][0].length + level[1][1].length}</span> Courses</p>
                </div>
                <div onClick={()=> select(2)} className="bg-[#0D659F] w-[90%] sm:w-[30%] h-[18%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">300 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{ level[2][0].length + level[2][1].length}</span> Courses</p>
                </div>
                <div onClick={()=> select(3)} className="bg-white w-[90%] sm:w-[30%] h-[18%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-[#0D659F] font-[Montserrat]">400 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{level[3][0].length + level[3][1].length}</span> Courses</p>
                </div>
                <div onClick={()=> select(4)} className="bg-[#0D659F] w-[90%] h-[18%] sm:w-[30%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">500 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{level[4][0].length + level[4][1].length}</span> Courses</p>
                </div>
            </div>
            <div className={`${(swch === null) && (binary === 0) ? 'hidden' : 'flex'} border-t border-x w-[100%] flex flex-col pt-[3%] mt-[3%]`}>
                <div className="w-[100%] flex flex-row gap-x-[10%] pl-[2%]">
                    <p className="text-[2.6vw] min-[480px]:text-[2vw] sm:text-[1.8vw] md:text-[1.3vw] font-normal text-black font-[Montserrat]">{semesterr} semester courses</p>
                    <div className="px-[1.5%] bg-[#F9F5FF] rounded-[3vw]">
                        <p className="text-[2.6vw] min-[480px]:text-[2vw] sm:text-[1.5vw] md:text-[1.1vw] font-semibold text-[#6941C6] font-[Montserrat]">{level[swchAction][smt].length} Courses</p>
                    </div>
                </div>
                <div className="w-[100%] mt-[2%] flex flex-row">
                    {(windowWidth > 640) ?
                        <div className="w-[150px] sm:w-[15%] md:w-[15%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Lecturer info</p>
                            </div>
                            {level[swchAction][smt].map((data)=>(
                                <div className="w-[100%] aspect-[1/0.37] flex flex-row justify-between items-center px-[5%] border-b ">
                                    <div style={{ background: `url(${data.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[25%] aspect-square rounded-[50%]"></div>
                                    <div className="w-[65%] h-[70%] flex flex-col justify-between">
                                        <p className="sm:text-[2vw] md:text-[1vw] font-medium text-black font-[Montserrat]">{data.name}</p>
                                        <p className="sm:text-[1.6] md:text-[0.9vw] font-normal text-[#667085] font-[Montserrat]">{data.link}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                        <div className="w-[150px] sm:w-[15%] md:w-[15%] flex flex-col max-[460px]:w-[35%]">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Lecturer info</p>
                            </div>
                            {level[swchAction][smt].map((data) => (
                                <div className="w-[100%] h-[40px] flex flex-row justify-between items-center px-[5%] border-b border-r">
                                    <div style={{ background: `url(${data.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[25%] aspect-square rounded-[50%]"></div>
                                    <div className="w-[65%] h-[70%] flex flex-col justify-between">
                                        <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-black font-[Montserrat]">{data.name}</p>
                                        <p className="text-[2.2vw] min-[480px]:text-[1.8vw] font-normal text-[#667085] font-[Montserrat]">{data.link}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    
                    {(windowWidth < 641) ?
                        <div style={{height: `${(40 * (level[swchAction][smt].length)) + 40}px`}} className={`w-[57%] flex flex-col flex-wrap overflow-scroll max-[460px]:w-[45%]`}>
                            <div className="w-[100px] md:w-[10%] sm:w-[10%] flex flex-col">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Status</p>
                                </div>
                                {level[swchAction][smt].map((data)=>(
                                    <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#ECFDF3]">
                                            <div className="w-[10%] aspect-square">
                                                <svg viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="40" fill="#027A48"/>
                                                </svg>
                                            </div>
                                            <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#027A48] font-[Montserrat]">{data.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[180px] md:w-[18%] sm:w-[18%] flex flex-col">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Course Title</p>
                                </div>
                                {level[swchAction][smt].map((data)=>(
                                    <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">{data.course}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[90px] sm:w-[9%] md:w-[9%] flex flex-col">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Course unit</p>
                                </div>
                                {level[swchAction][smt].map((data)=>(
                                    <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">{data.unit}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[180px] sm:w-[18%] md:w-[18%] flex flex-col">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Lecturer day & date</p>
                                </div>
                                {level[swchAction][smt].map((data)=>(
                                    <div className="w-[100%] h-[40px] flex items-center justify-center gap-x-[3%] border-b">
                                        <div className="w-[50%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#F7FBFF]">
                                            <p className="text-[2.2vw] min-[480px]:text-[1.8vw] font-medium text-[#000066] font-[Montserrat]">{data.schedule[0]}</p>
                                        </div>
                                        <div className="w-[35%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#EFF8FF]">
                                            <p className="text-[2.2vw] min-[480px]:text-[1.8vw] font-semibold text-[#175CD3] font-[Montserrat]">{data.schedule[1]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[100px] sm:w-[10%] md:w-[10%] flex flex-col">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Course code</p>
                                </div>
                                {level[swchAction][smt].map((data)=>(
                                    <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                            <p className="text-[2.6vw] min-[480px]:text-[2vw] font-semibold text-[#667085] font-[Montserrat]">{data.code}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[100px] sm:w-[10%] md:w-[10%] flex flex-col">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Venue</p>
                                </div>
                                {level[swchAction][smt].map((data)=>(
                                    <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                            <p className="text-[2.2vw] min-[480px]:text-[1.8vw] font-semibold text-[#667085] font-[Montserrat]">{data.venue}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    :
                        <></>
                    }

                    {/*second (Status)*/}
                    {(windowWidth > 641) ?
                        <div className="w-[10%] md:w-[10%] sm:w-[10%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Status</p>
                            </div>
                            {level[swchAction][smt].map((data)=>(
                                <div className="w-[100%] aspect-[1/0.555] border-b flex justify-center items-center">
                                    <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#ECFDF3]">
                                        <div className="w-[10%] aspect-square">
                                            <svg viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="40" fill="#027A48"/>
                                            </svg>
                                        </div>
                                        <p className="text-[0.9vw] font-medium text-[#027A48] font-[Montserrat]">{data.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                        <></>
                    }

                    {/*third (Course Title)*/}
                    {(windowWidth > 641) ?
                        <div className="w-[18%] md:w-[18%] sm:w-[18%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Course Title</p>
                            </div>
                            {level[swchAction][smt].map((data)=>(
                                <div className="w-[100%] aspect-[1/0.307] border-b flex justify-center items-center">
                                    <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">{data.course}</p>
                                </div>
                            ))}
                        </div>
                    :
                        <></>
                    }

                    {/*fourth (Course unit)*/}
                    {(windowWidth > 641) ?
                        <div className="w-[9%] sm:w-[9%] md:w-[9%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Course unit</p>
                            </div>
                            {level[swchAction][smt].map((data)=>(
                                <div className="w-[100%] aspect-[1/0.615] border-b flex justify-center items-center">
                                    <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">{data.unit}</p>
                                </div>
                            ))}
                        </div>
                    :
                        <></>
                    }

                    {/*fifth (Course day&date)*/}
                    {(windowWidth > 641) ?
                        <div className="w-[18%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Lecturer day & date</p>
                            </div>
                            {level[swchAction][smt].map((data)=>(
                                <div className="w-[100%] aspect-[1/0.307] flex items-center justify-center gap-x-[3%] border-b">
                                    <div className="w-[50%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#F7FBFF]">
                                        <p className="text-[0.9vw] font-medium text-[#000066] font-[Montserrat]">{data.schedule[0]}</p>
                                    </div>
                                    <div className="w-[35%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw] bg-[#EFF8FF]">
                                        <p className="text-[0.9vw] font-semibold text-[#175CD3] font-[Montserrat]">{data.schedule[1]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                        <></>
                    }

                    {/*sixth (Course code)*/}
                    {(windowWidth > 640) ?
                        <div className="w-[10%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Course code</p>
                            </div>
                            {level[swchAction][smt].map((data)=>(
                                <div className="w-[100%] aspect-[1/0.55] border-b flex justify-center items-center">
                                    <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                        <p className="text-[0.9vw] font-semibold text-[#667085] font-[Montserrat]">{data.code}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                        <></>
                    }

                    {/*seventh (venue)*/}
                    {(windowWidth > 640) ?
                        <div className="w-[10%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Venue</p>
                            </div>
                            {level[swchAction][smt].map((data)=>(
                                <div className="w-[100%] aspect-[1/0.55] border-b flex justify-center items-center">
                                    <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                        <p className="text-[0.9vw] font-semibold text-[#667085] font-[Montserrat]">{data.venue}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                        <></>
                    }

                    {(windowWidth > 640) ?
                        <div className="w-[100px] sm:w-[10%] md:w-[10%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                
                            </div>
                            {level[swchAction][smt].map(()=>(
                                <div className="w-[100%] aspect-[1/0.55] border-b flex justify-center items-center gap-x-[20%]">
                                    <div className="w-[20%] aspect-square">
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <g id="trash-2">
                                                <path id="Icon" d="M2.5 5.00033H4.16667M4.16667 5.00033H17.5M4.16667 5.00033V16.667C4.16667 17.109 4.34226 17.5329 4.65482 17.8455C4.96738 18.1581 5.39131 18.3337 5.83333 18.3337H14.1667C14.6087 18.3337 15.0326 18.1581 15.3452 17.8455C15.6577 17.5329 15.8333 17.109 15.8333 16.667V5.00033H4.16667ZM6.66667 5.00033V3.33366C6.66667 2.89163 6.84226 2.46771 7.15482 2.15515C7.46738 1.84259 7.89131 1.66699 8.33333 1.66699H11.6667C12.1087 1.66699 12.5326 1.84259 12.8452 2.15515C13.1577 2.46771 13.3333 2.89163 13.3333 3.33366V5.00033M8.33333 9.16699V14.167M11.6667 9.16699V14.167" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="w-[20%] aspect-square">
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <g id="edit-2" clip-path="url(#clip0_2230_8556)">
                                                <path id="Icon" d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2230_8556">
                                                    <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    :
                        <div className="w-[100px] sm:w-[10%] md:w-[10%] flex flex-col max-[460px]:w-[20%]">
                            <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                
                            </div>
                            {level[swchAction][smt].map(()=>(
                                <div className="w-[100%] h-[40px] md:aspect-[1/0.55] border-b flex justify-center items-center gap-x-[20%] border-l">
                                    <div className="w-[20%] aspect-square">
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <g id="trash-2">
                                                <path id="Icon" d="M2.5 5.00033H4.16667M4.16667 5.00033H17.5M4.16667 5.00033V16.667C4.16667 17.109 4.34226 17.5329 4.65482 17.8455C4.96738 18.1581 5.39131 18.3337 5.83333 18.3337H14.1667C14.6087 18.3337 15.0326 18.1581 15.3452 17.8455C15.6577 17.5329 15.8333 17.109 15.8333 16.667V5.00033H4.16667ZM6.66667 5.00033V3.33366C6.66667 2.89163 6.84226 2.46771 7.15482 2.15515C7.46738 1.84259 7.89131 1.66699 8.33333 1.66699H11.6667C12.1087 1.66699 12.5326 1.84259 12.8452 2.15515C13.1577 2.46771 13.3333 2.89163 13.3333 3.33366V5.00033M8.33333 9.16699V14.167M11.6667 9.16699V14.167" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="w-[20%] aspect-square">
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <g id="edit-2" clip-path="url(#clip0_2230_8556)">
                                                <path id="Icon" d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2230_8556">
                                                    <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className={`${(courseSwch === 0) ? 'hidden' : 'flex'} flex-col w-[100%] gap-y-[4%] pb-[20px]`}>
                <div onClick={back2} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%] mb-[2%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={`flex flex-col w-[100%] aspect-[1/0.2] sm:aspect-[1/0.07] md:aspect-[1/0.05] justify-between`}>
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-[100%] h-[100%]">
                        <p className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] font-[Montserrat] font-semibold">Add Courses</p>
                        <button onClick={saveCourses} className="text-[3vw] w-[30%] sm:w-[20%] md:w-[17%] h-[45%] sm:h-[100%] md:h-[100%] bg-[#0D659F] text-[white] rounded-[8px] sm:text-[2vw] md:text-[1.3vw] font-[Montserrat] font-semibold">Save courses</button>
                    </div>
                </div>
                <div className="w-[100%] aspect-[1/3.7] sm:aspect-[1/1.4] md:aspect-[1/0.68] flex flex-col gap-y-[1.5%] sm:gap-y-[3%] md:gap-y-[3%]">
                    <p className="text-[4vw] sm:text-[3vw] md:text-[2vw] font-[Montserrat] font-semibold">Courses info</p>
                    <form className="flex flex-col sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap w-[100%] h-[45%] sm:h-[35%] md:h-[25%] gap-y-[2.8%] sm:gap-y-[2%] md:gap-y-[10%] sm:gap-x-[4%] md:gap-x-[2%] sm:justify-start md:justify-start justify-between">
                        <div className="flex flex-col sm:w-[48%] md:w-[30%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseTitle">Course Title</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="courseTitle" name="courseTitle" placeholder='Computer Networking'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[15%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseCode">Course Code</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="courseCode" name="courseCode" placeholder='IFT 383'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[15%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseUnit">Course unit</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="number" id="courseUnit" name="courseUnit" placeholder='3'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[15%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="matric">Time</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="time" name="time">
                                <option selected disabled hidden value="male">12:00PM</option>
                                <option value="male">12:00PM</option>
                                <option value="female">1:00PM</option>
                                <option value="female">2:00PM</option>
                                <option value="female">3:00PM</option>
                                <option value="female">4:00PM</option>
                                <option value="female">5:00PM</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[15%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="day">Day</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="day" name="day">
                                <option selected disabled hidden value="male">Monday</option>
                                <option value="male">Monday</option>
                                <option value="female">Tuesday</option>
                                <option value="female">Wednessday</option>
                                <option value="female">Thursday</option>
                                <option value="female">Friday</option>
                                <option value="female">Saturday</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[15%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="level">Level</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="level" name="level">
                                <option selected disabled hidden value="male">100 Level</option>
                                <option value="male">100 Level</option>
                                <option value="female">200 Level</option>
                                <option value="female">300 Level</option>
                                <option value="female">400 Level</option>
                                <option value="female">500 Level</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[15%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="semester">Semester</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="semester" name="semester">
                                <option value="First" className="text-[1vw] font-[Montserrat] font-medium text-black" selected disabled hidden>First Semester</option>
                                <option value="male">First Semester</option>
                                <option value="female">Second Semester</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[20%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="venue">Venue</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="venue" name="venue" placeholder='Course Venue'/>
                        </div>
                    </form>
                    <p className="sm:text-[3vw] md:text-[2vw] font-[Montserrat] font-semibold">Lecturer info</p>
                    <form className="flex flex-col sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap w-[100%] h-[18%] sm:h-[9%] md:h-[12%] gap-y-[10%] gap-x-[2%]">
                        <div className="flex flex-col w-[100%] sm:w-[32%] md:w-[32%] h-[32%] sm:h-[100%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="firstname">First Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="firstname" name="firstname" placeholder='Olivia'/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[32%] md:w-[32%] h-[32%] sm:h-[100%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="lastname">Last Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="lastname" name="lastname" placeholder='Rhiye'/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[32%] md:w-[32%] h-[32%] sm:h-[100%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="email">Email</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="email" id="email" name="email" placeholder='You@email.com'/>
                        </div>
                    </form>
                    <button className="w-[100%] sm:w-[25%] md:w-[13%] h-[3%] sm:h-[5%] md:h-[6%] flex flex-row items-center justify-center bg-[#FDF8FF] text-[#502369] md:text-[1.2vw] font-[Montserrat] font-medium px-[1%] rounded-lg shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)]">
                        <div className=" w-[8%] sm:w-[20%] md:w-[20%] aspect-square">
                            <svg viewBox="0 0 24 24" fill="none">
                                <g id="vuesax/linear/add">
                                    <g id="add">
                                        <path id="Vector" d="M6 12H18" stroke="#502369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path id="Vector_2" d="M12 18V6" stroke="#502369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-semibold">Add Lecturer</p>
                    </button>
                    <label className="text-[3.5vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseDetails">Course Overview</label>
                    <ReactQuill 
                        theme="snow" 
                        value={value} 
                        onChange={setValue} 
                        placeholder="Enter a description..."
                        className="h-[15%] sm:h-[20%] md:h-[20%] w-[100%] rounded-xl text-[1vw] font-medium font-[Montserrat]"
                    />
                </div>
            </div>
        </section>
    );
}

export default AdminCourses;
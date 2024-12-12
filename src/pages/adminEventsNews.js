import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';

function AdminEventNews() {
    const [dept, setDept] = useState(null);
    const [binary, setBinary] = useState(0);
    const [binary2, setBinary2] = useState(0);
    //for the body of the event
    const [value, setValue] = useState('');

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

    function deleted(event) {
        event.stopPropagation();
    }

    function edit(event) {
        event.stopPropagation();
        setBinary(1);
    }

    function edited() {
        setBinary(0);
        setDept(null);
    }

    function discard() {
        setDept(null);
        setBinary(0);
    }

    function addEvent() {
        setBinary(1);
    }

    useEffect(()=>{
        if (dept !== null) {
            for (let index in courses) {
                if (dept === courses[index].Department) {
                    setDept(courses[index]);
                    console.log(dept);
                    break;
                }
            }
        }
    }, [dept]);

    //The image upload code
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    // Handle file selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

            if (validImageTypes.includes(fileType)) {
                const reader = new FileReader();
                reader.onload = () => {
                    setImage(reader.result); // Set image preview
                    setError(null); // Clear any previous error
                };
                reader.readAsDataURL(file);
            } else {
                setError('Please upload a valid image file (JPEG, JPG, PNG).');
                setImage(null); // Reset the image if invalid file
            }
        }
    };

    // Handle file removal
    const handleRemoveImage = () => {
        setImage(null);
        setError(null);
    };

    return (
        <>
            <section className={`${(dept === null) && (binary === 0) ? 'w-[100%] pt-[3%] px-[2.5%] flex flex-col items-start pb-[3%]' : 'hidden'}`}>
                <div className={`flex flex-col w-[100%] aspect-[1/0.2] sm:aspect-[1/0.07] md:aspect-[1/0.05] justify-between`}>
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-[100%] h-[90%] md:items-center">
                        <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-black">Events & News</p>
                        <button onClick={addEvent} className="text-[3vw] w-[26%] sm:w-[18%] md:w-[15%] h-[45%] sm:h-[100%] md:h-[100%] bg-[#0D659F] text-[white] rounded-[8px] sm:text-[2vw] md:text-[1.1vw] font-[Montserrat] font-medium">Add Event/News</button>
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-fit gap-y-[5%]">
                    <div className="w-[100%] flex flex-row flex-wrap h-fit gap-x-[2%]">
                        {courses.map((course)=>(
                            <div onClick={()=> readMore(course.Department)} className="relative w-[32%] aspect-[1/1.3] flex flex-col justify-end max-[640px]:w-[98%] max-[1280px]:w-[48%] max-[1280px]:aspect-[1/1.5] cursor-pointer">
                                <div style={{ background: `url(${course.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[50%] max-[1024px]:bottom-[43%] absolute left-[5%] bottom-[40%] rounded-[7px]"></div>
                                <div className="w-[100%] h-[70%] flex flex-col justify-end items-end shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                                    <div className="absolute w-[100%] h-[20%] bottom-[15%] px-[5%] flex flex-col justify-between items-start max-[1024px]:h-[25%] max-[1024px]:gap-y-[4%]">
                                        <p className="text-[4.2vw] font-[Montserrat] font-bold text-[#01669f] sm:text-[2.6vw] md:text-[2vw] xl:text-[1.2vw]">{course.Department}</p>
                                        <p className="text-[3.8vw] font-[Montserrat] font-normal text-justify sm:text-[2.2vw] md:text-[1.5vw] xl:text-[1vw] text-black">{course.summary}</p>
                                    </div>
                                    <div className="w-[100%] h-[11%] mb-[2%] flex flex-row justify-between items-center px-[5%]">
                                        <p className="text-[2vw] sm:text-[1.8vw] md:text-[1.2vw] xl:text-[0.8vw] font-[Montserrat] font-normal text-black">Date Posted: {course.date}</p>
                                        <div className="w-[20%] h-[100%] flex flex-row justify-between items-center">
                                            <div onClick={deleted} className="w-[35%] aspect-square cursor-pointer">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047" stroke="#00659F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#00659F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M18.8499 9.14062L18.1999 19.2106C18.0899 20.7806 17.9999 22.0006 15.2099 22.0006H8.7899C5.9999 22.0006 5.9099 20.7806 5.7999 19.2106L5.1499 9.14062" stroke="#00659F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10.3301 16.5H13.6601" stroke="#00659F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.5 12.5H14.5" stroke="#00659F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div onClick={edit} className="w-[35%] aspect-square cursor-pointer">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M13.2599 3.59924L5.04985 12.2892C4.73985 12.6192 4.43985 13.2692 4.37985 13.7192L4.00985 16.9592C3.87985 18.1292 4.71985 18.9292 5.87985 18.7292L9.09985 18.1792C9.54985 18.0992 10.1799 17.7692 10.4899 17.4292L18.6999 8.73924C20.1199 7.23924 20.7599 5.52924 18.5499 3.43924C16.3499 1.36924 14.6799 2.09924 13.2599 3.59924Z" stroke="#00659F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M11.8901 5.05078C12.3201 7.81078 14.5601 9.92078 17.3401 10.2008" stroke="#00659F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M3 22H21" stroke="#00659F" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={`${(dept !== null)  ? 'w-[100%] pt-[3%] pl-[2.5%] pr-[2.5%] flex flex-col items-start gap-y-[3vw] pb-[3%]' : 'hidden'}`}>
                <div onClick={back} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-[#502369]">{dept && dept.Department}</p>
                <div className="flex flex-col w-[100%] gap-y-[2.5vw] max-[640px]:gap-y-[1.2%]">
                    <div className="flex w-[100%] justify-between h-[20%] max-[640px]:h-[40%] max-[640px]:flex-col gap-y-[8vw]">
                        <div style={{ background: `url(${dept && dept.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[40%] aspect-[1/0.7] rounded-[7px] max-[640px]:h-[60%] max-[640px]:w-[100%]"></div>
                        <div className="w-[60%] h-[90%] px-[5%] max-[640px]:px-[0%] max-[640px]:w-[100%] max-[640px]:h-fit">
                            <p className="text-[2.87vw] font-[Montserrat] font-normal text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">
                                The Department of Information Technology is a forward-looking department offering a high-quality learning in a welcoming and friendly environment. Information Technology is a fast changing and advancing field and with our high standard reputation for innovative education, we offer courses that reflect this high level of changes and advancement. The department offers consultancy services to both government and private establishments.
                            </p>
                        </div>
                    </div>
                    <p className="text-[2.87vw] font-[Montserrat] font-normal text-justify text-black whitespace-pre-wrap sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">
                        {dept && dept.summary}
                    </p>
                </div>
            </section>
            <section className={`${(binary === 0) ? 'hidden' : 'flex'} w-[100%] flex-col`}>
                <div className="w-[100%] aspect-[1/0.08] flex justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start mt-[3%]">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Add Events</p>
                    <div className="max-[640px]:w-[60%] w-[25%] max-[640px]:h-[40%] h-[50%] flex items-center justify-between">
                        <button onClick={discard} className="w-[47%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.6vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Discard</button>
                        <button onClick={edited} className="w-[47%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.6vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Save Event</button>
                    </div>
                </div>
                <form className="w-[100%] aspect-[1/2.2] md:aspect-[1/0.8] sm:aspect-[1/1.5] flex flex-col mt-[2%] gap-y-[2%]">
                    <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2.vw] xl:text-[1.5vw] text-black">Event info</p>
                    <div className="flex flex-row flex-wrap w-[100%] h-[12%] sm:h-[10%] md:h-[9%] gap-x-[2%] gap-y-[2%] sm:gap-y-[5%] md:gap-y-[10%]">
                        <div className="flex flex-col w-[100%] sm:w-[70%] md:w-[32%] h-[100%] sm:h-[90%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="title">Event Title</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="title" name="title" placeholder='Event Title'/>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%] h-[60%] sm:h-[40%] md:h-[35%] space-y-4 gap-x-[2%] items-start">
                        <div className={`${!image ? 'pb-[1%] pt-[4%]' : ''} relative border-dashed border-2 border-gray-300 p-1 rounded-lg w-[100%] sm:w-[60%] md:w-[30%] h-[100%] flex flex-col items-center justify-between`}>
                            {!image ? (
                                <div className="w-[40%] aspect-[1/1]">
                                    <svg x="0" y="0" viewBox="0 0 24 24">
                                        <g>
                                            <path d="M17.453 24c-.168 0-.34-.021-.51-.066L1.48 19.793a2.018 2.018 0 0 1-1.414-2.45l1.951-7.272a.5.5 0 0 1 .966.258l-1.95 7.27c-.139.53.179 1.082.71 1.229L17.2 22.967a.995.995 0 0 0 1.217-.704l.781-2.894a.499.499 0 1 1 .966.26l-.78 2.89A1.997 1.997 0 0 1 17.453 24z" fill="#000000" opacity="1" data-original="#000000"></path>
                                            <path d="M22 18H6c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2zM6 3c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h16c.551 0 1-.449 1-1V4c0-.551-.449-1-1-1z" fill="#000000" opacity="1" data-original="#000000"></path>
                                            <path d="M9 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM4.57 16.93a.5.5 0 0 1-.354-.853l4.723-4.723c.566-.566 1.555-.566 2.121 0l1.406 1.406 3.892-4.67a1.502 1.502 0 0 1 1.142-.54h.011a1.5 1.5 0 0 1 1.139.523l5.23 6.102a.5.5 0 1 1-.759.651l-5.23-6.102a.495.495 0 0 0-.38-.174.53.53 0 0 0-.384.18l-4.243 5.091a.498.498 0 0 1-.362.179.481.481 0 0 1-.376-.146l-1.793-1.793a.514.514 0 0 0-.707 0l-4.723 4.723a.498.498 0 0 1-.353.146z" fill="#000000" opacity="1" data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                            ) : (
                                <div className="flex flex-col w-[100%] h-[82%] items-center">
                                    <img
                                        src={image}
                                        alt="Profile Preview"
                                        className="w-[100%] h-[100%] object-cover rounded-lg"
                                    />
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="profilePicInput"
                            />
                            {/* Custom upload button */}
                            <label
                                htmlFor="profilePicInput"
                                className="bg-blue-500 text-white sm:px-[8%] px-[8%] py-[3%] sm:py-[3%] md:px-[8%] md:py-[3%] rounded-full cursor-pointer hover:bg-blue-600 font-[Montserrat] font-medium text-[3vw] sm:text-[2vw] md:text-[1vw]"
                            >
                                Choose Profile Picture
                            </label>
                        </div>
                    </div>
                    <label className="text-[3.5vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseDetails">Course Overview</label>
                    <ReactQuill 
                        theme="snow" 
                        value={value} 
                        onChange={setValue} 
                        placeholder="Enter a description..."
                        className="h-[25%] sm:h-[20%] md:h-[22%] w-[100%] rounded-xl text-[1vw] font-medium font-[Montserrat]"
                    />
                    <div className="flex flex-row flex-wrap w-[100%] h-[24%] sm:h-[10%] md:h-[9%] gap-x-[2%] gap-y-[2%] sm:gap-y-[5%] md:gap-y-[10%] mt-[8%] sm:mt-[8%] md:mt-[5%] items-end">
                        <div className="flex flex-col w-[78%] sm:w-[78%] md:w-[32%] h-[48%] sm:h-[90%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="link">Add Link</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="link" name="link" placeholder='Link'/>
                        </div>
                        <button className="h-[28.5%] w-[20%] sm:w-[20%] md:w-[10%] sm:h-[54%] md:h-[60%] bg-[#0D659F] text-[white] rounded-[8px] text-[2.6vw] sm:text-[1.8vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Save Link</button>
                    </div>
                </form>
            </section>
       </>
    );
}

export default AdminEventNews;
//${(binary === 0) && (binary2 === 0) ? 'hidden' : 'flex'}
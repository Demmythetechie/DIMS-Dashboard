import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';

function AdminFaculty() {
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

    function addDept() {
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

    //For representative profile image
    //The image upload code
    const [image2, setImage2] = useState(null);
    const [error2, setError2] = useState(null);

    // Handle file selection
    const handleImageChange2 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

            if (validImageTypes.includes(fileType)) {
                const reader = new FileReader();
                reader.onload = () => {
                    setImage2(reader.result); // Set image preview
                    setError2(null); // Clear any previous error
                };
                reader.readAsDataURL(file);
            } else {
                setError2('Please upload a valid image file (JPEG, JPG, PNG).');
                setImage2(null); // Reset the image if invalid file
            }
        }
    };

    return (
        <>
            <section className={`${(dept === null) && (binary === 0) ? 'w-[100%] pt-[3%] px-[2.5%] flex flex-col items-start pb-[3%]' : 'hidden'}`}>
                <div className={`flex flex-col w-[100%] aspect-[1/0.2] sm:aspect-[1/0.07] md:aspect-[1/0.05] justify-between`}>
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-[100%] h-[90%] md:items-center">
                        <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-black">Departments</p>
                        <button onClick={addDept} className="text-[2.2vw] w-[30%] sm:w-[22%] md:w-[15%] h-[45%] sm:h-[100%] md:h-[100%] bg-[#0D659F] text-[white] rounded-[8px] sm:text-[1.8vw] md:text-[1.1vw] font-[Montserrat] font-medium">Add Department</button>
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
                                        <div className="w-[20%] h-[100%] flex flex-row justify-end items-center">
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
                <div className="w-[100%] aspect-[1/0.08] max-[840px]:aspect-[1/0.1] flex justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start mt-[3%]">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Add Department</p>
                    <div className="max-[640px]:w-[60%] w-[25%] max-[640px]:h-[40%] h-[50%] flex items-center justify-between">
                        <button onClick={discard} className="w-[47%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.6vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Discard</button>
                        <button onClick={edited} className="w-[47%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.6vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Add Dept</button>
                    </div>
                </div>
                <form className="w-[100%] aspect-[1/6] md:aspect-[1/1.5] sm:aspect-[1/2.6] flex flex-col mt-[2%] gap-y-[2%]">
                    <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2.vw] xl:text-[1.5vw] text-black">Department info</p>
                    <div className="flex flex-row flex-wrap w-[100%] h-[3%] sm:h-[8%] md:h-[5%] gap-x-[2%] gap-y-[2%] sm:gap-y-[5%] md:gap-y-[10%]">
                        <div className="flex flex-col w-[100%] sm:w-[70%] md:w-[32%] h-[100%] sm:h-[90%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="department">Department Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="department" name="department" placeholder='Department Title'/>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%] h-[24%] sm:h-[40%] md:h-[22%] space-y-4 gap-x-[2%] items-start">
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
                    <label className="text-[3.5vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseDetails">Department Overview</label>
                    <ReactQuill 
                        theme="snow" 
                        value={value} 
                        onChange={setValue} 
                        placeholder="Enter a description..."
                        className="h-[18%] sm:h-[20%] md:h-[17%] w-[100%] rounded-xl text-[1vw] font-medium font-[Montserrat]"
                    />
                    <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2.vw] xl:text-[1.5vw] text-black mt-[15%] sm:mt-[3%] md:mt-[3%]">Department representative</p>
                    <div className="w-[100%] h-[18%] sm:h-[26%] md:h-[16%] flex flex-row flex-wrap sm:flex-wrap md:flex-nowrap items-end gap-x-[2%] pl-[18%] sm:pl-[0%] md:pl-[0%] gap-y-[8%] border">
                        <div style={{ background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundColor: '#D0D5DD', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[80%] sm:w-[60%] md:w-[20.8%] aspect-[1/1] rounded-full flex items-center justify-center">
                            {!image2 ? (
                                <div className="w-[50%] aspect-square">
                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.6663 24.0007C42.6663 26.8296 41.5425 29.5427 39.5421 31.5431C37.5418 33.5435 34.8287 34.6673 31.9997 34.6673C29.1707 34.6673 26.4576 33.5435 24.4572 31.5431C22.4568 29.5427 21.333 26.8296 21.333 24.0007C21.333 21.1717 22.4568 18.4586 24.4572 16.4582C26.4576 14.4578 29.1707 13.334 31.9997 13.334C34.8287 13.334 37.5418 14.4578 39.5421 16.4582C41.5425 18.4586 42.6663 21.1717 42.6663 24.0007ZM37.333 24.0007C37.333 25.4151 36.7711 26.7717 35.7709 27.7719C34.7707 28.7721 33.4142 29.334 31.9997 29.334C30.5852 29.334 29.2286 28.7721 28.2284 27.7719C27.2282 26.7717 26.6663 25.4151 26.6663 24.0007C26.6663 22.5862 27.2282 21.2296 28.2284 20.2294C29.2286 19.2292 30.5852 18.6673 31.9997 18.6673C33.4142 18.6673 34.7707 19.2292 35.7709 20.2294C36.7711 21.2296 37.333 22.5862 37.333 24.0007Z" fill="#787878" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9998 2.66699C15.7998 2.66699 2.6665 15.8003 2.6665 32.0003C2.6665 48.2003 15.7998 61.3337 31.9998 61.3337C48.1998 61.3337 61.3332 48.2003 61.3332 32.0003C61.3332 15.8003 48.1998 2.66699 31.9998 2.66699ZM7.99984 32.0003C7.99984 37.5737 9.90117 42.7043 13.0878 46.779C15.3258 43.8401 18.2129 41.4583 21.5237 39.8198C24.8344 38.1813 28.4792 37.3305 32.1732 37.3337C35.8194 37.3302 39.4183 38.1591 42.6957 39.7571C45.973 41.3551 48.8424 43.6801 51.0852 46.555C53.3957 43.5246 54.9514 39.9876 55.6236 36.2366C56.2957 32.4856 56.065 28.6284 54.9505 24.9843C53.836 21.3402 51.8698 18.0138 49.2145 15.2804C46.5592 12.5471 43.2912 10.4853 39.6809 9.26568C36.0705 8.04608 32.2217 7.70372 28.4528 8.26692C24.6839 8.83012 21.1033 10.2827 18.0072 12.5045C14.9112 14.7262 12.3887 17.6533 10.6484 21.0435C8.90823 24.4337 8.00032 28.1896 7.99984 32.0003ZM31.9998 56.0003C26.4904 56.0086 21.1472 54.1133 16.8745 50.635C18.5943 48.173 20.8834 46.1628 23.547 44.7755C26.2106 43.3882 29.1699 42.6649 32.1732 42.667C35.1389 42.6646 38.0625 43.3699 40.701 44.7241C43.3395 46.0784 45.6168 48.0426 47.3438 50.4537C43.038 54.0449 37.6067 56.0082 31.9998 56.0003Z" fill="#787878" />
                                    </svg>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                        <label htmlFor="profilePicInput2" className="flex items-center justify-center text-[#1C6B88] text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium px-4 py-2 cursor-pointer border-[2px] border-[#2FB3E3] rounded-md">Add Photo</label>
                        <label htmlFor="profilePicInput2" className="flex items-center justify-center text-[#82D1EE] text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium py-2 cursor-pointer">Change Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange2}
                            className="hidden"
                            id="profilePicInput2"
                        />
                        {error2 && <p className="text-red-500 text-sm">{error2}</p>}
                    </div>
                    <div className="flex flex-row flex-wrap w-[100%] h-[17%] sm:h-[35%] md:h-[11%] gap-x-[2%] gap-y-[2.8%] sm:gap-y-[2%] md:gap-y-[10%]">
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[32%] h-[18%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="firstname">First Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="firstname" name="firstname" placeholder='First Name'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[32%] h-[18%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="lastname">Last Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="lastname" name="lastname" placeholder='Last Name'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[32%] h-[18%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="middlename">Middle Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="middlename" name="middlename" placeholder='Middle Name'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[18.4%] h-[18%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="rank">Rank</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="rank" name="rank">
                                <option selected disabled hidden>Select rank</option>
                                <option value="male">Angolan</option>
                                <option value="female">Nigerian</option>
                                <option value="female">Ghana</option>
                                <option value="female">Rwanda</option>
                                <option value="female">South Africa</option>
                                <option value="female">Cameroon</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[32%] h-[18%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="position">Academic Position</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="position" name="position" placeholder="Dean, HOD, Assistant Lecturer..."/>
                        </div>
                    </div>
                    <div className="w-[100%] h-[1.8%] sm:h-[4%] md:h-[3%] flex justify-end">
                        <button className="w-[35%] sm:w-[20%] md:w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[2.2vw] sm:text-[1.4vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Add Department</button>
                    </div>
                </form>
            </section>
       </>
    );
}

export default AdminFaculty;
//${(binary === 0) && (binary2 === 0) ? 'hidden' : 'flex'}
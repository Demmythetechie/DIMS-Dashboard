import { useEffect, useState, useRef } from "react";

function AdminStudent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [dept, setDept] = useState(null);
    const [change, setChange] = useState(0);
    const [level, setLevel] = useState(null);
    const [studentCount, setStudentCount] = useState(null);
    const storage = useRef();
    const [trsf, setTrsf] = useState(0);
    //page switcher
    const [path, setPath] = useState('studentLvl');


    const student = [
        [{firstname: 'Olivia', link: '@Olivia', level: '100 Level', matric: '9290202999', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'naim.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'}, {firstname: 'Oliver', link: '@Olivia', level: '100 Level', matric: '9290202999', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'naim.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'}],
        [{firstname: 'Olivia', link: '@Olivia', level: '100 Level', matric: '9290202999', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'farida.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'}],
        [{firstname: 'Olivia', link: '@Olivia', level: '100 Level', matric: '9290202999', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'demilade.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'}],
        [{firstname: 'Olivia', link: '@Olivia', level: '100 Level', matric: '9290202999', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'rufus.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'}],
        [{firstname: 'Olivia', link: '@Olivia', level: '100 Level', matric: '9290202999', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'david.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'}]
    ]

    function back() {
        setPath('listOfStudents');
    }

    function back3() {
        setDept(storage.current);
        setPath('listOfStudents');
    }

    function saveStudent() {
        setPath('listOfStudents');
    }

    function editProfile() {

    }

    function select(idx, lvl) {
        //set Level data to display using 100lvl = 0, 200lvl = 1, 300lvl = 2, 400lvl = 3, 500lvl = 4 based on the data pulled from the API
        setDept(idx);
        setPath('listOfStudents');
        //store it incase (still not sure if it is useful)
        storage.current = dept;
        //for the profile view
        setChange(idx);
        //for the display of the level clicked
        setLevel(lvl);
        //student counts gotten for each level irrespective of the department
        setStudentCount(student[idx].length);
    }

    function back1 () {
        setPath('studentLvl');
        setDept(null);
    }

    function addStudent() {
        setDept(null);
        setPath('addStudent');
    }

    function edit(event) {
        event.stopPropagation();
        setDept(null);
        setPath('addStudent');
    }

    function view (idx) {
        setTrsf(idx);
        setPath('studentProfile');
        setDept(null);
    }


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

    return (
        <>
            <section className={`${(dept === null) && (path === 'studentLvl') ? 'w-[100%] pt-[3%] px-[2.5%] flex flex-col items-start gap-y-[3vh] pb-[3%]' : 'hidden'}`}>
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Students</p>
                <section className={`aspect-[1/1.5] md:aspect-[1/0.3] sm:aspect-[1/0.4] w-[100%] flex flex-col justify-between`}>
                    <div className={`flex h-[85%] md:h-[70%] sm:h-[80%] w-[100%] flex-col items-center sm:flex-row sm:flex-wrap sm:justify-start md:flex-row md:flex-wrap md:justify-start gap-x-[6%] sm:gap-x-[5%] md:gap-x-[2%] gap-y-[2.5%] sm:gap-y-[10%] md:gap-y-[10%]`}>
                        <div onClick={() => select(0, 100)} className="bg-[#0D659F] w-[90%] sm:w-[30%] md:w-[23%] h-[18%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                            <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">100 level</p>
                            <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{student[0].length}</span> Students</p>
                        </div>
                        <div onClick={() => select(1, 200)} className="bg-white w-[90%] sm:w-[30%] md:w-[23%] h-[18%] sm:h-[45%] md:h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                            <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-[#0D659F] font-[Montserrat]">200 level</p>
                            <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{student[1].length}</span> Students</p>
                        </div>
                        <div onClick={() => select(2, 300)} className="bg-[#0D659F] w-[90%] sm:w-[30%] h-[18%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                            <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">300 level</p>
                            <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{student[2].length}</span> Students</p>
                        </div>
                        <div onClick={() => select(3, 400)} className="bg-white w-[90%] sm:w-[30%] h-[18%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                            <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-[#0D659F] font-[Montserrat]">400 level</p>
                            <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{student[3].length}</span> Students</p>
                        </div>
                        <div onClick={() => select(4, 500)} className="bg-[#0D659F] w-[90%] h-[18%] sm:w-[30%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                            <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">500 level</p>
                            <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{student[4].length}</span> Students</p>
                        </div>
                    </div>
                </section>
            </section>
            <div onClick={back1} className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'block'} w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%] mb-[3%]`}>
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'flex'} w-[100%] aspect-[1/0.04] justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start mb-[2%]`}>
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Students</p>
                <button onClick={addStudent} className="max-[640px]:h-[45%] max-[640px]:w-[30%] w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.8vw] md:text-[1.5vw] xl:text-[1.3vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Add Student</button>
            </div>
            <p className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'block'} font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2vw] xl:text-[2vw] text-black`}>{level} Level Students</p>
            <div className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'flex'} border-t border-x w-[100%] flex-col pt-[3%] mt-[3%]`}>
                <div className="w-[100%] flex flex-row gap-x-[10%] pl-[2%]">
                    <p className="text-[2.6vw] min-[480px]:text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] font-normal text-black font-[Montserrat]">All student</p>
                    <div className="px-[1.5%] bg-[#F9F5FF] rounded-[3vw]">
                        <p className="text-[2.6vw] min-[480px]:text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] font-semibold text-[#6941C6] font-[Montserrat]">{studentCount} Students</p>
                    </div>
                </div>
                
                <div className="w-[100%] mt-[2%] flex flex-row">
                    {(windowWidth > 640) ?
                        <div className="w-[150px] sm:w-[15%] md:w-[15%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Student info</p>
                            </div>
                            {student[change].map((data, index) => (
                                <div onClick={() => view(index)} className="w-[100%] aspect-[1/0.37] flex flex-row justify-between items-center px-[5%] border-b ">
                                    <div style={{ background: `url(${data.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[25%] aspect-square rounded-[50%]"></div>
                                    <div className="w-[65%] h-[70%] flex flex-col justify-between">
                                        <p className="sm:text-[1.5vw] md:text-[1vw] font-medium text-black font-[Montserrat]">{data.firstname}</p>
                                        <p className="sm:text-[1.2vw] md:text-[0.9vw] font-normal text-[#667085] font-[Montserrat]">{data.link}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className="w-[150px] sm:w-[15%] md:w-[15%] flex flex-col max-[460px]:w-[35%]">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Student info</p>
                            </div>
                            {student[change].map((data, index) => (
                                <div onClick={() => view(index)} className="w-[100%] h-[40px] flex flex-row justify-between items-center px-[5%] border-b border-r">
                                    <div style={{ background: `url(${data.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[25%] aspect-square rounded-[50%]"></div>
                                    <div className="w-[65%] h-[70%] flex flex-col justify-between">
                                        <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-black font-[Montserrat]">{data.firstname}</p>
                                        <p className="text-[2.2vw] min-[480px]:text-[1.8vw] font-normal text-[#667085] font-[Montserrat]">{data.link}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                    {(windowWidth < 641) ?
                        <div style={{ height: `${(40 * (student[change].length)) + 40}px` }} className={`snap-x w-[57%] flex flex-col flex-wrap overflow-scroll max-[460px]:w-[45%]`}>
                            <div className="w-full md:w-[12%] sm:w-[12%] flex flex-col snap-start">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Matric number</p>
                                </div>
                                {student[change].map((data, index) => (
                                    <div onClick={() => view(index)} className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#027A48] font-[Montserrat]">{data.matric}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full sm:w-[12%] md:w-[12%] flex flex-col snap-start">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Phone Number</p>
                                </div>
                                {student[change].map((data, index) => (
                                    <div onClick={() => view(index)} className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">{data.phone}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full sm:w-[10%] md:w-[10%] flex flex-col snap-start">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Gender</p>
                                </div>
                                {student[change].map((data, index) => (
                                    <div onClick={() => view(index)} className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                        <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                            <p className="text-[2.6vw] min-[480px]:text-[2vw] font-semibold text-[#667085] font-[Montserrat]">{data.gender}</p>
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
                        <div className="w-[28%] md:w-[28%] sm:w-[28%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Matric number</p>
                            </div>
                            {student[change].map((data, index) => (
                                <div onClick={() => view(index)} className="w-[100%] aspect-[1/0.198] border-b flex justify-center items-center">
                                    <p className="text-[0.9vw] font-medium text-[#027A48] font-[Montserrat]">{data.matric}</p>
                                </div>
                            ))}
                        </div>
                        :
                        <></>
                    }

                    {/*fourth (Course unit)*/}
                    {(windowWidth > 640) ?
                        <div className="w-[27%] sm:w-[27%] md:w-[27%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Phone Number</p>
                            </div>
                            {student[change].map((data, index) => (
                                <div onClick={() => view(index)} className="w-[100%] aspect-[1/0.205] border-b flex justify-center items-center">
                                    <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">{data.phone}</p>
                                </div>
                            ))}
                        </div>
                        :
                        <></>
                    }

                    {/*sixth (Course code)*/}
                    {(windowWidth > 640) ?
                        <div className="w-[20%] flex flex-col">
                            <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Gender</p>
                            </div>
                            {student[change].map((data, index) => (
                                <div onClick={() => view(index)} className="w-[100%] aspect-[1/0.277] border-b flex justify-center items-center">
                                    <div className="w-[80%] h-[40%] flex items-center gap-x-[6%] justify-center px-[2%] rounded-[2vw]">
                                        <p className="text-[0.9vw] font-semibold text-[#667085] font-[Montserrat]">{data.gender}</p>
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
                            {student[change].map((index) => (
                                <div onClick={() => view(index)} className="w-[100%] aspect-[1/0.553] border-b flex justify-center items-center gap-x-[20%]">
                                    <div onClick={edit} className="w-[20%] aspect-square cursor-pointer">
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <g id="edit-2" clip-path="url(#clip0_2230_8556)">
                                                <path id="Icon" d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2230_8556">
                                                    <rect width="20" height="20" fill="white" />
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
                            {student[change].map((index) => (
                                <div onClick={() => view(index)} className="w-[100%] h-[40px] md:aspect-[1/0.55] border-b flex justify-center items-center gap-x-[20%] border-l">
                                    <div onClick={edit} className="w-[20%] aspect-square cursor-pointer">
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <g id="edit-2" clip-path="url(#clip0_2230_8556)">
                                                <path id="Icon" d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2230_8556">
                                                    <rect width="20" height="20" fill="white" />
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
            <section className={`${(path === 'studentProfile') ? 'flex' : 'hidden'} w-[100%] pt-[3%] pl-[2.5%] pr-[2.5%] flex-col items-start gap-y-[3vw] pb-[3%]`}>
                <div onClick={back3} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="w-[100%] aspect-[1/0.04] flex justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Student info</p>
                    <button onClick={edit} className="max-[640px]:h-[45%] max-[640px]:w-[30%] w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.8vw] md:text-[1.5vw] xl:text-[1.3vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Edit Profile</button>
                </div>
                <div className="flex flex-col w-[100%] aspect-[1/0.5] gap-y-[10%] max-[640px]:aspect-[1/3.2] max-[640px]:gap-y-[1.2%] max-[1280px]:aspect-[1/0.8]">
                    <div className="flex w-[80%] gap-y-[1%] h-[45%] max-[640px]:h-[50%] max-[640px]:w-[100%] max-[640px]:flex-col">
                        <div style={{ background: `url(${student[change][trsf].image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[39.5%] h-[100%] rounded-[7px] max-[640px]:h-[53%] max-[640px]:w-[100%]"></div>
                        <div className="w-[59.5%] h-[90%] px-[3%] max-[640px]:px-[0%] max-[640px]:w-[100%] max-[640px]:h-fit flex flex-col gap-y-[4%]">
                            <p className=" max-[640px]:mt-[5%] text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">First name: <span className="text-[#0D659F]">{student[change][trsf].firstname}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Last name: <span className="text-[#0D659F]">{student[change][trsf].lastname}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Middle name: <span className="text-[#0D659F]">{student[change][trsf].middlename}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Phone number: <span className="text-[#0D659F]">{student[change][trsf].phone}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Email: <span className="text-[#0D659F]">{student[change][trsf].email}</span></p>
                            <div className="w-[30%] h-[20%] flex flex-row items-center justify-between mt-[5%] max-[640px]:w-[60%]">
                                <a href={`mailto:${student[change][trsf].email}?`} className="w-[17%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#fff" fill="#0D659F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                <a href={student[change][trsf].linkedln} target="_blank" rel="noreferrer" className="w-[17%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_733_8971)">
                                            <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#0D659F"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_733_8971">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href={student[change][trsf].twitter} target="_blank" rel="noreferrer" className="w-[17%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z" fill="#0D659F"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[70%] h-[40%] flex flex-row flex-wrap justify-start max-[640px]:h-[15%] gap-y-[5%]">
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Level</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{student[change][trsf].level}</p>
                        </div>
                        <div className="w-[30%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Matric Number</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{student[change][trsf].matric}</p>
                        </div>
                        <div className="w-[30%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">State of origin</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{student[change][trsf].state}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Gender</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{student[change][trsf].gender}</p>
                        </div>
                        <div className="w-[25%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Date of birth</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{student[change][trsf].dob}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Nationality</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{student[change][trsf].nationality}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Religion</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{student[change][trsf].religion}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*This is the form for edit and add Lecturer*/}
            <section className={`${(path === 'addStudent') ? 'flex' : 'hidden'} flex-col w-[100%]`}>
                <div onClick={back} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="w-[100%] aspect-[1/0.04] flex justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start mt-[3%]">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Student</p>
                    <button onClick={saveStudent} className="max-[640px]:h-[45%] max-[640px]:w-[30%] w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.8vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Add Student</button>
                </div>
                <form className="w-[100%] aspect-[1/5] sm:aspect-[1/2.5] md:aspect-[1/0.85] mt-[3%] flex flex-col gap-y-[2%]">
                    <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2.vw] xl:text-[1.5vw] text-black">Student details</p>
                    <div className="flex flex-row flex-wrap w-[100%] h-[30%] sm:h-[20%] md:h-[20%] gap-x-[2%] gap-y-[2%] sm:gap-y-[5%] md:gap-y-[10%]">
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="firstname">First Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="firstname" name="firstname" placeholder='First Name'/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="lastname">Last Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="lastname" name="lastname" placeholder='Last Name '/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="middlename">Middle Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="middlename" name="middlename" placeholder='Middle Name'/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[15%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="level">Level</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="level" name="level">
                                <option selected disabled hidden>Select Level</option>
                                <option value="male">100 Level</option>
                                <option value="female">200 Level</option>
                                <option value="female">300 Level</option>
                                <option value="female">400 Level</option>
                                <option value="female">500 Level</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="matric">Matric Number</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="matric" name="matric" placeholder='Matric Number'/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="level">Course Title</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="level" name="level">
                                <option selected disabled hidden>Select Course</option>
                                <option value="male">Computer Science</option>
                                <option value="female">Software Engineering</option>
                                <option value="female">Mechanical Engineering</option>
                                <option value="female">Electrical Engineering</option>
                                <option value="female">Mechatronics Engineering</option>
                            </select>
                        </div>
                    </div>
                    <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2.vw] xl:text-[1.5vw] text-black">Personal details</p>
                    <div className="w-[100%] h-[20%]  sm:h-[26%] md:h-[26%] flex flex-row flex-wrap sm:flex-wrap md:flex-nowrap items-end gap-x-[2%] pl-[18%] sm:pl-[0%] md:pl-[0%] gap-y-[8%]">
                        <div style={{ background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundColor: '#D0D5DD', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[80%] sm:w-[60%] md:w-[20.8%] aspect-[1/1] rounded-full flex items-center justify-center">
                            {!image ? (
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
                        <label htmlFor="profilePicInput" className="flex items-center justify-center text-[#1C6B88] text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium px-4 py-2 cursor-pointer border-[2px] border-[#2FB3E3] rounded-md">Add Photo</label>
                        <label htmlFor="profilePicInput" className="flex items-center justify-center text-[#82D1EE] text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium py-2 cursor-pointer">Change Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="profilePicInput"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                    <div className="flex flex-row flex-wrap w-[100%] h-[45%] sm:h-[35%] md:h-[20%] gap-x-[2%] gap-y-[2.8%] sm:gap-y-[2%] md:gap-y-[10%] mt-[3%]">
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[39%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="email">Email Address</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="email" name="email" placeholder='You@mail.com'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[39%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="phone">Phone Number</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="phone" name="phone" placeholder='+(234) 000000000'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[18%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="gender">Gender</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="gender" name="gender">
                                <option selected disabled hidden>Select Gender</option>
                                <option value="male">Female</option>
                                <option value="female">Male</option>
                                <option value="female">Non-binary</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[18.4%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="nationality">Nationality</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="nationality" name="nationality">
                                <option selected disabled hidden>Select Nationality</option>
                                <option value="male">Angolan</option>
                                <option value="female">Nigerian</option>
                                <option value="female">Ghana</option>
                                <option value="female">Rwanda</option>
                                <option value="female">South Africa</option>
                                <option value="female">Cameroon</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[18.4%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="state">State of origin</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="state" name="state">
                                <option selected disabled hidden>Select Origin</option>
                                <option value="male">Lagos</option>
                                <option value="female">Ondo</option>
                                <option value="female">Ghana</option>
                                <option value="female">Rwanda</option>
                                <option value="female">South Africa</option>
                                <option value="female">Cameroon</option>
                            </select>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[18.4%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="dob">Date of birth</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="dob" name="dob" placeholder='Date of birth'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] w-[100%] md:w-[18.4%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="religion">Religion</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="religion" name="religion">
                                <option selected disabled hidden>Select Religion</option>
                                <option value="male">Christianity</option>
                                <option value="female">Islam</option>
                                <option value="female">Athiest</option>
                            </select>
                        </div>
                    </div>
                    <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2.vw] xl:text-[1.5vw] text-black sm:mt-[13%] md:mt-[0%]">Social links</p>
                    <div className="flex flex-row flex-wrap w-[100%] h-[9.5%] gap-x-[2%] gap-y-[4%] sm:mt-[2%] md:mt-[0%]">
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[48%] sm:h-[90%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="linkedln">Linkedln</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="linkedln" name="linkedln" placeholder=''/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[48%] sm:h-[90%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="twitter">Twitter</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="twitter" name="twitter" placeholder=''/>
                        </div>
                    </div>
                </form>
            </section>
       </>
    );
}

export default AdminStudent;
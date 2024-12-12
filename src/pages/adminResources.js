import { useState, useRef, useReducer } from "react";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import ReactQuill from 'react-quill';

function AdminResources() {
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

    //For Dropdown
    const [drop, setDrop] = useState(null);

    //For deletion
    const [checkk, setCheck] = useState(false);

    //To edit file name
    const [editFile, setEditfile] =  useState(null);

    const level = [
        [[{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}], [{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}]],
        [[{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}], [{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}]],
        [[{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}], [{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}]],
        [[{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}], [{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}]],
        [[{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}], [{name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}, {name: 'Mobile and Perversive Computing', code: 402, files: [{name: 'Tech Requirement', type: 'pdf', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'mp4', size: '29kb', date: 'Jan 2, 2005'}, {name: 'Tech Requirement', type: 'jpg', size: '29kb', date: 'Jan 2, 2005'}]}]]
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

    function dropDown(inx) {
        drop === inx ? setDrop(null) : setDrop(inx);
    }

    function check(event) {
        setCheck(event.target.checked);
    }

    function editFilename (event, index) {
        event.stopPropagation();
        setEditfile(index);
    }

    // Handle file selection

    //const [document, setDocument] = useState(null);
    const [reviewName, setReviewname] = useState(null);
    const [reviewType, setReviewtype] = useState(null);
    const [reviewSize, setReviewsize] = useState(null);
    const [resources, dispatch] = useReducer(reducer, []);
    const [error, setError] = useState(null);

    function reducer(resources, action) {
        if (action.type === '') {
            return [...resources, action.fls]; 
        }
    }

    const handleDocumentChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            const validDocumentTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'video/mp4', 'video/mkv', 'video/mp4', 'audio/mpeg', 'audio/mp3'];

            if (validDocumentTypes.includes(fileType)) {
                /*
                const reader = new FileReader();
                reader.onload = () => {
                    setDocument(reader.result); // Set image preview
                    setError(null); // Clear any previous error
                };
                reader.readAsDataURL(file);
                */
                dispatch({type: '', fls: file});
                setReviewname(file.name);
                setReviewsize(file.size);
                setReviewtype((file.type).split('/')[1]);
            } else {
                setError('Please upload a valid Document file (JPEG, JPG, PNG, PDF, MP4, MP3, AVI, MKV).');
                //setDocument(null); // Reset the image if invalid file
            }
        }
    };

    /* This is to escape the file name edit (input) if nothing/something is inputed */

    function editedFile(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Optional, if you want to prevent form submission
            setEditfile(null); // Call the function to trigger your action
        }
    }

    return (
        <section className={`${(swch === null) ? 'aspect-[1/1.5] md:aspect-[1/0.3] sm:aspect-[1/0.4]' : ''} w-[100%] flex flex-col justify-between`}>
            {(swch === null)  && (courseSwch === 0) ?
                <p className="text-[6vw] md:text-[2.5vw] sm:text-[3.2vw] font-[Montserrat] font-semibold">Resources</p>
            :
                <div className={`${(courseSwch === 0) ? 'flex' : 'hidden'} flex-col w-[100%] aspect-[1/0.5] min-[460px]:aspect-[1/0.4] sm:aspect-[1/0.2] md:aspect-[1/0.1] justify-between`}>
                    <div onClick={back} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%] mb-[2%]">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-[100%] h-[45%] items-start sm:items-center md:items-center">
                        <p className="font-[Montserrat] font-semibold text-[5.5vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[1.8vw] text-black">Add Resources</p>
                        <button onClick={addCourses} className="text-[3vw] w-[36%] sm:w-[22%] md:w-[15%] h-[50%] sm:h-[100%] md:h-[100%] bg-[#0D659F] text-[white] rounded-[8px] sm:text-[1.8vw] md:text-[1.1vw] font-[Montserrat] font-medium">Add Resources</button>
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
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{level[0][0].length + level[0][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(1)} className="bg-white w-[90%] sm:w-[30%] md:w-[23%] h-[18%] sm:h-[45%] md:h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-[#0D659F] font-[Montserrat]">200 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{level[1][0].length + level[1][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(2)} className="bg-[#0D659F] w-[90%] sm:w-[30%] h-[18%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">300 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{ level[2][0].length + level[2][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(3)} className="bg-white w-[90%] sm:w-[30%] h-[18%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-[#0D659F] font-[Montserrat]">400 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-[#0D659F] font-[Montserrat]"><span>{level[3][0].length + level[3][1].length}</span> Resources</p>
                </div>
                <div onClick={()=> select(4)} className="bg-[#0D659F] w-[90%] h-[18%] sm:w-[30%] md:w-[23%] sm:h-[45%] md:h-[45%] rounded-[8px] flex flex-col items-center justify-center gap-y-[7%] cursor-pointer">
                    <p className="text-[3.5vw] sm:text-[2.2vw] md:text-[1.4vw] font-semibold text-white font-[Montserrat]">500 level</p>
                    <p className="text-[4.5vw] sm:text-[2.7vw] md:text-[2vw] font-semibold text-white font-[Montserrat]"><span>{level[4][0].length + level[4][1].length}</span> Resources</p>
                </div>
            </div>
            <div className={`${(swch === null) && (binary === 0) ? 'hidden' : 'flex'} w-[100%] flex flex-col pt-[2%] mt-[3%] gap-y-[2vw]`}>
                <p className="text-[3.5vw] sm:text-[1.5vw] md:text-[1.5vw] font-[Montserrat] font-semibold text-[#502369]">Folders</p>
                {level[swchAction][smt].map((data, inx) => (
                    <>
                        <div className="flex flex-row w-[100%] aspect-[1/0.15] sm:aspect-[1/0.08] md:aspect-[1/0.05] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-lg px-[3%] items-center justify-between">
                            <div className="w-[65%] sm:w-[75%] md:w-[80%] flex items-center gap-x-[5%]">
                                <div className="w-[10%] sm:w-[4%] aspect-[1/1]">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p className="text-[2.4vw] sm:text-[1.4vw] md:text-[1.1vw] font-semibold text-black font-[Montserrat]">IFT {data.code} - {data.name}</p>
                            </div>
                            <div className="flex flex-row w-[30%] sm:w-[17%] md:w-[10%] h-[100%] items-center justify-around max-[460px]:pl-[2%]">
                                <div onClick={()=> dropDown(inx)} className="w-[20%] aspect-[1/1] cursor-pointer">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div onClick={addCourses} className="w-[30%] aspect-[1/1]">
                                    <svg viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_1416_35595)">
                                            <rect width="40" height="44" rx="8" fill="#FDF8FF" shape-rendering="crispEdges" />
                                            <path d="M21.2601 13.6002L13.0501 22.2902C12.7401 22.6202 12.4401 23.2702 12.3801 23.7202L12.0101 26.9602C11.8801 28.1302 12.7201 28.9302 13.8801 28.7302L17.1001 28.1802C17.5501 28.1002 18.1801 27.7702 18.4901 27.4302L26.7001 18.7402C28.1201 17.2402 28.7601 15.5302 26.5501 13.4402C24.3501 11.3702 22.6801 12.1002 21.2601 13.6002Z" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.8899 15.0498C20.3199 17.8098 22.5599 19.9198 25.3399 20.1998" stroke="#502369" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 32H29" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_1416_35595" x="0" y="0" width="42" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="1" dy="1" />
                                                <feGaussianBlur stdDeviation="0.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1416_35595" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1416_35595" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={`${(drop === inx) ? 'flex' : 'hidden'} flex-col border border-black/10 w-[100%] rounded-lg`}>
                            <div className="w-[100%] aspect-[1/0.15] sm:aspect-[1/0.06] md:aspect-[1/0.06] flex items-center px-[3%]">
                                <p className="text-[2.5vw] sm:text-[1.4vw] md:text-[1.1vw] font-medium text-black font-[Montserrat]">File uploaded</p>
                            </div>
                            <div className="w-[100%] flex flex-row">
                                {(windowWidth > 640) ?
                                    <div className="w-[150px] sm:w-[40%] md:w-[40%] flex flex-col">
                                        <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-start pl-[8%] items-center border-b gap-x-[3%]">
                                            <input onClick={check} className="w-[5%] aspect-[1/1]" type="checkbox" id="select" name="select"/>
                                            <label for="select" className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">File name</label>
                                        </div>
                                        {(data.files).map((filess, index) => (
                                            <div className="w-[100%] aspect-[1/0.13] flex flex-row justify-between items-center border-b pl-[8%]">
                                                <input disabled={checkk ? true : false} className="w-[5%] aspect-[1/1]" type="checkbox" id="select" name="select" value={index}/>
                                                <div className="w-[10%] aspect-[1/1]">
                                                    {(filess.type === 'pdf') ?
                                                        <svg viewBox="0 0 40 40" fill="none">
                                                            <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                            <path d="M20.8333 11.667H14.9999C14.5579 11.667 14.134 11.8426 13.8214 12.1551C13.5088 12.4677 13.3333 12.8916 13.3333 13.3337V26.667C13.3333 27.109 13.5088 27.5329 13.8214 27.8455C14.134 28.1581 14.5579 28.3337 14.9999 28.3337H24.9999C25.4419 28.3337 25.8659 28.1581 26.1784 27.8455C26.491 27.5329 26.6666 27.109 26.6666 26.667V17.5003M20.8333 11.667L26.6666 17.5003M20.8333 11.667V17.5003H26.6666" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    : (['jpg', 'jpeg', 'png'].includes(filess.type)) ?
                                                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                            <path d="M14.1667 27.5H25.8333C26.7538 27.5 27.5 26.7538 27.5 25.8333V14.1667C27.5 13.2462 26.7538 12.5 25.8333 12.5H14.1667C13.2462 12.5 12.5 13.2462 12.5 14.1667V25.8333C12.5 26.7538 13.2462 27.5 14.1667 27.5ZM14.1667 27.5L23.3333 18.3333L27.5 22.5M18.3333 17.0833C18.3333 17.7737 17.7737 18.3333 17.0833 18.3333C16.393 18.3333 15.8333 17.7737 15.8333 17.0833C15.8333 16.393 16.393 15.8333 17.0833 15.8333C17.7737 15.8333 18.3333 16.393 18.3333 17.0833Z" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    : (filess.type === 'mp3') ?
                                                        <svg viewBox="0 0 40 40" fill="none">
                                                            <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                            <path d="M20.8333 11.667H14.9999C14.5579 11.667 14.134 11.8426 13.8214 12.1551C13.5088 12.4677 13.3333 12.8916 13.3333 13.3337V26.667C13.3333 27.109 13.5088 27.5329 13.8214 27.8455C14.134 28.1581 14.5579 28.3337 14.9999 28.3337H24.9999C25.4419 28.3337 25.8659 28.1581 26.1784 27.8455C26.491 27.5329 26.6666 27.109 26.6666 26.667V17.5003M20.8333 11.667L26.6666 17.5003M20.8333 11.667V17.5003H26.6666" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    : (['mp4', 'avi', 'mkv'].includes(filess.type)) ?
                                                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                            <g clip-path="url(#clip0_2386_2513)">
                                                                <path d="M15.8334 11.667V28.3337M24.1667 11.667V28.3337M11.6667 20.0003H28.3334M11.6667 15.8337H15.8334M11.6667 24.167H15.8334M24.1667 24.167H28.3334M24.1667 15.8337H28.3334M13.4834 11.667H26.5167C27.5201 11.667 28.3334 12.4803 28.3334 13.4837V26.517C28.3334 27.5203 27.5201 28.3337 26.5167 28.3337H13.4834C12.4801 28.3337 11.6667 27.5203 11.6667 26.517V13.4837C11.6667 12.4803 12.4801 11.667 13.4834 11.667Z" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_2386_2513">
                                                                    <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    :
                                                        <></>
                                                    }
                                                </div>
                                                <div className="w-[75%] h-[70%] flex flex-col justify-center">
                                                    {(editFile === index) ?
                                                        <input onKeyDown={editedFile} className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" name="filename" id="filename" placeholder="Press Enter to esc/save"/>
                                                    :
                                                        <p className="sm:text-[1.6] md:text-[0.9vw] font-normal text-[#667085] font-[Montserrat]">{filess.name}</p>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div className="w-[150px] sm:w-[15%] md:w-[15%] flex flex-col max-[460px]:w-[40%]">
                                        <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-start items-center border-b px-[5%] gap-x-[10%]">
                                            <input onClick={check} className="w-[10%] aspect-[1/1]" type="checkbox" id="select" name="select"/>
                                            <label for="select" className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">File name</label>
                                        </div>
                                        {(data.files).map((filess, index) => (
                                            <div className="w-[100%] h-[40px] flex flex-row justify-between items-center px-[5%] border-b border-r">
                                                <input disabled={checkk ? true : false} className="w-[10%] aspect-[1/1]" type="checkbox" id="select" name="select" value={index}/>
                                                <div className="w-[85%] h-[70%] flex flex-col justify-center">
                                                    {(editFile === index) ?
                                                        <input onKeyDown={editedFile} className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" name="filename" id="filename"/>
                                                    :
                                                        <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">{filess.name}</p>
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                }

                                {(windowWidth < 641) ?
                                    <div style={{ height: `${(40 * ((data.files).length)) + 40}px` }} className={`w-[57%] flex flex-col flex-wrap overflow-scroll max-[460px]:w-[40%]`}>
                                        <div className="w-full min-[460px]:w-[175px] md:w-[18%] sm:w-[18%] flex flex-col">
                                            <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                                <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">File Size</p>
                                            </div>
                                            {(data.files).map((filess) => (
                                                <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">{filess.size}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full min-[460px]:w-[165px] sm:w-[9%] md:w-[9%] flex flex-col">
                                            <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                                <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">Date uploaded</p>
                                            </div>
                                            {(data.files).map((filess) => (
                                                <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                                    <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">{filess.date}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full min-[460px]:w-[165px] sm:w-[9%] md:w-[9%] flex flex-col">
                                            <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                                <p className="text-[2.6vw] min-[480px]:text-[2vw] font-medium text-[#667085] font-[Montserrat]">File type</p>
                                            </div>
                                            {(data.files).map((filess) => (
                                                <div className="w-[100%] h-[40px] border-b flex justify-center items-center">
                                                    {(filess.type === 'pdf') ?
                                                        <div className="w-[20%] aspect-[1/1]">
                                                            <svg viewBox="0 0 40 40" fill="none">
                                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                                <path d="M20.8333 11.667H14.9999C14.5579 11.667 14.134 11.8426 13.8214 12.1551C13.5088 12.4677 13.3333 12.8916 13.3333 13.3337V26.667C13.3333 27.109 13.5088 27.5329 13.8214 27.8455C14.134 28.1581 14.5579 28.3337 14.9999 28.3337H24.9999C25.4419 28.3337 25.8659 28.1581 26.1784 27.8455C26.491 27.5329 26.6666 27.109 26.6666 26.667V17.5003M20.8333 11.667L26.6666 17.5003M20.8333 11.667V17.5003H26.6666" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    : (['jpg', 'jpeg', 'png'].includes(filess.type)) ?
                                                        <div className="w-[20%] aspect-[1/1]">
                                                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                                <path d="M14.1667 27.5H25.8333C26.7538 27.5 27.5 26.7538 27.5 25.8333V14.1667C27.5 13.2462 26.7538 12.5 25.8333 12.5H14.1667C13.2462 12.5 12.5 13.2462 12.5 14.1667V25.8333C12.5 26.7538 13.2462 27.5 14.1667 27.5ZM14.1667 27.5L23.3333 18.3333L27.5 22.5M18.3333 17.0833C18.3333 17.7737 17.7737 18.3333 17.0833 18.3333C16.393 18.3333 15.8333 17.7737 15.8333 17.0833C15.8333 16.393 16.393 15.8333 17.0833 15.8333C17.7737 15.8333 18.3333 16.393 18.3333 17.0833Z" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    : (filess.type === 'mp3') ?
                                                        <div className="w-[20%] aspect-[1/1]">
                                                            <svg viewBox="0 0 40 40" fill="none">
                                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                                <path d="M20.8333 11.667H14.9999C14.5579 11.667 14.134 11.8426 13.8214 12.1551C13.5088 12.4677 13.3333 12.8916 13.3333 13.3337V26.667C13.3333 27.109 13.5088 27.5329 13.8214 27.8455C14.134 28.1581 14.5579 28.3337 14.9999 28.3337H24.9999C25.4419 28.3337 25.8659 28.1581 26.1784 27.8455C26.491 27.5329 26.6666 27.109 26.6666 26.667V17.5003M20.8333 11.667L26.6666 17.5003M20.8333 11.667V17.5003H26.6666" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    : (['mp4', 'avi', 'mkv'].includes(filess.type)) ?
                                                        <div className="w-[20%] aspect-[1/1]">
                                                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                                <g clip-path="url(#clip0_2386_2513)">
                                                                    <path d="M15.8334 11.667V28.3337M24.1667 11.667V28.3337M11.6667 20.0003H28.3334M11.6667 15.8337H15.8334M11.6667 24.167H15.8334M24.1667 24.167H28.3334M24.1667 15.8337H28.3334M13.4834 11.667H26.5167C27.5201 11.667 28.3334 12.4803 28.3334 13.4837V26.517C28.3334 27.5203 27.5201 28.3337 26.5167 28.3337H13.4834C12.4801 28.3337 11.6667 27.5203 11.6667 26.517V13.4837C11.6667 12.4803 12.4801 11.667 13.4834 11.667Z" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_2386_2513">
                                                                        <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    :
                                                        <></>
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }

                                {/*second (Status)*/}
                                {(windowWidth > 641) ?
                                    <div className="w-[10%] md:w-[20%] sm:w-[20%] flex flex-col">
                                        <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">File size</p>
                                        </div>
                                        {(data.files).map((filess) => (
                                            <div className="w-[100%] aspect-[1/0.26] border-b flex justify-center items-center">
                                                <p className="text-[0.9vw] font-medium text-black font-[Montserrat]">{filess.size}</p>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <></>
                                }

                                {/*third (Course Title)*/}
                                {(windowWidth > 641) ?
                                    <div className="w-[18%] md:w-[20%] sm:w-[20%] flex flex-col">
                                        <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                            <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">Date uploaded</p>
                                        </div>
                                        {(data.files).map((filess) => (
                                            <div className="w-[100%] aspect-[1/0.26] border-b flex justify-center items-center">
                                                <p className="text-[1vw] font-medium text-[#667085] font-[Montserrat]">{filess.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <></>
                                }

                                {(windowWidth > 640) ?
                                    <div className="w-[100px] sm:w-[20%] md:w-[20%] flex flex-col">
                                        <div className="w-[100%] h-[40px] md:aspect-[1/0.45] bg-[#F9FAFB] flex justify-center items-center border-b">
                                            <div className="w-[10%] aspect-square">
                                                <svg viewBox="0 0 20 20" fill="none">
                                                    <g id="trash-2">
                                                        <path id="Icon" d="M2.5 5.00033H4.16667M4.16667 5.00033H17.5M4.16667 5.00033V16.667C4.16667 17.109 4.34226 17.5329 4.65482 17.8455C4.96738 18.1581 5.39131 18.3337 5.83333 18.3337H14.1667C14.6087 18.3337 15.0326 18.1581 15.3452 17.8455C15.6577 17.5329 15.8333 17.109 15.8333 16.667V5.00033H4.16667ZM6.66667 5.00033V3.33366C6.66667 2.89163 6.84226 2.46771 7.15482 2.15515C7.46738 1.84259 7.89131 1.66699 8.33333 1.66699H11.6667C12.1087 1.66699 12.5326 1.84259 12.8452 2.15515C13.1577 2.46771 13.3333 2.89163 13.3333 3.33366V5.00033M8.33333 9.16699V14.167M11.6667 9.16699V14.167" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        {(data.files).map((filess, id) => (
                                            <div className="w-[100%] aspect-[1/0.26] border-b flex justify-center items-center gap-x-[20%]">
                                                <div onClick={(event)=>editFilename(event, id)} className="w-[10%] aspect-square">
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
                                            <div className="w-[20%] aspect-square">
                                                <svg viewBox="0 0 20 20" fill="none">
                                                    <g id="trash-2">
                                                        <path id="Icon" d="M2.5 5.00033H4.16667M4.16667 5.00033H17.5M4.16667 5.00033V16.667C4.16667 17.109 4.34226 17.5329 4.65482 17.8455C4.96738 18.1581 5.39131 18.3337 5.83333 18.3337H14.1667C14.6087 18.3337 15.0326 18.1581 15.3452 17.8455C15.6577 17.5329 15.8333 17.109 15.8333 16.667V5.00033H4.16667ZM6.66667 5.00033V3.33366C6.66667 2.89163 6.84226 2.46771 7.15482 2.15515C7.46738 1.84259 7.89131 1.66699 8.33333 1.66699H11.6667C12.1087 1.66699 12.5326 1.84259 12.8452 2.15515C13.1577 2.46771 13.3333 2.89163 13.3333 3.33366V5.00033M8.33333 9.16699V14.167M11.6667 9.16699V14.167" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        {(data.files).map((filess, id) => (
                                            <div className="w-[100%] h-[40px] md:aspect-[1/0.55] border-b flex justify-center items-center gap-x-[20%] border-l">
                                                <div onClick={(event)=>editFilename(event, id)} className="w-[20%] aspect-square">
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
                    </>
                ))}
            </div>
            <div className={`${(courseSwch === 0) ? 'hidden' : 'flex'} flex-col w-[100%] gap-y-[4%] mb-[20px]`}>
                <div onClick={back2} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%] mb-[2%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={`flex flex-col w-[100%] aspect-[1/0.2] sm:aspect-[1/0.07] md:aspect-[1/0.05] justify-between`}>
                    <div className="flex flex-col sm:flex-row md:flex-row justify-between w-[100%] h-[100%]">
                        <p className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] font-[Montserrat] font-semibold">Add Resources</p>
                        <button onClick={saveCourses} className="text-[3vw] w-[30%] sm:w-[20%] md:w-[15%] h-[45%] sm:h-[90%] md:h-[90%] bg-[#0D659F] text-[white] rounded-[8px] sm:text-[2vw] md:text-[1.1vw] font-[Montserrat] font-semibold">Save Resources</button>
                    </div>
                </div>
                <div className="w-[100%] aspect-[1/2.2] sm:aspect-[1/1] md:aspect-[1/0.65] flex flex-col gap-y-[1.5%] sm:gap-y-[3%] md:gap-y-[5%]">
                    <p className="text-[4vw] sm:text-[3vw] md:text-[2vw] font-[Montserrat] font-semibold">Resources Info</p>
                    <form className="flex flex-col sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap w-[100%] h-[18%] sm:h-[12%] md:h-[12%] gap-y-[2.8%] sm:gap-y-[2%] md:gap-y-[10%] sm:gap-x-[4%] md:gap-x-[2%] sm:justify-start md:justify-start justify-between">
                        <div className="flex flex-col sm:w-[48%] md:w-[30%] h-[45%] sm:h-[100%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseTitle">Resources Folder Name</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="courseTitle" name="courseTitle" placeholder='Mobile and Perversive Computing'/>
                        </div>
                        <div className="flex flex-col sm:w-[48%] md:w-[15%] h-[45%] sm:h-[100%] md:h-[100%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="courseCode">Course Code</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="courseCode" name="courseCode" placeholder='IFT 383'/>
                        </div>
                    </form>
                    <form className="flex flex-col sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap w-[100%] h-[30%] sm:h-[45%] md:h-[47%] gap-y-[2%] gap-x-[2%] justify-center items-center sm:items-center md:items-start">
                        <div style={{ background: `url(${document})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[90%] sm:w-[60%] md:w-[60%] h-[80%] sm:h-[95%] md:h-[95%] rounded-xl flex items-center justify-center border-[3px] border-black/30 border-dashed pb-[3%]">
                            <div className="w-[100%] h-[100%] flex flex-col items-center justify-between pt-[20%]">
                                <label htmlFor="uploadDocument" className="w-[14%] aspect-square">
                                    <svg viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.833496 39.3467V42.6667C0.833496 45.3188 1.88706 47.8624 3.76243 49.7377C5.63779 51.6131 8.18133 52.6667 10.8335 52.6667H44.1668C46.819 52.6667 49.3625 51.6131 51.2379 49.7377C53.1133 47.8624 54.1668 45.3188 54.1668 42.6667V39.3333M27.5002 37.6667V1M27.5002 1L39.1668 12.6667M27.5002 1L15.8335 12.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </label>
                                <input
                                    type="file"
                                    accept="media/*"
                                    onChange={handleDocumentChange}
                                    className="hidden"
                                    id="uploadDocument"
                                />
                                <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2vw] md:text-[1vw] xl:text-[1vw] text-[#00659F]">Upload documents and  images</p>
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-[3vw] sm:text-[2vw] md:text-[1vw] text-center">{error}</p>}
                    </form>
                    <div className={`${(resources.length === 0) ? 'hidden' : 'flex'} w-[100%] h-[38%] sm:h-[25%] md:h-[16%] overflow-y-scroll flex-col gap-y-[2%] scroll-smooth snap-x py-[1%] border`}>
                        {resources && resources.map((resource)=>(
                            <div className="snap-center flex flex-row items-center justify-between w-[100%] aspect-[1/0.15] sm:aspect-[1/0.07] md:aspect-[1/0.05] shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-lg px-[3%]">
                                <p className="font-[Montserrat] font-semibold text-[2.5vw] sm:text-[1.5vw] md:text-[1vw] xl:text-[1vw] text-[#00659F]">{resource.name}</p>
                                <div className="h-[100%] w-[40%] flex justify-end sm:justify-between md:justify-between items-center">
                                    <p className="hidden sm:block md:block font-[Montserrat] font-semibold text-[2vw] sm:text-[1.5vw] md:text-[1vw] xl:text-[1vw] text-[#00659F]">{resource.size}kb</p>
                                    <div className="w-[20%] sm:w-[12%] md:w-[10%] aspect-[1/1]">
                                        {((resource.type).split('/')[1] === 'pdf') ?
                                            <svg viewBox="0 0 40 40" fill="none">
                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                <path d="M20.8333 11.667H14.9999C14.5579 11.667 14.134 11.8426 13.8214 12.1551C13.5088 12.4677 13.3333 12.8916 13.3333 13.3337V26.667C13.3333 27.109 13.5088 27.5329 13.8214 27.8455C14.134 28.1581 14.5579 28.3337 14.9999 28.3337H24.9999C25.4419 28.3337 25.8659 28.1581 26.1784 27.8455C26.491 27.5329 26.6666 27.109 26.6666 26.667V17.5003M20.8333 11.667L26.6666 17.5003M20.8333 11.667V17.5003H26.6666" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        : (['jpg', 'jpeg', 'png'].includes((resource.type).split('/')[1])) ?
                                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                <path d="M14.1667 27.5H25.8333C26.7538 27.5 27.5 26.7538 27.5 25.8333V14.1667C27.5 13.2462 26.7538 12.5 25.8333 12.5H14.1667C13.2462 12.5 12.5 13.2462 12.5 14.1667V25.8333C12.5 26.7538 13.2462 27.5 14.1667 27.5ZM14.1667 27.5L23.3333 18.3333L27.5 22.5M18.3333 17.0833C18.3333 17.7737 17.7737 18.3333 17.0833 18.3333C16.393 18.3333 15.8333 17.7737 15.8333 17.0833C15.8333 16.393 16.393 15.8333 17.0833 15.8333C17.7737 15.8333 18.3333 16.393 18.3333 17.0833Z" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        : ((resource.type).split('/')[1] === 'mp3') ?
                                            <svg viewBox="0 0 40 40" fill="none">
                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                <path d="M20.8333 11.667H14.9999C14.5579 11.667 14.134 11.8426 13.8214 12.1551C13.5088 12.4677 13.3333 12.8916 13.3333 13.3337V26.667C13.3333 27.109 13.5088 27.5329 13.8214 27.8455C14.134 28.1581 14.5579 28.3337 14.9999 28.3337H24.9999C25.4419 28.3337 25.8659 28.1581 26.1784 27.8455C26.491 27.5329 26.6666 27.109 26.6666 26.667V17.5003M20.8333 11.667L26.6666 17.5003M20.8333 11.667V17.5003H26.6666" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        : (['mp4', 'avi', 'mkv'].includes((resource.type).split('/')[1])) ?
                                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="40" height="40" rx="20" fill="#E5E5F2" />
                                                <g clip-path="url(#clip0_2386_2513)">
                                                    <path d="M15.8334 11.667V28.3337M24.1667 11.667V28.3337M11.6667 20.0003H28.3334M11.6667 15.8337H15.8334M11.6667 24.167H15.8334M24.1667 24.167H28.3334M24.1667 15.8337H28.3334M13.4834 11.667H26.5167C27.5201 11.667 28.3334 12.4803 28.3334 13.4837V26.517C28.3334 27.5203 27.5201 28.3337 26.5167 28.3337H13.4834C12.4801 28.3337 11.6667 27.5203 11.6667 26.517V13.4837C11.6667 12.4803 12.4801 11.667 13.4834 11.667Z" stroke="#333399" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2386_2513">
                                                        <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        :
                                            <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminResources;
import { useEffect, useState } from "react";

function AdminLecturer() {
    const [dept, setDept] = useState(null);
    //This is the second switch
    const [swch, setswch] = useState(0);

    const lecturer = [
        {firstname: 'Olivia', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'naim.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'},
        {firstname: 'Olivia', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'farida.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'},
        {firstname: 'Olivia', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'demilade.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'},
        {firstname: 'Olivia', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'rufus.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'},
        {firstname: 'Olivia', lastname: 'Rhiye', middlename: 'Ana', phone:'08138712652', email: 'david.okunade@gmail.com', linkedln: 'https://www.linkedin.com/in/naheem-okunade-032412265/', twitter: 'https://www.linkedin.com/in/naheem-okunade-032412265/', rank: 'Proffesor', position: 'Head of department', status: 'Active', state: 'Lagos state', gender: 'male', dob:'12/01/2001', nationality: 'Nigerian', religion: 'Christianity', marital: 'Married', image: process.env.PUBLIC_URL + '/images/imageRep.jpg'},
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

    function readMore(email) {
        setDept(email);
    }

    function back() {
        setDept(null);
        setswch(0);
    }

    useEffect(()=>{
        if (dept !== null) {
            for (let index in lecturer) {
                if (dept === lecturer[index].email) {
                    setDept(lecturer[index]);
                    break;
                }
            }
        }
    }, [dept]);

    function addLecturer() {
        setswch(1)
    }

    function saveLecturer() {
        setswch(0)
    }

    function editProfile() {
        setswch(1);
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
            <section className={`${(dept !== null) || (swch === 1) ? 'hidden' : 'w-[100%] pt-[3%] px-[2.5%] flex flex-col items-start gap-y-[3vw] pb-[3%]'}`}>
                <div className="w-[100%] aspect-[1/0.04] flex justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Lecturer</p>
                    <button onClick={addLecturer} className="max-[640px]:h-[45%] max-[640px]:w-[30%] w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.8vw] md:text-[1.5vw] xl:text-[1.3vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Add Lecturer</button>
                </div>
                <div className="flex flex-col w-[100%] h-fit gap-y-[5%]">
                    <div className="w-[100%] flex flex-row flex-wrap h-fit gap-x-[2%] justify-between">
                        {lecturer.map((data)=>(
                            <div onClick={() => readMore(data.email)} className="relative w-[23.5%] aspect-[1/1.6] flex flex-col justify-end max-[1280px]:w-[48%] max-[1280px]:aspect-[1/1.5] cursor-pointer">
                                <div style={{ background: `url(${data.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[92%] h-[50%] max-[1024px]:bottom-[43%] absolute left-[5%] bottom-[40%] rounded-[7px]"></div>
                                <div className="w-[100%] h-[70%] flex flex-col justify-end items-end shadow-[0.18vw_0.25vw_0.2vw_0_rgba(0,0,0,0.2)] rounded-[7px]">
                                   <div className="absolute w-[100%] h-[30%] bottom-[5%] px-[5%] flex flex-col justify-between items-center">
                                        <p className="text-[3.4vw] font-[Montserrat] font-bold text-[#01669f] sm:text-[3vw] md:text-[2.4vw] min-[1024px]:text-[1.7vw] xl:text-[1.3vw]">{data.firstname} {data.lastname}</p>
                                        <p className="text-[3vw] font-[Montserrat] font-semibold text-center text-[#502369] sm:text-[2.6vw] md:text-[2vw] min-[1024px]:text-[1.2vw] xl:text-[1vw]">{data.position}</p>
                                        <div className="w-[100%] h-[40%] flex flex-row items-center justify-around">
                                            <a href={`mailto:${data.email}?`} className="w-[12%] aspect-square">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#fff" fill="#502369" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>
                                            <a href={data.linkedln} target="_blank" rel="noreferrer" className="w-[12%] aspect-square">
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
                                            <a href={data.twitter} target="_blank" rel="noreferrer" className="w-[12%] aspect-square">
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
            </section>
            <section className={`${(dept !== null) && (swch === 0) ? 'w-[100%] pt-[3%] pl-[2.5%] pr-[2.5%] flex flex-col items-start gap-y-[3vw] pb-[3%]' : 'hidden'}`}>
                <div onClick={back} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="w-[100%] aspect-[1/0.04] flex justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Lecturer info</p>
                    <button onClick={editProfile} className="max-[640px]:h-[45%] max-[640px]:w-[30%] w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.8vw] md:text-[1.5vw] xl:text-[1.3vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Edit Profile</button>
                </div>
                <div className="flex flex-col w-[100%] aspect-[1/0.5] gap-y-[10%] max-[640px]:aspect-[1/3.2] max-[640px]:gap-y-[1.2%] max-[1280px]:aspect-[1/0.8]">
                    <div className="flex w-[80%] gap-y-[1%] h-[45%] max-[640px]:h-[50%] max-[640px]:w-[100%] max-[640px]:flex-col">
                        <div style={{ background: `url(${process.env.PUBLIC_URL + '/images/imageRep.jpg'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[39.5%] h-[100%] rounded-[7px] max-[640px]:h-[53%] max-[640px]:w-[100%]"></div>
                        <div className="w-[59.5%] h-[90%] px-[3%] max-[640px]:px-[0%] max-[640px]:w-[100%] max-[640px]:h-fit flex flex-col gap-y-[4%]">
                            <p className=" max-[640px]:mt-[5%] text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">First name: <span className="text-[#0D659F]">{dept && dept.firstname}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Last name: <span className="text-[#0D659F]">{dept && dept.lastname}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Middle name: <span className="text-[#0D659F]">{dept && dept.middlename}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Phone number: <span className="text-[#0D659F]">{dept && dept.phone}</span></p>
                            <p className="text-[4vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Email: <span className="text-[#0D659F]">{dept && dept.email}</span></p>
                            <div className="w-[30%] h-[20%] flex flex-row items-center justify-between mt-[5%] max-[640px]:w-[60%]">
                                <a href={`mailto:${dept && dept.email}?`} className="w-[17%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#fff" fill="#0D659F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                <a href={dept && dept.linkedln} target="_blank" rel="noreferrer" className="w-[17%] aspect-square">
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
                                <a href={dept && dept.twitter} target="_blank" rel="noreferrer" className="w-[17%] aspect-square">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23462 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51565 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71999C2.41463 9.69517 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z" fill="#0D659F"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] h-[40%] flex flex-row flex-wrap justify-between max-[640px]:h-[15%] gap-y-[5%]">
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Rank</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.rank}</p>
                        </div>
                        <div className="w-[40%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Academic Position</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.position}</p>
                        </div>
                        <div className="w-[40%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Availability Status</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0B8700] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.status}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">State of origin</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.state}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Gender</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.gender}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Date of birth</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.dob}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Nationality</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.nationality}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Religion</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.religion}</p>
                        </div>
                        <div className="w-[20%] h-[30%] max-[640px]:w-[80%] flex flex-col justify-center">
                            <p className="text-[3.5vw] font-[Montserrat] font-medium text-justify text-black sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">Marital Status</p>
                            <p className="text-[3.5vw] font-[Montserrat] font-semibold text-justify text-[#0D659F] sm:text-[2vw] md:text-[1.7vw] xl:text-[1.2vw]">{dept && dept.marital}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*This is the form for edit and add Lecturer*/}
            <section className={`${(swch === 0) ? 'hidden' : 'flex'} flex-col w-[100%]`}>
                <div onClick={back} className="w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%]">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="w-[100%] aspect-[1/0.04] flex justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start mt-[3%]">
                    <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Lecturer</p>
                    <button onClick={saveLecturer} className="max-[640px]:h-[45%] max-[640px]:w-[30%] w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[8px] text-[3vw] sm:text-[1.8vw] md:text-[1.1vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Add Lecturer</button>
                </div>
                <form className="w-[100%] aspect-[1/5] sm:aspect-[1/2.5] md:aspect-[1/0.85] mt-[3%] flex flex-col gap-y-[2%]">
                    <p className="font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2.vw] xl:text-[1.5vw] text-black">Lecturer details</p>
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
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="rank">Rank(Level)</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="rank" name="rank">
                                <option selected disabled hidden>Select rank</option>
                                <option value="male">12:00PM</option>
                                <option value="female">1:00PM</option>
                                <option value="female">2:00PM</option>
                                <option value="female">3:00PM</option>
                                <option value="female">4:00PM</option>
                                <option value="female">5:00PM</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[32%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="position">Academic Position</label>
                            <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="position" name="position" placeholder='Dean, HOD, Assistant Lecturer'/>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[15%] h-[15%] sm:h-[30%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="status">Availability Status</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="status" name="status">
                                <option selected disabled hidden>Select Availability</option>
                                <option value="male">12:00PM</option>
                                <option value="female">1:00PM</option>
                                <option value="female">2:00PM</option>
                                <option value="female">3:00PM</option>
                                <option value="female">4:00PM</option>
                                <option value="female">5:00PM</option>
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
                        <div className="flex flex-col w-[100%] sm:w-[48%] md:w-[18.4%] h-[10%] sm:h-[23.5%] md:h-[45%] justify-between">
                            <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="maritalstatus">Marital Status</label>
                            <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="maritalstatus" name="maritalstatus">
                                <option selected disabled hidden>Select Status</option>
                                <option value="male">Married</option>
                                <option value="female">Divorced</option>
                                <option value="female">Single</option>
                            </select>
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

export default AdminLecturer;
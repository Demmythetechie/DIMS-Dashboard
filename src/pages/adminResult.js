import { semesters } from "config/config";
import { useEffect, useState, useRef } from "react";

function AdminResult() {

    let student = [
        [{ firstname: 'Liam', link: '@Liam', course: 'mechanical engineering', level: '100 Level', matric: '9283001998', lastname: 'Smith', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ME101: 78, ME102: 84, ME201: 79, MATH101: 88, PHYS101: 80 }, { ME101: 89, ME102: 73, ME201: 92, CHEM101: 77, ENGL101: 84 }] }, { firstname: 'Emma', link: '@Emma', course: 'business administration', level: '100 Level', matric: '9270103890', lastname: 'Johnson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BUS101: 85, BUS102: 90, BUS201: 87, MATH101: 78, STAT101: 83 }, { BUS101: 92, BUS102: 88, ECON101: 81, ECON201: 85, ENGL101: 79 }] }, { firstname: 'Noah', link: '@Noah', course: 'civil engineering', level: '100 Level', matric: '9243402997', lastname: 'Williams', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CE101: 82, CE102: 88, CE201: 90, MATH101: 79, PHYS101: 85 }, { CE101: 91, CE102: 85, GEOL101: 82, CHEM101: 78, ENGL101: 80 }] }, { firstname: 'Sophia', link: '@Sophia', course: 'psychology', level: '100 Level', matric: '9225603795', lastname: 'Brown', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ PSYC101: 83, PSYC201: 88, PSYC202: 90, STAT101: 81, PHIL101: 87 }, { PSYC101: 89, PSYC201: 84, BIO101: 79, SOC101: 85, ENGL101: 82 }] }, { firstname: 'James', link: '@James', course: 'economics', level: '100 Level', matric: '9214302999', lastname: 'Davis', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ECON101: 81, ECON102: 89, ECON201: 87, MATH101: 85, STAT101: 84 }, { ECON101: 91, ECON102: 78, HIST101: 80, MATH101: 83, ENGL101: 88 }] }, { firstname: 'Ava', link: '@Ava', course: 'biology', level: '100 Level', matric: '9290212999', lastname: 'Martinez', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BIO101: 88, BIO102: 85, BIO201: 90, CHEM101: 83, PHYS101: 80 }, { BIO101: 92, BIO102: 84, MATH101: 79, STAT101: 85, ENGL101: 81 }] }, { firstname: 'Lucas', link: '@Lucas', course: 'electrical engineering', level: '100 Level', matric: '9280202991', lastname: 'Garcia', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ EE101: 84, EE102: 89, EE201: 87, MATH101: 82, PHYS101: 80 }, { EE101: 91, EE102: 85, STAT101: 83, PHYS202: 88, ENGL101: 81 }] }, { firstname: 'Isabella', link: '@Isabella', course: 'chemistry', level: '100 Level', matric: '9275203892', lastname: 'Miller', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CHEM101: 89, CHEM102: 91, CHEM201: 85, BIO101: 83, PHYS101: 84 }, { CHEM101: 94, CHEM102: 87, MATH101: 80, STAT101: 88, ENGL101: 86 }] }, { firstname: 'Mason', link: '@Mason', course: 'mathematics', level: '100 Level', matric: '9262303990', lastname: 'Wilson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ MATH101: 91, MATH102: 89, MATH201: 87, STAT101: 85, PHYS101: 80 }, { MATH101: 93, MATH102: 88, STAT101: 90, PHYS101: 82, ENGL101: 84 }] }],
        [{ firstname: 'Olivia', link: '@Olivia', course: 'computer science', level: '200 Level', matric: '9290202999', lastname: 'Rhiye', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CS101: 75, CS102: 82, CS201: 91, CS202: 68, MATH101: 85 }, { CS101: 89, CS102: 77, CS201: 93, PHYS101: 80, STAT101: 74 }], '200 level': [{ CS301: 88, CS302: 67, CS401: 79, ENGL101: 81, STAT101: 76 }, { CS301: 92, CS302: 85, CS401: 88, CS402: 78, MATH201: 87 }] }, { firstname: 'Liam', link: '@Liam', course: 'mechanical engineering', level: '200 Level', matric: '9283001998', lastname: 'Smith', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ME101: 78, ME102: 84, ME201: 79, MATH101: 88, PHYS101: 80 }, { ME101: 89, ME102: 73, ME201: 92, CHEM101: 77, ENGL101: 84 }], '200 level': [{ ME301: 82, ME302: 76, ME401: 87, PHYS202: 80, CHEM101: 79 }, { ME301: 90, ME302: 88, ME401: 83, MATH201: 85, STAT101: 86 }] }, { firstname: 'Emma', link: '@Emma', course: 'business administration', level: '200 Level', matric: '9270103890', lastname: 'Johnson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BUS101: 85, BUS102: 90, BUS201: 87, MATH101: 78, STAT101: 83 }, { BUS101: 92, BUS102: 88, ECON101: 81, ECON201: 85, ENGL101: 79 }], '200 level': [{ BUS301: 89, BUS302: 78, ACC101: 87, FIN201: 81, MATH201: 80 }, { BUS301: 91, BUS302: 83, FIN201: 85, MKT301: 82, STAT101: 84 }] }, { firstname: 'Noah', link: '@Noah', course: 'civil engineering', level: '200 Level', matric: '9243402997', lastname: 'Williams', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CE101: 82, CE102: 88, CE201: 90, MATH101: 79, PHYS101: 85 }, { CE101: 91, CE102: 85, GEOL101: 82, CHEM101: 78, ENGL101: 80 }], '200 level': [{ CE301: 83, CE302: 88, CE401: 79, MATH201: 85, PHYS202: 81 }, { CE301: 89, CE302: 84, CE401: 92, GEOL101: 79, STAT101: 82 }] }, { firstname: 'Sophia', link: '@Sophia', course: 'psychology', level: '200 Level', matric: '9225603795', lastname: 'Brown', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ PSYC101: 83, PSYC201: 88, PSYC202: 90, STAT101: 81, PHIL101: 87 }, { PSYC101: 89, PSYC201: 84, BIO101: 79, SOC101: 85, ENGL101: 82 }], '200 level': [{ PSYC301: 86, PSYC302: 81, PSYC401: 90, STAT101: 85, PHIL101: 78 }, { PSYC301: 92, PSYC302: 87, PSYC401: 88, SOC101: 81, BIO101: 82 }] }, { firstname: 'James', link: '@James', course: 'economics', level: '200 Level', matric: '9214302999', lastname: 'Davis', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ECON101: 81, ECON102: 89, ECON201: 87, MATH101: 85, STAT101: 84 }, { ECON101: 91, ECON102: 78, HIST101: 80, MATH101: 83, ENGL101: 88 }], '200 level': [{ ECON301: 85, ECON302: 79, ECON401: 89, STAT101: 84, HIST101: 81 }, { ECON301: 90, ECON302: 88, ECON401: 85, MATH201: 86, STAT101: 83 }] }, { firstname: 'Ava', link: '@Ava', course: 'biology', level: '200 Level', matric: '9290212999', lastname: 'Martinez', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BIO101: 88, BIO102: 85, BIO201: 90, CHEM101: 83, PHYS101: 80 }, { BIO101: 92, BIO102: 84, MATH101: 79, STAT101: 85, ENGL101: 81 }], '200 level': [{ BIO301: 84, BIO302: 87, BIO401: 81, CHEM102: 83, PHYS202: 85 }, { BIO301: 89, BIO302: 90, BIO401: 88, STAT101: 82, MATH201: 80 }] }, { firstname: 'Lucas', link: '@Lucas', course: 'electrical engineering', level: '200 Level', matric: '9280202991', lastname: 'Garcia', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ EE101: 84, EE102: 89, EE201: 87, MATH101: 82, PHYS101: 80 }, { EE101: 91, EE102: 85, STAT101: 83, PHYS202: 88, ENGL101: 81 }], '200 level': [{ EE301: 88, EE302: 83, EE401: 81, PHYS202: 84, STAT101: 80 }, { EE301: 92, EE302: 87, EE401: 85, MATH201: 82, PHYS202: 81 }] }, { firstname: 'Isabella', link: '@Isabella', course: 'chemistry', level: '200 Level', matric: '9275203892', lastname: 'Miller', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CHEM101: 89, CHEM102: 91, CHEM201: 85, BIO101: 83, PHYS101: 84 }, { CHEM101: 94, CHEM102: 87, MATH101: 80, STAT101: 88, ENGL101: 86 }], '200 level': [{ CHEM301: 85, CHEM302: 83, CHEM401: 79, BIO101: 80, PHYS202: 81 }, { CHEM301: 90, CHEM302: 89, CHEM401: 85, MATH201: 82, STAT101: 83 }] }, { firstname: 'Mason', link: '@Mason', course: 'mathematics', level: '200 Level', matric: '9262303990', lastname: 'Wilson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ MATH101: 91, MATH102: 89, MATH201: 87, STAT101: 85, PHYS101: 80 }, { MATH101: 93, MATH102: 88, STAT101: 90, PHYS101: 82, ENGL101: 84 }], '200 level': [{ MATH301: 88, MATH302: 83, MATH401: 89, STAT101: 82, PHYS202: 81 }, { MATH301: 91, MATH302: 87, MATH401: 85, MATH201: 90, STAT101: 80 }] }],
        [{ firstname: 'Olivia', link: '@Olivia', course: 'computer science', level: '300 Level', matric: '9290202999', lastname: 'Rhiye', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CS101: 75, CS102: 82, CS201: 91, CS202: 68, MATH101: 85 }, { CS101: 89, CS102: 77, CS201: 93, PHYS101: 80, STAT101: 74 }], '200 level': [{ CS101: 88, CS102: 67, CS201: 79, ENGL101: 81, CHEM101: 76 }, { CS101: 92, CS102: 85, CS201: 88, CS202: 78, MATH101: 87 }], '300 level': [{ CS301: 81, CS302: 90, CS401: 85, CS402: 84, PHYS101: 79 }, { CS301: 87, CS302: 88, CS401: 91, ENGL101: 82, CHEM101: 80 }] }, { firstname: 'Liam', link: '@Liam', course: 'mechanical engineering', level: '300 Level', matric: '9283001998', lastname: 'Smith', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ME101: 78, ME102: 84, ME201: 79, MATH101: 88, PHYS101: 80 }, { ME101: 89, ME102: 73, ME201: 92, CHEM101: 77, ENGL101: 84 }], '200 level': [{ ME101: 90, ME102: 82, ME201: 85, MATH101: 79, PHYS101: 86 }, { ME101: 88, ME102: 84, PHYS101: 82, CHEM101: 79, ENGL101: 81 }], '300 level': [{ ME301: 85, ME302: 87, ME401: 91, MATH201: 89, PHYS202: 81 }, { ME301: 89, ME302: 86, ME401: 93, CHEM101: 83, ENGL101: 85 }] }, { firstname: 'Emma', link: '@Emma', course: 'business administration', level: '300 Level', matric: '9270103890', lastname: 'Johnson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BUS101: 85, BUS102: 90, BUS201: 87, MATH101: 78, STAT101: 83 }, { BUS101: 92, BUS102: 88, ECON101: 81, ECON201: 85, ENGL101: 79 }], '200 level': [{ BUS101: 88, BUS102: 83, BUS201: 85, MATH101: 80, ECON101: 84 }, { BUS101: 90, BUS102: 87, ECON101: 82, FIN201: 88, ENGL101: 81 }], '300 level': [{ BUS301: 82, BUS302: 90, ACC101: 91, FIN201: 89, MKT301: 84 }, { BUS301: 88, BUS302: 91, FIN201: 87, ECON101: 82, ENGL101: 80 }] }, { firstname: 'Noah', link: '@Noah', course: 'civil engineering', level: '300 Level', matric: '9243402997', lastname: 'Williams', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CE101: 82, CE102: 88, CE201: 90, MATH101: 79, PHYS101: 85 }, { CE101: 91, CE102: 85, GEOL101: 82, CHEM101: 78, ENGL101: 80 }], '200 level': [{ CE101: 87, CE102: 82, CE201: 85, MATH101: 83, PHYS101: 86 }, { CE101: 88, CE102: 84, PHYS101: 82, GEOL101: 79, ENGL101: 83 }], '300 level': [{ CE301: 90, CE302: 92, CE401: 85, MATH201: 89, PHYS202: 87 }, { CE301: 91, CE302: 89, CE401: 93, GEOL101: 81, ENGL101: 84 }] }, { firstname: 'Sophia', link: '@Sophia', course: 'psychology', level: '300 Level', matric: '9225603795', lastname: 'Brown', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ PSYC101: 83, PSYC201: 88, PSYC202: 90, STAT101: 81, PHIL101: 87 }, { PSYC101: 89, PSYC201: 84, BIO101: 79, SOC101: 85, ENGL101: 82 }], '200 level': [{ PSYC101: 90, PSYC201: 82, PSYC202: 88, STAT101: 84, PHIL101: 85 }, { PSYC101: 87, PSYC201: 85, BIO101: 80, SOC101: 87, ENGL101: 83 }], '300 level': [{ PSYC301: 88, PSYC302: 89, PSYC401: 92, STAT201: 85, PHIL101: 81 }, { PSYC301: 91, PSYC302: 87, PSYC401: 89, SOC201: 84, ENGL101: 83 }] }, { firstname: 'James', link: '@James', course: 'economics', level: '300 Level', matric: '9214302999', lastname: 'Davis', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ECON101: 81, ECON102: 89, ECON201: 87, MATH101: 85, STAT101: 84 }, { ECON101: 91, ECON102: 78, HIST101: 80, MATH101: 83, ENGL101: 88 }], '200 level': [{ ECON101: 87, ECON102: 82, ECON201: 90, MATH101: 83, STAT101: 85 }, { ECON101: 88, ECON102: 84, HIST101: 82, STAT201: 86, ENGL101: 82 }], '300 level': [{ ECON301: 89, ECON302: 92, ECON401: 87, MATH201: 88, HIST101: 81 }, { ECON301: 93, ECON302: 90, ECON401: 89, STAT201: 83, ENGL101: 84 }] }, { firstname: 'Ava', link: '@Ava', course: 'biology', level: '300 Level', matric: '9290212999', lastname: 'Martinez', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BIO101: 88, BIO102: 85, BIO201: 90, CHEM101: 83, PHYS101: 80 }, { BIO101: 92, BIO102: 84, MATH101: 79, STAT101: 85, ENGL101: 81 }], '200 level': [{ BIO101: 91, BIO102: 82, BIO201: 87, CHEM101: 83, PHYS101: 85 }, { BIO101: 90, BIO102: 83, MATH101: 82, STAT101: 83, ENGL101: 79 }], '300 level': [{ BIO301: 89, BIO302: 91, BIO401: 85, CHEM201: 83, PHYS202: 82 }, { BIO301: 93, BIO302: 89, BIO401: 88, STAT201: 81, ENGL101: 84 }] }, { firstname: 'Lucas', link: '@Lucas', course: 'electrical engineering', level: '300 Level', matric: '9280202991', lastname: 'Garcia', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ EE101: 84, EE102: 89, EE201: 87, MATH101: 82, PHYS101: 80 }, { EE101: 91, EE102: 85, STAT101: 83, PHYS202: 88, ENGL101: 81 }], '200 level': [{ EE101: 88, EE102: 83, EE201: 85, MATH101: 80, PHYS101: 85 }, { EE101: 90, EE102: 87, STAT101: 82, PHYS202: 88, ENGL101: 83 }], '300 level': [{ EE301: 92, EE302: 90, EE401: 87, MATH201: 88, PHYS202: 81 }, { EE301: 94, EE302: 89, EE401: 91, STAT201: 84, ENGL101: 86 }] }, { firstname: 'Isabella', link: '@Isabella', course: 'chemistry', level: '300 Level', matric: '9275203892', lastname: 'Miller', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CHEM101: 89, CHEM102: 91, CHEM201: 85, BIO101: 83, PHYS101: 84 }, { CHEM101: 94, CHEM102: 87, MATH101: 80, STAT101: 88, ENGL101: 86 }], '200 level': [{ CHEM101: 88, CHEM102: 82, CHEM201: 85, BIO101: 83, PHYS101: 85 }, { CHEM101: 90, CHEM102: 83, STAT101: 87, BIO201: 82, ENGL101: 79 }], '300 level': [{ CHEM301: 89, CHEM302: 91, CHEM401: 85, BIO301: 83, PHYS202: 82 }, { CHEM301: 93, CHEM302: 89, CHEM401: 88, STAT201: 84, ENGL101: 84 }] }, { firstname: 'Mason', link: '@Mason', course: 'mathematics', level: '300 Level', matric: '9262303990', lastname: 'Wilson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ MATH101: 91, MATH102: 89, MATH201: 87, STAT101: 85, PHYS101: 80 }, { MATH101: 93, MATH102: 88, STAT101: 90, PHYS101: 82, ENGL101: 84 }], '200 level': [{ MATH101: 89, MATH102: 84, MATH201: 88, STAT101: 82, PHYS101: 81 }, { MATH101: 91, MATH102: 87, STAT101: 84, PHYS202: 83, ENGL101: 83 }], '300 level': [{ MATH301: 94, MATH302: 92, MATH401: 89, STAT201: 87, PHYS202: 83 }, { MATH301: 96, MATH302: 91, MATH401: 93, STAT201: 85, ENGL101: 85 }] }],
        [{ firstname: 'Olivia', link: '@Olivia', course: 'computer science', level: '400 Level', matric: '9290202999', lastname: 'Rhiye', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CS101: 75, CS102: 82, CS201: 91, CS202: 68, MATH101: 85 }, { CS101: 89, CS102: 77, CS201: 93, PHYS101: 80, STAT101: 74 }], '200 level': [{ CS101: 88, CS102: 67, CS201: 79, ENGL101: 81, CHEM101: 76 }, { CS101: 92, CS102: 85, CS202: 88, CS301: 78, MATH101: 87 }], '300 level': [{ CS301: 81, CS302: 90, CS401: 85, CS402: 84, PHYS101: 79 }, { CS301: 87, CS302: 88, CS401: 91, ENGL101: 82, CHEM101: 80 }], '400 level': [{ CS301: 89, CS302: 92, CS401: 87, CS402: 93, PHYS101: 85 }, { CS301: 94, CS302: 86, CS401: 92, STAT101: 84, MATH101: 90 }] }, { firstname: 'Liam', link: '@Liam', course: 'mechanical engineering', level: '400 Level', matric: '9283001998', lastname: 'Smith', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ME101: 78, ME102: 84, ME201: 79, MATH101: 88, PHYS101: 80 }, { ME101: 89, ME102: 73, ME201: 92, CHEM101: 77, ENGL101: 84 }], '200 level': [{ ME201: 87, ME202: 75, ME301: 81, MATH101: 85, PHYS101: 82 }, { ME201: 91, ME202: 83, ME301: 88, STAT101: 78, ENGL101: 80 }], '300 level': [{ ME301: 86, ME302: 89, ME401: 85, ME402: 84, PHYS101: 79 }, { ME301: 90, ME302: 87, ME401: 91, STAT101: 82, MATH101: 80 }], '400 level': [{ ME401: 92, ME402: 88, ME501: 85, CHEM101: 90, PHYS101: 88 }, { ME401: 94, ME402: 90, ME501: 92, ENGL101: 89, MATH101: 87 }] }, { firstname: 'Emma', link: '@Emma', course: 'business administration', level: '400 Level', matric: '9270103890', lastname: 'Johnson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BUS101: 85, BUS102: 90, BUS201: 87, MATH101: 78, STAT101: 83 }, { BUS101: 92, BUS102: 88, ECON101: 81, ECON201: 85, ENGL101: 79 }], '200 level': [{ BUS201: 88, BUS202: 83, MKT301: 81, FIN201: 84, MATH101: 80 }, { BUS201: 91, BUS202: 85, MGT301: 87, ECON101: 79, ENGL101: 82 }], '300 level': [{ BUS301: 89, BUS302: 90, ACC101: 84, FIN201: 87, STAT101: 81 }, { BUS301: 92, BUS302: 88, MKT301: 91, ECON201: 83, ENGL101: 79 }], '400 level': [{ BUS401: 93, BUS402: 89, FIN201: 85, MGT401: 92, ECON201: 90 }, { BUS401: 95, BUS402: 91, FIN201: 89, MKT301: 88, ENGL101: 84 }] }, { firstname: 'Noah', link: '@Noah', course: 'civil engineering', level: '400 Level', matric: '9243402997', lastname: 'Williams', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CE101: 82, CE102: 88, CE201: 90, MATH101: 79, PHYS101: 85 }, { CE101: 91, CE102: 85, GEOL101: 82, CHEM101: 78, ENGL101: 80 }], '200 level': [{ CE201: 87, CE202: 83, CE301: 79, MATH101: 82, PHYS101: 83 }, { CE201: 91, CE202: 85, CE301: 88, STAT101: 84, ENGL101: 81 }], '300 level': [{ CE301: 86, CE302: 89, CE401: 84, CE402: 82, PHYS101: 80 }, { CE301: 92, CE302: 88, CE401: 91, GEOL101: 79, ENGL101: 83 }], '400 level': [{ CE401: 94, CE402: 90, CE501: 87, CHEM101: 85, PHYS101: 89 }, { CE401: 96, CE402: 92, CE501: 91, ENGL101: 87, MATH101: 86 }] }, { firstname: 'Sophia', link: '@Sophia', course: 'psychology', level: '400 Level', matric: '9225603795', lastname: 'Brown', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ PSYC101: 83, PSYC201: 88, PSYC202: 90, STAT101: 81, PHIL101: 87 }, { PSYC101: 89, PSYC201: 84, BIO101: 79, SOC101: 85, ENGL101: 82 }], '200 level': [{ PSYC201: 87, PSYC202: 85, PSYC301: 82, BIO101: 79, STAT101: 84 }, { PSYC201: 91, PSYC202: 88, PSYC301: 85, PHIL101: 81, ENGL101: 83 }], '300 level': [{ PSYC301: 89, PSYC302: 90, PSYC401: 84, PSYC402: 82, STAT101: 80 }, { PSYC301: 92, PSYC302: 88, PSYC401: 91, PHIL101: 83, ENGL101: 85 }], '400 level': [{ PSYC401: 93, PSYC402: 89, PSYC501: 87, BIO101: 88, SOC101: 90 }, { PSYC401: 95, PSYC402: 91, PSYC501: 89, PHIL101: 87, ENGL101: 88 }] }, { firstname: 'James', link: '@James', course: 'economics', level: '400 Level', matric: '9214302999', lastname: 'Davis', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ECON101: 81, ECON102: 89, ECON201: 87, MATH101: 85, STAT101: 84 }, { ECON101: 91, ECON102: 78, HIST101: 80, MATH101: 83, ENGL101: 88 }], '200 level': [{ ECON201: 86, ECON202: 87, ECON301: 85, MATH101: 80, STAT101: 83 }, { ECON201: 91, ECON202: 88, ECON301: 84, HIST101: 79, ENGL101: 85 }], '300 level': [{ ECON301: 89, ECON302: 90, ECON401: 87, ECON402: 84, MATH101: 82 }, { ECON301: 93, ECON302: 88, ECON401: 91, HIST101: 80, ENGL101: 86 }], '400 level': [{ ECON401: 94, ECON402: 89, ECON501: 88, HIST101: 85, STAT101: 90 }, { ECON401: 96, ECON402: 91, ECON501: 90, MATH101: 89, ENGL101: 87 }] }, { firstname: 'Ava', link: '@Ava', course: 'biology', level: '400 Level', matric: '9290212999', lastname: 'Martinez', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BIO101: 88, BIO102: 85, BIO201: 90, CHEM101: 83, PHYS101: 80 }, { BIO101: 92, BIO102: 84, MATH101: 79, STAT101: 85, ENGL101: 81 }], '200 level': [{ BIO201: 87, BIO202: 83, BIO301: 81, CHEM101: 80, PHYS101: 79 }, { BIO201: 91, BIO202: 85, BIO301: 88, STAT101: 82, ENGL101: 80 }], '300 level': [{ BIO301: 89, BIO302: 90, BIO401: 84, BIO402: 83, MATH101: 78 }, { BIO301: 92, BIO302: 88, BIO401: 91, PHYS101: 79, STAT101: 81 }], '400 level': [{ BIO401: 94, BIO402: 90, BIO501: 87, CHEM101: 85, PHYS101: 89 }, { BIO401: 96, BIO402: 92, BIO501: 91, STAT101: 87, MATH101: 86 }] }, { firstname: 'Lucas', link: '@Lucas', course: 'electrical engineering', level: '400 Level', matric: '9280202991', lastname: 'Garcia', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ EE101: 84, EE102: 89, EE201: 87, MATH101: 82, PHYS101: 80 }, { EE101: 91, EE102: 85, STAT101: 83, PHYS202: 88, ENGL101: 81 }], '200 level': [{ EE201: 88, EE202: 83, EE301: 81, MATH101: 80, STAT101: 79 }, { EE201: 91, EE202: 85, EE301: 88, PHYS101: 84, ENGL101: 82 }], '300 level': [{ EE301: 86, EE302: 89, EE401: 84, EE402: 82, PHYS101: 80 }, { EE301: 92, EE302: 88, EE401: 91, STAT101: 83, MATH101: 81 }], '400 level': [{ EE401: 94, EE402: 90, EE501: 88, PHYS101: 89, MATH101: 87 }, { EE401: 96, EE402: 92, EE501: 90, ENGL101: 88, PHYS102: 87 }] }],
        [{ firstname: 'Olivia', link: '@Olivia', course: 'computer science', level: '500 Level', matric: '9290202999', lastname: 'Rhiye', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ CS101: 75, CS102: 82, CS201: 91, CS202: 68, MATH101: 85 }, { CS101: 89, CS102: 77, CS201: 93, PHYS101: 80, STAT101: 74 }], '200 level': [{ CS101: 88, CS102: 67, CS201: 79, ENGL101: 81, CHEM101: 76 }, { CS101: 92, CS102: 85, CS201: 88, CS202: 78, MATH101: 87 }], '300 level': [{ CS101: 81, CS102: 90, CS201: 85, CS202: 84, PHYS101: 79 }, { CS101: 87, CS102: 88, CS201: 91, ENGL101: 82, CHEM101: 80 }], '400 level': [{ CS101: 89, CS102: 92, CS201: 87, CS202: 93, PHYS101: 85 }, { CS101: 94, CS102: 86, CS201: 92, BIO101: 84, MATH101: 90 }], '500 level': [{ CS101: 93, CS102: 95, CS201: 91, CS202: 88, ENGL101: 85 }, { CS101: 96, CS102: 90, CS201: 94, BIO101: 87, CHEM101: 92 }] }, { firstname: 'Liam', link: '@Liam', course: 'mechanical engineering', level: '500 Level', matric: '9283001998', lastname: 'Smith', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ ME101: 78, ME102: 84, ME201: 79, MATH101: 88, PHYS101: 80 }, { ME101: 89, ME102: 73, ME201: 92, CHEM101: 77, ENGL101: 84 }], '200 level': [{ ME101: 81, ME102: 85, ME201: 87, MATH101: 84, PHYS202: 79 }, { ME101: 89, ME102: 78, ME201: 91, STAT101: 81, ENGL101: 80 }], '300 level': [{ ME101: 83, ME102: 89, ME201: 88, PHYS101: 82, STAT101: 80 }, { ME101: 92, ME102: 87, ME201: 90, MATH101: 85, CHEM101: 81 }], '400 level': [{ ME101: 91, ME102: 93, ME201: 87, PHYS202: 83, MATH101: 82 }, { ME101: 94, ME102: 89, ME201: 95, STAT101: 87, ENGL101: 86 }], '500 level': [{ ME101: 95, ME102: 92, ME201: 91, PHYS101: 90, MATH101: 88 }, { ME101: 98, ME102: 94, ME201: 96, CHEM101: 90, ENGL101: 91 }] }, { firstname: 'Emma', link: '@Emma', course: 'business administration', level: '500 Level', matric: '9270103890', lastname: 'Johnson', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ BUS101: 85, BUS102: 90, BUS201: 87, MATH101: 78, STAT101: 83 }, { BUS101: 92, BUS102: 88, ECON101: 81, ECON201: 85, ENGL101: 79 }], '200 level': [{ BUS101: 88, BUS102: 84, ACC101: 87, ECON101: 82, FIN201: 80 }, { BUS101: 90, BUS102: 86, ECON201: 89, STAT101: 81, MATH101: 80 }], '300 level': [{ BUS101: 84, BUS102: 91, FIN201: 88, MATH101: 83, STAT101: 82 }, { BUS101: 89, BUS102: 87, MGT401: 86, ACC101: 90, ENGL101: 81 }], '400 level': [{ BUS101: 90, BUS102: 94, ECON201: 91, STAT101: 89, MATH101: 85 }, { BUS101: 92, BUS102: 89, MGT401: 88, FIN201: 90, ENGL101: 83 }], '500 level': [{ BUS101: 93, BUS102: 95, ACC101: 91, FIN201: 89, MGT401: 88 }, { BUS101: 96, BUS102: 91, ECON101: 90, STAT101: 92, ENGL101: 90 }] }, { firstname: 'Sophia', link: '@Sophia', course: 'psychology', level: '500 Level', matric: '9225603795', lastname: 'Brown', image: process.env.PUBLIC_URL + '/images/imageRep.jpg', '100 level': [{ PSYC101: 83, PSYC201: 88, PSYC202: 90, STAT101: 81, PHIL101: 87 }, { PSYC101: 89, PSYC201: 84, BIO101: 79, SOC101: 85, ENGL101: 82 }], '200 level': [{ PSYC101: 85, PSYC201: 86, PSYC202: 88, PHIL101: 82, SOC101: 80 }, { PSYC101: 88, PSYC201: 89, BIO101: 81, STAT101: 83, ENGL101: 79 }], '300 level': [{ PSYC101: 84, PSYC201: 90, SOC101: 85, PHIL101: 81, BIO101: 80 }, { PSYC101: 90, PSYC201: 88, STAT101: 87, ENGL101: 83, PHIL101: 82 }], '400 level': [{ PSYC101: 89, PSYC201: 91, SOC101: 90, PHIL101: 85, BIO101: 84 }, { PSYC101: 93, PSYC201: 89, STAT101: 88, ENGL101: 87, BIO101: 86 }], '500 level': [{ PSYC101: 94, PSYC201: 92, PHIL101: 91, BIO101: 89, STAT101: 85 }, { PSYC101: 96, PSYC201: 93, SOC101: 88, ENGL101: 90, PHIL101: 89 }] }]
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [dept, setDept] = useState(null);
    const [change, setChange] = useState(0);
    const [level, setLevel] = useState(null);
    const [studentCount, setStudentCount] = useState(null);
    const storage = useRef();
    const [trsf, setTrsf] = useState(0);
    const [majors, setMajor] = useState([]);
    const [facultyState, setFaculty] = useState();
    const [column, setColumn] = useState();
    const [flt, setFilter] = useState('100 level');
    const [sms, setSemester] = useState(0);
    //page switcher
    const [path, setPath] = useState('studentLvl');

    const allsubject = {
        'computer science': ['CS101', 'CS102', 'CS201', 'CS202', 'CS301', 'CS302', 'CS401', 'CS402', 'MATH101', 'MATH201', 'STAT101', 'PHYS101', 'ENGL101'],
        'mechanical engineering': ['ME101', 'ME102', 'ME201', 'ME202', 'ME301', 'ME302', 'ME401', 'ME402', 'MATH101', 'MATH201', 'PHYS101', 'PHYS202', 'CHEM101', 'ENGL101'],
        'electrical engineering': ['EE101', 'EE102', 'EE201', 'EE202', 'EE301', 'EE302', 'EE401', 'EE402', 'MATH101', 'MATH201', 'PHYS101', 'PHYS202', 'STAT101', 'ENGL101'],
        'civil engineering': ['CE101', 'CE102', 'CE201', 'CE202', 'CE301', 'CE302', 'CE401', 'CE402', 'MATH101', 'MATH201', 'PHYS101', 'GEOL101', 'CHEM101', 'ENGL101'],
        'business administration': ['BUS101', 'BUS102', 'BUS201', 'BUS202', 'ACC101', 'FIN201', 'MKT301', 'MGT401', 'MATH101', 'STAT101', 'ECON101', 'ECON201', 'ENGL101'],
        'psychology': ['PSYC101', 'PSYC201', 'PSYC202', 'PSYC301', 'PSYC302', 'PSYC401', 'SOC101', 'BIO101', 'STAT101', 'PHIL101', 'ENGL101'],
        'biology': ['BIO101', 'BIO102', 'BIO201', 'BIO202', 'BIO301', 'BIO302', 'BIO401', 'CHEM101', 'PHYS101', 'MATH101', 'STAT101', 'ENGL101'],
        'chemistry': ['CHEM101', 'CHEM102', 'CHEM201', 'CHEM202', 'CHEM301', 'CHEM302', 'CHEM401', 'BIO101', 'PHYS101', 'MATH101', 'STAT101', 'ENGL101'],
        'economics': ['ECON101', 'ECON102', 'ECON201', 'ECON202', 'ECON301', 'ECON302', 'ECON401', 'MATH101', 'STAT101', 'HIST101', 'ENGL101'],
        'mathematics': ['MATH101', 'MATH102', 'MATH201', 'MATH202', 'MATH301', 'MATH302', 'MATH401', 'STAT101', 'PHYS101', 'ENGL101']
    };    
    

    student = student.map(level => {
        return level.flatMap(obj => Array(5).fill({ ...obj }));
    });

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

        const updatedMajors = [];
        for (let data of student[idx]) {
            if (!updatedMajors.includes(data.course)) {
                updatedMajors.push(data.course);
            }
        }
        setMajor(updatedMajors);
        setFaculty(updatedMajors[0]);

        for (let data of student[idx]) {
            if (data.course === updatedMajors[0]) {
                setColumn(Object.keys(data[flt][0]));
                break;
            }
        }

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

    console.log(column);

    function back1 () {
        setPath('studentLvl');
        setDept(null);
        setFilter('100 level');
        setSemester(0);
        setFaculty();
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

    function faculty (event) {
        setFaculty(event.target.value);
        for (let data of student[dept]) {
            if (data.course === event.target.value) {
                setColumn(Object.keys(data[flt][sms]));
                break;
            }
        }
    }

    function filter(event) {
        setFilter(event.target.value);
        for (let data of student[dept]) {
            if (data.course === facultyState) {
                setColumn(Object.keys(data[(event.target.value)][sms]));
                break;
            }
        }
    }

    function semester(event) {
        setSemester(Number(event.target.value));
        for (let data of student[dept]) {
            if (data.course === facultyState) {
                setColumn(Object.keys(data[flt][event.target.value]));
                break;
            }
        }
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
            <div className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'flex'} w-[100%] aspect-[1/0.04] justify-between items-center max-[640px]:aspect-[1/0.2] max-[640px]:flex-col max-[640px]:items-start mb-[2%]`}>
                <div onClick={back1} className={`w-[2%] aspect-square cursor-pointer max-[320px]:w-[7%] max-[460px]:w-[6%] max-[601px]:w-[5%] max-[860px]:w-[4%] max-[1280px]:w-[3%]`}>
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.5 12H3.67004" stroke="#2F2E41" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <button onClick={addStudent} className="max-[640px]:h-[45%] max-[640px]:w-[30%] w-[15%] h-[100%] bg-[#0D659F] text-[white] rounded-[2px] sm:rounded-[3px] md:rounded-[5px] xl:rounded-[8px] text-[3vw] sm:text-[1.8vw] md:text-[1.5vw] xl:text-[1.3vw] font-[Montserrat] font-medium max-[640px]:font-semibold">Add Student</button>
            </div>
            <div className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'flex'} w-[100%] aspect-[1/0.2] justify-between sm:aspect-[1/0.07] md:aspect-[1/0.045] xl:aspect-[1/0.035] flex-col items-start sm:flex-row sm:items-center mb-[2%]`}>
                <p className="font-[Montserrat] font-semibold text-[6vw] sm:text-[3vw] md:text-[2.4vw] xl:text-[2vw] text-black">Students</p>
                <select onChange={faculty} className="w-[55%] sm:w-[40%] md:w-[27%] h-[50%] sm:h-[100%] md:h-[100%] border border-black/50 bg-white text-[black] rounded-[2px] text-[3vw] min-[480px]:text-[2.2vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-normal">
                    <option value={majors[0]} className="font-[Montserrat] font-medium text-black" selected disabled hidden>{majors[0] && majors[0].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</option>
                    {majors && majors.map((major)=>(
                        <option value={major} className="font-[Montserrat] font-medium text-black">{major.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</option>
                    ))}
                </select>
            </div>
            <div className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'flex'} w-[100%] aspect-[1/0.21] flex-col sm:justify-between sm:flex-row sm:items-center sm:aspect-[1/0.14] md:aspect-[1/0.05] xl:aspect-[1/0.035] mb-[2%]`}>
                <p className={`font-[Montserrat] font-semibold text-[3vw] sm:text-[2.5vw] md:text-[2vw] xl:text-[2vw] text-black`}>{level} Level Students</p>
                <div className="w-[55%] sm:w-[40%] md:w-[55%] h-[100%] flex flex-col justify-between md:flex-row">
                    <select onChange={filter} className="w-[100%] sm:w-[100%] md:w-[49%] h-[47%] sm:h-[48%] md:h-[100%] border border-black/50 bg-white text-[black] rounded-[2px] text-[3vw] min-[480px]:text-[2.2vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-normal">
                        <option value="100 Level" className="font-[Montserrat] font-medium text-black" selected disabled hidden>100 Level</option>
                        {Array.from({ length: dept + 1 }, (_, i) => i).map((index)=> (
                            <option value={(index === 0 ? '100 level' : index === 1 ? '200 level' : index === 2 ? '300 level' : index === 3 ? '400 level' : '500 level')} className="font-[Montserrat] font-medium text-black">{(index === 0 ? '100 Level' : index === 1 ? '200 Level' : index === 2 ? '300 Level' : index === 3 ? '400 Level' : '500 level')}</option>
                        ))}
                    </select>
                    <select onChange={semester} className="w-[100%] sm:w-[100%] md:w-[49%] h-[47%] sm:h-[48%] md:h-[100%] border border-black/50 bg-white text-[black] rounded-[2px] text-[3vw] min-[480px]:text-[2.2vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-normal">
                        <option value="0" className="font-[Montserrat] font-medium text-black" selected disabled hidden>First semester</option>
                        <option value="0" className="font-[Montserrat] font-medium text-black">First semester</option>
                        <option value="1" className="font-[Montserrat] font-medium text-black">Second semester</option>
                    </select>
                </div>
            </div>
            <div className={`${(dept === null) && (path !== 'listOfStudents') ? 'hidden' : 'flex'} border-t border-x w-[100%] flex-col pt-[3%] mt-[3%]`}>
                <div className="w-[100%] flex flex-row gap-x-[10%] pl-[2%]">
                    <p className="text-[2.6vw] min-[480px]:text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] font-normal text-black font-[Montserrat]">All student</p>
                    <div className="px-[1.5%] bg-[#F9F5FF] rounded-[3vw]">
                        <p className="text-[2.6vw] min-[480px]:text-[2vw] sm:text-[1.5vw] md:text-[1.2vw] font-semibold text-[#6941C6] font-[Montserrat]">{studentCount} Students</p>
                    </div>
                </div>
                <div className="w-[100%] mt-[2%] flex flex-row">
                    <div className="w-[30%] sm:w-[20%] md:w-[15%] flex flex-col">
                        <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b border-r border-r-black">
                            <p className="text-[2.3vw] md:text-[1.5vw] sm:text-[1.5vw] font-medium text-[#667085] font-[Montserrat]">Student info</p>
                        </div>
                        {student[change].map((data, index) => (
                            (data.course === facultyState) ?
                                <div onClick={() => view(index)} className="w-[100%] h-[60px] flex flex-row justify-between items-center px-[5%] border-b border-r border-r-black gap-x-[10%]">
                                    <div style={{ background: `url(${data.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top-center' }} className="w-[40%] sm:w-[50%] md:w-[30%] xl:w-[20%] aspect-square rounded-[50%]"></div>
                                    <div className="w-[65%] h-[70%] flex flex-col justify-center gap-y-[7%] sm:gap-y-[7%]">
                                        <p className="text-[3.2vw] sm:text-[2.2vw] md:text-[1.5vw] xl:text-[1vw] font-medium text-black font-[Montserrat]">{data.firstname}</p>
                                        <p className="text-[2.4vw] sm:text-[1.8vw] md:text-[1.2vw] xl:text-[0.9vw] font-normal text-[#667085] font-[Montserrat]">{data.link}</p>
                                    </div>
                                </div>
                            :
                                <></>
                        ))}
                    </div>
                    <div style={{ height: `${(60 * (column && column.length)) + 60}px` }} className={` box-content snap-x w-[55%] sm:w-[70%] md:w-[75%] xl:w-[75%] flex flex-col flex-wrap overflow-x-scroll`}>
                        {column && column.map((name)=>(
                            <div className="w-[30%] flex flex-col snap-start">
                                <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b">
                                    <p className="text-[2.3vw] sm:text-[1.5vw] md:text-[1vw] font-medium text-[#667085] font-[Montserrat]">{name}</p>
                                </div>
                                {student[change].map((data, index) => (
                                    (data.course === facultyState) ?
                                        <div onClick={() => view(index)} className="w-[100%] h-[60px] border-b flex justify-center items-center">
                                            <p className="text-[2.6vw] sm:text-[1.5vw] md:text-[1vw] font-medium text-[#667085] font-[Montserrat]">{(data[flt][sms])[name]}</p>
                                        </div>
                                    :
                                        <></>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="w-[15%] sm:w-[10%] md:w-[10%] flex flex-col">
                        <div className="w-[100%] h-[40px] bg-[#F9FAFB] flex justify-center items-center border-b border-l border-l-black">

                        </div>
                        {student[change].map((data, index) => (
                            (data.course === facultyState) ?
                                <div onClick={() => view(index)} className="w-[100%] h-[60px] border-b flex justify-center items-center gap-x-[20%] border-l border-l-black">
                                    <div onClick={edit} className="w-[26%] sm:w-[23%] md:w-[20%] xl:w-[15%] aspect-square cursor-pointer">
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
                            :
                                <></>
                        ))}
                    </div>
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

export default AdminResult;
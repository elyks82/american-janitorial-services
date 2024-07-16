import {useState, useEffect} from 'react';

import StateUtils from '../utils/stateUtils/stateUtils.js';

//import Construction from '../components/default/ConstructionComponent';
import LoadingComponent from '../components/default/LoadingComponent';

import defaultState from '../utils/schema/defaultState';
import ErrorComponent from '../components/default/ErrorComponent';
import PageHeaderComponent from '../components/default/PageHeaderComponent.jsx';

import placeholder_image from '../assets/icons/default-photo.svg';

import useModal from '../components/default/Modal.jsx';
import { ProjectView } from '../components/app_components/ProjectComponents.jsx';

import php_logo from '../assets/logo/php-logo.svg';
import javascript_logo from '../assets/logo/javascript-logo.svg';
import bootstrap_logo from '../assets/logo/bootstrap-logo.svg';
import sql_logo from '../assets/logo/mysql-logo.svg';
import mongodb_logo from '../assets/logo/mongodb-logo.svg';
import java_logo from '../assets/logo/java-logo.svg';
import reactjs_logo from '../assets/logo/react-logo.svg';
import nodejs_logo from '../assets/logo/nodejs-logo.svg';


const Projects = (({Wallet}) => {

    const [componentState, setComponentState] = useState(defaultState);
    const { setLoading, setError, setCompleted } = StateUtils(setComponentState);

    const { Modal, openModal } = useModal();

    function displayProjectTags(project) {
        return project?.tags?.map((tag, index) => {
            let imageSrc;
            switch(tag){
                case "php":
                    imageSrc = php_logo;
                    break;
                  case "bootstrap":
                    imageSrc = bootstrap_logo;
                    break;
                  case "sql":
                    imageSrc = sql_logo;
                    break;
                  case "java":
                    imageSrc = java_logo;
                    break;
                  case "javascript":
                    imageSrc = javascript_logo;
                    break;
                  case "reactjs":
                    imageSrc = reactjs_logo;
                    break;
                  case "nodejs":
                    imageSrc = nodejs_logo;
                    break;
                  case "mongodb":
                    imageSrc = mongodb_logo;
                    break;
                  default:
                    imageSrc = null;
            }
            return imageSrc && (
                <img key={index} className="tag-logo" src={imageSrc} alt={tag} width={'24px'}/>
            );
        });
    }

    useEffect(() => {
        setCompleted([
            {
                id: 'gd-software',
                thumbnail: 'thumbnail.png',
                projectTitle: 'Gota Dental LLC - Business Management Application',
                featuresList: [
                    'Inventory Management, Serial, and Location tracking with multipurpose functionality based on mariadb.',
                    'Relational database system used in tracking inventory items, workorders, listings, accounts, parts, and more.',
                    'Built in workorder and part tracking linked to inventory item.',
                    'Listinging tracking and eBay tracking linked to inventory item.',
                    'Product Schemas to easily identify and add new inventory items.',
                    'User Authentication and Role Management.',
                    'Premium Account Management and Subscription Service.',
                    'User Dashboard and User Profile Management.',
                ],
                quickSummary: `Full stack JavaScript application/service for managing internal affairs of a dental equipment repair company.`,
                photos: [ 'img1.png', 'img2.png', 'img3.png'],
                links: [{name: 'GitHub', url: 'https://github.com/dank-yo/gota-dental-webapp-full-src'}, {name: 'YouTube', url: ''}],
                tags: ['reactjs', 'nodejs', 'express', 'mariadb', 'tailwindcss', 'javascript', 'html', 'css']
            },
            {
                id: 'hmsu',
                projectTitle: 'HMSU Staff Announcements',
                thumbnail: 'thumbnail.png',
                featuresList: [
                    'Utilized LAMPP stack as the web server and employed a MySQL Database for data storage.',
                    'Seamlessly integrated with ISU Auth Systems, with account passwords securely stored in a separate location.',
                    'Supported the storage of both text and images within posts.',
                    'Offered administrative tools to streamline site management and administration.',
                    'Used roles to dedicate users into groups and provide certain permissions.',
                ],
                quickSummary: `A business-oriented web applcation to log supervisor annoucements.`,
                summary: `This business-oriented web application served as a communication platform where supervisors could send out announcements to student workers and receive acknowledgments. Additionally, it facilitated student-to-student communication by providing a means for exchanging notes on the current status of affairs within the building.`,
                photos: [ 'img1.png', 'img2.png', 'img3.png', ],
                links: [{name: 'GitHub', url: 'https://github.com/dank-yo/hmsu-staff-announcements-demo'}, {name: 'Demo', url: 'https://daniels-php-demo.000webhostapp.com/hmsu-sa-demo/'}, {name: 'YouTube', url: ''}],
                tags: ['linux', 'php', 'apache', 'sql', 'html', 'css', 'bootstrap']
            },
            {
                id: 'quizapp', 
                projectTitle: `Daniel's Quiz App`,
                thumbnail: 'thumbnail.png',
                featuresList: [
                    'Database integration to store and request full exams.',
                    'User account system and roles.',
                    'Automatic grading of completed quizzes.',
                    'Results for users upon quiz completion.',
                    'Features for admins to create quizzes/view results'
                ],
                quickSummary: 'A MERN stack application for users to take quizzes.',
                summary: 'This application is a continuation of a school project. This is a small MERN stack app that allows users to upload/take/and be graded on quizzes.',
                photos: [ 'img1.png', 'img2.png', 'img3.png', 'img4.png'],
                links: [{name: 'GitHub', url: 'https://github.com/dank-yo/daniels-quiz-app'}, {name: 'Demo', url: 'https://daniels-quiz-app.herokuapp.com/'}],
                tags: ['mongodb', 'express', 'reactjs', 'nodejs', 'javascript', 'html', 'css']
            },
            {
                id: 'phpOSv2', 
                projectTitle: `phpOS v2`,
                thumbnail: 'thumbnail.png',
                featuresList: [
                    'Class based system to allow easy integration and call-out of custom written web applications.',
                    'Used roles to dedicate users into groups and provide certain permissions.',
                    'Updated UX/UI.',
                ],
                quickSummary: 'An OS themed php app, now with more JavaScript!',
                summary: 'This application was a re-write of my original phpOS v1 project that I developed in 2019. Originally intended to be my official resume landing page, a last minuet decision was made to re-write it on a common framework. Mainly for a significantly better mobile experience.',
                photos: [ 'img1.png', 'img2.png', 'img3.png' ],
                links: [{name: 'GitHub', url: 'https://github.com/dank-yo/daniels-phpOS-v2'}, {name: 'Demo', url: 'http://daniels-php-demo.000webhostapp.com/webOS-v2/login.php'}],
                tags: ['php', 'javascript', 'html', 'css', 'bootstrap']
            },
            {
                id: 'mapapp', 
                projectTitle: `Store Finder (Map) App`,
                thumbnail: 'thumbnail.png',
                featuresList: [
                    'MongoDB GeoJSON',
                    'UI for users click locations',
                    'Information section to show locations based on closest to furthest',
                ],
                quickSummary: 'A simple node application for users to find store locations',
                summary: 'This application was another school project for users to query geoJSON locations and then find the closest location to the coordinates clicked on.',
                photos: [ 'img1.png', 'img2.png'],
                links: [{name: 'GitHub', url: 'https://github.com/dank-yo/daniels-quiz-app'}],
                tags: ['mongodb', 'express', 'nodejs', 'javascript', 'html', 'css', 'bootstrap']

            },
            {
                id: 'alias-r1122', 
                projectTitle: `Alias Client (v2) (MC rel-1.12.2)`,
                thumbnail: 'thumbnail.png',
                featuresList: [
                    'Updated UI/UX Style',
                    'Modular component design to allow easy addition of new modifications.',
                    'Key binds for quickly toggling cheats.',
                    'Anti-cheat bypasses for popular servers w/ prevention system to avoid account flagging.',
                    'Server specific modules with custom bypasses.',
                    'More customizable settings for cheats.',
                ],
                quickSummary: 'A newer Minecraft client for online and offline cheats.',
                summary: 'This application was the second Minecraft modded clients I produced. For Minecraft official release 1.12.2. This was made for cheating on single player and multiplayer servers, specifically mini game servers such as Mineplex and Hypixel.',
                photos: [ 'img1.png', 'img2.png', 'img3.png', ],
                links: [{name: 'GitHub', url: 'https://github.com/dank-yo/alias-client-r1122'}],
                tags: ['java', 'opengl']
            },
            {
                id: 'alias-b173', 
                projectTitle: `Alias Client (v1) (MC b1.7.3)`,
                thumbnail: 'thumbnail.png',
                featuresList: [
                    'Clickable GUI for toggling and modifying cheat values.',
                    'Key binds for quickly toggling cheats.',
                    'Prevention system for tripping anti-cheat',
                    'Some anti-cheat bypasses built in.'
                ],
                quickSummary: 'A modified Minecraft (beta) client for online and offline survival cheats.',
                summary: 'This application was one of the first Minecaft modded clients I ever produced. For Minecraft beta release 1.7.3. This was made for cheating on single player and multiplayer servers.',
                photos: [ 'img1.png', 'img2.png', 'img3.png', ],
                links: [{name: 'GitHub', url: 'https://github.com/dank-yo/alias-client-b173'}],
                tags: ['java', 'opengl']
            },
        ])
        /*
        const asyncFetch = async () => {
            const response = await defaultFetch(Wallet, '/public/projects/getProjects');
            console.log(await response);
            if(!response?.ok){
                setError(response);
            }else{
                setCompleted(response.payload);
            }
        };
        if(componentState.payload === null & componentState.fetchCount < 1){
            asyncFetch();
        }
        */
    }, []);

    return(
        <>
        {componentState.loading === true ? (
            <>
            <PageHeaderComponent title={'Loading Projects | DK Portfolio'}/>

                <div className='w-full h-full flex justify-center items-center'>
                    {LoadingComponent('Loading Projects', 'Please wait while the server loads this resource...')}
                </div>
            </>
        ) : componentState.error === true ? (

            <>
            <PageHeaderComponent title={'Error Loading Projects | DK Portfolio'}/>

            <div className='w-full h-full flex justify-center items-center'>
                {ErrorComponent(componentState.errorResponse)}
            </div>
            </>
        ) : componentState.completed === true && (
            <>
            <PageHeaderComponent title={'Projects | DK Portfolio'}/>

            <div id='app-page-container' className="theme-page-container flex flex-col gap-2 items-center">
            <h1 className='text-4xl text-center mb-4 mt-4 italic'> Software Portfolio </h1>
            
            {componentState?.payload !== null && (
                // This is the first project
                <div className='theme-content-container transition hover:scale-105 hover:shadow-glow cursor-pointer mb-4 w-10/12'onClick={() => (openModal(`${componentState.payload[0]?.projectTitle}`, <div className='w-full'><ProjectView Payload={componentState?.payload[0]}/></div>))}>
                    <div className='flex flex-col w-full items-center justify-center'>
                        <p className='p-2'>{componentState.payload[0]?.projectTitle}</p>
                        <img src={`${import.meta.env.VITE_API_PROJECTS_UPLOAD_URL}/${componentState.payload[0]?.id}/${componentState.payload[0]?.thumbnail}`} width={'60%'}/>
                    </div>
                    <p className='text-sm text-center mt-2 italic'>{componentState.payload[0]?.quickSummary}</p>
                    <div className='w-full flex flex-row gap-2 text-center items-center justify-center mt-2'> 
                        {displayProjectTags(componentState.payload[0])}
                    </div>
                </div>
            )}
    
                <div className='flex flex-wrap justify-center gap-4 mb-4'>
                    {componentState?.payload !== null && componentState.payload.length > 1 && componentState.payload.slice(1).map((obj, index) => (
                        // These are the rest of the projects
                        <div key={index} className='theme-content-container w-5/12 transition hover:scale-105 cursor-pointer hover:shadow-glow transition' onClick={() => (openModal(`${obj?.projectTitle}`, <div className='w-full'><ProjectView Payload={obj}/></div>))}>
                            <div className='flex flex-col w-full items-center justify-center'>
                                <p className='mb-2'>{obj?.projectTitle}</p>
                                <img src={`${import.meta.env.VITE_API_PROJECTS_UPLOAD_URL}/${obj.id}/${obj.thumbnail}`} width={'50%'}/>
                            </div>
                            <p className='text-sm text-center mt-2 italic'>{obj?.quickSummary}</p>
                            <div className='w-full flex flex-row gap-2 text-center items-center justify-center mt-2'> 
                                {displayProjectTags(obj)}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            </>
        )}
        {Modal()}
        </>
    );
});

export default Projects;
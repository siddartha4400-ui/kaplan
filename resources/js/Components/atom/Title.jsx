import Head from 'next/head';
import { useRouter } from 'next/router';

function getLastSegment(url) {
    const segments = url.split('/');
    return segments[segments.length - 1];
}
function staticTitles(url){
    const titleObject ={
        "/todosion/todos-createdby-me" : "Todos created by me",
        "/manage-agenda" :"Agenda topics",
        "/manage-userstories":"Feature / User stories / Tasks",
        "/manage-fieldvalidation":"Field validations",
        "/manage-go-live":"Go live preparations",
        "/manage-milestone":"Milestones",
        "/manage-message-board":"Message-board",
        "/manageplanning":"Planning",
        "/addmembers":"Project members",
        "/questionoverviewpage":"Questions",
        "/releasion/sprint":"Sprints",
        "/manage-technology":"Technologies",
        '/technology':'Manage technologies',
        '/technology/micro-service-setting':'Manage microservices',
        "/manage-tickets":"Tickets",
        "/manage-guidelines":"User guidelines",
        "/type-settings":"Types/Topics",
        '/userstories' : 'User stories',
        '/fieldvalidation':'Create field validation',
        '/agenda':'Create agenda topic',
        '/dtap':'DTAP',
        '/projectmember/member':'Project team',
        '/releasion/release/manage-release':'Releases',
        '/questions':'Create questions',
        '/essencion/meetingminutes':'Meeting minutes',
        '/shoution/all-messages':'Message board',
        '/shoution/allshouts':'All shouts',
        '/wekion/manage-weki':'Weki created by me',
        '/the-core/qrcode/manage-category':'Manage QR categories',
        '/the-core/qrcode/manage-qr-code': 'Manage QR code',
        '/the-core/projectsettings/manage-squad':'Manage squads',
        '/the-core/team/manageteam':'Manage teams',
        '/the-core/user/usertype': 'Manage user types',
        '/ticket-settings':'Status group settings - Tickets',
        '/ManageWorkflow':'Manage workflow',
        '/project-attributes':'Manage question priorities',
        '/the-core/project/manageproject':'Manage Projects',
        '/ofrion/create-cr/overview':'Change request overview',
        '/ofrion/create-cr/estimation':'Change request estimations',
        '/aispaceusers': 'Ai space users',
        '/my-account/emailsettings':"My email settings",
        '/manageagent' : "Manage agents",
        '/addmembers' : "Add members",
        "/aisandbox" : "AI",
        '/userstories-ai-agent':'User stories',
    }
    // console.log(url)
    return titleObject[url];
}
function capitalize(s) {
    return s ? s[0].toUpperCase() + s.slice(1) : 'Dashboard';
}

export default function Title({ title = '', name = 'description', content = 'Default description' }) {
    const router = useRouter();
    const { pathname } = router;
    const titleFilteredData = capitalize(getLastSegment(pathname)).replace(/-/g, ' ');
    const titleData =capitalize(getLastSegment(router.query[titleFilteredData.substring(1, titleFilteredData.length - 1)] || titleFilteredData)).replace(/-/g, ' ') ;

    const staticTitle=staticTitles(pathname);
    // console.log({"1":title,'2':staticTitle,'3':titleData});
    const finalTitle =title ||staticTitle || titleData ;

    return (
        <Head>
            {/* <link rel="icon" href="/ai_icon.svg" type="image/svg+xml" /> */}
            <title>{finalTitle +" | Lienion"}</title>
            <meta name={name} content={content} />
        </Head>
    );
}
export function Title1({ title = '', name = 'description', content = 'Default description' }) {
    Title({ title, name , content });
}
{/* <Title title="About Us | Lienion" name="description" content="Learn more about Lienion" /> */}
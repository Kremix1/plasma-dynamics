import './App.scss';

import {Main} from "./Main/Main.tsx";
import {About} from "./About/About.tsx";
import {Team} from "./Team/Team.tsx";
import {Customers} from "./Customers/Customers.tsx";
import {Requests} from "./Requests/Requests.tsx";
import {Plasmatron} from "./Plasmatron/Plasmatron.tsx";
import {Advantages} from "./Advantages/Advantages.tsx";
import {LeaveRequest} from "./LeaveRequest/LeaveRequest.tsx";
import {Contacts} from "./Contacts/Contacts.tsx";
import {Footer} from "./Footer/Footer.tsx";

export function App() {
  return (
    <div className="App">
        <Main />
        <About />
        <Team />
        <Customers />
        <Requests />
        <Plasmatron />
        <Advantages />
        <LeaveRequest />
        <Contacts />
        <Footer />
    </div>
  );
}
import StepperComponent from "./components/StepperComponent";
import {HeaderTabs} from "./components/HeaderTabs"
import data from './data.json';

function About() {
  const {user , tabs,urls } = data;
    return ( 
      <>
       <HeaderTabs user = {user} tabs={tabs} urls={urls} />
       <StepperComponent />
      </>
     );
}

export default About;
import { HeaderTabs } from './components/HeaderTabs';
import data from './data.json';
export default function Home() {
  const {user , tabs,urls } = data;
  return (
    <>
    <HeaderTabs user = {user} tabs={tabs} urls={urls} />
    
    </>
  )
}

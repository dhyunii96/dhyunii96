import ProfileCard from './components/ProfileCard'
import ButtonGroup from './components/ButtonGroup'
import CardGrid from './components/CardGrid'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProfileCard />
        <ButtonGroup />
        <CardGrid />
        <LoginForm />
      </main>
    </>
  );
}

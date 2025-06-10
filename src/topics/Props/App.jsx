import Card from "./Card";
import Greet from "./Greet"

function App() {
    const users = [
  {
    name: "Neha Singh",
    role: "Frontend Developer",
    description: "Loves working with React & Tailwind.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Backend Developer",
    description: "Node.js & MongoDB specialist.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];
 
 
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {users.map((user, i) => (
        <Card key = {i} {...user} />
      )) }
    </div>
      <Greet name = "Neha" />
    </>
  )
}

export default App

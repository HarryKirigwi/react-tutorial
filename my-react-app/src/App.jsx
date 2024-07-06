import Hate from "./hate.jsx";
import Student from "./propsTutorial.jsx";
import Greetings from "./Greetings.jsx";

function App() {
  return (
    <>
      <Student name="Harrison" age={21} isStudent={true} />
      <Student name="Jane" age={12} isStudent={false} />
      <Student name="Derick" age={25} isStudent={false} />
      <Student name="James" age={21} isStudent={true} />
      <Student />
      <Greetings isLoggedIn={true} username="Harrison" />
      <Greetings isLoggedIn={true} username="Jane" />
      <Greetings/>
      {/* <Hate /> */}
    </>
  );
}

export default App;

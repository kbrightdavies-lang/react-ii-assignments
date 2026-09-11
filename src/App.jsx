import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'




 
 

function Welcome() {
   return <h2>Welcome to My React Project</h2>
}


function App() {

 const [name, setName] = useState("")
 const [students, setStudents] = useState([])
 const [course, setCourse] = useState("")

 function addStudents() {
    
      if (name.trim() !== "" && course.trim() !== "") {
        setStudents([...students,
          {
            name: name,
            course: course
          }
          ])
        setName("")
        setCourse("")
      }

      
  }



function deleteStudent(indexToDelete) {
  setStudents (
    students.filter((student, index) => index !== indexToDelete)
  );
}


  return (
    <section id="body">
    <div className="heading">
      <h1>Student Registration App</h1>

      <Welcome />
    </div>



    <div className="course-input">
      <form>
        <label>Student Name</label>
        <input
        type="text"
        value={name}
        placeholder="John Doe"
        onChange={(event) => setName(event.target.value)}
        />

        <label>Course</label>
          <input
          type="text"
          value={course}
          placeholder="Business"
          onChange={(event) => setCourse(event.target.value)}
          />
        
      </form>
    </div>

<div className="registerBtn">
  <button onClick={addStudents}>Register</button>
</div>

    <div className="registry-table">
      <table>
                <thead>
                    <tr>
                        <th>StudentName</th>
                        <th>Course</th>
                        <th>Delete</th>
                    </tr>
                </thead>


<tbody>
  {students.map((student, index) => (
    <tr key={index}>
      <td>{student.name}</td>
      <td>{student.course}</td>
      <td>

        <div className="deleteBtn">
        <button onClick={() => deleteStudent(index)}>
          Delete
        </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>
</table>

    </div>
    </section>




  );


}




export default App;







{/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
} */}




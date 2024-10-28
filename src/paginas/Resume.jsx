import { studies, experiences } from '../data/resume';

function Resume() {
    return (
      <>
        <div className='body bodyResume'>
            <h1>Currículum</h1>

            <section>
            <h2>Formación Académica</h2>
            <ul>
                {studies.map((study) => (
                <li key={study.id}>
                    <h3>{study.title}</h3>
                    <p>{study.institution}</p>
                    <p>{study.date}</p>
                </li>
                ))}
            </ul>
            </section>

            <section>
            <h2>Experiencia Laboral</h2>
            <ul>
                {experiences.map((experience) => (
                <li key={experience.id}>
                    <h3>{experience.title}</h3>
                    <p>{experience.company}</p>
                    <p>{experience.date}</p>
                </li>
                ))}
            </ul>
            </section>
        </div>
      </>
    );
  }
  
  export default Resume;
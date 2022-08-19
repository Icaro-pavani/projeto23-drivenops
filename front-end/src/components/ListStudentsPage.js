import { useEffect, useState } from "react";
import axios from "axios";

function ListStudentPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    axios
      .get(`${API_URL}/students`)
      .then(({ data }) => setStudents([...data]))
      .catch((error) => alert("Não foi possível realizar o requerimento!"));
  }, []);

  return students.length > 0 ? (
    <>
      <h1>Estudantes:</h1>
      {students.map((student, index) => (
        <h2 key={index}>- {student.name}</h2>
      ))}
    </>
  ) : (
    "Não ha estudantes cadastrados!"
  );
}

export default ListStudentPage;

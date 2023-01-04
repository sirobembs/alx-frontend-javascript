// returns the sum of all the student ids.

const getStudentIdsSum = (students) => {
  const all = students.map((student) => student.id)
    .reduce((studentPrev, studentCurrent) => studentPrev + studentCurrent);

  return all;
};

export default getStudentIdsSum;

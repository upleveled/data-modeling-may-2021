import { useState } from 'react';

function getSalaryString(salary1, salary2) {
  let salaryString = '';
  console.log('render');

  if (salary1 > 1000) salaryString = salary1;
  if (salary2 > 1000) salaryString = salary2;
  if (salary2 > 1000 && salary1 > 1000) salaryString = salary1 + ',' + salary2;

  return salaryString;
}

export default function DerivingStateExample() {
  const [salary1, setSalary1] = useState(0);
  const [salary2, setSalary2] = useState(0);
  // const [salaryString, setSalaryString] = useState('');

  const salaryString = getSalaryString(salary1, salary2);

  // salary 1 = ....
  // salary 2 = ....

  // salaries over $1000: 1100, 1500

  // useEffect(() => {
  //   setSalaryString(getSalaryString(salary1, salary2));
  // }, [salary1, salary2]);

  return (
    <div>
      <ul>
        <li>
          salary 1 : ${salary1}
          <button
            onClick={() => {
              setSalary1(salary1 + 100);
              // setSalaryString(getSalaryString(salary1, salary2));
            }}
          >
            + 100
          </button>
          <button
            onClick={() => {
              setSalary1(salary1 - 100);
              // setSalaryString(getSalaryString(salary1, salary2));
            }}
          >
            - 100
          </button>
        </li>
        <li>
          salary 2 : ${salary2}
          <button
            onClick={() => {
              setSalary2(salary2 + 100);
              // setSalaryString(getSalaryString(salary1, salary2));
            }}
          >
            + 100
          </button>
          <button
            onClick={() => {
              setSalary2(salary2 - 100);
              // setSalaryString(getSalaryString(salary1, salary2));
            }}
          >
            - 100
          </button>
        </li>
      </ul>

      <div> salaries over $100 : {salaryString}</div>
      {/* <div>
      // first solution
        salaries over $100 : {salary1 > 1000 ? salary1 : ''}
        {salary2 > 1000 && salary1 > 1000 ? ',' : ''}
        {salary2 > 1000 ? salary2 : ''}
      </div> */}
    </div>
  );
}

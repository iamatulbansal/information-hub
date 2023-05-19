
import QuestionCart from "../components/QuestionCart";
import { filterData } from '../utils/helper'
const ReactQuestion = (props) => {
  const result = filterData(props, 'react');
  return <div className='ans-sheet'>{result.map((item, i) => {
    return <QuestionCart {...item} key={i} />
  })}</div>;
};

export default ReactQuestion;


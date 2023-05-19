
import QuestionCart from "../components/QuestionCart";
import { filterData } from '../utils/helper'
const NodeQuestion = (props) => {
  const result = filterData(props, 'node');
  return <div className='ans-sheet'>{result.map((item, i) => {
    return <QuestionCart {...item} key={i} />
  })}</div>;
};

export default NodeQuestion;


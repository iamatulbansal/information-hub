
import QuestionCart from "../components/QuestionCart";
import { filterData } from '../utils/helper'
const SecurityQuestion = (props) => {
  const result = filterData(props, 'security');
  return <div className='ans-sheet'>{result.map((item, i) => {
    return <QuestionCart {...item} key={i} />
  })}</div>;
};

export default SecurityQuestion;



import QuestionCart from "../components/QuestionCart";
import { filterData } from '../utils/helper'
const JavascriptQuestion = (props) => {
  const result = filterData(props, 'javascript');
  return <div className='ans-sheet'>{result.map((item, i) => {
    return <QuestionCart {...item} key={i} />
  })}</div>;
};

export default JavascriptQuestion;


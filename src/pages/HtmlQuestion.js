
import QuestionCart from "../components/QuestionCart";
import { filterData } from '../utils/helper'
const HtmlQuestion = (props) => {
  const result = filterData(props, 'html');
  return <div className='ans-sheet'>{result.map((item, i) => {
    return <QuestionCart {...item} key={i} />
  })}</div>;
};

export default HtmlQuestion;


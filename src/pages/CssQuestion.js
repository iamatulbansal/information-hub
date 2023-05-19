
import QuestionCart from "../components/QuestionCart";
import { filterData } from '../utils/helper'
const CssQuestion = (props) => {
  const result = filterData(props, 'css');
  return <div className='ans-sheet'>{result.map((item, i) => {
    return <QuestionCart {...item} key={i} />
  })}</div>;
};

export default CssQuestion;


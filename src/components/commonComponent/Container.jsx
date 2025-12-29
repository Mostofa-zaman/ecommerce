
import PropTypes from 'prop-types'; // ES6
const Container = ({children , className}) => {
  return (
    <div className={`${className} max-w-[1320px] m-auto `}>{children}</div>
  )
}
Container.propTypes = {
  children: PropTypes.node.isRequired, 
};
export default Container
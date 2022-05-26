/**
 * @pr
 * @name: dimensionsPropsType
 * @description: sets the type properties for dimensions
 * @param: 
 * @returns: 
 * @author: Antonio Ayala, Sophia Chiao
 */

// import modules and libraries
import PropTypes from 'prop-types'


export const dimensionsPropsType = (
  PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    marginTop: PropTypes.number,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
  })
)
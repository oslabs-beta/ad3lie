/**
 * @pr
 * @name: combineChartsDimensions
 * @description: creates a new chart dimension object based on window changes
 * @param: 
 * @returns: 
 * @author: Antonio Ayala, Sophia Chiao
 */

  // import modules and libraries

 export const combineChartDimensions = dimensions => {
    let parsedDimensions = {
        marginTop: 40,
        marginRight: 30,
        marginBottom: 40,
        marginLeft: 75,
        ...dimensions,
    }
  
    return {
        ...parsedDimensions,
        boundedHeight: Math.max(parsedDimensions.height - parsedDimensions.marginTop - parsedDimensions.marginBottom, 0),
        boundedWidth: Math.max(parsedDimensions.width - parsedDimensions.marginLeft - parsedDimensions.marginRight, 0),
    }
  }
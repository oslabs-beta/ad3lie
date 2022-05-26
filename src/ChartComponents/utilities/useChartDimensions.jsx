/**
 * @pr
 * @name: useChartDimensions
 * @description: creates a new chart dimension object based on window changes
 * @param: passedSettings, and object with a similar model structure as combineChartDimensions' parsedDimensions
 * @returns: returns the size of the new window
 * @author: Antonio Ayala, Sophia Chiao
 */

// import modules and libraries
import { combineChartDimensions } from './combineChartDimensions'
import { useRef, useState, useEffect } from 'react';


  // custom React Hook useChartDimensions that helps keep charts responsive and automatically updates any dimensions when
  // window is resized
  export const useChartDimensions = passedSettings => {
    
    // React hook that accepts an argument as the initial value and returns a reference (aka ref).
    // A reference is an object having a special property: current, which allows access to the updated value through
    // ref.current
    const ref = useRef()

    // invoking the combineChartDimensions passing in setting preferences and returns an object stored as dimensions
    const dimensions = combineChartDimensions(passedSettings)
  
    // setting the state for the width and height of the windows
    const [width, changeWidth] = useState(0)
    const [height, changeHeight] = useState(0)
  
    // React Hook useEffect() tells the React Component to run on the first render
    // https://www.w3schools.com/react/react_useeffect.asp
    useEffect(() => {

      // if the properties width and height are defined return nothing
      if (dimensions.width && dimensions.height) return
  
      // setting the ref.current to element
      const element = ref.current

      // creating a new instance of ResizeObserver which reports changes to the dimensions of an Element's 
      // content or border box, or the bounding box of an SVGElement
      // Syntax: new ResizeObserver(callback) --> where the callback
      // accepts an array of ResizeObserverEntry objects that can be used to access the new dimensions 
      // of the element after each change
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver
      const resizeObserver = new ResizeObserver(entries => {

        // edge cases to ensure that entries is an array and has a length
        if (!Array.isArray(entries)) return
        if (!entries.length) return

        // initializing a constant entry set to the zero index of entries
        const entry = entries[0]

        // if the width and height state are not updated, 
        // using the useState React Hook, to set the width and height to the correct values
        if (width != entry.contentRect.width) changeWidth(entry.contentRect.width)
        if (height != entry.contentRect.height) changeHeight(entry.contentRect.height)

        // using the observe() method in ResizeObserver to observe the specified element
        resizeObserver.observe(element)

        // return an anonymous function that uses the unobserve() method in ResizeObserver to
        // end the observing of an element
        return () => resizeObserver.unobserve(element)
      }, [])
    })
    // create a new object with new dimensions
    // const newSettings = combineChartDimensions({
    //   ...dimensions,
    //   width: dimensions.width || width,
    //   height: dimensions.height || height,
    // })

    // initial conditions, useEffect will invoke when ref or newSettings changes
    // return [ref, newSettings]
    return [ref, combineChartDimensions]
  }
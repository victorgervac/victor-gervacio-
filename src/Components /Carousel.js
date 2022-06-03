import React ,{useState, useEffect} from 'react'
import '../styles/CarouselStyle.css' //will be added later

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const {children, show} = props
  const [length, setLength] = useState(children.length)
    useEffect(() => {
      setLength(children.length)
  }, [children])
  const next = () => {
    if (currentIndex < (length - show)) {
        setCurrentIndex(prevState => prevState + 1)
    }
}

const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
}

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper">
                    <div   className={`carousel-content show-${show}`}
     style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                    <div className="carousel-wrapper">
    {/* You can alwas change the content of the button to other things */}
    
                         <button onClick={prev} className="left-arrow">
                         &lt;
                        </button>
                        
                        <div className="carousel-content-wrapper">
                        {children}
                        </div>
                        <button onClick={next} 
                          className="right-arrow">
                        &gt;
                        </button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
// import React from "react";
// import Review from "./Review.js"


// function App(){


//     return(
//         <>
//             <Review/>
//         </>
//     )
// }

// export default App;


// import "../styles/App.css"
import React from "react"
import Review from "./Review.js"

const App = () =>{
    return (
        <main>
            <section className="container">
                <div className="title">
                 <h2 id="review-heading">Our Reviews</h2>
                </div>
                <Review />
            </section>
        </main>
    )
}

export default App
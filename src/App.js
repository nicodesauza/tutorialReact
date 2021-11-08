import Component from "./Header.jsx";
import StateProps from "./stateProps.jsx";
import StreamingComponent  from "./StreamingComponent.jsx"
import CountComponent  from "./CountComponent.jsx"
// import SuspenseComponent  from "./component/SuspenseComponent.jsx"
import GraphqlComponent  from "./component/GraphqlComponent.jsx"

// const Navbar = () => {
//   return(
//     <div>test</div>
//   )
// }

const App = () => {
  return (
    <div className="flex py-14 flex-col items-center min-h-screen w-full">
      {/* <StreamingComponent/> */}
        {/* <Component/>
        <StateProps/> */}
        <GraphqlComponent/>
    </div>
  );
}

export default App


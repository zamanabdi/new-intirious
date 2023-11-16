import {FidgetSpinner} from "react-loader-spinner";

const Loader = () => {
  return (
    <>
    <h1 style={{fontFamily:"cursive"}}>Loading.....</h1>
    
    <FidgetSpinner
  visible={true}
  height="100px"
  width="100px"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/>
    </>
    
  );
};

export default Loader;

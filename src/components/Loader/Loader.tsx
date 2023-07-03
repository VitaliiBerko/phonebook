import React from "react";
import { Watch } from "react-loader-spinner";

const Loader: React.FC = () => {
    return (
        
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{
          justifyContent: 'center',
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        wrapperClass=""
        visible={true}
      />
    
    )
    
    };
  
  export default Loader;





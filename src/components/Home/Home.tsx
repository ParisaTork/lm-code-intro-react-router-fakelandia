import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../resources/lotties/24337-law.json';

const Home : React.FC = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div>
        <img src="./fakelandia-aerial.jpg" id="aerial" alt="Aerial of Fakelandia"/>
        <h1>Welcome to the home of the Justice Department of Fakelandia.</h1>
        <p>Here you can browse a list of recent misdemeanours committed by our citizens, or you can confess to your own misdemeanour.</p>
        <div id="lottie">
        <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
        />
        </div>
    </div>
  )
}

export default Home;
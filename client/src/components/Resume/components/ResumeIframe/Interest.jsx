import "./Interest.css";
import Interests from './components/Interests/Interests'

const Interest = () => {
  return (
    <>
    
    <div id="interests" data-aos="flip-right">
				<Interests
					topic="Teaching"
					details="Apart from begin a tech enthusiast and a code writer, I also love to teach people what I know simply because I believe in sharing."
				/>

				<Interests topic="Gaming" details="It's my refreshment." />

				<Interests
					topic="Traveling"
					details="It feels good to be lost in the right direction"
				/>
			</div>
    
    </>
  )
}

export default Interest;
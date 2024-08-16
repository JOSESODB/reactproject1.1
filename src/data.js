import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
	{
		image: componentsImg,
		title: 'Components',
		desc: 'The core UI building block - compose the user interface by combining multiple components.',
	},
	{
		image: propsImg,
		title: 'Props',
		desc: 'The core UI building block - compose the user interface by combining multiple components.',
	},
	{
		image: jsxImg,
		title: 'Jsx',
		desc: 'The core UI building block - compose the user interface by combining multiple components.',
	},
	{
		image: stateImg,
		title: 'State',
		desc: 'The core UI building block - compose the user interface by combining multiple components.',
	},
];



		title: 'Components',
		description:  
			'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
		code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
	},
	jsx: {
		title: 'JSX',
		description:
			'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
		code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
	}, 
	props: {
		title: 'Props',
		description:
			'Components accept arbitrary inputs called props. They are like function arguments.',
		code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
	},
	state: {
		title: 'State',
		description:
			'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
		code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
	},
};
 console.log(EXAMPLES.components.code )
 const USER = {
 	"first name": "John doe",
	"last-name": "John",
	age: 12
 }
 console.log(USER["first name"])
 console.log(USER["last name"])
 console.log(USER.age)

// console.log(USER['first name'])

export const TOPICS = ['components', 'jsx', 'props', 'state']  
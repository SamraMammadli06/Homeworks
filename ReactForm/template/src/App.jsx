import './App.css';
import Form from './components/Form/Form';

function App() {
	const inputs = [
		{
			labelText: 'Name',
			inputType: 'text',
			inputName: 'Name',
			regexp: '[a-z]{2,16}',
		},
		{
			labelText: 'Surname',
			inputName: 'Surname',
			regexp: '[a-z]{2,16}',
		},
		{
			labelText: 'Middle name',
			inputType: 'text',
			inputName: 'Middle_name',
			regexp: '[a-z]{2,16}',
		},
		{
			labelText: 'Password',
			inputType: 'password',
			inputName: 'Password',
			regexp: '\\w{8,16}',
		}
	]

	function onSubmit(formData) {
		console.log([...formData]);
	}

	return (
		<>
			<Form onSubmit={onSubmit} inputs={inputs}/>
		</>
	);
}

export default App;

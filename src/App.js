import { useState, useEffect } from 'react';
import Wrapper from './components/UI/Wrapper/Wrapper';
import TodoContainer from './components/Todo/TodoContainer/TodoContainer';
import { ThemeProvider } from 'styled-components';
import themes from './utils/themes';

import ThemeContext from './store/theme-context';

function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

	return (
		<ThemeProvider theme={themes[theme]}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Wrapper>
					<TodoContainer />
				</Wrapper>
			</ThemeContext.Provider>
		</ThemeProvider>
	);
}

export default App;

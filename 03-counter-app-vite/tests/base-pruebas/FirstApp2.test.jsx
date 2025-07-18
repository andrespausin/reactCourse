import {render, screen} from '@testing-library/react';
import {FirstApp} from '../../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    const name = 'Goku';
    const subtitle = 'Soy un subtitulo por defecto desde FirstApp';
    
    test("Debe de hacer match con el snapshot", () => {
        
        const {container} = render(<FirstApp name={name} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el mensaje "Hola, soy Goku" en un H1', () => {

        render(<FirstApp name={name} />);
        expect(screen.getByText(name)).toBeTruthy();
    })

    test('Debe mostrar el titutlo en un h1', () => {

        render(<FirstApp name={name} title="Hola mundo" />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain('Hola mundo');
    }) 

    test('Debe de mostrar el subtitulo enviado por props', () => {

        render(<FirstApp name={name} subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle)).toBeTruthy();
    })
})
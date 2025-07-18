import {render} from '@testing-library/react';
import {FirstApp} from '../../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    // Test para verificar que el componente se renderiza correctamente
    // test('Debe de hacer match con el snapshot', () => {
    //     const title = 'Goku';
    //     const {container} = render(<FirstApp title='Hola mundo' subtitle='Hola desde un subtitle' name={title} />);
    //     // This function will create a snapshot of the rendered component
    //     expect(container).toMatchSnapshot();
    // })

    test('Debe de mostrar el mensaje "Hola, soy Goku" en un H1', () => {
        const name = 'Goku';
        const {container, getByText} = render(<FirstApp name={name} />);
        expect(getByText(`${name}`)).toBeTruthy();
        const p = container.querySelector('#name');
        expect(p.innerHTML).toContain(name);
    })
})
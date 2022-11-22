import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'No hay subtitulo';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title }/>);
        expect( container ).toMatchSnapshot(); 
    })

    test('debe de mostart el mensaje "Hola, Soy Goku"', () => {

        render( <FirstApp title= { title } /> );
        expect( screen.getByText(title)).toBeTruthy();
    })
    test('debe de mostart el titulo en un h1', () => {
        
        render( <FirstApp title= { title } /> );
        expect( screen.getByRole('heading' , { level: 1 }).innerHTML ).toContain(title)
    })
    test('Debe de mostrar el subtitulo mostrado por props', () => {

        render( <FirstApp
            title = {title}
            subTitle = {subTitle}
            />)
        
            expect( screen.getAllByText(subTitle).length).toBe(3)
    })
})
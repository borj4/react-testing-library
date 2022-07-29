import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import { prettyDOM } from '@testing-library/react';

import { Main } from './Main'

describe("Tests globales de Main", () => {
    
        const content = {
        text: 'Hola, soy un test',
        like: true
        };

    test('Se renderiza el texto en Main', () => {

        const component = render(<Main content={content} />);
        // console.log(prettyDOM(component.container));
        component.getByText('Hola, soy un test')
        // expect(component.container).toHaveTextContent(content.text)
        // component.getByText(content.like ? 'Fuá, me encanta' : 'Meh, decepcionante')
        // const span = component.container.querySelector('div')
        // console.log(prettyDOM(span))
    
    })

    test("Simulamos un click en el botón", () => {

        const mockHandler = jest.fn();
        const component = render(<Main content={content} handleToggle={mockHandler} />);
        const likeometer = content.like ? 'Fuá, me encanta' : 'Meh, decepcionante';
        const button = component.getByText(likeometer)
        
        fireEvent.click(button);
        fireEvent.click(button);

        expect(mockHandler).toHaveBeenCalledTimes(2);

    })

})
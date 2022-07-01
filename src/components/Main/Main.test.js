import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Main } from './Main'


test('Se renderiza el contenido en Main', () => {
    const content = {
        text: 'Hola, soy un test',
        like: true
    }

    const component = render(<Main content={content} />)

    component.getByText('Hola, soy un test')
    component.getByText('Fuá, me encanta')

    console.log(component)
})
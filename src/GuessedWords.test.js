import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{guessedWord: 'hello', letterMatchCount: 3}],
};

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('if there are no word guesssed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test('render without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('render instruction to guess a word', () => {
        const instruction = findByTestAttr(wrapper, 'guessed-instructions');
        expect(instruction.text().length).not.toBe(0);
    });
});

describe('if there are word guesssed', () => {

});
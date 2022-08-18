import React from 'react';
import FileReader from '../../Logic/FileReader';

test('adds 1 + 2 to equal 3', () => {
    const fileReader = new FileReader();
    const result = fileReader.readfile();
    const text = [
        "?Which of these animals is a mammal",
        "Ant",
        "Bee",
        "*Cat",
        "?What is the sum of 2+3",
        "2",
        "*5",
        "6"
    ]
    expect(result).toStrictEqual(text);
});
import sortHealth from '../app';

test('sort toEqual', () => {
    const input = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}, 
    ];

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}, 
        {name: 'мечник', health: 10},
    ];

    expect(sortHealth(input)).toEqual(expected);
});

test('sort not.toBe', () => {
    const input = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}, 
    ];

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}, 
        {name: 'мечник', health: 10},
    ];

    expect(sortHealth(input)).not.toBe(expected);
});

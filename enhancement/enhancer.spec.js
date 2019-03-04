const enhancer = require('./enhancer');

const weapon1 = {
    baseName: 'Master Sword',
    name: 'Master Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 0,
    prefix: ''
}

const weapon2 = {
    baseName: 'Wooden Plank',
    name: 'Wooden Plank',
    type: 'weapon',
    durability: 100,
    enhancement: 19,
    prefix: ''
}

describe('Testing for success', () => {
    test('Testing if enhancer.success returns object.', () => {
        expect(enhancer.success(weapon1)).toEqual(weapon1);
    });
    test('Testing if enhancer.success increments the enhancement', () => {
        expect(weapon1.enhancement).toBeGreaterThan(0);
    });
    test('Testing if enhancer.success alters the name', () => {
        expect(weapon1.name).toEqual(`[${weapon1.prefix}] ${weapon1.baseName}`);
    })

});

describe('Testing for enhancement failure', () => {
    test('Testing that enhancer.fail returns a weapon2 object.', () => {
        expect(enhancer.fail(weapon2)).toEqual(weapon2);
    });
    test('Testing that enhancer.fail decrements the durability.', () => {
        expect(weapon2.durability).toBeLessThan(100);
    });
    test('Testing that enhancer.fail removes an enhancement level if its enhancement is greater than 16.', () => {
        expect(weapon2.enhancement).toBeLessThan(21);
    });
    test('Testing that enhancer.fail alters the name with the enhancement.', () => {
        expect(weapon2.name).toEqual(`[${weapon2.prefix}] ${weapon2.baseName}`);
    })
});

describe('Testing enhancer.repair', () => {
    test('Testing that enhancer.repair returns an item object', () => {
        expect(enhancer.repair(weapon2)).toEqual(weapon2);
    });
    test('Testing that enhancer.repair sets the durabilty to 100.', () => {
        expect(weapon2.durability).toEqual(100);
    });
});


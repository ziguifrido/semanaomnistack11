const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an ID with 8 characters', () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
    });
});
const caesarCipher = require('./caesar-cipher');

it('Return correct encrypted message of all lowercase letters', () => {
    expect(caesarCipher("defend the east wall of the castle")).toMatch("efgfoe uif fbtu xbmm pg uif dbtumf");
});

it('Return correct encrypted message of all uppercase letters', () => {
    expect(caesarCipher("DEFEND THE EAST WALL OF THE CASTLE")).toMatch("EFGFOE UIF FBTU XBMM PG UIF DBTUMF");
});

it('Return correct encrypted message with mix of lowercase and uppercase letters', () => {
    expect(caesarCipher("defenD the eAst wall Of the castle")).toMatch("efgfoE uif fBtu xbmm Pg uif dbtumf");
});

it('Return correct encrypted message with where "z" is present', () => {
    expect(caesarCipher("defenDz the eAst wall Of the castleZ")).toMatch("efgfoEa uif fBtu xbmm Pg uif dbtumfA");
});

it('Return correct encrypted message when punctuation is included', () => {
    expect(caesarCipher("...Defend, the east wall of the castle!")).toMatch("...Efgfoe, uif fbtu xbmm pg uif dbtumf!");
});
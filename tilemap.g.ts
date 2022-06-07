// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000000000000000000000000000000000009080808080808080808080a0807000002000100000100000001000000060000020001000101000100010000000600000200010001010001010100010006000002000100000100000000000101060000020000000001010101000000010600000000000001000100000000010106000002010100000001000000000100060000020000000101010001010001000600000200000001000001010000010006000002000000000000000000000000060000030404040404040404040404040500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 
. 2 . 2 . . 2 . . . 2 . . . 2 . 
. 2 . 2 . 2 2 . 2 . 2 . . . 2 . 
. 2 . 2 . 2 2 . 2 2 2 . 2 . 2 . 
. 2 . 2 . . 2 . . . . . 2 2 2 . 
. 2 . . . . 2 2 2 2 . . . 2 2 . 
. . . . . 2 . 2 . . . . 2 2 2 . 
. 2 2 2 . . . 2 . . . . 2 . 2 . 
. 2 . . . 2 2 2 . 2 2 . 2 . 2 . 
. 2 . . . 2 . . 2 2 . . 2 . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

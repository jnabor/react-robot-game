import * as util from "./util"
// @ponicode
describe("util.getRandLocation", () => {
    test("0", () => {
        let callFunction: any = () => {
            util.getRandLocation(0, [12, 12345])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            util.getRandLocation(32, [12345, "a1969970175"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            util.getRandLocation(0, [987650, 987650])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            util.getRandLocation(0, [56784, 56784])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            util.getRandLocation(16, [987650, 12])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            util.getRandLocation(NaN, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("util.getMiddle", () => {
    test("0", () => {
        let callFunction: any = () => {
            util.getMiddle(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            util.getMiddle(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            util.getMiddle(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            util.getMiddle(256)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            util.getMiddle(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            util.getMiddle(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("util.isAtEdge", () => {
    test("0", () => {
        let callFunction: any = () => {
            util.isAtEdge(10, [12345, -1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            util.isAtEdge(256, ["a1969970175", "bc23a9d531064583ace8f67dad60f6bb"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            util.isAtEdge(32, [56784, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            util.isAtEdge(10, [12, 0])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            util.isAtEdge(NaN, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})

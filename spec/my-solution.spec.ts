import { halfAdder,fullAdder } from '../src/my-solution';
describe("golf round 1 tests", function() {
  it("half adder", function() {
    expect(halfAdder(0,0)).toEqual({s:0,c:0});
    expect(halfAdder(0,1)).toEqual({s:1,c:0});
    expect(halfAdder(1,0)).toEqual({s:1,c:0});
    expect(halfAdder(1,1)).toEqual({s:0,c:1});
  });
  it("full adder", function() {
    expect(fullAdder(0,0,0)).toEqual({s:0,c:0});
    expect(fullAdder(0,0,1)).toEqual({s:1,c:0});
    expect(fullAdder(0,1,0)).toEqual({s:1,c:0});
    expect(fullAdder(0,1,1)).toEqual({s:0,c:1});
    expect(fullAdder(1,0,0)).toEqual({s:1,c:0});
    expect(fullAdder(1,0,1)).toEqual({s:0,c:1});
    expect(fullAdder(1,1,0)).toEqual({s:0,c:1});
    expect(fullAdder(1,1,1)).toEqual({s:1,c:1});
  });

  it("full adder", function() {
    expect(fullAdder(0,0,0)).toEqual({s:0,c:0});
    expect(fullAdder(0,0,1)).toEqual({s:1,c:0});
    expect(fullAdder(0,1,0)).toEqual({s:1,c:0});
    expect(fullAdder(0,1,1)).toEqual({s:0,c:1});
    expect(fullAdder(1,0,0)).toEqual({s:1,c:0});
    expect(fullAdder(1,0,1)).toEqual({s:0,c:1});
    expect(fullAdder(1,1,0)).toEqual({s:0,c:1});
    expect(fullAdder(1,1,1)).toEqual({s:1,c:1});
  });
});
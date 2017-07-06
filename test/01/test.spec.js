/**
 * Main tests
 */

describe('Module', function () {
  let colors

  it('should import', function () {
    colors = require('../../dist')

    expect(colors).to.have.property('BOOTSTRAP')
  })

  it('should have BOOTSTRAP color', function () {
    expect(colors).to.have.nested.property('BOOTSTRAP.RED', '#dc635c')
  })

  it('should have NAMED color', function () {
    expect(colors).to.have.nested.property('NAMED.HEMLOCK_APPROX', '#615c42')
  })

  it('should have SERIES color', function () {
    expect(colors).to.have.nested.property('SERIES.AIR_SPEED_AVG', '#a695dc')
  })

  it('should have TILE color', function () {
    expect(colors).to.have.nested.property('TILE.AIR_MOIST', '#3a85be')
  })

  it('should have WHEEL color', function () {
    expect(colors).to.have.nested.property('WHEEL.BLUE', '#5ca1dc')
  })
})

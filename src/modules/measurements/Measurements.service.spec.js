describe('Measurements service ', () => {

  beforeEach(module('riqu.measurements.service'));

  let Measurement;

  beforeEach(inject((_Measurement_) => {
    Measurement = _Measurement_;
  }));

  it('should exist', () => {
    expect(Measurement).toBeDefined();
  })

});
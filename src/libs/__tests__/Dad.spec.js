import dad, { tw, hk, ja, indo } from '../../';

describe('Dad functionality', () => {
  it('return time in ms where time zone is +8:00', () => {
    const datetime = Math.floor(new Date('2017-12-13 00:00:00+08:00').getTime() / 1000);
    expect(dad('2017-12-13').tw)
      .toBe(datetime);

    expect(tw('2017-12-13'))
      .toBe(datetime);

    expect(dad('2017-12-13').hk)
      .toBe(datetime);

    expect(hk('2017-12-13'))
      .toBe(datetime);
  });

  it('return time in ms where time zone is +9:00', () => {
    const datetime = Math.floor(new Date('2017-12-13 00:00:00+09:00').getTime() / 1000);
    expect(dad('2017-12-13').ja)
      .toBe(datetime);

    expect(ja('2017-12-13'))
      .toBe(datetime);
  });

  it('return time in ms where time zone is +7:00', () => {
    const datetime = Math.floor(new Date('2017-12-13 00:00:00+07:00').getTime() / 1000);
    expect(dad('2017-12-13').indo)
      .toBe(datetime);

    expect(indo('2017-12-13'))
      .toBe(datetime);
  });

  it('throw an error if date format is incorrect', () => {
    expect(() => {
      dad('2017/12/13');
    })
      .toThrowError('Invaild date string format');
  });

  it('if inpunt is second number', () => {
    const UTC0105 = new Date('2018-01-05 00:00:00+00:00') / 1000;

    expect(tw(UTC0105).toISOString()).toBe('2018-01-05T08:00:00.000Z');
    expect(ja(UTC0105).toISOString()).toBe('2018-01-05T09:00:00.000Z');
    expect(indo(UTC0105).toISOString()).toBe('2018-01-05T07:00:00.000Z');
  });
});

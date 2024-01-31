const batteryBatches = [4, 5, 6, 16];
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

describe('reducer', () => {
  describe('batteries', () => {
    it('should have a `totalBatteries` variable', () => {
      expect(totalBatteries).toBeDefined();
    });

    it('should have a number as a result', () => {
      expect(typeof totalBatteries).toBe('number');
    });

    it('should have made the sum of all the assembled batteries', () => {
      
    });
  });
});


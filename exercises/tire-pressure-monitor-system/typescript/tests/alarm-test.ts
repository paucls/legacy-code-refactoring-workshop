import { expect } from 'chai';
import 'mocha';
import Alarm from '../src/alarm';

describe('Tyre Pressure Monitoring System', () => {

	describe('Alarm', () => {

		it('foo', () => {
			const alarm = new Alarm();
			expect(alarm.isAlarmOn()).eql(false);
		});

	});

});

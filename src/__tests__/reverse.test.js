import { reverseStr } from "../index.js";

describe('Reverse string', () => {
    it('Ожидаемый результат', () => {
        expect(reverseStr('Skillfactory')).toBe('yrotcafllikS');
    }),
        it('Ожидаемый результат, Если верхний регистор ', () => {
            expect(reverseStr('SKILLFACTORY')).toBe('YROTCAFLLIKS');
        }),
        it('Ожидаемый результат, Если нижний регистор ', () => {
            expect(reverseStr('skillfactory')).toBe('yrotcaflliks');
        })
})

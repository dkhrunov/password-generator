export default class PasswordGenerator {
    _charCodes = [];

    constructor() {
        for (let code of this._generatePasswordCodes()) {
            this._charCodes.push(code);
        }
    }

    generate(length = 15) {
        this._charCodes.shuffle();

        return this._charCodes
            .slice(0, length)
            .map(code => String.fromCharCode(code))
            .join('');
    }

    * _generatePasswordCodes() {
        // 0..9
        yield* this._generateSequence(48, 57);

        // A..Z
        yield* this._generateSequence(65, 90);

        // a..z
        yield* this._generateSequence(97, 122);
    }

    * _generateSequence(start, end) {
        for (let i = start; i <= end; i++) yield i;
    }
}
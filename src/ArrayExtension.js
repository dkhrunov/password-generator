// Array shuffle
Object.defineProperty(Array.prototype, 'shuffle', {
    value: function () {
        return this.sort(() => Math.random() - 0.5);
    }
});
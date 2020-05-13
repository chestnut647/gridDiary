/*
 * @Descripttion: 
 */
const Next = require('next');
const NEXT = Symbol('Application#next');
const HANDLE = Symbol('Application#handle');

module.exports = {
    get next() {
        if (!this[NEXT]) {
            this[NEXT] = Next(this.config.next);
        }
        return this[NEXT];
    },
    get handle() {
        if (!this[HANDLE]) {
            this[HANDLE] = Next(this.config.next).getRequestHandler();
        }
        return this[HANDLE];
    }
}
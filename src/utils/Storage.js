/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 0978108807
*
* Created: 2018-06-06 11:43:59
*------------------------------------------------------- */

import cookie from 'react-cookies';

const mandatory = () => {
    throw new Error('Storage Missing parameter!');
};

export default class Storage {
    constructor(name = mandatory()) {
        this.name = name;
    }

    set value(value) {
        const expires = new Date();
        expires.setDate((new Date()).getDate() + 14);

        cookie.save(
            this.name,
            value,
            {
                path: '/',
                expires,
            },
        );
    }

    get value() {
        return cookie.load(this.name);
    }

    destroy = (next) => {
        cookie.remove(this.name, { path: '/' });
        if (typeof next === 'function') {
            next();
        }
    }
}

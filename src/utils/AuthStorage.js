/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 0978108807
*
* Created: 2018-06-06 11:41:29
*------------------------------------------------------- */

// import { toggleLoginDialog } from '../actions/dialog';
import Storage from './Storage';

class AuthStorage extends Storage {
    get loggedIn() {
        return !!this.value && !!this.value.token;
    }

    get token() {
        return this.value && this.value.token;
    }

    get userId() {
        return this.value && this.value.userId;
    }

    get role() {
        return this.value && this.value.role;
    }
}

export default new AuthStorage('AUTH');

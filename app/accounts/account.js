"use strict";
var Account = (function () {
    function Account(firstName, lastName, address, postalCode, city, phone, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.js.map
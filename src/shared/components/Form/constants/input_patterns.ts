// main ===================================================== //
export const INPUT_PATTERNS = {

    // I found this regular expression on
    // https://uibakery.io/regex-library/email
    email() {
        return new RegExp(
            `/^`                                                                    +
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-])*"        + // email name
            "@"                                                                     +
            "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" + // domen name
            "$/"
        )
    },

    // I found this regular expression on
    // https://uibakery.io/regex-library/password
    password() {
        return new RegExp(
            "/^" +
            "(?=.*?[0-9])" + // digits
            "(?=.*?[A-Z])" + // uppercase_letters
            "(?=.*?[a-z])" + // lowercase_letters
            "(?=.*?[#?!@$%^&*-])" + // spec_symbol
            "$/g"
        );
    },

};
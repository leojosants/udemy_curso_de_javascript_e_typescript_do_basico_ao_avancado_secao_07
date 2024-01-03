/*******************************************************************************/
class ValidadeCPF {
    constructor(cpf_sent) {
        Object.defineProperty(this, 'clean_cpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf_sent.replace(/\D+/g, ''),
        });
    }

    isSequence() {
        return this.clean_cpf.charAt(0).repeat(this.clean_cpf.length) === this.clean_cpf;
    }

    generateNewCPF() {
        const cpf_without_digits = this.clean_cpf.slice(0, -2);
        const digit_1 = ValidadeCPF.generateDigit(cpf_without_digits);
        const digit_2 = ValidadeCPF.generateDigit(cpf_without_digits + digit_1);
        this.new_cpf = cpf_without_digits + digit_1 + digit_2;
    }

    static generateDigit(cpf_without_digits) {
        let total = 0;
        let reverse = cpf_without_digits.length + 1;

        for (let numeric_string of cpf_without_digits) {
            total += reverse * Number(numeric_string);
            reverse--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    valid() {
        if (!this.clean_cpf) return false;
        if (typeof this.clean_cpf !== 'string') return false;
        if (this.clean_cpf.length !== 11) return false;
        if (this.isSequence()) return false;
        this.generateNewCPF();
        return this.new_cpf === this.clean_cpf;
    }
}
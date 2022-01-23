import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,} from 'vee-validate'
import { required, min, max, alpha_spaces as alphaSpaces, email } from '@vee-validate/rules'
export default {
    install(app) {
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)

        defineRule('required', required)
        defineRule('min', min)
        defineRule('max', max)
        defineRule('alpha_spaces', alphaSpaces )
        defineRule('email', email)

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `This field ${ctx.field} is required`,
                    min: `This field ${ctx.field} is too short`,
                    max: `This field ${ctx.field} is too long`,
                    alpha_spaces: `This field ${ctx.field} may only content alphabetic characters and spaces`,
                    email: `Pleaase use a valid email address in ${ctx.field}`,
                };
                const message = messages[ctx.rule.name]
                ? messages[ctx.rule.name]
                : `The field ${ctx.field} os invalid.`
                return message
            }
        })
    },
}
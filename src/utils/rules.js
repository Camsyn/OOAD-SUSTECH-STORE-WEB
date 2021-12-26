const rules = {
    required: value => !!value || '必填项',
        counter: value => value.length <= 20 || '请勿超过20个字符',
        number: value => {
        return /^(0|[1-9][0-9]*)$/.test(value)||"请填整数";
    },
        float: value=>{
        const pattern = /^[0-9]+(\.[0-9]+)?$/;
        return pattern.test(value)||"请填数字";
    },

    email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail'
    },
}

export default rules;

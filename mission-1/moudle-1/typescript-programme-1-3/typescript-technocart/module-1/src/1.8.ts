// destructuring

const myOfficeHistory = {
id:400,
    work:{
        webdevelopment:{},
        marketing:{
        markType1:'dscsc'
        },
        others:{}
    }
,
learing:{
    programming:{},
    others:{}
}
}

const {work:{marketing:{markType1}}} =myOfficeHistory;

const mysubject = ['math', 'statistic', 'urban', 'history'];

const [, statistic, ...rest] =mysubject;
## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,447|8724|
|Intl.DateTimeFormat().format(new Date())|15,869|7935|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,506|11254|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,613|10807|
|Reusing Intl.DateTimeFormat()|788,910|394456|
|Date.toLocaleDateString()|779,615|389808|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,409|12205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:13:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17447.783089160628,"samples":8724},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15869.821972337135,"samples":7935},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22506.608551434158,"samples":11254},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21613.392577214636,"samples":10807},{"name":"Reusing Intl.DateTimeFormat()","opsSec":788910.6872523248,"samples":394456},{"name":"Date.toLocaleDateString()","opsSec":779615.3108202708,"samples":389808},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24409.059030773627,"samples":12205}]}-->

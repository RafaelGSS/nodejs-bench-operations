## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,690|8870|
|Intl.DateTimeFormat().format(new Date())|17,295|8648|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,864|8933|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,527|8764|
|Reusing Intl.DateTimeFormat()|385,535|228461|
|Date.toLocaleDateString()|732,326|366652|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,910|10456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:48:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":8870,"opsSec":17690.14436147011},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8648,"opsSec":17295.086957769327},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":8933,"opsSec":17864.977908883877},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8764,"opsSec":17527.407293194974},{"name":"Reusing Intl.DateTimeFormat()","samples":228461,"opsSec":385535.8549366049},{"name":"Date.toLocaleDateString()","samples":366652,"opsSec":732326.3794351204},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10456,"opsSec":20910.580715244534}]}-->

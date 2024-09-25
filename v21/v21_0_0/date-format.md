## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,126|11564|
|Intl.DateTimeFormat().format(new Date())|20,236|10119|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,387|11194|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,835|10918|
|Reusing Intl.DateTimeFormat()|674,043|337022|
|Date.toLocaleDateString()|673,023|336512|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,963|11482|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:40:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23126.254383557443,"samples":11564},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20236.359277020514,"samples":10119},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22387.73063092151,"samples":11194},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21835.246595998582,"samples":10918},{"name":"Reusing Intl.DateTimeFormat()","opsSec":674043.1576715915,"samples":337022},{"name":"Date.toLocaleDateString()","opsSec":673023.7696877887,"samples":336512},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22963.353397387757,"samples":11482}]}-->

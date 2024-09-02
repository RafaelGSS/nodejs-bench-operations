## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,477|10739|
|Intl.DateTimeFormat().format(new Date())|21,083|10542|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,803|10902|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,365|10683|
|Reusing Intl.DateTimeFormat()|657,401|328701|
|Date.toLocaleDateString()|664,893|332447|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,176|10589|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:03:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":21477.17579204658,"samples":10739},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21083.189730926482,"samples":10542},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21803.303516588814,"samples":10902},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21365.4541136941,"samples":10683},{"name":"Reusing Intl.DateTimeFormat()","opsSec":657401.1321920607,"samples":328701},{"name":"Date.toLocaleDateString()","opsSec":664893.7394637002,"samples":332447},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21176.042910516022,"samples":10589}]}-->

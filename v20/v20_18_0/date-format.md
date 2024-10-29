## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,736|8869|
|Intl.DateTimeFormat().format(new Date())|17,362|8697|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,192|9097|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,880|8941|
|Reusing Intl.DateTimeFormat()|545,233|315115|
|Date.toLocaleDateString()|912,065|456033|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,203|10602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17736.69592716865,"samples":8869},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17362.89451338243,"samples":8697},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18192.115296855245,"samples":9097},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17880.531865289606,"samples":8941},{"name":"Reusing Intl.DateTimeFormat()","opsSec":545233.3458135821,"samples":315115},{"name":"Date.toLocaleDateString()","opsSec":912065.4983639759,"samples":456033},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21203.82667992072,"samples":10602}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,516|82|
|Intl.DateTimeFormat().format(new Date())|17,933|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,243|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,150|83|
|Reusing Intl.DateTimeFormat()|767,187|92|
|Date.toLocaleDateString()|881,002|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,569|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:32:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17515.51472983904,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17932.644849859153,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18243.0385385441,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19149.713113549275,"samples":9},{"name":"Reusing Intl.DateTimeFormat()","opsSec":767187.4119048548,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":881001.5581156994,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21569.222524463854,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

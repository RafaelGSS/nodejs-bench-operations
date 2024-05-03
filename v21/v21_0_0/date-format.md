## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,224|79|
|Intl.DateTimeFormat().format(new Date())|17,953|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,735|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,786|81|
|Reusing Intl.DateTimeFormat()|764,687|87|
|Date.toLocaleDateString()|892,473|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,918|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:31:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17224.478172394633,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17953.392637156372,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17734.567983362973,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18786.238129634505,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":764686.5000481522,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":892473.3355138191,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20917.74510971949,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

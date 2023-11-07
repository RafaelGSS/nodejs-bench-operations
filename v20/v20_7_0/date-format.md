## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,401|85|
|Intl.DateTimeFormat().format(new Date())|17,987|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,725|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,633|84|
|Reusing Intl.DateTimeFormat()|678,990|96|
|Date.toLocaleDateString()|735,723|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,825|89|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:15:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18400.957428539205,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17987.49575372949,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18724.575630803556,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21633.150283573475,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":678989.928706529,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":735722.7789387375,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19824.54152439775,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

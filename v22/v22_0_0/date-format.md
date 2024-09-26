## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,604|9803|
|Intl.DateTimeFormat().format(new Date())|19,463|9732|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,538|9770|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,701|9351|
|Reusing Intl.DateTimeFormat()|402,568|201290|
|Date.toLocaleDateString()|698,568|349524|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,900|11951|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:10:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19604.861937764512,"samples":9803},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19463.16292828878,"samples":9732},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19538.943373020273,"samples":9770},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18701.41460831993,"samples":9351},{"name":"Reusing Intl.DateTimeFormat()","opsSec":402568.34806173365,"samples":201290},{"name":"Date.toLocaleDateString()","opsSec":698568.6743098475,"samples":349524},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23900.02447177721,"samples":11951}]}-->

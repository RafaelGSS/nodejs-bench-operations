## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,264|9633|
|Intl.DateTimeFormat().format(new Date())|19,213|9637|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,533|9767|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,511|9256|
|Reusing Intl.DateTimeFormat()|404,940|202472|
|Date.toLocaleDateString()|684,960|342649|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,734|11868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:27:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19264.605627844656,"samples":9633},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19213.197186083424,"samples":9637},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19533.648238062528,"samples":9767},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18511.081665238587,"samples":9256},{"name":"Reusing Intl.DateTimeFormat()","opsSec":404940.6025483446,"samples":202472},{"name":"Date.toLocaleDateString()","opsSec":684960.1803788778,"samples":342649},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23734.86514115814,"samples":11868}]}-->

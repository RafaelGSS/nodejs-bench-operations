## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,941|9472|
|Intl.DateTimeFormat().format(new Date())|18,841|9422|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,017|9509|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,681|9341|
|Reusing Intl.DateTimeFormat()|449,348|287541|
|Date.toLocaleDateString()|723,780|362312|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,191|11596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:28:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18941.028001178394,"samples":9472},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18841.96107370829,"samples":9422},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19017.395056663245,"samples":9509},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18681.572378808247,"samples":9341},{"name":"Reusing Intl.DateTimeFormat()","opsSec":449348.0311540842,"samples":287541},{"name":"Date.toLocaleDateString()","opsSec":723780.3977573938,"samples":362312},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23191.974442444167,"samples":11596}]}-->

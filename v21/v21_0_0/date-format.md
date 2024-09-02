## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,433|11717|
|Intl.DateTimeFormat().format(new Date())|22,787|11394|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,551|11276|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,285|11143|
|Reusing Intl.DateTimeFormat()|683,799|341900|
|Date.toLocaleDateString()|689,668|344835|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,206|11604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:05:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23433.11525917603,"samples":11717},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":22787.87001704212,"samples":11394},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22551.450735098842,"samples":11276},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22285.9938051211,"samples":11143},{"name":"Reusing Intl.DateTimeFormat()","opsSec":683799.3859578045,"samples":341900},{"name":"Date.toLocaleDateString()","opsSec":689668.7170008813,"samples":344835},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23206.59163948645,"samples":11604}]}-->

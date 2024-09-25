## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,330|9666|
|Intl.DateTimeFormat().format(new Date())|21,292|10647|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,595|11298|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,299|11150|
|Reusing Intl.DateTimeFormat()|897,345|448673|
|Date.toLocaleDateString()|900,660|450331|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,947|11474|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:42:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19330.925548497555,"samples":9666},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21292.426447101014,"samples":10647},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22595.5105812392,"samples":11298},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22299.444966812818,"samples":11150},{"name":"Reusing Intl.DateTimeFormat()","opsSec":897345.7254123534,"samples":448673},{"name":"Date.toLocaleDateString()","opsSec":900660.5553416578,"samples":450331},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22947.641695521987,"samples":11474}]}-->

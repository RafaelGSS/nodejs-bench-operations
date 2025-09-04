## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,832|10417|
|Intl.DateTimeFormat().format(new Date())|19,860|9944|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,960|9981|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,840|9421|
|Reusing Intl.DateTimeFormat()|453,377|226826|
|Date.toLocaleDateString()|1,025,529|512766|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,496|12249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:51:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10417,"opsSec":20832.023624254718},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9944,"opsSec":19860.556881107255},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9981,"opsSec":19960.033856824964},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9421,"opsSec":18840.00318574235},{"name":"Reusing Intl.DateTimeFormat()","samples":226826,"opsSec":453377.60952342994},{"name":"Date.toLocaleDateString()","samples":512766,"opsSec":1025529.9386848232},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12249,"opsSec":24496.8830401209}]}-->

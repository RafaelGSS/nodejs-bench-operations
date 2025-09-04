## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,571|10286|
|Intl.DateTimeFormat().format(new Date())|20,122|10067|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,799|9900|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,987|9494|
|Reusing Intl.DateTimeFormat()|643,910|322113|
|Date.toLocaleDateString()|1,106,925|553464|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,634|12318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10286,"opsSec":20571.048794703733},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10067,"opsSec":20122.396339661147},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9900,"opsSec":19799.63826060898},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9494,"opsSec":18987.903161693874},{"name":"Reusing Intl.DateTimeFormat()","samples":322113,"opsSec":643910.1633526959},{"name":"Date.toLocaleDateString()","samples":553464,"opsSec":1106925.6621730016},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12318,"opsSec":24634.7060866975}]}-->

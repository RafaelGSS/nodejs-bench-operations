## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,259|10630|
|Intl.DateTimeFormat().format(new Date())|20,564|10283|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,460|10731|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,470|10236|
|Reusing Intl.DateTimeFormat()|643,023|321512|
|Date.toLocaleDateString()|661,410|330706|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,986|10494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":21259.050997844824,"samples":10630},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20564.988120874335,"samples":10283},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21460.34527851865,"samples":10731},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20470.805283497524,"samples":10236},{"name":"Reusing Intl.DateTimeFormat()","opsSec":643023.6348891486,"samples":321512},{"name":"Date.toLocaleDateString()","opsSec":661410.3833103747,"samples":330706},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20986.861377843954,"samples":10494}]}-->

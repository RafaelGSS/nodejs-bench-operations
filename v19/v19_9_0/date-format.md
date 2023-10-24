## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,209|85|
|Intl.DateTimeFormat().format(new Date())|5,988|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,509|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,498|69|
|Reusing Intl.DateTimeFormat()|416,119|88|
|Date.toLocaleDateString()|378,009|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,311|77|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5209.187637538558,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5988.485837047693,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5508.626207615852,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":6497.830491123804,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":416118.90334009094,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":378008.8411605298,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6311.223592875513,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

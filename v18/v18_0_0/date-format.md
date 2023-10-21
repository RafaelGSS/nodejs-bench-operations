## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,831|83|
|Intl.DateTimeFormat().format(new Date())|8,464|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,425|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,674|94|
|Reusing Intl.DateTimeFormat()|361,455|76|
|Date.toLocaleDateString()|492,864|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,915|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7831.445902061464,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8464.32337676716,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7425.338509239615,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10673.581038930437,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":361455.3323692559,"samples":7},{"name":"Date.toLocaleDateString()","opsSec":492863.7306457423,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9915.184975927123,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

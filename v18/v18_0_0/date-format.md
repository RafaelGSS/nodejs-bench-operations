## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,753|80|
|Intl.DateTimeFormat().format(new Date())|8,963|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,179|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,490|79|
|Reusing Intl.DateTimeFormat()|444,556|95|
|Date.toLocaleDateString()|457,788|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,040|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8752.870615708815,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8962.8530455856,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10179.455150006866,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11490.120458780231,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":444555.79025617003,"samples":8},{"name":"Date.toLocaleDateString()","opsSec":457788.14293428627,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10039.511652707184,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

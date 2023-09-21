## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,327|81|
|Intl.DateTimeFormat().format(new Date())|6,925|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,684|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,314|90|
|Reusing Intl.DateTimeFormat()|434,446|92|
|Date.toLocaleDateString()|546,679|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,993|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:53 GMT+0000 (Coordinated Universal Time)
</details>


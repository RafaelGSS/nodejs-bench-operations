## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,675|82|
|Intl.DateTimeFormat().format(new Date())|8,819|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,598|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,567|79|
|Reusing Intl.DateTimeFormat()|360,376|95|
|Date.toLocaleDateString()|428,370|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,935|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:07 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,614|80|
|Intl.DateTimeFormat().format(new Date())|7,934|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,565|60|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,065|90|
|Reusing Intl.DateTimeFormat()|474,568|95|
|Date.toLocaleDateString()|501,134|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,976|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:09 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,800|81|
|Intl.DateTimeFormat().format(new Date())|8,398|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,698|67|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,727|78|
|Reusing Intl.DateTimeFormat()|475,517|97|
|Date.toLocaleDateString()|488,217|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,724|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:52 GMT+0000 (Coordinated Universal Time)
</details>


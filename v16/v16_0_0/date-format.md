## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,032|86|
|Intl.DateTimeFormat().format(new Date())|9,037|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,040|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,735|94|
|Reusing Intl.DateTimeFormat()|370,335|97|
|Date.toLocaleDateString()|431,944|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,403|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:05 GMT+0000 (Coordinated Universal Time)
</details>


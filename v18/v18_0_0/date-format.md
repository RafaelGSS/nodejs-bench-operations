## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,114|80|
|Intl.DateTimeFormat().format(new Date())|7,744|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,697|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,332|95|
|Reusing Intl.DateTimeFormat()|331,966|78|
|Date.toLocaleDateString()|418,830|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,503|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:11 GMT+0000 (Coordinated Universal Time)
</details>


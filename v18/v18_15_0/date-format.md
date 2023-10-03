## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,590|81|
|Intl.DateTimeFormat().format(new Date())|8,282|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,873|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,060|79|
|Reusing Intl.DateTimeFormat()|450,481|98|
|Date.toLocaleDateString()|461,400|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,612|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:07 GMT+0000 (Coordinated Universal Time)
</details>


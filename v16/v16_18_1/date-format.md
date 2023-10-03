## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,047|80|
|Intl.DateTimeFormat().format(new Date())|5,904|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,448|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,905|68|
|Reusing Intl.DateTimeFormat()|399,921|93|
|Date.toLocaleDateString()|408,041|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,130|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:08 GMT+0000 (Coordinated Universal Time)
</details>


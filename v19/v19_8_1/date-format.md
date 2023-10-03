## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,357|91|
|Intl.DateTimeFormat().format(new Date())|8,670|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,029|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,188|82|
|Reusing Intl.DateTimeFormat()|443,883|98|
|Date.toLocaleDateString()|459,891|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,568|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:11 GMT+0000 (Coordinated Universal Time)
</details>


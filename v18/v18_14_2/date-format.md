## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,948|85|
|Intl.DateTimeFormat().format(new Date())|8,163|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,971|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,101|81|
|Reusing Intl.DateTimeFormat()|483,192|98|
|Date.toLocaleDateString()|496,159|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,629|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:05 GMT+0000 (Coordinated Universal Time)
</details>


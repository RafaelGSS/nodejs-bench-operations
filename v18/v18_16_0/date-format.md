## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,877|88|
|Intl.DateTimeFormat().format(new Date())|8,232|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,630|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,245|81|
|Reusing Intl.DateTimeFormat()|457,523|92|
|Date.toLocaleDateString()|462,527|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,536|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:10 GMT+0000 (Coordinated Universal Time)
</details>


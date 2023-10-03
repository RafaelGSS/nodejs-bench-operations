## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,131|86|
|Intl.DateTimeFormat().format(new Date())|8,192|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,334|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,555|82|
|Reusing Intl.DateTimeFormat()|493,282|99|
|Date.toLocaleDateString()|467,236|86|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,229|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:06 GMT+0000 (Coordinated Universal Time)
</details>


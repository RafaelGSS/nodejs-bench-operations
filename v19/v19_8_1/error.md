## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,746|88|
|Intl.DateTimeFormat().format(new Date())|8,570|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,908|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,169|79|
|Reusing Intl.DateTimeFormat()|443,627|96|
|Date.toLocaleDateString()|456,235|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,329|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:12:50 GMT+0000 (Coordinated Universal Time)
</details>


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,023|81|
|Intl.DateTimeFormat().format(new Date())|6,037|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,260|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,182|78|
|Reusing Intl.DateTimeFormat()|405,872|87|
|Date.toLocaleDateString()|396,026|82|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|7,695|74|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:09 GMT+0000 (Coordinated Universal Time)
</details>


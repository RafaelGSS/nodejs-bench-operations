## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,425|87|
|Intl.DateTimeFormat().format(new Date())|8,759|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,796|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,072|81|
|Reusing Intl.DateTimeFormat()|461,494|97|
|Date.toLocaleDateString()|459,135|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,345|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:09 GMT+0000 (Coordinated Universal Time)
</details>


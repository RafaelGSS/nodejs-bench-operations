## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,974|87|
|Intl.DateTimeFormat().format(new Date())|5,761|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,082|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,541|70|
|Reusing Intl.DateTimeFormat()|369,665|85|
|Date.toLocaleDateString()|341,920|78|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,351|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:03:13 GMT+0000 (Coordinated Universal Time)
</details>


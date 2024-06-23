## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,668|8335|
|Intl.DateTimeFormat().format(new Date())|13,910|6956|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,475|11238|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,642|8322|
|Reusing Intl.DateTimeFormat()|1,029,811|514906|
|Date.toLocaleDateString()|1,054,877|527439|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,309|11655|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:14:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16668.39216689163,"samples":8335},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13910.779941134631,"samples":6956},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22475.80077450254,"samples":11238},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16642.92623168629,"samples":8322},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1029811.7507857276,"samples":514906},{"name":"Date.toLocaleDateString()","opsSec":1054877.822780038,"samples":527439},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23309.92615415112,"samples":11655}]}-->

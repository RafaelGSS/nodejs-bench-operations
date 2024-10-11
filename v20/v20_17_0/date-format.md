## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,559|8780|
|Intl.DateTimeFormat().format(new Date())|17,415|8708|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,153|9077|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,948|8975|
|Reusing Intl.DateTimeFormat()|520,439|273331|
|Date.toLocaleDateString()|935,529|467774|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,023|10512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:14:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17559.269604621528,"samples":8780},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17415.33860027064,"samples":8708},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18153.37265574776,"samples":9077},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17948.88681004004,"samples":8975},{"name":"Reusing Intl.DateTimeFormat()","opsSec":520439.40157292614,"samples":273331},{"name":"Date.toLocaleDateString()","opsSec":935529.2052182672,"samples":467774},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21023.275453834758,"samples":10512}]}-->

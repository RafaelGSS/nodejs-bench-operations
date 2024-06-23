## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,871|5436|
|Intl.DateTimeFormat().format(new Date())|10,369|5185|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,224|5613|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,578|5290|
|Reusing Intl.DateTimeFormat()|666,775|333388|
|Date.toLocaleDateString()|682,453|341227|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|15,987|7994|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:12:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10871.898086917025,"samples":5436},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10369.77030963015,"samples":5185},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11224.875761125037,"samples":5613},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10578.276629632372,"samples":5290},{"name":"Reusing Intl.DateTimeFormat()","opsSec":666775.885142904,"samples":333388},{"name":"Date.toLocaleDateString()","opsSec":682453.0282932573,"samples":341227},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":15987.581637947162,"samples":7994}]}-->

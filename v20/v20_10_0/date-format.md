## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|14,986|80|
|Intl.DateTimeFormat().format(new Date())|15,251|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,909|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,799|81|
|Reusing Intl.DateTimeFormat()|773,469|97|
|Date.toLocaleDateString()|728,426|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|18,326|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":14986.21135144396,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15251.323429017155,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15908.898793936609,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16798.840973048616,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":773469.3556204364,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":728425.8967645405,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":18325.658430569456,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

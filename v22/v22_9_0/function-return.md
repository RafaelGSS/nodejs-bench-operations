## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,900,557|950290|
|Function returning explicitly undefined|1,849,213|924818|
|Function returning implicitly undefined|1,624,854|812434|
|Function returning string|1,840,786|920883|
|Function returning integer|1,674,052|837027|
|Function returning float|1,878,850|939486|
|Function returning functions|1,799,847|900923|
|Function returning arrow functions|1,721,741|860960|
|Function returning empty object|1,755,252|878312|
|Function returning empty array|1,773,836|886919|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1900557.710259174,"samples":950290},{"name":"Function returning explicitly undefined","opsSec":1849213.170011824,"samples":924818},{"name":"Function returning implicitly undefined","opsSec":1624854.315476955,"samples":812434},{"name":"Function returning string","opsSec":1840786.1642510586,"samples":920883},{"name":"Function returning integer","opsSec":1674052.0179224107,"samples":837027},{"name":"Function returning float","opsSec":1878850.0137840048,"samples":939486},{"name":"Function returning functions","opsSec":1799847.1689274646,"samples":900923},{"name":"Function returning arrow functions","opsSec":1721741.768735584,"samples":860960},{"name":"Function returning empty object","opsSec":1755252.207210985,"samples":878312},{"name":"Function returning empty array","opsSec":1773836.1232813816,"samples":886919}]}-->

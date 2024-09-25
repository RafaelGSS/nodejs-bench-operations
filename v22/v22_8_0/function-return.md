## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,534,502|767252|
|Function returning explicitly undefined|1,503,234|751618|
|Function returning implicitly undefined|1,495,435|747718|
|Function returning string|1,506,194|753098|
|Function returning integer|1,513,091|756657|
|Function returning float|1,529,557|764779|
|Function returning functions|1,495,141|747571|
|Function returning arrow functions|1,511,164|755583|
|Function returning empty object|1,537,273|768637|
|Function returning empty array|1,526,553|763277|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:15:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1534502.137114322,"samples":767252},{"name":"Function returning explicitly undefined","opsSec":1503234.938714527,"samples":751618},{"name":"Function returning implicitly undefined","opsSec":1495435.1535845208,"samples":747718},{"name":"Function returning string","opsSec":1506194.1534076552,"samples":753098},{"name":"Function returning integer","opsSec":1513091.542251338,"samples":756657},{"name":"Function returning float","opsSec":1529557.1893352275,"samples":764779},{"name":"Function returning functions","opsSec":1495141.028149713,"samples":747571},{"name":"Function returning arrow functions","opsSec":1511164.954274784,"samples":755583},{"name":"Function returning empty object","opsSec":1537273.5111472271,"samples":768637},{"name":"Function returning empty array","opsSec":1526553.0382771913,"samples":763277}]}-->

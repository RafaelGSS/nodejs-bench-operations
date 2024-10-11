## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,305,790|654011|
|Function returning explicitly undefined|1,606,059|803051|
|Function returning implicitly undefined|1,549,238|775130|
|Function returning string|1,405,764|703022|
|Function returning integer|1,474,773|737388|
|Function returning float|1,593,385|796693|
|Function returning functions|1,577,848|788925|
|Function returning arrow functions|1,105,262|552632|
|Function returning empty object|1,038,848|521697|
|Function returning empty array|1,459,892|730028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:02:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1305790.7066258204,"samples":654011},{"name":"Function returning explicitly undefined","opsSec":1606059.4137285857,"samples":803051},{"name":"Function returning implicitly undefined","opsSec":1549238.7573035732,"samples":775130},{"name":"Function returning string","opsSec":1405764.0224142398,"samples":703022},{"name":"Function returning integer","opsSec":1474773.5872704114,"samples":737388},{"name":"Function returning float","opsSec":1593385.7928598467,"samples":796693},{"name":"Function returning functions","opsSec":1577848.5988704443,"samples":788925},{"name":"Function returning arrow functions","opsSec":1105262.627263817,"samples":552632},{"name":"Function returning empty object","opsSec":1038848.7665456834,"samples":521697},{"name":"Function returning empty array","opsSec":1459892.1942562358,"samples":730028}]}-->

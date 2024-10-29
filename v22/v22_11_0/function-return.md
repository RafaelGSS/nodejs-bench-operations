## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,839,054|920006|
|Function returning explicitly undefined|1,766,366|883358|
|Function returning implicitly undefined|1,897,055|948616|
|Function returning string|1,800,893|902021|
|Function returning integer|1,884,780|942391|
|Function returning float|1,853,762|927320|
|Function returning functions|1,673,022|836512|
|Function returning arrow functions|1,832,722|916362|
|Function returning empty object|1,848,329|924171|
|Function returning empty array|1,838,117|921048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:52:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1839054.5183336837,"samples":920006},{"name":"Function returning explicitly undefined","opsSec":1766366.2524165565,"samples":883358},{"name":"Function returning implicitly undefined","opsSec":1897055.7786946055,"samples":948616},{"name":"Function returning string","opsSec":1800893.016100623,"samples":902021},{"name":"Function returning integer","opsSec":1884780.3300846275,"samples":942391},{"name":"Function returning float","opsSec":1853762.9699088323,"samples":927320},{"name":"Function returning functions","opsSec":1673022.4541272523,"samples":836512},{"name":"Function returning arrow functions","opsSec":1832722.3322226775,"samples":916362},{"name":"Function returning empty object","opsSec":1848329.6975175333,"samples":924171},{"name":"Function returning empty array","opsSec":1838117.112440088,"samples":921048}]}-->

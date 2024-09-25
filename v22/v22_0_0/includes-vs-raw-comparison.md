## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,659,576|6829789|
|using Array.includes (first item)|14,732,821|7366411|
|Using raw comparison|14,658,519|7329260|
|Using raw comparison (first item)|14,991,257|7495629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13659576.879913073,"samples":6829789},{"name":"using Array.includes (first item)","opsSec":14732821.617054882,"samples":7366411},{"name":"Using raw comparison","opsSec":14658519.765604496,"samples":7329260},{"name":"Using raw comparison (first item)","opsSec":14991257.849881219,"samples":7495629}]}-->

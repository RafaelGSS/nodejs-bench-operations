## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,977,798|34489583|
|using Array.includes (first item)|76,145,375|38072705|
|Using raw comparison|94,198,153|47099089|
|Using raw comparison (first item)|95,222,854|47615158|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34489583,"opsSec":68977798.72207373},{"name":"using Array.includes (first item)","samples":38072705,"opsSec":76145375.58229023},{"name":"Using raw comparison","samples":47099089,"opsSec":94198153.88527259},{"name":"Using raw comparison (first item)","samples":47615158,"opsSec":95222854.33713414}]}-->

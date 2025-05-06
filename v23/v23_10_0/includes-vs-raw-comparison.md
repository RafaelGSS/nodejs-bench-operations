## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,887,705|34945080|
|using Array.includes (first item)|77,164,862|38915804|
|Using raw comparison|91,285,713|45644827|
|Using raw comparison (first item)|94,550,256|47275929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34945080,"opsSec":69887705.1244698},{"name":"using Array.includes (first item)","samples":38915804,"opsSec":77164862.53598224},{"name":"Using raw comparison","samples":45644827,"opsSec":91285713.3783249},{"name":"Using raw comparison (first item)","samples":47275929,"opsSec":94550256.8859499}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|76,618,392|38474716|
|using Array.includes (first item)|68,484,698|35746198|
|Using raw comparison|92,124,023|46084102|
|Using raw comparison (first item)|84,331,936|42166313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:04:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":76618392.88609171,"samples":38474716},{"name":"using Array.includes (first item)","opsSec":68484698.56824993,"samples":35746198},{"name":"Using raw comparison","opsSec":92124023.71345164,"samples":46084102},{"name":"Using raw comparison (first item)","opsSec":84331936.50208716,"samples":42166313}]}-->

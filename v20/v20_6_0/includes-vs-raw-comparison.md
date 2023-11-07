## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|852,546,461|98|
|using Array.includes (first item)|854,203,095|96|
|Using raw comparison|855,520,439|101|
|Using raw comparison (first item)|855,407,256|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:16:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":852546460.7506493,"samples":7},{"name":"using Array.includes (first item)","opsSec":854203095.092206,"samples":7},{"name":"Using raw comparison","opsSec":855520438.5924753,"samples":6},{"name":"Using raw comparison (first item)","opsSec":855407255.8670951,"samples":7}]}-->

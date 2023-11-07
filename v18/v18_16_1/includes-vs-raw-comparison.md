## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,316,413|99|
|using Array.includes (first item)|847,023,757|101|
|Using raw comparison|849,064,488|98|
|Using raw comparison (first item)|847,968,445|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":847316413.3878176,"samples":6},{"name":"using Array.includes (first item)","opsSec":847023756.7761306,"samples":6},{"name":"Using raw comparison","opsSec":849064488.3541689,"samples":8},{"name":"Using raw comparison (first item)","opsSec":847968445.2210524,"samples":7}]}-->

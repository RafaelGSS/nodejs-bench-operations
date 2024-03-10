## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|858,694,536|100|
|using Array.includes (first item)|855,864,738|99|
|Using raw comparison|850,897,616|99|
|Using raw comparison (first item)|847,125,190|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":858694535.5021778,"samples":8},{"name":"using Array.includes (first item)","opsSec":855864737.6210253,"samples":6},{"name":"Using raw comparison","opsSec":850897616.1400636,"samples":6},{"name":"Using raw comparison (first item)","opsSec":847125189.9680749,"samples":8}]}-->

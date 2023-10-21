## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,803,050|84|
|Length = 10_000 - Array.at|15,350,499|87|
|Length = 1_000_000 - Array.at|15,390,370|91|
|Length = 100 - Array[length - 1]|718,383,640|87|
|Length = 10_000 - Array[length - 1]|717,697,684|86|
|Length = 1_000_000 - Array[length - 1]|726,403,355|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14803050.149390005,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":15350499.283007946,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":15390369.980549054,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":718383639.707176,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":717697684.1483736,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":726403355.2433705,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|714,392,981|98|
|Length = 10_000 - Array.at|715,724,226|98|
|Length = 1_000_000 - Array.at|716,012,616|96|
|Length = 100 - Array[length - 1]|718,928,652|97|
|Length = 10_000 - Array[length - 1]|716,196,012|95|
|Length = 1_000_000 - Array[length - 1]|717,330,420|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":714392980.5796946,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":715724225.8957796,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":716012616.4210298,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":718928652.1014781,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":716196012.4050256,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":717330419.9529456,"samples":8}]}-->

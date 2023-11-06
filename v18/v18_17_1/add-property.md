## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|845,422,584|99|
|Using dot notation|845,298,387|100|
|Using define property (writable)|4,346,231|98|
|Using define property initialized (writable)|5,907,465|98|
|Using define property (getter)|2,209,485|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":845422583.74273,"samples":6},{"name":"Using dot notation","opsSec":845298387.228443,"samples":10},{"name":"Using define property (writable)","opsSec":4346231.47472489,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5907465.343021018,"samples":7},{"name":"Using define property (getter)","opsSec":2209485.2258943887,"samples":5}]}-->
